terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "5.11.0"
    }
  }
}

provider "google" {
  # Configuration options
  project = var.project_id
  region = var.region
  access_token = data.google_service_account_access_token.terraform_sa.access_token
}
