/**
 * Created by baozhong on 2016/12/28.
 */
var gravatar=require("gravatar");

var moment =require("moment");

var md=require("markdown-it");

var pkg=require("../../package");

moment.locale(pkg.locale);

module.exports={
    get fromNow(){
        return function (date) {
            return moment(date).fromNow();
        }
    },
    get gravatar(){
        return gravatar.url;
    },
    get markdown(){
        return function (content) {
            return md.render(content)
        }
    }
}