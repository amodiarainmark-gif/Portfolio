document.getElementById("home").style.display = "block";

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", () => {
        sections.forEach(sec => sec.style.display = "none");
        const target = link.getAttribute("data-target");
        document.getElementById(target).style.display = "block";
        document.getElementById("nav").scrollIntoView({ behavior: "smooth" });
    });
});