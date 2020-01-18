// 网关地址
const GATEWAY_HOST = process.env.GATEWAY_HOST || 'localhost'
const GATEWAY_PORT = process.env.GATEWAY_PORT || '9180'


module.exports = {
    // 配置别名
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    // 转发配置
    proxyList: {
        '/api': {
            target: 'http://' + GATEWAY_HOST + ':' + GATEWAY_PORT,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api'
            }
        }
    }
}