/**
 * 工具函数
 */
exports = module.exports = {
    /**
     * @Description         将base64字符串转换为二进制数据
     * @param {string} str  base64字符串
     * @returns {blob}      二进制数据
     */
    base64toBlob(str) {
        if ('string' !== typeof str || str.search(/:(.*?);/) === -1) {
            return str;
        }
        let arr = str.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
    },

    /**
     * @Description     根据id获取对象数组中的对象
     * @param {array}   arr
     * @param {string}  id
     * @param {string}  name
     * @returns {object} item
     */
    getItemById(arr, id, name) {
        let item = {};
        if (Array.isArray(arr)) {
            arr.some((v) => {
                if (v[name] === id) {
                    item = v;
                    return true;
                }
            });
        }
        return item;
    },

    /**
     * @Description             根据'a.b.c'字符串来给o.a.b.c赋值
     * @param {object} o        要赋值的对象
     * @param {string} name     属性名字符串
     * @param {any} val         值
     */
    setValByName(o, name, val) {
        let names = name.split('.');
        let len = names.length;
        let oVal = o;
        for (let i = 0; i < len; i++) {
            if (i === len - 1) {
                oVal[names[i]] = val;
            } else {
                oVal = oVal[names[i]];
            }
        }
    },

    /**
     * @Description     对arr中的每个对象的name属性求和
     * @param {array}   arr
     * @param {string}  name
     * @returns
     */
    sumItems(arr, name) {
        let sum = 0;
        if (Array.isArray(arr)) {
            arr.forEach((v) => {
                sum += +v[name];
            });
        }
        return sum;
    },

    /**
     * @Description     数组求和
     * @param {array}   arr
     * @returns
     */
    sumArray(arr) {
        let sum = 0;
        if (Array.isArray(arr)) {
            arr.forEach((v) => {
                sum += +v;
            });
        }
        return sum;
    },

    /**
     * @Description             格式化url参数
     * @param {string} str      url
     * @returns {object}        get请求参数列表
     */
    getQueryObj(str) {
        str = str.substring(str.indexOf("?") + 1, str.lastIndexOf("#") > -1 ? str.lastIndexOf("#") : str.length);
        return JSON.parse(('{"' + str + '"}').replace(/&/g, '","').replace(/=/g, '":"'));
    },
};