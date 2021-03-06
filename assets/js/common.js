/**
 * 字符串截取
 * @param str
 * @param num
 */
function splitStr(str,length){
    if(str == undefined) {
        return '';
    }
    if(str.length > length){
        return str.substring(0,length)+'..';
    } else {
        return str;
    }

}

/**
 * 时间戳装换日期格式
 * @param timestamp         时间戳
 * @param format            显示的格式 ('Y/M/D' 或 'Y年M月D日')
 * @returns {string}
 */
function timestampToTime(timestamp,format = 'Y-M-D h:m:s') {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var datetime  = {};
    datetime.Y = date.getFullYear();
    datetime.M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    datetime.D = date.getDate();
    datetime.h = date.getHours();
    datetime.m = date.getMinutes();
    datetime.s = date.getSeconds();
    return format.replace(/(\w{1})/g,function(){
        var args = arguments;
        return datetime[args[1]];
    });
}

export default{
    splitStr,
    timestampToTime,
}