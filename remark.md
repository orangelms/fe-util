## deploy npm 

执行npm login，依次输入注册npm时的username, password, email后，执行npm whoami能终端输出用户名，说明登录成功，最后执行npm publish发包。

pnpm create jest@latest
pnpm add @types/jest jest ts-jest -D
pnpm i conventional-changelog -D
pnpm add tslib --D


使用 npm version 命令更新版本号，例如：

# 发布一个 patch 版本
$ npm version patch -m "build: release %s"
该命令将会自动生成 git tag 及 git commit，并将版本号更新到 package.json 中。更多用法可参考 NPM 文档：https://docs.npmjs.com/cli/v8/commands/npm-version


# create a new repository on the command line
echo "# fe-util" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/orangelms/fe-util.git
git push -u origin main

# push an existing repository from the command line
git remote add origin https://github.com/orangelms/fe-util.git
git branch -M main
git push -u origin main