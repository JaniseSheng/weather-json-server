const _ = require('lodash');
const faker = require('faker');
const express = require('express');
var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var apienum = require('./enum.js');
var total = require('./apis/total.js');
var action_family = require('./apis/action/family.js');
var action_personal = require('./apis/action/personal.js');
var action_user = require('./apis/action/user.js');
var service = require('./apis/service.js');
var public = require('./apis/public.js');
const app = express();


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.json())


/**
* -------------------------------------------- 登录 --------------------------------------------
**/
app.post('/login', function(req, res, next) {
  res.json({
    success: true
  })
})


/**
* -------------------------------------------- 整体分布 --------------------------------------------
**/
//整体分布-分终端-获取类型的名字
app.post('/total_terminal_getTypeNames', (req, res, next)=> {
  total.api_total_terminal_typenames(req, res, next)
})
//整体分布-分终端
app.post('/total_terminal', (req, res, next)=> {
  total.api_total_terminal(req, res, next)
})

//整体分布-分场景-获取类型的名字
app.post('/total_scene_getTypeNames', (req, res, next)=> {
  total.api_total_scene_getTypeNames(req, res, next)
})
//整体分布-分场景
app.post('/total_scene', (req, res, next)=> {
  total.api_total_scene(req, res, next)
})

/**
* -------------------------------------------- 行为洞察 --------------------------------------------
**/

//行为洞察-家庭类人群
app.post('/action_family', function(req, res, next) {
  action_family.api_action_family(req, res, next)
})
//行为洞察-家庭类人群-echart
app.post('/action_family_echart', function(req, res, next) {
  action_family.api_action_family_echart(req, res, next)
})

//行为洞察-个人
app.post('/action_personal', function(req, res, next) {
  action_personal.api_action_personal(req, res, next)
})
//行为洞察-个人-echart
app.post('/action_personal_echart', function(req, res, next) {
  action_personal.api_action_personal_echart(req, res, next)
})

//行为洞察-用户
app.post('/action_user', function(req, res, next) {
  action_user.api_action_user(req, res, next)
})
//行为洞察-用户-echart
app.post('/action_user_echart', function(req, res, next) {
  action_user.api_action_user_echart(req, res, next)
})

/**
* -------------------------------------------- 服务监控 --------------------------------------------
**/
//服务监控-web-获取类型的名字
app.post('/service_web_getTypeNames', (req, res, next)=> {
  service.api_service_web_getTypeNames(req, res, next)
})
//服务监控-web
app.post('/service_web', (req, res, next)=> {
  service.api_service_web(req, res, next)
})
//服务监控-app-service_app_getTypeNames
app.post('/service_app_getTypeNames', (req, res, next)=> {
  service.api_service_app_getTypeNames(req, res, next)
})
//服务监控-app
app.post('/service_app', (req, res, next)=> {
  service.api_service_app(req, res, next)
})
//服务监控-气象局自有栏目-service_app_getTypeNames
app.post('/service_weather_getTypeNames', (req, res, next)=> {
  service.api_service_weather_getTypeNames(req, res, next)
})
//服务监控-气象局自有栏目
app.post('/service_weather', (req, res, next)=> {
  service.api_service_weather(req, res, next)
})
/**
* -------------------------------------------- 舆情分析 --------------------------------------------
**/
//舆情分析-流量-获取类型的名字
app.post('/public_flow_getTypeNames', (req, res, next)=> {
  public.api_public_flow_getTypeNames(req, res, next)
})
//舆情分析-流量
app.post('/public_flow', (req, res, next)=> {
  public.api_public_flow(req, res, next)
})

//舆情分析-热词搜索-获取类型的名字
app.post('/public_hot_getTypeNames', (req, res, next)=> {
  public.api_public_hot_getTypeNames(req, res, next)
})
//舆情分析-热词搜索
app.post('/public_hot', (req, res, next)=> {
  public.api_public_hot(req, res, next)
})



app.listen(8009);
