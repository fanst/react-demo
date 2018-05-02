/*
 * @Author: xujie 
 * @Date: 2018-04-27 17:06:16 
 * @Last Modified by: xujie
 * @Last Modified time: 2018-04-27 17:42:55
 */

import {config} from '../config';

var commonHelper = {
    getApiConfig: function (key) {
        return config.apiConfig[key];
    },
}

module.exports=commonHelper;