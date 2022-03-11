
const addTimestamp = (req, res, next) => {
    req.body.timestamp = new Date();
    next();
};

export default addTimestamp;