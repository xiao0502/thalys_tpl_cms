/*
 * @Author: 肖锦
 * @Date: 2021-06-07 10:14:35
 * @LastEditTime: 2021-06-07 10:39:09
 * @Description: file content
 * @LastEditors: 肖锦
 */
import cloneDeep from 'lodash/cloneDeep';
const dayjs = require('dayjs');

export default {
    install(Vue) {
        Vue.prototype.cloneDeep = cloneDeep;
        Vue.prototype.code = 10000;
        Vue.prototype.dayjs = dayjs;
        Vue.prototype.$Message.config({
            duration: 5,
        });
    },
};
