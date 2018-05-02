import axios from '../utils/axios';

var tabService = {
    getUserInfo: function () {
        return axios.get("/api/common/getUserInfo");
    }
};

module.exports = tabService;