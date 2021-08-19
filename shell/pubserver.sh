rm -rf dist
mkdir dist


rsync -r build/* dist
cp package.json dist
tar -czf dist/dist.tar.gz dist

# ssh root@101.34.170.165 << eeooff
# rm -rf /usr/web/*
# eeooff

scp -rC dist/dist.tar.gz root@101.34.170.165:/usr/tmp/dist.tar.gz

ssh root@101.34.170.165 << eeooff
rm -rf /usr/web/*
cd /usr/web/
echo "正在清理以前的文件..."
echo "解压文件中..."
cp -r -f /usr/tmp/dist.tar.gz /usr/web/
tar -xzf dist.tar.gz
cp -r -f dist/* /usr/web/
echo "安装依赖"
cnpm i
echo "重启服务"
echo "清理文件中..."
rm -rf /usr/web/dist.tar.gz
rm -rf /usr/tmp/dist.tar.gz
# npm run reset
echo "上传成功"
exit
eeooff



rm -rf dist