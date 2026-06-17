const jwt = require('jsonwebtoken')

const Token = (user) =>{

    return jwt.sign({ Email : user.Email , Fullname:user.Fullname } , process.env.JWT_KEY)
}

module.exports = Token;