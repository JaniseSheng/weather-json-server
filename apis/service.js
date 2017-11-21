const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 服务监控 --------------------------------------------
**/

const queryByDate = ()=> {
  const num = parseInt(Math.random()* 30) + 1
  return _.times(num, (item)=> {
    const curDate = item < 10 ? `0${item}` : item
    return {
      date : `2017-01-${curDate}`,
      value : parseInt(Math.random()* 500) + 100,
      changeValue : parseInt(Math.random()* 500) + 100
    }
  })
}
const percentageValue = ()=> {
  const num = parseInt(Math.random()* 30) + 1
  return _.times(num, (item)=> {
    const curDate = item < 10 ? `0${item}` : item
    return {
      date : `2017-01-${curDate}`,
      value : parseInt(Math.random()* 500) + 100
    }
  })
}

//服务监控-web
const api_service_web = (req, res, next)=> {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
      percentage: percentageValue()
    },
    success: true
  })
}

//服务监控-app
const api_service_app = (req, res, next)=> {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
      percentage: percentageValue()
    },
    success: true
  })
}

//服务监控-气象局自有栏目
const api_service_weather = (req, res, next)=> {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
      percentage: percentageValue()
    },
    success: true
  })
}

module.exports = {
  api_service_web: api_service_web,
  api_service_app: api_service_app,
  api_service_weather: api_service_weather
}
