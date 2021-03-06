const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.header("auth-token")
    if(!token) return res.status(400).send('Access Denied')

    try {
        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified
        next()
    }
    catch(err){
        res.send('Error')
    }
}

module.exports = verifyToken