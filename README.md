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
.
├─ site/                    # static HTML/CSS/JS (Durga story)
├─ Dockerfile               # Nginx serving ./site
├─ .github/workflows/ci-cd.yml
└─ infra/
   └─ terraform/            # EC2 + SG + outputs
      ├─ main.tf  ├─ providers.tf  ├─ variables.tf  └─ outputs.tf

Tools
Git, Docker, Nginx, GitHub Actions, Amazon ECR, Amazon EC2, IAM, Security Groups, Terraform.

How to trigger CD
On push to main, the workflow builds the Docker image, ensures the ECR repo, pushes :latest and :<commit-sha>, then SSHes to EC2, prunes disk, logs in to ECR, pulls :latest, and restarts the Nginx container on port 80. The site is served at the instance’s public IP.

Using It
Provision with Terraform (infra/terraform) to create EC2 and the security group.
Add the four GitHub secrets listed above.
Push to main (or run the workflow manually) to build and deploy.
Open http://<EC2_PUBLIC_IP>/.

Notes
We use the EC2 public IP (no Elastic IP). If the instance IP changes, update the EC2_HOST secret and push a small commit to redeploy.
.gitignore excludes Terraform state and private keys.
Clean up with terraform destroy when you’re done.
