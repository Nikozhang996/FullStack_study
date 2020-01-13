#! /bin/bash
git fetch
git branch
echo '当前切换的分支为：'$1
git checkout $1
git pull

# echo git checkout $1
