function convertSecond( second ) {
    var s = second %60;
    var m = (second % 60).toFixed(0);
    var h = (second / 3600).toFixed(0);

    var hDisplay = h >= 1 ? h + (h == 1 ? " godzina, " : " godzin, ") : "";
    var mDisplay = m >= 1 && m <60 ? m + (m == 1 ? " minuta, " : " minuty ") : "";
    var sDisplay = s >= 1 && s <60 ? s + (s == 1 ? " sekunda" : " sekundy") : "";

    return hDisplay + mDisplay + sDisplay;

}

module.exports = {
    converSecond : convertSecond
}