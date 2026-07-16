variable "project_name" {
  description = "Name of the project, used for resource naming"
  type        = string
  default     = "agon-health-splash-louie-cloud"
}

variable "aws_region" {
  description = "AWS region for resource deployment"
  type        = string
  default     = "eu-west-2"
}

variable "environment" {
  description = "Deployment environment (e.g. production, staging)"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Custom domain name for the website"
  type        = string
  default     = "agon-health.louie.cloud"
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID for the parent domain"
  type        = string
  default     = "Z05745243PIX3M5TE1VR4"
}
