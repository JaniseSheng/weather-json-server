const _ = require('lodash');
const faker = require('faker');
/**
* -------------------------------------------- 整体分布 --------------------------------------------
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

//整体分布-分终端
const api_total_terminal = (req, res, next)=> {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
    },
    success: true
  })
}

//整体分布-分场景
const api_total_scene = (req, res, next)=> {
  res.json({
    code: 1,
    data: {
      uv: queryByDate(),
      pv: queryByDate(),
    },
    success: true
  })
}

module.exports = {
  api_total_terminal: api_total_terminal,
  api_total_scene: api_total_scene
}
