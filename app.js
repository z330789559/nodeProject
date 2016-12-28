/**
 * Created by baozhong on 2016/12/27.
 */

var app = require("koa")();

var logger = require("koa-logger");

var bodyparser = require("koa-bodyparser");

var staticCache = require("koa-static-cache");

var errorHandler = require("koa-errorhandler");

var session = require("koa-generic-session");

var MongoStore = require("koa-generic-session-mongo");

var flash = require("koa-flash");

var compress = require("koa-compress");

var scheme = require("koa-scheme");

var router = require("koa-frouter");

var routerCache = require("koa-router-cache");

var render = require("co-ejs");

var config = require("config-lite");


var merge = require('merge-descriptors');

var core=require("./lib/core");

var renderConfig=require(config.renderConf);

merge(renderConfig.locals||{},core,false);

app.keys=[renderConfig.locals.$app.name];

app.use(errorHandler());

app.use(bodyparser());

app.use(staticCache(config.staticCacheConfig));

app.use(logger());

app.use(session({
    store:new MongoStore(config.mongodb)
}));

app.use(flash());

app.use(scheme(config.schemeConfig));

app.use(routerCache(app,config.routerCacheConf))

app.use(compress());

app.use(render(app,renderConfig));

app.use(router(app,config.routerConfig));

app.listen(config.port,function () {
    console.log("server  listening on:",config.port)
});