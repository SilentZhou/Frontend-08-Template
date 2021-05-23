学习笔记



`npm i --save-dev puppeteer` 报错：

```bash
ERROR: Failed to set up Chromium r869685! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download
```

解决方法：

```bash
npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
```



