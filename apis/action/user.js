const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 行为洞察 --------------------------------------------
**/

//行为洞察-用户-获取初始数据
const api_action_user = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '人群1',
        id: 0,
        type: 'mobile',
        data: {
          value: '30%',
          name: 'test1'
        }
      }, {
        name: '人群2',
        id: 1,
        type: 'mobile',
        data: {
          value: '50%',
          name: 'test2'
        }
      }, {
        name: '人群3',
        id: 2,
        type: 'mobile',
        data: {
          value: '30%',
          name: 'test3'
        }
      }
    ],
    success: true
  })
}
//服务监控-web
const api_action_user_echart = (req, res, next) => {
  const id = req.body.type
  if (id == '0') {
    res.json({
      "code": 1,
      "data": [
        {
          value: '100',
          name: 'test0_1'
        }, {
          value: '150',
          name: 'test0_2'
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
          name: '18以下'
        }, {
          value: '150',
          name: '18-22岁'
        }, {
          value: '310',
          name: '23-28岁'
        }, {
          value: '410',
          name: '29-34岁'
        }, {
          value: '480',
          name: '35-40岁'
        }, {
          value: '420',
          name: '41-46岁'
        }, {
          value: '360',
          name: '47-52岁'
        }, {
          value: '120',
          name: '52-60岁'
        }, {
          value: '100',
          name: '60岁以上'
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
          name: '黄浦区'
        }, {
          value: '150',
          name: '静安区'
        }, {
          value: '210',
          name: '宝山区'
        }, {
          value: '210',
          name: '闸北区'
        }, {
          value: '210',
          name: '嘉定区'
        }, {
          value: '210',
          name: '崇明区'
        }, {
          value: '210',
          name: '金山区'
        }, {
          value: '210',
          name: '奉贤区'
        }, {
          value: '210',
          name: '南汇区'
        }, {
          value: '210',
          name: '杨浦区'
        }, {
          value: '210',
          name: '静安区'
        }
      ],
      "success": true
    })
  }
}

module.exports = {
  api_action_user,
  api_action_user_echart
}
