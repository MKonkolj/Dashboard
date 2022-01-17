const deleteBtn = document.querySelector("#deleteBtn");
const deleteModal = document.querySelector("#deleteModal");
const deleteYes = document.querySelector(".deleted-yes");
const deleteNo = document.querySelector(".deleted-no");

deleteBtn.addEventListener("click", showDeleteModal);
deleteYes.addEventListener("click", showDeleteModal);
deleteNo.addEventListener("click", showDeleteModal);


function showDeleteModal() {
    deleteModal.classList.toggle("show");
};