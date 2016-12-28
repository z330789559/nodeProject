/**
 * Created by baozhong on 2016/12/28.
 */
module.exports={
    root:__dirname,
    layout:false,
    viewExt:"html",
    cache:true,
    debug:false,
    filters:require("./helper/filters"),
    locals:require("./helper/locals")
}