const _import = require(`./_import.${process.env.NODE_ENV}`).default

const routes = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: _import('Home')
  }
]

export default routes
