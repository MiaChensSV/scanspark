# resource "google_vpc_access_connector" "vpc_connector" {
#   name = "vpcc-frontend-${var.environment_short}"
#   region = var.region
#   ip_cidr_range = "10.8.1.0/28"
#   network = ""
# }

resource google_cloud_run_service "frontend" {
  name = "${var.app_name}-${var.environment_short}"
  location = "${var.region}"
  autogenerate_revision_name = true

  template {
    spec {
      container_concurrency = 80
      timeout_seconds = 900
      # service_account_name = "${var.project_id}-frontend-${var.environment_short}-sa"
      service_account_name = google_service_account.app_sa.account_id

      containers {
        image = "${var.region}-docker.pkg.dev/${var.project_id}/${var.app_name}-${var.environment_short}/frontend-image:latest"
        ports {
          container_port = 3000
        }
        resources {
          limits = {
            "cpu" = "1000m"
            "memory" = "1024Mi"
          }
        }

        env {
          name = "ENVIRONMENT"
          value = var.environment
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = 2
        # "run.googleapis.com/vpc-access-connector" = ""
        "run.googleapis.com/startup-cpu-boost" = "true"
      }
    }
  }
}

data "google_iam_policy" "no_auth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers"
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "no_auth" {
  location = google_cloud_run_service.frontend.location
  project = google_cloud_run_service.frontend.project
  service = google_cloud_run_service.frontend.name

  policy_data = data.google_iam_policy.no_auth.policy_data
}