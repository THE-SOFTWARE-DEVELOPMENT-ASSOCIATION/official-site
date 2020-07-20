// webpack.config.js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./src/main.js",
    output:{
        filename: "build.js",
        path: path.resolve(__dirname, "bin")
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./bin",
        disableHostCheck: true
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module:{
        rules: [
            {       //sass: vue-style-loader, css-loader, sass-loader
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
            {       //png, jpg, svg: url-loader
                test: /\.(png|jpg|svg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: 'img/',
                    esModule: false
                }
            },
            {       //css: css-loadery
                test: /\.css$/,
                use:[
                    'vue-style-loader',
                    "css-loader"

                ]
            },
            {       //vue: vueloader, bable
                test: /\.vue$/,
                use:[
                    "vue-loader"
                ]
                
            },
            {       //js: es3ify-loader, bable
                enforce: "post",
                test: /\.js$/,
                exclude: /node_modules/, 
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }  
            },
            {       //ts, tsx: bable
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-typescript',   // 引用Typescript插件
                                {
                                    allExtensions: true,        // 🔴支持所有文件扩展名
                                }
                            ]
                        ]
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js'
        ]
    }
}