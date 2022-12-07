function data1() {
    let fb = document.getElementsByClassName("fb");
    fb[1].classList.remove("cur");
    fb[0].classList.add("cur")
    document.getElementById("1").classList.remove("hide")
    document.getElementById("2").classList.add("hide")
} function data2() {
    let fb = document.getElementsByClassName("fb");
    fb[0].classList.remove("cur");
    fb[1].classList.add("cur")
    document.getElementById("2").classList.remove("hide")
    document.getElementById("1").classList.add("hide")
}

//ginning
function ginning1() {
    let kapas = parseFloat(document.getElementById('kapas1').value)
    let expenses = parseFloat(document.getElementById('expenses1').value)
    let cottonseed = parseFloat(document.getElementById('cottonseed1').value)
    let outturn = parseFloat(document.getElementById('outturn1').value)
    let shortage = parseFloat(document.getElementById('shortage1').value)
    let ans = kapas + expenses + cottonseed + outturn + shortage
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('cost1').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cost1').innerHTML = ans2
    }
}
function ginning2() {
    let cost = parseFloat(document.getElementById('cost2').value)
    let expenses = parseFloat(document.getElementById('expenses2').value)
    let cottonseed = parseFloat(document.getElementById('cottonseed2').value)
    let outturn = parseFloat(document.getElementById('outturn2').value)
    let shortage = parseFloat(document.getElementById('shortage2').value)
    let ans = cost + expenses + cottonseed + outturn + shortage
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('kapas2').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('kapas2').innerHTML = ans2
    }
}


//oil
function oil1() {
    if (document.getElementById('pure1').checked) {
        let z = document.getElementsByClassName('1')
        z[0].classList.remove('hide')
        z[1].classList.remove('hide')
        z[2].classList.remove('hide')
        document.getElementsByClassName('11')[0].classList.add('hide')
    } else {
        let z = document.getElementsByClassName('1')
        z[0].classList.add('hide')
        z[1].classList.add('hide')
        z[2].classList.add('hide')
        document.getElementsByClassName('11')[0].classList.remove('hide')
    }
    oil4();
}
function oil2() {
    if (document.getElementById('pure2').checked) {
        let z = document.getElementsByClassName('2')
        z[0].classList.remove('hide')
        z[1].classList.remove('hide')
        z[2].classList.remove('hide')
        document.getElementsByClassName('22')[0].classList.add('hide')
    } else {
        let z = document.getElementsByClassName('2')
        z[0].classList.add('hide')
        z[1].classList.add('hide')
        z[2].classList.add('hide')
        document.getElementsByClassName('22')[0].classList.remove('hide')
    }
    oil5()
}
function oil3() {
    if (document.getElementById('side-menu').checked) {
        document.getElementById('sw1').classList.add('hide')
        document.getElementById('sw2').classList.add('hide')
    } else {
        setTimeout(() => { document.getElementById('sw1').classList.remove('hide') }, 400)
        setTimeout(() => { document.getElementById('sw2').classList.remove('hide') }, 400)

    }
}
function oil4() {
    let cottonseed = parseFloat(document.getElementById('cottonseed1').value)
    let hullrate = parseFloat(document.getElementById('hullrate1').value)
    let hullqty = parseFloat(document.getElementById('hullqty1').value)
    let expenses = parseFloat(document.getElementById('expenses1').value)
    let oilrate = parseFloat(document.getElementById('oilrate1').value)
    let oil = parseFloat(document.getElementById('oil1').value)
    let oilcake = parseFloat(document.getElementById('oilcake1').value)
    let shortage = parseFloat(document.getElementById('shortage1').value)
    let pakingsize = parseFloat(document.getElementById('pakingsize1').value)
    let ans
    if (document.getElementById('pure1').checked) {
        ans = cottonseed + hullrate + hullqty + expenses + oilrate + oil + pakingsize + shortage
    } else {
        ans = cottonseed + expenses + oilrate + oil + pakingsize + oilcake;
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('cost1').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cost1').innerHTML = ans2
    }
}
function oil5() {
    let cost = parseFloat(document.getElementById('cost2').value)
    let hullrate = parseFloat(document.getElementById('hullrate2').value)
    let hullqty = parseFloat(document.getElementById('hullqty2').value)
    let expenses = parseFloat(document.getElementById('expenses2').value)
    let oilrate = parseFloat(document.getElementById('oilrate2').value)
    let oil = parseFloat(document.getElementById('oil2').value)
    let oilcake = parseFloat(document.getElementById('oilcake2').value)
    let shortage = parseFloat(document.getElementById('shortage2').value)
    let pakingsize = parseFloat(document.getElementById('pakingsize2').value)
    let ans
    if (document.getElementById('pure2').checked) {
        ans = cost + hullrate + hullqty + expenses + oilrate + oil + pakingsize + shortage
    } else {
        ans = cost + expenses + oilrate + oil + pakingsize + oilcake;
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('cottonseed2').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cottonseed2').innerHTML = ans2
    }
}

//Export
function export1() {
    if (document.getElementById('cent').checked) {
        document.getElementById('lable').innerHTML = "USD/Kg"
        document.getElementById('lable2').innerHTML = "USD/Kg"
    } else {
        document.getElementById('lable').innerHTML = "Cents/LB"
        document.getElementById('lable2').innerHTML = "Cents/LB"
    }
}
function export2() {
    if (document.getElementById('side-menu').checked) {
        document.getElementById('switch').classList.add('hide')
    } else {
        setTimeout(() => { document.getElementById('switch').classList.remove('hide') }, 400)

    }
}
function export3() {
    let cottonrate = parseFloat(document.getElementById('cottonrate1').value)
    let expenses = parseFloat(document.getElementById('expenses1').value)
    let exchangerate = parseFloat(document.getElementById('exchangerate1').value)
    let ans = cottonrate + expenses + exchangerate
    let ans3 = cottonrate + expenses + exchangerate
    let ans2 = "<b>" + ans + "</b>"
    let ans4 = "<b>" + ans3 + "</b>"
    if (0) {
        document.getElementById('cents').innerHTML = "<b>Invalid</b>"
        document.getElementById('usd').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('cents').innerHTML = ans2
        document.getElementById('usd').innerHTML = ans4
    }
}
function export4() {
    let exportrate = parseFloat(document.getElementById('exportrate2').value)
    let expenses = parseFloat(document.getElementById('expenses2').value)
    let exchangerate = parseFloat(document.getElementById('exchangerate2').value)
    let ans
    if (document.getElementById('cent').checked) {
        ans = exportrate + expenses + exchangerate
    } else {
        ans = exportrate + expenses + exchangerate
    }
    let ans2 = "<b>" + ans + "</b>"
    if (0) {
        document.getElementById('realisation').innerHTML = "<b>Invalid</b>"
    } else {
        document.getElementById('realisation').innerHTML = ans2
    }
}