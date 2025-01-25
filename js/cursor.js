const cursor = document.querySelector(".cursor");

// Moves pickaxe to cursor position
document.addEventListener("mousemove", (e) => {
    //console.log("mouse move", e);
    cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;",
    );
});

// rotates pickaxe on click
document.addEventListener("click", () => {
    cursor.classList.add("click");

    setTimeout(() => {
        cursor.classList.remove("click");
    }, 100);
});
