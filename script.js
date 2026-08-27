let selectedRakhi = "";


/* START */

function startJourney(){

    changeScreen("rakhiSection");

    const music =
    document.getElementById("music");

    music.play().catch(() => {});

}


/* SELECT RAKHI */

function selectRakhi(src){

    selectedRakhi = src;

    document
    .getElementById("selectedRakhi")
    .src = selectedRakhi;

    setTimeout(() => {

        changeScreen("handSection");

    },400);

}


/* TIE RAKHI */

function tieRakhi(){

    const rakhi =
    document.getElementById("selectedRakhi");

    rakhi.classList.add("tie");


    setTimeout(() => {

        changeScreen("sweetSection");

    },2500);

}


/* SWEET */

function feedSweet(){

    const sweet =
    document.querySelector(".sweet");

    sweet.style.transform =
    "scale(0.2) translateY(-250px)";

    setTimeout(() => {

        changeScreen("blessingSection");

    },1200);

}


/* GIFT */

function nextGift(){

    changeScreen("giftSection");

}


/* OPEN GIFT */

function openGift(){

    document
    .getElementById("giftMessage")
    .classList.add("show");


    document
    .getElementById("finalBtn")
    .style.display = "inline-block";

}


/* FINAL */

function finalScreen(){

    changeScreen("finalSection");

}


/* RESTART */

function restartJourney(){

    document
    .getElementById("giftMessage")
    .classList.remove("show");


    document
    .getElementById("finalBtn")
    .style.display = "none";


    document
    .getElementById("selectedRakhi")
    .classList.remove("tie");


    changeScreen("welcome");

}


/* CHANGE SCREEN */

function changeScreen(id){

    const screens =
    document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    document
    .getElementById(id)
    .classList.add("active");

}