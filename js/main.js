const projectBoxes = document.querySelectorAll(".project-box");
const closeBtns = document.querySelectorAll(".close-btn");

const boxes = Array.from(projectBoxes);

boxes.forEach((box) => {
    let projectDetails = box.querySelector(".project-details"),
        closeBtn = projectDetails.querySelector(".close-btn");
    box.addEventListener("click", function () {
        projectDetails.classList.add("show");
    });
    closeBtn.addEventListener("click", function (e) {
        projectDetails.classList.remove("show");
        e.stopPropagation();
    });
});
