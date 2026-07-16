# Initialisation Guide

Everything runs through GitHub Actions. The only manual steps are creating the state bucket and configuring secrets.

## 1. Create Terraform State Bucket (one-time)

This is the only thing you run locally. The state bucket can't be managed by Terraform itself.

```bash
aws s3api create-bucket \
  --bucket agon-health-splash-louie-cloud-tfstate \
  --region eu-west-2 \
  --create-bucket-configuration LocationConstraint=eu-west-2

aws s3api put-bucket-versioning \
  --bucket agon-health-splash-louie-cloud-tfstate \
  --versioning-configuration Status=Enabled

aws s3api put-bucket-encryption \
  --bucket agon-health-splash-louie-cloud-tfstate \
  --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'

aws s3api put-public-access-block \
  --bucket agon-health-splash-louie-cloud-tfstate \
  --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

## 2. Configure GitHub Secrets

Add these to your GitHub repo (Settings → Secrets and variables → Actions):

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | Your IAM access key |
| `AWS_SECRET_ACCESS_KEY` | Your IAM secret key |

Or for OIDC: set repo variable `USE_OIDC` = `true` and add secret `AWS_ROLE_TO_ASSUME`.

**Note:** You no longer need `S3_BUCKET_NAME` or `CLOUDFRONT_DISTRIBUTION_ID` as secrets — the workflow reads them directly from Terraform outputs.

## 3. Push to Main

That's it. Push to `main` and the workflow will:

1. **Terraform** — init, plan, apply (creates/updates all AWS infrastructure)
2. **Build** — npm ci, npm run build (runs in parallel with Terraform)
3. **Deploy** — sync dist/ to S3, invalidate CloudFront (waits for both above)

## Pipeline Flow

```
push to main
    ├── Terraform (provision infra) ──┐
    └── Build (React app) ────────────┼── Deploy (S3 sync + CloudFront invalidation)
```

## Resources Created Automatically by the Pipeline

| Resource | Name | Region |
|----------|------|--------|
| S3 (website) | `agon-health-splash-louie-cloud` | eu-west-2 |
| CloudFront | Auto-generated | Global |
| ACM Certificate | `agon-health.louie.cloud` | us-east-1 |
| Route53 A/AAAA | `agon-health.louie.cloud` | Global |

## Manual Resource (created once)

| Resource | Name | Region |
|----------|------|--------|
| S3 (state) | `agon-health-splash-louie-cloud-tfstate` | eu-west-2 |
