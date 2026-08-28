// ===============================
// WELCOME → MAIN SITE
// ===============================
function goNext() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("msite").style.display = "block";

    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// MODULE NAVIGATION
// ===============================
document.addEventListener("click", (event) => {

    if (!event.target) return;

    switch (event.target.id) {

        case "exploreBtn":
            window.location.href = "mywebsec.html";
            break;

        case "uiuxExploreBtn":
            window.location.href = "uiux.html";
            break;

        case "cadExploreBtn":
            window.location.href = "mywebsec3.html";
            break;

        case "javaExploreBtn":
            window.location.href = "mywebsec6.html";
            break;

        default:
            break;
    }
});


// ===============================
// BACK FROM ANY MODULE
// ===============================
window.addEventListener("DOMContentLoaded", () => {

    if (window.location.hash === "#modules") {

        const welcome = document.getElementById("welcome");
        const msite = document.getElementById("msite");
        const modules = document.getElementById("modules");

        if (welcome && msite && modules) {

            // Hide Welcome page
            welcome.style.display = "none";

            // Show Main site
            msite.style.display = "block";

            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";

            // Same smooth effect for every module
            setTimeout(() => {
                modules.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        }
    }
});


