# chenhaotian.top
chenhaotian.top Hexo website.

Debian 12, npm 9.2.0, node v18.19.0 测试通过

```bash
apt update
apt install nginx nodejs npm
npm install -g hexo-cli
cd /var/www/html
git clone https://mirror.vayki.com/vaykigo/https://github.com/chen2438/chenhaotian.top.git blog-repo
cd blog-repo
npm install --registry=https://registry.npmmirror.com/
hexo generate
# mkdir -p ../chenhaotian.top/public/
cp -r public/ ../chenhaotian.top/public/
```

img-api.js

```bash
cd /var/www/html
cp /var/www/html/blog-repo/source/img-api.js /var/www/html/img-api.js
npm install pm2 -g
pm2 start img-api.js --name "img-api"
pm2 startup
pm2 save
```

