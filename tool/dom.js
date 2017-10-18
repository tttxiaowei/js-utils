/**
 * dom函数
 */
exports = module.exports = {
    /**
     * 根据字符串创建dom
     * 
     * @param {string} str  html字符串
     * @returns {object}    生成的dom
     */
    createDom(str) {
        if ('string' !== typeof str) {
            return str;
        }
        let div = document.createElement("div");
        div.innerHTML = str;
        return div.childNodes[0];
    },


    /**
     * 压缩图片
     * 
     * @param {object} img          image元素
     * @param {number} theW         生成图片宽
     * @param {number} theH         生成图片高
     * @param {boolean} notRotate   图片是否旋转
     * @param {number} quality      图片质量
     * @returns {string} base64str  base64字符串
     */
    compressImg(img, theW, theH, notRotate, quality) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        let base64str = '';
        if (!notRotate && img.naturalWidth < img.naturalHeight) {     //旋转90度
            ctx.save();//保存状态
            canvas.width = theH;
            canvas.height = theH;
            ctx.translate(0, 0);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(img,
                0,//sourceX,
                0,//sourceY,
                img.naturalWidth,//sourceWidth,
                img.naturalHeight,//sourceHeight,
                0,//destX,
                -theH,//destY,
                theH,//destWidth,
                theH//destHeight
            );
            ctx.restore();//恢复状态
        } else {
            canvas.width = theW;
            canvas.height = theH;
            ctx.drawImage(img,
                0,//sourceX,
                0,//sourceY,
                img.naturalWidth,//sourceWidth,
                img.naturalHeight,//sourceHeight,
                0,//destX,
                0,//destY,
                theW,//destWidth,
                theH//destHeight
            );
        }
        //--获取base64字符串及canvas对象传给success函数。
        if (quality) {
            base64str = canvas.toDataURL("image/webp", quality);
        } else {
            base64str = canvas.toDataURL("image/png");
        }
        return base64str;
        // return this.dataURLtoBlob(base64str);
    },

    /**
     * 复制到剪切板
     * 
     * @param {string} str 要复制到剪切板的字符串
     * @returns
     */
    copyToClipboard(str) {
        if ('string' !== typeof str) {
            return str;
        }
        let inputText = this.createDom('<input type="textarea" value="' + str + '"/>');
        document.querySelector('body').appendChild(inputText);
        let currentFocus = document.activeElement;
        inputText.focus();
        inputText.setSelectionRange(0, inputText.value.length);
        document.execCommand('copy', true);
        currentFocus.focus();
        inputText.parentNode.removeChild(inputText);
        return true;
    },

    /**
     * 下载文件
     * 
     * @param {string} url      //下载url
     * @param {string} name     //重命名下载文件
     */
    downloadFile(url, name) {
        let oEl = document.createElement('a');
        oEl.setAttribute('href', url)
        if (name) {
            oEl.setAttribute('download', name)
        }
        oEl.click();
    },

}