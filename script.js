
let divRef = document.querySelector("div");

let buttonRef = document.getElementById("aqua");

// set up an onclick function for buttonRef
buttonRef.onclick = function() {
        divRef.style.backgroundColor = "aqua";
        divRef.innerHTML = "aqua";

}

let buttonRef2 = document.getElementById("teal")

buttonRef2.onclick = function() {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";

}

let buttonRef3 = document.getElementById("pink")

buttonRef3.onclick = function() {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";

}


let buttonRef4 = document.getElementById("purple")

buttonRef4.onclick = function() {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";

}

let buttonRef5 = document.getElementById("colorless")

buttonRef5.onclick = function() {
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";

}
