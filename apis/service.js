const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 服务监控 --------------------------------------------
**/

const queryByDate = () => {
  const num = parseInt(Math.random() * 30) + 1
  return _.times(num, (item) => {
    const curDate = item < 10
      ? `0${item}`
      : item
    return {
      name: `2017-01-${curDate}`,
      value: parseInt(Math.random() * 500) + 100,
      perValue: parseInt(Math.random() * 90) + 10
    }
  })
}
const queryTopByDate = (num = 5) => {
  return _.times(num, (item) => {
    return {
      name: faker.random.word(),
      value: parseInt(Math.random() * 500) + 100
    }
  })
}
const percentageValue = () => {
  const num = parseInt(Math.random() * 30) + 1
  return _.times(num, (item) => {
    const curDate = item < 10
      ? `0${item}`
      : item
    return {
      date: `2017-01-${curDate}`,
      value: parseInt(Math.random() * 500) + 100
    }
  })
}

//服务监控-web-获取类型的名字
const api_service_web_getTypeNames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '测试网站1',
        id: 0
      }, {
        name: '测试网站2',
        id: 1
      }, {
        name: '测试网站3',
        id: 2
      }
    ],
    success: true
  })
}
//服务监控-web
const api_service_web = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
      percentage: percentageValue(),
      star: ['1', '3.5', '4.5', '5', '3.5', '5', '3'][parseInt(Math.random() * 5)]
    },
    success: true
  })
}
//服务监控-web-top
const api_service_web_top = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryTopByDate(10)
    },
    success: true
  })
}

//服务监控-app-获取类型的名字
const api_service_app_getTypeNames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: 'app1',
        id: 0
      }, {
        name: 'app1',
        id: 1
      }, {
        name: 'app1',
        id: 2
      }
    ],
    success: true
  })
}
//服务监控-app
const api_service_app = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
      percentage: percentageValue(),
      star: ['1', '3.5', '4.5', '5', '3.5', '5', '3'][parseInt(Math.random() * 5)]
    },
    success: true
  })
}

//服务监控-app-top
const api_service_app_top = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryTopByDate(5)
    },
    success: true
  })
}

//服务监控-气象局自有栏目-获取类型的名字
const api_service_weather_getTypeNames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '天气预报1',
        id: 0
      }, {
        name: '天气预报2',
        id: 1
      }, {
        name: '天气预报3',
        id: 2
      }
    ],
    success: true
  })
}
//服务监控-气象局自有栏目
const api_service_weather = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
      percentage: percentageValue(),
      star: ['1', '3.5', '4.5', '5', '3.5', '5', '3'][parseInt(Math.random() * 5)]
    },
    success: true
  })
}

//服务监控-weather-top
const api_service_weather_top = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryTopByDate(5)
    },
    success: true
  })
}

module.exports = {
  api_service_web_getTypeNames,
  api_service_web,
  api_service_web_top,
  api_service_app_getTypeNames,
  api_service_app,
  api_service_app_top,
  api_service_weather_getTypeNames,
  api_service_weather,
  api_service_weather_top
}
