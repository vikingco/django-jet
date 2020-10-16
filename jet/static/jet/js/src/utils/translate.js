module.exports = function(str) {
    if (window.gettext == undefined) {
        return str;
    }
    return window.gettext(str);
};
