# use service account impersonate to auth terraform

provider "google" {
  alias = "token_generator"
  project = var.project_id
  region = var.region
}

data "google_client_config" "default" {
  provider = google.token_generator
}

data "google_service_account_access_token" "terraform_sa" {
  provider = google.token_generator
  target_service_account = var.terraform_sa
  lifetime = "1200s"
  scopes = [ 
    "https://www.googleapis.com/auth/cloud-platform"
  ]
}
