const fs = require('fs');
const path = require('path');

// 源文件路径
const sourceFile = 'CHANGELOG.md';

// 目标文件路径
const targetFile = 'docs/CHANGELOG.md';

// 要添加的内容
const headerContent = `---
nav:
  title: ChangeLog
  order: 3
---
`;

// 读取源文件
fs.readFile(sourceFile, 'utf8', (err, data) => {
  if (err) {
    console.error('读取源文件时出错:', err);
    return;
  }

  // 在文件内容前添加头部内容
  const newContent = headerContent + data;

  // 写入目标文件
  fs.writeFile(targetFile, newContent, 'utf8', (err) => {
    if (err) {
      console.error('写入目标文件时出错:', err);
      return;
    }
    console.log('文件复制并添加头部内容成功！');
  });
});
