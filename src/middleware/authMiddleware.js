// authMiddleware.js
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Add token verification logic here (e.g., JWT verification)
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
// auth
module.exports = authMiddleware;
