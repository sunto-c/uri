/**
 * 获取url参数值
 * @param  {string} name 要获取的key
 * @param  {string} url  url,缺省值为当前url
 * @return {string}      要获取的value
 */
exports.getParameterByName = function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

exports.setParameter = function(key, value, url) {
  if (!url) url = window.location.href;

  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = url.indexOf('?') !== -1 ? "&" : "?";
  if (url.match(re)) {
    return url.replace(re, '$1' + key + "=" + value + '$2');
  } else {
    return url + separator + key + "=" + value;
  }
}