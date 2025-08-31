variable "region" {
  type    = string
  default = "ap-south-1"
}

variable "project_name" {
  type    = string
  default = "durga"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "ssh_ingress_cidr" {
  description = "Optional: allow SSH (22) from this CIDR, e.g., 1.2.3.4/32. Leave empty to disable SSH."
  type        = string
  default     = ""
}
