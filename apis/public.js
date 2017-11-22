const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 舆情分析-流量监控 --------------------------------------------
**/

const queryByDate = () => {
  const num = parseInt(Math.random() * 30) + 1
  return _.times(num, (item) => {
    const curDate = item < 10
      ? `0${item}`
      : item
    return {
      date: `2017-01-${curDate}`,
      value_uv: parseInt(Math.random() * 500) + 100,
      value_pv: parseInt(Math.random() * 500) + 100
    }
  })
}
const queryByHot = () => {
  const num = 5
  return _.times(num, (item) => {
    return {
      value: parseInt(Math.random() * 500) + 100,
      name: faker.random.word()
    }
  })
}

//舆情分析-流量监控-获取类型的名字
const api_public_flow_getTypeNames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '全部',
        id: 0
      }, {
        name: '新闻',
        id: 1
      }, {
        name: '微博',
        id: 2
      }, {
        name: '公众号',
        id: 3
      }
    ],
    success: true
  })
}

//舆情分析-流量监控
const api_public_flow = (req, res, next) => {
  const id = req.body.type
  if (id == '0') {
    res.json({
      code: 1,
      data: [
        {
          name: '全部（新闻+微博+公众号）',
          values: queryByDate()
        }, {
          name: '全部（新闻）',
          values: queryByDate()
        }, {
          name: '全部（微博）',
          values: queryByDate()
        }, {
          name: '全部（公众号）',
          values: queryByDate()
        }
      ],
      success: true
    })
  } else if (id == '1') {
    res.json({
      code: 1,
      data: [
        {
          name: '新闻1',
          values: queryByDate()
        }, {
          name: '新闻2',
          values: queryByDate()
        }, {
          name: '新闻3',
          values: queryByDate()
        }
      ],
      success: true
    })
  } else if (id == '2') {
    res.json({
      code: 1,
      data: [
        {
          name: '微博1',
          values: queryByDate()
        }, {
          name: '微博2',
          values: queryByDate()
        }, {
          name: '微博3',
          values: queryByDate()
        }
      ],
      success: true
    })
  } else if (id == '3') {
    res.json({
      code: 1,
      data: [
        {
          name: '公众号1',
          values: queryByDate()
        }, {
          name: '公众号2',
          values: queryByDate()
        }, {
          name: '公众号3',
          values: queryByDate()
        }
      ],
      success: true
    })
  }
}

//舆情分析-热点热词-获取类型的名字
const api_public_hot_getTypeNames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '全部',
        id: 0
      }, {
        name: '新闻',
        id: 1
      }, {
        name: '微博',
        id: 2
      }, {
        name: '公众号',
        id: 3
      }
    ],
    success: true
  })
}
//整体分布-分场景
const api_public_hot = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '全部',
        id: 0,
        values: queryByHot()
      }, {
        name: '新闻',
        id: 1,
        values: queryByHot()
      }, {
        name: '微博',
        id: 2,
        values: queryByHot()
      }, {
        name: '公众号',
        id: 3,
        values: queryByHot()
      }
    ],
    success: true
  })
}

module.exports = {
  api_public_flow_getTypeNames,
  api_public_flow,
  api_public_hot_getTypeNames,
  api_public_hot
}
