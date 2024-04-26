resource "google_cloudbuild_trigger" "build_trigger_test" {
  # count = var.environment == "test" ? 1 : 0
  name = "${var.app_name}-${var.environment_short}-trigger"
  location = "global"
  filename = "cloudbuild/build-steps.yaml"

  github {
    owner = var.git_owner
    name = var.git_repo
    push {
      branch = "^master$"
    }
  }
}

# resource "google_cloudbuild_trigger" "build_trigger_prod" {
#   count = var.environment == "production" ? 1 : 0
#   name = "frontend-${var.environment_short}-trigger"
#   location = "global"
#   filename = "cloud_build_config/frontend-${var.environment_short}.yaml"

#   github {
#     owner = var.git_owner
#     name = var.git_repo
#     push {
#       branch = "^${var.environment}$"
#     }
#   }
# }