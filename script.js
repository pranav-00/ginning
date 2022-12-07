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