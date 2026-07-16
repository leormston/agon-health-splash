# Agon Health Splash Page — Project Context

## Overview

This is a **splash / landing page** for **Agon Health**, an upcoming iOS application.  
The page is a single-page React app (SPA) that showcases the app's purpose, mission, expected release date, and provides a contact method.

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React (Vite) | Fast builds, modern DX, lightweight output |
| Styling | CSS Modules / vanilla CSS | No heavy dependencies, easy to customise |
| Hosting | AWS S3 + CloudFront | Cheap, scalable, global CDN |
| IaC | Terraform | Declarative, repeatable infra |
| CI/CD | GitHub Actions | Tight GitHub integration, free tier |
| Package manager | npm | Standard, widely supported |

## Page Sections

1. **Hero / Title Banner** — App name, tagline, eye-catching gradient background (placeholder for logo)
2. **Our Mission** — Short copy explaining Agon Health's purpose
3. **Features Preview** — Key feature highlights with icons (added for completeness)
4. **Release Date** — Countdown / coming soon section
5. **Contact** — Simple contact form or mailto link + socials placeholder

## Deployment Flow

```
Push to main → GitHub Actions → npm build → sync dist/ to S3 → CloudFront invalidation
```

## AWS Resources (Terraform)

- S3 bucket (static website hosting)
- CloudFront distribution (HTTPS, caching, custom domain)
- S3 bucket policy (public read via CloudFront OAC)
- ACM certificate for `agon-health.louie.cloud` (us-east-1, DNS validated)
- Route53 A + AAAA alias records → CloudFront
- Parent domain: `louie.cloud` (Hosted Zone: Z05745243PIX3M5TE1VR4)

## File Structure

```
agon-health-splash/
├── .github/workflows/deploy.yml
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── Hero.jsx
│       ├── Mission.jsx
│       ├── Features.jsx
│       ├── ReleaseDate.jsx
│       └── Contact.jsx
├── public/
│   └── (logos & assets go here)
├── index.html
├── package.json
├── vite.config.js
├── context.md
├── todo.md
└── README.md
```

## Notes

- Logos and screenshots will be added manually by the developer after initial scaffold.
- The design should be modern, clean, mobile-first responsive.
- Colour palette: health/wellness tones — greens, teals, whites, subtle gradients.
