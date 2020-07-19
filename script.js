function codeBtn() {
    let aboutText = document.getElementById("about-text");
    aboutText.style.opacity = 100;
}

function scrollToBottom() {
    window.scrollTo(0,document.body.scrollHeight);
}

let barJS = document.getElementById("full-bar-js");
let barNode = document.getElementById("full-bar-node");
let barHTML = document.getElementById("full-bar-html");
let barCSS = document.getElementById("full-bar-css");
let barVue = document.getElementById("full-bar-vue");
let barReact = document.getElementById("full-bar-react");
let barJava = document.getElementById("full-bar-java");
let barPython = document.getElementById("full-bar-python");
let barPostgres = document.getElementById("full-bar-postgres");
let barMongo = document.getElementById("full-bar-mongo");
let barGit = document.getElementById("full-bar-git");
let barLinux = document.getElementById("full-bar-linux");
let scrolled = false;

let card = document.getElementById("card-container");
// Check if element is displayed
function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // or $(window).height()
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) // or $(window).width() 
    );
}


window.onscroll = function() {
    if(!scrolled) {
        if(this.isElementInViewport(barJS)) {
            barJS.style.width = "85%";
        }
        if(this.isElementInViewport(barNode)) {
            barNode.style.width = "80%";
        }

        if(this.isElementInViewport(barHTML)) {
            barHTML.style.width = "90%";
        }

        if(this.isElementInViewport(barCSS)) {
            barCSS.style.width = "90%";
        }

        if(this.isElementInViewport(barVue)) {
            barVue.style.width = "75%";
        }

        if(this.isElementInViewport(barReact)) {
            barReact.style.width = "50%";
        }

        if(this.isElementInViewport(barJava)) {
            barJava.style.width = "75%";
        }

        if(this.isElementInViewport(barPython)) {
            barPython.style.width = "60%";
        }

        if(this.isElementInViewport(barPostgres)) {
            barPostgres.style.width = "80%";
        }

        if(this.isElementInViewport(barMongo)) {
            barMongo.style.width = "50%";
        }

        if(this.isElementInViewport(barGit)) {
            barGit.style.width = "60%";
        }

        if(this.isElementInViewport(barLinux)) {
            barLinux.style.width = "90%";
        }

        if(barJS.style.width !== "" &&
        barNode.style.width !== "" &&
        barHTML.style.width !== "" &&
        barCSS.style.width !== "" &&
        barVue.style.width !== "" &&
        barReact.style.width !== "" &&
        barJava.style.width !== "" &&
        barPython.style.width !== "" &&
        barPostgres.style.width !== "" &&
        barMongo.style.width !== "" &&
        barGit.style.width !== "" &&
        barLinux.style.width !== "") {
            scrolled = true;
        }
       
    }


};
