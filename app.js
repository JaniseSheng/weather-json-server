const _ = require('lodash');
const faker = require('faker');
const express = require('express');
var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var apienum = require('./enum.js');
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

const queryByDate = (res)=> {
  const num = parseInt(Math.random()* 31)
  res.json({
    code: 0,
    data: {
      uv: _.times(num, (item)=> {
        const curDate = item < 10 ? `0${item}` : item
        return {
          date : `2017-01-${curDate}`,
          value : parseInt(Math.random()* 500) + 100
        }
      }),
      pv: _.times(num, (item)=> {
        const curDate = item < 10 ? `0${item}` : item
        return {
          date : `2017-01-${curDate}`,
          value : parseInt(Math.random()* 500) + 100
        }
      })
    },
    success: true
  })
}

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
//整体分布-分终端
app.post('/total_terminal', (req, res, next)=> {
  const num = parseInt(Math.random()* 31)
  queryByDate(res)
})

//整体分布-分场景
app.post('/total_scene', (req, res, next)=> {
  const num = parseInt(Math.random()* 31)
  queryByDate(res)
})

/**
* -------------------------------------------- 行为洞察 --------------------------------------------
**/

//行为洞察-家庭类人群
app.post('/action_family', function(req, res, next) {
  const action_family = apienum.action_family
  res.json({
    code: 1,
    data: action_family.map((item)=> {
      return {
        name: item.name,
        id: item.id,
        value: Math.random() < 0.5 ? parseInt(Math.random()* 1000) + 500 : `${parseInt(Math.random()* 100)}%`
      }
    }),
    success: true
  })
})



app.listen(8009);
