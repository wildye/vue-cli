const axios = require('axios')

// 配置API接口地址
let root = '/api'

// 检测参数类型
function toType (p) {
  return ({}).toString.call(p).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 过滤参数空值
function filterNull (p) {
  for (let key in p) {
    if (p[key] === null) {
      delete p[key]
    }
    if (toType(p[key] === 'string')) {
      p[key] = p[key].trim()
    } else if (toType(p[key]) === 'object' || toType(p[key]) === 'array') {
      p[key] = filterNull(p[key])
    }
  }
  return p
}

// todo: 接口处理函数
function apiAxios (method, url, params, success, failure) {
  params = params ? filterNull(params) : params

  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false,
    validateStatus (status) {
      return status
    }
  })
    .then((res) => {
      // 成功或失败的回调处理视接口而定
      if (res.status === 200) {
        if (success) success(res)
      } else {
        failure ? failure(res) : console.log('Error' + res.data)
      }
    })
    .catch((err) => {
      if (err) {
        console.log('API Error, HTTP Code: ' + err.response.status)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
