# AWS Cloud Resume Challenge

A production-ready serverless resume website built on AWS as part of the Cloud Resume Challenge.

## Live Demo

🌐 https://d1tjww504pg0fz.cloudfront.net

---

## Overview

This project demonstrates the implementation of a fully serverless personal resume website using AWS services and automated CI/CD practices.

The website includes a live visitor counter powered by AWS Lambda, API Gateway, and DynamoDB.

---

## Architecture

![Architecture Diagram](frontend/images/architecture.png)

### Architecture Flow

GitHub → GitHub Actions → Amazon S3 → CloudFront → Resume Website → API Gateway (HTTP API) → AWS Lambda → DynamoDB

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### AWS Services
- Amazon S3
- Amazon CloudFront
- Amazon API Gateway (HTTP API)
- AWS Lambda
- Amazon DynamoDB
- AWS IAM

### DevOps & CI/CD
- GitHub
- GitHub Actions

---

## Features

- Responsive online resume
- Serverless visitor counter
- Automated deployments via GitHub Actions
- Automatic CloudFront cache invalidation
- Global content delivery via CloudFront CDN
- Fully serverless architecture
- Production-ready CI/CD workflow

---

## CI/CD Pipeline

Every push to the `main` branch automatically:

1. Deploys frontend files to Amazon S3
2. Invalidates the CloudFront cache
3. Publishes changes globally
4. Makes the latest version immediately available

---

## AWS Services Used

| Service | Purpose |
|----------|----------|
| Amazon S3 | Hosts static website files |
| CloudFront | Global CDN and HTTPS delivery |
| API Gateway | Exposes the visitor counter API |
| AWS Lambda | Processes visitor counter requests |
| DynamoDB | Stores visitor count data |
| IAM | Access and security management |
| GitHub Actions | Automated deployment pipeline |

---

## Challenges & Lessons Learned

During this project I gained hands-on experience with:

- Building a serverless architecture on AWS
- Integrating API Gateway with Lambda
- Managing DynamoDB read/write operations
- Configuring CloudFront distributions
- Implementing GitHub Actions CI/CD workflows
- Troubleshooting CloudFront caching issues
- Applying IAM least-privilege permissions
- Automating CloudFront cache invalidation

---

## Future Improvements

- Custom domain with Route 53
- HTTPS certificate management using ACM
- Infrastructure as Code (Terraform)
- CloudWatch monitoring and dashboards
- Multi-environment deployment (Dev / Prod)

---

## Author

**Temur Sadathanov**

- LinkedIn: https://www.linkedin.com/in/temur-sadathanov-8726102b1/
- GitHub: https://github.com/tsadathanov-wq

---

### Cloud Resume Challenge Status

✅ Amazon S3  
✅ CloudFront CDN  
✅ API Gateway (HTTP API)  
✅ AWS Lambda  
✅ DynamoDB  
✅ GitHub Actions CI/CD  
✅ Automatic CloudFront Invalidation  
✅ Live Visitor Counter  
✅ Architecture Documentation