/**
 * Created by baozhong on 2016/12/27.
 */
var validator=require("validator");

var crypto =require("crypto");

module.exports ={
    "(GET |POST) /sigup " :{
        "request" : {
            "session": checkNotLogin
        }
    },
    "POST /signup" : {
        "reqest" :{
            "body":checkSignupBody
        }
    }
};
function md5(str) {
    return crypto.createHash("md5").update(str).digest("hex");
}

function checkNotLogin(){
    if(this.session && this.session.user){
        this.flash={error:"已登陆！"};
        this.redirect('back');
        return false;
    }
    return true;
}

function  checkLogin() {
    if(!this.session || !this.session.user) {
        this.flash = {"error": "未登陆"};
        this.redirect("/signin");
        return false
    }
}

function checkSignupBody() {
    var body=this.request.body;
    var flash;
    if(!body || !body.name){
        flash={error : "请填写用户名"};
    }
    else if(!body.email || !validator.isEmail(body.email)){
        flash={"error":"请填写正确的邮箱地址"}
    }

    if(flash){
        this.flash=flash;
        this.redirect(('back'));
        return false;
    }
    body.name=validator.trim(body.name);
    body.email=validator.trim(body.email)
}