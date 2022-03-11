import user from '../data/user.js';


class UserModel {

    register(req, res) {
        let _newReg = user.findIndex(element => element.username == req.body.username);
        if (_newReg == -1) {
            user.push(req.body);
            return req.body;
        } else {
            return _newReg;
        }
    }

    login(req, res) {
        return user.find(element => element.username == req.body.username);
    }


}


export default new UserModel()