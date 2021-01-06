module.exports = {
    // 不產出map檔案 (影響錯誤訊息的明確性)
    productionSourceMap:false ,
    //產出後檔名
    assetsDir:'static',
    // '' 或 './' 產出(npm run build)後會成為相對路徑
    publicPath: process.env.NODE_ENV === 'production'
    ? '/project2/'
    : '/'
}