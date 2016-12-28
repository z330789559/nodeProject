/**
 * Created by baozhong on 2016/12/27.
 */


var path=require("path");

module.exports={
    
    port:process.env.Port||3000,
    
    mongodb:'mongodb://127.0.0.1:27017/club',
    
    schemeConfig:path.join(__dirname,"./default.scheme"),
    
    staticCacheConfig:path.join(__dirname,"../theme/publices"),
    
    renderConf:path.join(__dirname,"../theme/config"),
    
    routerConfig:"routes",
    
    routerCacheConf:{
        "/":{
            expire:5 *1000,
            condition:function () {
                return !this.session || !this.session.user;
            }
        }
    }
    
}