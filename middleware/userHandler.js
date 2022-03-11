import HttpError from "http-errors";

const validateUserEmail = (req, res, next) => {
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(req.body.username)) {
        // console.log("Nombre de usuario correcto");
        next();
    } else {
        next(HttpError(400, { message: 'Error formato username' }));
    }

}

export default validateUserEmail;