cd /var/www/html
rm -rf chenhaotian.top
git clone https://mirror.ghproxy.com/https://github.com/chen2438/chenhaotian.top.git
cd chenhaotian.top
npm install
hexo clean
hexo generate
