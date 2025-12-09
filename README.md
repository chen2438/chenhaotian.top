# chenhaotian.top
chenhaotian.top Hexo website.

## 部署方式

### Vercel 部署（推荐）

1. Fork 或导入此仓库到您的 GitHub 账户
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Hexo 项目并进行部署
4. 部署完成后，访问分配的域名即可

**API 访问地址：** `https://your-domain.vercel.app/api/random-image`

### 传统部署方式

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

