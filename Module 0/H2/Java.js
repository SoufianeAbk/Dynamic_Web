document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mainMenu");
    document.querySelectorAll(".content h1, .content h2").forEach(header => {
        if (!header.id) header.id = header.textContent.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
        let link = document.createElement("a");
        link.href = "#" + header.id;
        link.textContent = header.textContent;
        link.className = header.tagName === "H1" ? "menu-item" : "sub-item";
        menu.appendChild(link);
    });
    menu.addEventListener("click", e => {
        if (e.target.tagName === "A") {
            e.preventDefault();
            document.querySelector(e.target.hash).scrollIntoView({ behavior: "smooth" });
        }
    });
});
