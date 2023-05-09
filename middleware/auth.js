const jwt = require('jsonwebtoken');
const jwt_code = 'kajdffasdlfjl'
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, jwt_code);
        req.user = verified;
        console.log(verified);
        next();
    }catch(err) {
        res.status(400).send('Invalid Token');
    }
}

module.exports = verifyToken;