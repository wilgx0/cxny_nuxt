module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '成雄农业',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {hid:'keywords',name:'keywords',content:'成雄农业'},
      { hid: 'description', name: 'description', content: '成雄农业' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  /**
   * src: String (文件的路径) 
   * ssr: Boolean (默认为 true) 如果值为 false，该文件只会在客户端被打包引入。 
   */
  plugins: [{
    src: '~plugins/ElementUI',
    ssr: true,
  },{
    src:'~plugins/server_site/index.js',
    ssr:true,
  },{
    src:"~plugins/vue-swiper.js",
    ssr:false
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css',
    '~assets/css/normalize.css',
    '~assets/css/common.css'
  ],
  vendor:['element-ui','axios']
}

