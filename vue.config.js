module.exports = {
    publicPath: './',
    outputDir: "dist", // 输出文件目录
    lintOnSave: false, // eslint 是否在保存时检查
    assetsDir: 'static', // 配置js、css静态资源二级目录的位置  

    devServer: {
      open: true,      // 运行项目时，是否自动开启新窗口。
      host: 'localhost',  
      port: 8080,  // 默认端口号。
      https: false,      // 如果开启就会以https开头。
      hotOnly: false,      //安装模块更好的兼容，不需要配置。
      proxy: null
    }
  }