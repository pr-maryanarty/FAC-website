const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

const showMore = document.querySelector(".show-button");
showMore.addEventListener("click", function () {
    if (document.querySelector(".wrapper").classList.contains("show")) {
        document.querySelector(".wrapper").classList.remove("show");
    } else {
        document.querySelector(".wrapper").classList.add("show");
    }
});
