//对象加密插件
const jwt = require('jwt-simple');

//id生成插件
const uuid = require('uuid')

//配置文件
const config = require('config');

//被加密的对象
const payload = {id:uuid.v4(),name:'pxp'};

//将对象进行加密处理
function getToken(payload) {
    
    const token = jwt.encode(payload,config.get('jwtSecret'));

    return {token};
}

//将对象进行解密
function validateToken(token) {
    const decoded = jwt.decode(token,config.get('jwtSecret'));

    return decoded;
}

// console.log(getToken(payload)) //查看加密结果

console.log(validateToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIyZjg1NTNhLTBlNzQtNDhhNS1iOTM4LWViZDViNTgxZGVjMCIsIm5hbWUiOiJweHAifQ.E1wJaoFEdCMcKt1KsFrjwlxF-SvBK2n4q9BJproblKs'))//查看解密结果