# app service account
resource "google_service_account" "app_sa" {
  account_id = "${var.app_name}-${var.environment_short}-sa"
  display_name = "${var.app_name}-${var.environment_short}-sa"
}

# # cloud build service account 
# resource "google_service_account" "cloudbuild_service_account" {
#   account_id = "cloudbuild-service-account"
# }

# resource "google_project_iam_member" "act_as" {
#   project = var.project_id
#   role    = "roles/iam.serviceAccountUser"
#   member  = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
# }

# resource "google_project_iam_member" "logs_writer" {
#   project = var.project_id
#   role    = "roles/logging.logWriter"
#   member  = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
# }

# resource "google_project_iam_member" "token_generator" {
#   project = var.project_id
#   role = "roles/iam.serviceAccountTokenCreator"
#   member = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
# }
