cd /var/www/html
rm -rf chenhaotian.top
git clone https://gitee.com/chen2438/chenhaotian.top.git
cd chenhaotian.top
npm install
hexo clean
hexo generate
