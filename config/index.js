const config = {
    //开发环境配置，开发的时候
    development: {
        api: "http://www.fastadmin.my/"
    },
    //生产环境配置，部署的时候
    production: {
        api: ""
    },
    url:{
        getNav:'api/Test/getNav',      //获取导航数据
        getSlide:'api/Test/getSlide',   //获取幻灯片
        getNews:'api/Test/getNews',         //根据分类id获取文章列表
        getArticle:'api/Test/getArticle',   //根据id获取文章
    }
};
//获取当前环境变量,是 production或者development
//module.exports = config[process.env.NODE_ENV];
export default  config[process.env.NODE_ENV];
export const url = config['url'];