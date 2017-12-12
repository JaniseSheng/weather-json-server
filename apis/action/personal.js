const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 行为洞察 --------------------------------------------
**/

//行为洞察-个人-获取初始数据
const api_action_personal = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '性别',
        id: 0,
        type: 'mobile',
        data: {
          value: '30%',
          name: '男',
          perValue: '30'
        }
      }, {
        name: '年龄',
        id: 1,
        type: 'mobile',
        data: {
          value: '50%',
          name: '23-28',
          perValue: '30'
        }
      }, {
        name: '住宅区',
        id: 2,
        type: 'mobile',
        data: {
          value: '30%',
          name: '静安区',
          perValue: '30'
        }
      }, {
        name: '工作区',
        id: 3,
        type: 'mobile',
        data: {
          value: '25%',
          name: '徐汇区',
          perValue: '30'
        }
      }, {
        name: '娱乐区',
        id: 4,
        type: 'mobile',
        data: {
          value: '28%',
          name: '浦东新区',
          perValue: '30'
        }
      }, {
        name: '电信端消费能力',
        id: 5,
        type: 'mobile',
        data: {
          value: '100',
          name: '中',
          perValue: '30'
        }
      }, {
        name: '银联消费能力',
        id: 6,
        type: 'mobile',
        data: {
          value: '120',
          name: '中',
          perValue: '30'
        }
      }, {
        name: '气象类服务消费能力',
        id: 7,
        type: 'mobile',
        data: {
          value: '300',
          name: '中',
          perValue: '30'
        }
      }, {
        name: '车辆情况',
        id: 8,
        type: 'mobile',
        data: {
          value: '60%',
          name: '有车',
          perValue: '30'
        }
      }, {
        name: '住宅情况',
        id: 9,
        type: 'mobile',
        data: {
          value: '20%',
          name: '5-6w',
          perValue: '30'
        }
      }, {
        name: '互联网行为分布',
        id: 10,
        type: 'mobile',
        data: {
          value: '15%',
          name: '购物',
          perValue: '30'
        }
      }
    ],
    success: true
  })
}
//服务监控-web
const api_action_personal_echart = (req, res, next) => {
  const id = req.body.id
  if (id == '0') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: '男',
          perValue: '30'
        }, {
          value: '150',
          name: '女',
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
          name: '18以下',
          perValue: '30'
        }, {
          value: '150',
          name: '18-22岁',
          perValue: '30'
        }, {
          value: '310',
          name: '23-28岁',
          perValue: '30'
        }, {
          value: '410',
          name: '29-34岁',
          perValue: '30'
        }, {
          value: '480',
          name: '35-40岁',
          perValue: '30'
        }, {
          value: '420',
          name: '41-46岁',
          perValue: '30'
        }, {
          value: '360',
          name: '47-52岁',
          perValue: '30'
        }, {
          value: '120',
          name: '52-60岁',
          perValue: '30'
        }, {
          value: '100',
          name: '60岁以上',
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
          name: '黄浦区',
          perValue: '30'
        }, {
          value: '150',
          name: '静安区',
          perValue: '30'
        }, {
          value: '210',
          name: '宝山区',
          perValue: '30'
        }, {
          value: '210',
          name: '闸北区',
          perValue: '30'
        }, {
          value: '210',
          name: '嘉定区',
          perValue: '30'
        }, {
          value: '210',
          name: '崇明区',
          perValue: '30'
        }, {
          value: '210',
          name: '金山区',
          perValue: '30'
        }, {
          value: '210',
          name: '奉贤区',
          perValue: '30'
        }, {
          value: '210',
          name: '南汇区',
          perValue: '30'
        }, {
          value: '210',
          name: '杨浦区',
          perValue: '30'
        }, {
          value: '210',
          name: '静安区',
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
          value: '160',
          name: '黄浦区',
          perValue: '30'
        }, {
          value: '120',
          name: '静安区',
          perValue: '30'
        }, {
          value: '210',
          name: '宝山区',
          perValue: '30'
        }, {
          value: '210',
          name: '闸北区',
          perValue: '30'
        }, {
          value: '100',
          name: '嘉定区',
          perValue: '30'
        }, {
          value: '10',
          name: '崇明区',
          perValue: '30'
        }, {
          value: '20',
          name: '金山区',
          perValue: '30'
        }, {
          value: '210',
          name: '奉贤区',
          perValue: '30'
        }, {
          value: '210',
          name: '南汇区',
          perValue: '30'
        }, {
          value: '210',
          name: '杨浦区',
          perValue: '30'
        }, {
          value: '210',
          name: '静安区',
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
          value: '160',
          name: '黄浦区',
          perValue: '30'
        }, {
          value: '120',
          name: '静安区',
          perValue: '30'
        }, {
          value: '210',
          name: '宝山区',
          perValue: '30'
        }, {
          value: '210',
          name: '闸北区',
          perValue: '30'
        }, {
          value: '160',
          name: '嘉定区',
          perValue: '30'
        }, {
          value: '210',
          name: '崇明区',
          perValue: '30'
        }, {
          value: '20',
          name: '金山区',
          perValue: '30'
        }, {
          value: '310',
          name: '奉贤区',
          perValue: '30'
        }, {
          value: '210',
          name: '南汇区',
          perValue: '30'
        }, {
          value: '10',
          name: '杨浦区',
          perValue: '30'
        }, {
          value: '210',
          name: '静安区',
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
          name: '高',
          perValue: '30'
        }, {
          value: '150',
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
  } else if (id == '6') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '120',
          name: '高',
          perValue: '30'
        }, {
          value: '190',
          name: '中',
          perValue: '30'
        }, {
          value: '120',
          name: '低',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '7') {
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
          value: '110',
          name: '低',
          perValue: '30'
        }
      ],
      "success": true
    })
  } else if (id == '8') {
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
  } else if (id == '9') {
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
  } else if (id == '10') {
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
  api_action_personal,
  api_action_personal_echart
}
