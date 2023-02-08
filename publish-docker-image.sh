DOCKER_BUILDKIT=1 docker build --no-cache -t test .
docker tag test:latest camikiller/test:latest
docker push camikiller/test:latest
