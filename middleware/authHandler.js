import bcrypt from "bcrypt"

const encryptPassword =  (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password,10);
    next();
}

export default encryptPassword;

