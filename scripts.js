//task 1
document.getElementById("CSS-BUT").addEventListener("click", function () {
    document.getElementById("RECT").style.display = "none";
});
document.getElementById("JS-BUT").addEventListener("click", function () {
    document.getElementById("RECT").remove();
});
document.getElementById("CSS-JS-BUT").addEventListener("click", function () {
    document.getElementById("RECT").classList.add("hidden");
});

//task 2
let rect = document.getElementById("RECT2");
document.getElementById("BUT2").addEventListener("click", function () {
    if (rect.style.visibility === "hidden") {
        rect.style.visibility = "visible"
        this.innerText = "Remove";
    } else {
        rect.style.visibility = "hidden"
        this.innerText = "Create";
    }
});

//task 3
let rects = document.getElementsByClassName("rects");
document.getElementById("BUT3").addEventListener("click", function () {
    if (rects[0].style.display === "none") {
        for (let i = 0; i < rects.length; i++) {
            rects[i].style.display = "block"
        }
        this.innerText = "Remove";
    } else {
        for (let i = 0; i < rects.length; i++) {
            rects[i].style.display = "none"
        }
        this.innerText = "Create";
    }
});

//task4
document.getElementById("BUT4").addEventListener("click", function () {
    let chosenRect = document.getElementById(document.getElementById("INPUT1").value)
    if (chosenRect.style.display === "none") {
        chosenRect.style.display = "flex"
    } else {
        chosenRect.style.display = "none"
    }
});

//task5
let yellowRect = document.getElementById("YEL-RECT");
yellowRect.addEventListener("click", myFunction)

function myFunction() {
    alert("Hello!!! Привет!!! Bonjour!!!")
    yellowRect.removeEventListener("click", myFunction)
    yellowRect.addEventListener("click", function () {
        yellowRect.style.display = "none";
    });
}

//task6
let redRect = document.getElementById("RED-RECT");
document.getElementById("BUT6").addEventListener("mouseover", function () {
    redRect.style.display = "block";
});
document.getElementById("BUT6").addEventListener("mouseout", function () {
    redRect.style.display = "none";
});

//task7
let greenRect = document.getElementById("GREEN-RECT");
document.getElementById("INP-GREEN").addEventListener("focus", function () {
    greenRect.style.display = "block";
});
document.getElementById("INP-GREEN").addEventListener("input", function () {
    greenRect.style.display = "none";
});

//task8
let image = document.getElementById("IMG");
document.getElementById("BUT8").addEventListener("click", function () {
    image.src = document.getElementById("INP-EIGHTH").value;
});

//task9
document.getElementById("BUT9").addEventListener("click", function () {
    const target = document.getElementById("TARGET");
    let col = document.getElementById("TEXT-AR").value.split("\n");
    for (let i = 0; i < col.length; i++) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", col[i]);
        target.appendChild(newImg);
    }
});
//task10
document.addEventListener("mousemove", function (e){
    document.getElementById("COORD").innerHTML = `X: ${e.clientX}` + ` Y: ${e.clientY}`;
});
//task11
let language = navigator.language;
document.getElementById("LANG").innerHTML = `Language: ${language}`;

//task12
let pos = "";
navigator.geolocation.getCurrentPosition(function (position) {
    setPos(position.coords.latitude, position.coords.longitude)
});
function setPos(x, y) {
    document.getElementById("Location").innerHTML = `Location : W:${x}, L:${y}`;
}

//task13
document.getElementById("LS").addEventListener("input", function (){
    localStorage.setItem("localstorage", document.getElementById("LS").innerHTML);
});

document.getElementById("COOK").addEventListener("input", function (){
    document.cookie = `Cookie=${document.getElementById("COOK").innerHTML}`
});

document.getElementById("SS").addEventListener("input", function (){
    sessionStorage.setItem("sessionstorage", document.getElementById("SS").innerHTML);
});

onload = (function (){
    document.getElementById("LS").innerHTML = localStorage.getItem("localstorage");
    let dataForCookie="";
    let ArrDataForCookie = document.cookie.split(";");
    for(let i=0; i < ArrDataForCookie.length; i++){
        if(ArrDataForCookie[i].includes("Cookie")){
            dataForCookie = ArrDataForCookie[i].split("=")[1];
        }
    }
    document.getElementById("COOK").innerHTML = dataForCookie;
    document.getElementById("SS").innerHTML = sessionStorage.getItem("sessionstorage");

});
//task14
document.addEventListener("scroll", function (){
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if(window.pageYOffset + innerHeight=== scrollHeight){
        document.getElementById("BUT14").style.display = "block";
    }else{
        document.getElementById("BUT14").style.display = "none";
    }
    document.getElementById("BUT14").addEventListener("click", function (){
       document.getElementById("TOP-POS").scrollIntoView({behavior: 'smooth'});
    });
});

//task15
function bigAlert(){
    alert("It`s a large box!");
}
document.getElementById("LBOX").addEventListener("click", bigAlert);
document.getElementById("SBOX").addEventListener("click", function (){
    alert("It`s a small box!");
    event.stopPropagation();
});

//task16
document.getElementById("STOP-BUT").addEventListener("click", function (){
    document.getElementById("STOP-S").style.display = "block";
    document.body.style.overflow= "hidden"
});
document.getElementById("STOP-S").addEventListener("click", function (){
    document.getElementById("STOP-S").style.display = "none";
    document.body.style.overflow= "visible"
});
//task17
document.getElementsByTagName("form")[0].setAttribute("onsubmit", "return false;");

//task18
let dropArea = document.getElementById("LB18");
function uploaded (){
    dropArea.style.backgroundColor = "#1eff80";
    dropArea.style.border = "10px dashed red";
    dropArea.style.boxShadow =  "0 0 10px 10px #e50000";

}
//
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
})
function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}
//

document.getElementById("INP-18").addEventListener("change", uploaded);
dropArea.addEventListener("dragenter", dragOverHandler);
dropArea.addEventListener("dragover",dragOverHandler);
dropArea.addEventListener("dragleave",dragOverHandlerLeave);
dropArea.addEventListener("drop",uploaded);

function dragOverHandler(){
    dropArea.style.backgroundColor = "yellow";
}
function dragOverHandlerLeave(){
    dropArea.style.backgroundColor = "#4fa5ff"
}

