module.exports = {
  entry : "./app-client.js",
  output : {
    path : './public',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel-loader',
        exclude : /(node_modules|app-server.js)/,
        query : {
          presets : ['es2015', 'react']
        }
      }
    ]
  },
  resolve : {
    moduleDirectories : ['node_modules', 'components']
  }
}
