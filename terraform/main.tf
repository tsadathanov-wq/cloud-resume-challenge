resource "aws_dynamodb_table" "visitor_counter" {
  name         = "terraform-test-counter"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Project   = "Cloud Resume Challenge"
    ManagedBy = "Terraform"
  }
}