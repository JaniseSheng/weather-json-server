const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 行为洞察 --------------------------------------------
**/

//行为洞察-家庭-获取初始数据
const api_action_family = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      'pc': [
        {
          name: '人口数量',
          id: 0,
          type: 'pc',
          data: {
            value: '30',
            name: '3口',
            perValue: '30'
          }
        }, {
          name: '电信端消费能力',
          id: 1,
          type: 'pc',
          data: {
            value: '200',
            name: '中',
            perValue: '30'
          }
        }, {
          name: '银联消费能力',
          id: 2,
          type: 'pc',
          data: {
            value: '100',
            name: '中',
            perValue: '30'
          }
        }, {
          name: '气象类服务消费能力',
          id: 3,
          type: 'pc',
          data: {
            value: '300',
            name: '中',
            perValue: '30'
          }
        }, {
          name: '车辆情况',
          id: 4,
          type: 'pc',
          data: {
            value: '60%',
            name: '有车',
            perValue: '30'
          }
        }, {
          name: '住宅情况',
          id: 5,
          type: 'pc',
          data: {
            value: '20%',
            name: '5-6w',
            perValue: '30'
          }
        }, {
          name: '互联网行为分布',
          id: 6,
          type: 'pc',
          data: {
            value: '15%',
            name: '购物',
            perValue: '30'
          }
        }
      ],
      'iptv': [
        {
          name: '人口数量',
          id: 0,
          type: 'iptv',
          data: {
            value: '32%',
            name: '3口',
            perValue: '30'
          }
        }, {
          name: '电信端消费能力',
          id: 1,
          type: 'iptv',
          data: {
            value: '210',
            name: '中',
            perValue: '30'
          }
        }, {
          name: '银联消费能力',
          id: 2,
          type: 'iptv',
          data: {
            value: '100',
            name: '中',
            perValue: '30'
          }
        }, {
          name: '气象类服务消费能力',
          id: 3,
          type: 'iptv',
          data: {
            value: '300',
            name: '中',
            perValue: '30'
          }
        }, {
          name: '车辆情况',
          id: 4,
          type: 'iptv',
          data: {
            value: '60%',
            name: '有车',
            perValue: '30'
          }
        }, {
          name: '住宅情况',
          id: 5,
          type: 'iptv',
          data: {
            value: '20%',
            name: '5-6w',
            perValue: '30'
          }
        }, {
          name: '互联网行为分布',
          id: 6,
          type: 'iptv',
          data: {
            value: '15%',
            name: '购物',
            perValue: '30'
          }
        }
      ]
    },
    success: true
  })
}
//服务监控-web
const api_action_family_echart = (req, res, next) => {
  const id = req.body.id
  if (id == '0') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '1口之家',
          perValue: '30'
        }, {
          value: '150',
          name: '2口之家',
          perValue: '30'
        }, {
          value: '210',
          name: '3口之家',
          perValue: '30'
        }, {
          value: '200',
          name: '4口之家',
          perValue: '30'
        }, {
          value: '120',
          name: '5口之家',
          perValue: '30'
        }, {
          value: '70',
          name: '其他',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '1') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '高',
          perValue: '30'
        }, {
          value: '310',
          name: '中',
          perValue: '30'
        }, {
          value: '210',
          name: '低',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '2') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '高',
          perValue: '30'
        }, {
          value: '120',
          name: '中',
          perValue: '30'
        }, {
          value: '210',
          name: '低',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '3') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '高',
          perValue: '30'
        }, {
          value: '100',
          name: '中',
          perValue: '30'
        }, {
          value: '190',
          name: '低',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '4') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '有车',
          perValue: '30'
        }, {
          value: '150',
          name: '无车',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '5') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '2-3w',
          perValue: '30'
        }, {
          value: '100',
          name: '3-4w',
          perValue: '30'
        }, {
          value: '100',
          name: '4-5w',
          perValue: '30'
        }, {
          value: '100',
          name: '5-6w',
          perValue: '30'
        }, {
          value: '100',
          name: '6-7w',
          perValue: '30'
        }, {
          value: '100',
          name: '7-8w',
          perValue: '30'
        }, {
          value: '100',
          name: '8-9w',
          perValue: '30'
        }, {
          value: '100',
          name: '9-10w',
          perValue: '30'
        }, {
          value: '100',
          name: '10w以上',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '6') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '生活',
          perValue: '30'
        }, {
          value: '200',
          name: '购物',
          perValue: '30'
        }, {
          value: '300',
          name: '休闲娱乐',
          perValue: '30'
        }, {
          value: '150',
          name: '科技',
          perValue: '30'
        }, {
          value: '210',
          name: '阅读',
          perValue: '30'
        }, {
          value: '230',
          name: '视频',
          perValue: '30'
        }, {
          value: '340',
          name: '游戏',
          perValue: '30'
        }, {
          value: '400',
          name: '教育',
          perValue: '30'
        }, {
          value: '500',
          name: '财经',
          perValue: '30'
        }, {
          value: '180',
          name: '区域',
          perValue: '30'
        }, {
          value: '210',
          name: '体育',
          perValue: '30'
        }, {
          value: '290',
          name: '政治',
          perValue: '30'
        }, {
          value: '420',
          name: '音乐',
          perValue: '30'
        }, {
          value: '310',
          name: '门户',
          perValue: '30'
        }, {
          value: '360',
          name: '其他',
          perValue: '30'
        }
      ],
      "success": true
    })
  }
}

module.exports = {
  api_action_family,
  api_action_family_echart
}
