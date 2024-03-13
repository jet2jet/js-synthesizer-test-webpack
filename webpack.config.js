const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		'test-webpack': './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist')
	}
};
