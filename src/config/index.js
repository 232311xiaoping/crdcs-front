const localBaseUrl = 'http://121.40.241.121:8081/'
const devBaseUrl = 'http://121.40.241.121:8081/'
const uatBaseUrl = 'http://121.40.241.121:8081/'
const prodBaseUrl = 'http://121.40.241.121:8081/'

let baseUrl = ''
const env = process.env.NODE_ENV
if (env === 'production') {
  switch (process.env.VUE_APP_ENV) {
    case 'dev-build':
      baseUrl = devBaseUrl
      break
    case 'uat-build':
      baseUrl = uatBaseUrl
      break
    case 'pro-build':
      baseUrl = prodBaseUrl
      break
  }
} else {
  baseUrl = localBaseUrl
}
export default {
  /**
   * @description token在Cookie中存储的时间，默认2小时 即1/12天
   */
  cookieExpires: 1/12,
  /**
   *@description api请求基础路径
   */
  baseUrl: baseUrl,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 统一的页面title
   */
  windowTitle: 'crdcs后台管理系统',

}
