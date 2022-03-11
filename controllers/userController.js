import HttpError from "http-errors";
import userModel from '../models/userModel.js';


const register = (req, res, next) => {
    let user = userModel.register(req, res);
    if (typeof user === 'number') {
        next(HttpError(400, { message: 'UPS!! Usuario Existente' }));
    } else {
        res.send(user);
    }
}

const login = (req, res, next) => {
    const _log = userModel.login(req, res);
    if (_log == undefined) {
        next(HttpError(400, { message: 'Usuario no encontrado' }));
    } else {
        res.send(_log);
    }
}


export default {
    register,
    login
}