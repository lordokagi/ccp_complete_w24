// Recipes: when ingredients clicked they get crossed out
document.querySelectorAll("ul > li").forEach(function (item) {
    item.addEventListener("click", function () {
        if (this.style.textDecoration === "line-through") {
            this.style.textDecoration = "none";
            console.log("2 works");
        }
        else {
            this.style.textDecoration = "line-through";
            console.log("1 works");
        }
    });
});