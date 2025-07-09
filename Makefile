# Makefile for deploying React app to AWS S3
SHELL = /bin/bash

include .env.deploy
export

build:
	@echo "🔨 Building React app..."
	npm run build
	@echo "✅ Build complete."

deploy: build
	@echo "☁️ Uploading 'dist/' to S3..."
	aws s3 sync dist/ s3://$(AWS_S3_BUCKET_NAME) --delete --region $(AWS_REGION)

	@echo "✅ S3 deployment complete."

