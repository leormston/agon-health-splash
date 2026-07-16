# Agon Health — Splash Page

A modern, responsive single-page application showcasing **Agon Health**, an upcoming iOS health & wellness app.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📐 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite 5 |
| Styling | Vanilla CSS (no framework) |
| Hosting | AWS S3 + CloudFront |
| Infrastructure | Terraform |
| CI/CD | GitHub Actions |

## 📁 Project Structure

```
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── src/
│   ├── components/
│   │   ├── Hero.jsx               # Title banner with gradient
│   │   ├── Mission.jsx            # Our Mission section
│   │   ├── Features.jsx           # Key feature cards
│   │   ├── ReleaseDate.jsx        # Coming Soon / release info
│   │   ├── Contact.jsx            # Contact & newsletter
│   │   └── Footer.jsx             # Footer
│   ├── hooks/
│   │   └── useInView.js           # Scroll animation hook
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css                  # Global styles & CSS variables
├── terraform/
│   ├── main.tf                    # S3 + CloudFront resources
│   ├── variables.tf
│   ├── outputs.tf
│   └── backend.tf                 # Remote state (commented)
├── index.html
├── package.json
├── vite.config.js
└── context.md                     # Living architecture doc
```

## 🎨 Design

- **Mobile-first** responsive layout
- **Glass-morphism** feature cards
- **Gradient** hero section with animated background
- **Fade-in on scroll** animations via IntersectionObserver
- **Colour palette**: Teal (#0D9488), Green (#10B981), Cyan (#06b6d4), Dark (#1a1a2e)

## ☁️ Deployment

### Prerequisites

- AWS account with appropriate permissions
- Terraform >= 1.5
- Node.js >= 20
- GitHub repository with secrets configured

### 1. Provision Infrastructure

```bash
cd terraform

# Initialise Terraform
terraform init

# Review the plan
terraform plan

# Apply
terraform apply
```

This creates:
- S3 bucket (private, encrypted, versioned)
- CloudFront distribution with OAC
- Bucket policy for CloudFront access

### 2. Configure GitHub Secrets

Add these secrets to your GitHub repository:

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM access key |
| `AWS_SECRET_ACCESS_KEY` | IAM secret key |
| `S3_BUCKET_NAME` | From Terraform output |
| `CLOUDFRONT_DISTRIBUTION_ID` | From Terraform output |

Or use OIDC by setting `USE_OIDC: true` and providing `AWS_ROLE_TO_ASSUME`.

### 3. Deploy

Push to `main` and GitHub Actions will:
1. Build the React app
2. Sync `dist/` to S3 with smart cache headers
3. Invalidate CloudFront cache

## 🖼️ Adding Your Assets

Place logos, screenshots, and images in the `public/` directory:

```
public/
├── logo.svg          # App logo (referenced in Hero)
├── screenshots/      # App screenshots
└── favicon.ico       # Browser favicon
```

Then reference them in components with absolute paths (e.g., `/logo.svg`).

## 📝 Customisation

- **Colours**: Edit CSS variables in `src/index.css`
- **Content**: Edit component files in `src/components/`
- **Contact email**: Update in `src/components/Contact.jsx`
- **Release date**: Update in `src/components/ReleaseDate.jsx`

## 📄 License

Private — All rights reserved.
