    let ti, newn, h = "0" + 0, m = "0" + 0, s = "0" + 0, flag = 1;
    function start() {
        if (flag == 1) {
            document.getElementById('error').innerHTML = "";
            newn = setInterval(
                function () {
                    document.getElementById('now').innerHTML = h + " : " + m + " : " + s;
                    s++;
                    s = s < 10 ? ("0" + s) : s;
                    if (s > 60) {
                        m++;
                        s = 0;
                        m = m < 10 ? ("0" + m) : m;
                    }
                    if (m > 60) {
                        h++;
                        m = 0;
                        h = h < 10 ? ("0" + h) : h;
                    }
                }, 1000

            );
            flag = 0;
        }
        else {
            document.getElementById('error').innerHTML = "Already Running";
        }
    }
    function stop() {
        if (flag == 1) {
            document.getElementById('error').innerHTML = "Already Stopped";
        }
        else {
            document.getElementById('error').innerHTML = "";
            clearInterval(newn);
            flag = 1;
        }
    }
    function reset() {
        s = 0 + "0";
        h = 0 + "0";
        m = 0 + "0";
        document.getElementById('lapbox').innerHTML = "";
    }
    function lap() {
        const lapdata = document.createElement('p');
        lapdata.innerText = h + ":" + m + ":" + s;
        document.getElementById('lapbox').appendChild(lapdata);
        // console.log(h + ":" + m + ":" + s);
    }
