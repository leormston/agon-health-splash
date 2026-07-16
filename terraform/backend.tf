# -----------------------------------------------------------------------------
# Remote State Backend — S3 with native state locking
# -----------------------------------------------------------------------------
# Prerequisites (create manually before terraform init):
#
#   S3 bucket: agon-health-splash-louie-cloud-tfstate
#     - Region: eu-west-2
#     - Versioning: enabled
#     - Encryption: AES-256
#
# Once created, run: terraform init

terraform {
  backend "s3" {
    bucket       = "agon-health-splash-louie-cloud-tfstate"
    key          = "terraform.tfstate"
    region       = "eu-west-2"
    encrypt      = true
    use_lockfile = true
  }
}
