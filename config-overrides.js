const {
  override,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hd: '2px',
      'brand-primary': '#2d3948'
    }
  }),
  addPostcssPlugins([
    require('postcss-px-to-viewport')({
      viewportWidth: 720,
      viewportHeight: 1280,
      unitPrecision: 5,
      viewportUnit: 'vw',
      fontViewportUnit: 'vmin',
      selectorBlackList: ['px'],
      minPixelValue: 1,
      mediaQuery: true
    })
  ]),
  config => {
    const sassIndex = config.module.rules[2].oneOf.findIndex(
      v => String(v.test) === String(/\.(scss|sass)$/)
    )
    const sassModuleIndex = config.module.rules[2].oneOf.findIndex(
      v => String(v.test) === String(/\.module\.(scss|sass)$/)
    )
    const addSassOptions = {
      loader: require.resolve('sass-resources-loader'),
      options: {
        resources: './src/assets/scss/index.scss'
      }
    }

    // 添加全局变量
    config.module.rules[2].oneOf[sassIndex].use.push(addSassOptions)
    config.module.rules[2].oneOf[sassModuleIndex].use.push(addSassOptions)
    return config
  }
)
