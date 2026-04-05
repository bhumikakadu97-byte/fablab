function goNext(){
    document.getElementById('welcome').style.display="none";
    document.getElementById('msite').style.display="block";
    document.documentElement.style.overflow="auto";
    document.body.style.overflow="auto";
    document.getElementById("welcome").style.display="none";
    window.scrollTo({ top:0, behavior:"smooth"});
}




// Web Development section open



  document.getElementById("exploreBtn").addEventListener("click", function() {
  window.location.href = "mywebsec.html";
});

document.getElementById("aboutBtn").addEventListener("click", function() {
  window.location.href = "about.html";
});

document.getElementById("contactBtn").addEventListener("click", function() {
  window.location.href = "contact.html";
});




const goBackBtn = document.getElementById("goBackBtn");
const msite = document.getElementById("msite");

goBackBtn.addEventListener("click", function() {
    msite.scrollIntoView({ behavior: "smooth" }); // Sirf Main Site ke top par scroll
});

document.body.style.overflowY = 'scroll';


 document.getElementById("uibtn").addEventListener("click", function() {
    window.location.href = "uiux.html#uiux";
});




