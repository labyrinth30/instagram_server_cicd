#!/bin/bash

echo "--------------- 서버 배포 시작 -----------------"
docker stop instagram-server || true
docker rm instagram-server || true
docker pull 390844778157.dkr.ecr.ap-northeast-2.amazonaws.com/instagram-server:latest
docker run -d --name instagram-server -p 3000:3000 390844778157.dkr.ecr.ap-northeast-2.amazonaws.com/instagram-server:latest
echo "--------------- 서버 배포 끝 ------------------"
