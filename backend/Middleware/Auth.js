const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    // Check for authorization existance
    if (!authorization || !authorization.startsWith('Bearer'))
        return res.status(401).json({ msg: 'No token, authorization denied' });
    // Get token from header
    const token = authorization.split(' ')[1];
    if (!token)
        return res.status(401).json({ msg: 'No token, authorization denied' });
    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);
        req.user = _id;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = authMiddleware;