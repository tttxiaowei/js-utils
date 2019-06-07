/**
 * 校验函数
 */
exports = module.exports = {
    /**
     * 判断是否为正数
     * @param {string} str  纯数字字符串
     * @returns {boolean}   true/false
     */
    isPositiveNumber(str) {
        return /^[0-9]*[1-9][0-9]*$/.test(str) || /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(str);
    },

    /**
     * 判断是否为正整数
     * @param {string} str  纯数字字符串
     * @returns {boolean}   true/false
     */
    isPositiveInt(str) {
        return /^[0-9]*[1-9][0-9]*$/.test(str);
    },

    /**
     * 判断是否为整数
     * @param {string} str  纯数字字符串
     * @returns {boolean}   true/false
     */
    isInt(str) {
        return /^-?\d+$/.test(str);
    },

    /**
     * 判断是否为浮点数
     * @param {string} str  纯数字字符串
     * @returns {boolean}   true/false
     */
    isFloat(str) {
        return /^(-?\d+)(\.\d+)?$/.test(str);
    },

    /**
     * 判断是否为ipv4
     * @param {string} str  字符串
     * @returns {boolean}   true/false
     */
    isIPV4(str) {
        return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(str);
    },

    /**
     * @Description:        判断是否为原生函数
     * @param {Function}    Ctor
     * @return {Boolean}    是否为原生函数
     */
    isNative(Ctor) {
        return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
    }
};