/**
 * Created by baozhong on 2016/12/27.
 */
var User =require("../models").User

exports.addUser=function (data) {
    return User.create(data)
}


exports.getUserById=function (id) {
    return User.findById(id).exec();
}

exports.getUserByName=function (name) {
    return User.findOne({name:name}).exec()
}