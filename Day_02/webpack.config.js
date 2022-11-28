// 引入一个包
const path = require('path')

// webpack中的所有配置信息都应该写在 module.exports 中
module.exports = {

	// 指定入口文件
	entry: './src/index.ts',

	// 指定打包输出目录
	output: {
		path: path.resolve(__dirname,'dist'),
		// 打包后的文件名字
		filename: 'bundle.js'
	},

	// 指定webpack打包时要使用的模块
	module: {
		// 指定要加载的规则
		rules: [
			{
				// 指定规则生效的文件
				test: /\.ts$/,
				// 要使用的loader 
				use: 'ts-loader',
				// 要排除的文件夹
				exclued: /node-modules/ 

			}
		]
	}
}