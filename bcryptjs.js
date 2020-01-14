//密码加密插件
const bcrypt = require('bcryptjs')

//对密码进行加密
async function hasPassword(plaintest) {
    
    const user = {
        name:'pxp',
        email:'921423070@qq.com',
        password:123456789
    }

    const salt = await bcrypt.genSalt(10);
    //对用户密码进行加密
    user.password = await bcrypt.hash(plaintest,salt)
    console.log(salt);

    console.log( user);
}

// hasPassword('123456789')

//对用户密码进行解密
async function comparepassword (plaintest,hash) {
    const isMatch = await bcrypt.compare(plaintest,hash);

    if(isMatch){
        console.log('Match');
    }else{
        console.log('Not Match')
    }
}

comparepassword('123456789','$2a$10$4yKh1mpeYhgwUMBfPn2tTecSyHAiYd85Db3/C/WlTZHb9u.PQv/0m')


