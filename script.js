// ==========================================================================
// 1. CHECK IF USER RETURNED TO A SECTION
// ==========================================================================

window.addEventListener("DOMContentLoaded", () => {

    const welcome = document.getElementById("welcome");
    const msite = document.getElementById("msite");

    // If URL contains #modules, skip Welcome Screen
    if (window.location.hash === "#modules") {

        if (welcome) {
            welcome.style.display = "none";
        }

        if (msite) {
            msite.style.display = "block";
        }

        // Start typewriter
        startTypewriter();
    }

});


// ==========================================================================
// 2. SYSTEM TERMINAL TRANSITION ENGINE
// ==========================================================================

function goNext() {

    const welcome = document.getElementById("welcome");
    const msite = document.getElementById("msite");

    if (!welcome || !msite) return;

    welcome.style.transition =
        "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease";

    welcome.style.transform = "translateY(-50px)";
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";
        msite.style.display = "block";

        startTypewriter();

    }, 600);

}


// ==========================================================================
// 3. SEAMLESS LOOPING TYPEWRITER ENGINE
// ==========================================================================

const skillsMatrix = [
    "Exploring Digital Fabrication 🛠",
    "Computer Science Student 👩‍💻",
    "Aspiring Java Developer ☕"
];

let matrixIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typeDelay = 100;
let typewriterStarted = false;


function startTypewriter() {

    if (typewriterStarted) return;

    typewriterStarted = true;

    function type() {

        const targetElement = document.getElementById("texthello");

        if (!targetElement) return;

        const currentText = skillsMatrix[matrixIdx];

        if (!isDeleting) {

            targetElement.textContent =
                currentText.substring(0, charIdx + 1);

            charIdx++;

            typeDelay = 100;

            if (charIdx === currentText.length) {

                isDeleting = true;
                typeDelay = 2200;

            }

        } else {

            targetElement.textContent =
                currentText.substring(0, charIdx);

            charIdx--;

            typeDelay = 40;

            if (charIdx < 0) {

                isDeleting = false;
                charIdx = 0;

                matrixIdx =
                    (matrixIdx + 1) % skillsMatrix.length;

                typeDelay = 400;

            }
        }

        setTimeout(type, typeDelay);
    }

    type();
}


// ==========================================================================
// 4. INTERACTIVE CARD CONTROLLER
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".probox, .interactive-card"
    );

    cards.forEach(card => {

        card.addEventListener("click", (e) => {

            e.stopPropagation();

            cards.forEach(c =>
                c.classList.remove("card-elevated")
            );

            card.classList.add("card-elevated");

        });

    });


    document.addEventListener("click", () => {

        cards.forEach(card => {
            card.classList.remove("card-elevated");
        });

    });

});


// ==========================================================================
// 5. EXPLORE BUTTON NAVIGATION
// ==========================================================================

document.addEventListener("click", (event) => {

    if (!event.target) return;

    switch (event.target.id) {

        case "WebExploreBtn":
            window.location.href = "uiux.html";
            break;

        case "uiuxExploreBtn":
            window.location.href = "mywebsec.html";
            break;

        case "cadExploreBtn":
            window.location.href = "mywebsec3.html";
            break;

        case "javaExploreBtn":
            window.location.href = "mywebsec6.html";
            break;

        case "NetExploreBtn":
            window.location.href = "mywebsec9.html";
            break;

        default:
            break;
    }

});
