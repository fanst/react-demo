var path=require("path");
var webpack=require("webpack");

module.exports = {
    entry:["./app/modules/main.js"],
    mode:"development",
    devtool: 'source-map',
    output:{
        path:__dirname+'/dist',
        filename:"bundle.js",
        chunkFilename: "[name].[chunkhash:8].js" // 设置require.ensure 文件名
    },
    module: {
        rules:[
        {
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, 'app')],
            use:[{loader:"babel-loader",options: { presets: ["react","es2015"],
                  plugins:[["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]] // `style: true` for less
               }}]
        },
        {
            test: /\.(jpg|png)$/,
            include: [path.resolve(__dirname, 'app')],
            use:[{loader:"url-loader",options: {limit: 8192,outputPath:'images',publicPath:'./images/'}}]    
        },
        {
            test: /\.css$/,
            include: [path.resolve(__dirname, '/'),path.resolve(__dirname,"/node_modules/antd/")],
            use:["style-loader","css-loader"]
        },
        // {
        //     test: /\.css$/,
        //     include: [path.resolve(__dirname, '/')],
        //     //让css-loader支持Css Modules    antd 样式加载问题
        //     use:["style-loader",{loader:"css-loader",options: { modules: true }}]
        // }
        ]
    },
    //不把第三方库打包到bundle中
    externals: {
        'underscore': "_",
        'moment': "moment",
        'axios': "axios",
        'ES6Promise': "ES6Promise"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: 'localhost',
        port: 9090, //默认9090
        inline: true, //可以监控js变化
        hot: true,//热启动
        // proxy: {
        //     "/api/*": {    //需要代理的路径
        //       target: "http://127.0.0.1:3000",  //需要代理的域名
        //       changeOrigin: true  //必须配置为true，才能正确代理
        //     }
        //   }
    }
}