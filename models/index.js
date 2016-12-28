/**
 * Created by baozhong on 2016/12/27.
 */
var mongoose=require('mongoose');

var config=require("config-lite").mongodb;
mongoose.connect(config.url,function (err) {
    if(err){
        console.log('connect to %s error : %s',config.url,error.message)
        process.exit(1)
    }

})

exports.User=require("./user");