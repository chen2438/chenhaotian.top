cd /var/www/html
rm -rf blog-repo

# git clone https://mirror.ghproxy.com/https://github.com/chen2438/chenhaotian.top.git blog-repo
git clone https://mirror.vayki.com/proxy/https://github.com/chen2438/chenhaotian.top.git blog-repo

cd blog-repo

# npm cache clean --force
# rm -rf node_modules/
npm install --registry=https://registry.npmmirror.com/

# hexo clean
hexo generate

rm -rf ../chenhaotian.top/
mkdir -p ../chenhaotian.top/piblic/
cp -r public/ ../chenhaotian.top/public/
