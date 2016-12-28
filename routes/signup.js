/**
 * Created by baozhong on 2016/12/28.
 */
var Models=require("../lib/core");


var $User=Models.$User;

exports.get=function *() {
    yield this.render('signup');
}