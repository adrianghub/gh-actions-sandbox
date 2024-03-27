resource "aws_s3_bucket" "ofed_bucket" {
  bucket = "zinko-terraform-ofed-bucket"
}

resource "aws_s3_bucket_ownership_controls" "ofed-bucket-ownership-controls" {
  bucket = aws_s3_bucket.ofed_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# resource "aws_s3_bucket_policy" "ofed_bucket_policy" {
#   bucket = aws_s3_bucket.ofed_bucket.id

#   policy = jsonencode({
#     "Version" : "2012-10-17",
#     "Statement" : [
#       {
#         "Sid" : "PublicReadGetObject",
#         "Effect" : "Allow",
#         "Principal" : "*",
#         "Action" : "s3:GetObject",
#         "Resource" : "arn:aws:s3:::zinko-terraform-ofed-bucket/*"
#       }
#     ]
#   })
# }

resource "aws_s3_bucket_website_configuration" "ofed-bucket-website" {
  bucket = aws_s3_bucket.ofed_bucket.id

  index_document {
    suffix = "index.html"
  }
}
