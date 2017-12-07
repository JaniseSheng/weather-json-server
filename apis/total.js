const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 整体分布 --------------------------------------------
**/

const queryByDate = () => {
  const num = parseInt(Math.random() * 30) + 1
  return _.times(num, (item) => {
    const curDate = item < 10
      ? `0${item}`
      : item
    return {
      date: `2017-01-${curDate}`,
      value: parseInt(Math.random() * 500) + 100,
      changeValue: parseInt(Math.random() * 500) + 100
    }
  })
}

//整体分布-分终端-获取类型的名字
const api_total_terminal_typenames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '全部',
        id: '0'
      }, {
        name: 'PC',
        id: '1'
      }, {
        name: 'Mobile',
        id: '2'
      }, {
        name: 'Iptv',
        id: '3'
      }
    ],
    success: true
  })
}
//整体分布-分终端
const api_total_terminal = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: {
        values: queryByDate()
      },
      pv: {
        values: queryByDate()
      }
    },
    success: true
  })
}

//整体分布-分场景-获取类型的名字
const api_total_scene_getTypeNames = (req, res, next) => {
  res.json({
    code: 1,
    data: [
      {
        name: '室内',
        id: '0'
      }, {
        name: '室外',
        id: '1'
      }
    ],
    success: true
  })
}
//整体分布-分场景
const api_total_scene = (req, res, next) => {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate()
    },
    success: true
  })
}

module.exports = {
  api_total_terminal_typenames,
  api_total_terminal,
  api_total_scene_getTypeNames,
  api_total_scene
}
