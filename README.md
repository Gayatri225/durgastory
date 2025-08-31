# Jai Maa Durga — Static Website • Docker → ECR → EC2 (GitHub Actions & Terraform)

A tiny, elegant static site about Maa Durga, deployed automatically to an EC2 instance.
This project demonstrates Infrastructure as Code (Terraform), containerization (Docker), and a production-style CI/CD pipeline (GitHub Actions → ECR → EC2 over SSH) — in a clean, portfolio-ready package.

✨ What this project shows

Version control: clear, production-style repo layout.

Docker: site packaged as a tiny Nginx image.

CI/CD: GitHub Actions builds → pushes to ECR → SSH deploy to EC2.

Terraform: reproducible AWS infrastructure (EC2, Security Group, IAM, key pair).

Ops hygiene: secrets via GitHub, disk cleanup during deploy, least-privilege ECR pull.

🚀 Live preview

Once deployed, open: http://<EC2_PUBLIC_IP>/ (Terraform prints this as an output).

🗂 Repo structure
.
├─ site/                      # static website (HTML/CSS/JS — cute Durga story)
├─ Dockerfile                 # Nginx-based static server image
├─ .github/workflows/ci-cd.yml# GitHub Actions (build → push → deploy)
└─ infra/
   └─ terraform/              # Terraform IaC for EC2, SG, IAM, keypair, outputs
      ├─ main.tf
      ├─ providers.tf
      ├─ variables.tf
      └─ outputs.tf

Tools

Git, Docker, Nginx, GitHub Actions, Amazon ECR, Amazon EC2, IAM, Security Groups, Terraform.

How to trigger CD

Push to main (or run the workflow manually); the runner builds, pushes to ECR, SSHes to EC2, pulls :latest, restarts the container, and the site updates.


🧪 Run locally (no AWS required)
doc
