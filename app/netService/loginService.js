import axios from '../utils/axios';

var loginService = {
    login: function (loginInfo) {
        return axios.post("/api/login/login", loginInfo);
    }
};

module.exports = loginService;