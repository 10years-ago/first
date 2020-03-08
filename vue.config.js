/*  module.exports = {
  configureWebpack: {
    resolve: {
      alias:{
        '@':'srcalskdjas;ldjl',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}  坑！！！！只能给webstorm使用*/

module.exports = {
  // devServer:{
  //   proxy: {
  //     '/yes':{
  //       target:"http://127.0.0.1",
  //       changeOrigin: true,
  //       pathRewrite:{
  //         '^/yes':'/'
  //       }
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
