# 自动构建部署脚本
cd /my/nginx-project/vant-study
git pull
npm install
npm run build
nginx -s reload