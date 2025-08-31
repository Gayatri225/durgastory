output "ec2_public_ip" {
  value = aws_instance.web.public_ip
}

output "ec2_public_dns" {
  value = aws_instance.web.public_dns
}

output "instance_id" {
  value = aws_instance.web.id
}

# Private key you paste into the GitHub secret EC2_SSH_KEY (also saved as ec2_key.pem)
output "private_key_pem" {
  value     = tls_private_key.generated.private_key_pem
  sensitive = true
}
