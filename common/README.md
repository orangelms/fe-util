# @fe-util/common

[![NPM version](https://img.shields.io/npm/v/@fe-util/common.svg?style=flat)](https://npmjs.org/package/@fe-util/common)
[![NPM downloads](http://img.shields.io/npm/dm/@fe-util/common.svg?style=flat)](https://npmjs.org/package/@fe-util/common)

前端工具库

## Usage

```
npm i @fe-util/common -S

import { isEmpty } from "@fe-util/common";

```

- 不要将与业务逻辑有关的代码放在本库
- 所有工具方法，都要提供单元测试代码

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor

# add new modules
pnpm add --save-dev jest
```

## 单元测试

单元测试会在提交时自动执行，若不通过，则阻止提交，若要手动执行，运行：

```bash
pnpm test
```

## LICENSE

MIT
