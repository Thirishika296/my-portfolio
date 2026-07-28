// ===============================
// Hamburger Menu
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
// ===============================
// Typing Animation
// ===============================

const typingText = document.querySelector(".hero h3");

const text = "Aspiring Java Full Stack Developer";

let charIndex = 0;


function typingEffect(){

    if(charIndex < text.length){

        typingText.innerHTML += text.charAt(charIndex);

        charIndex++;

        setTimeout(typingEffect,100);

    }

}


window.addEventListener("load",()=>{

    typingText.innerHTML="";

    typingEffect();

});




// ===============================
// Dark Mode Toggle
// ===============================


const darkBtn = document.getElementById("darkBtn");


darkBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML="☀️";

    }

    else{

        darkBtn.innerHTML="🌙";

    }


});






// ===============================
// Smooth Scrolling
// ===============================


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        let target = document.querySelector(
            link.getAttribute("href")
        );


        target.scrollIntoView({

            behavior:"smooth"

        });


    });


});






// ===============================
// Scroll Reveal Animation
// ===============================


const cards = document.querySelectorAll(".card");


cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition="0.6s ease";

});



window.addEventListener("scroll",()=>{


    cards.forEach(card=>{


        let position = card.getBoundingClientRect().top;


        let screenHeight = window.innerHeight;



        if(position < screenHeight - 100){


            card.style.opacity="1";

            card.style.transform="translateY(0)";


        }


    });


});






// ===============================
// Scroll To Top Button
// ===============================


const topButton = document.createElement("button");


topButton.innerHTML="⬆";


topButton.style.position="fixed";

topButton.style.right="25px";

topButton.style.bottom="25px";

topButton.style.width="45px";

topButton.style.height="45px";

topButton.style.borderRadius="50%";

topButton.style.border="none";

topButton.style.background="#2563EB";

topButton.style.color="white";

topButton.style.fontSize="20px";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.zIndex="999";


document.body.appendChild(topButton);




window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }


});




topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});