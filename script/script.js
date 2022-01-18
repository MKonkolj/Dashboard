// DELETE MODAL BTNS
const deleteBtn = document.querySelector("#deleteBtn");
const deleteModal = document.querySelector("#deleteModal");
const deleteYes = document.querySelector(".deleted-yes");
const deleteNo = document.querySelector(".deleted-no");

// ADD USER MODAL BTN
const AddUserBtn = document.querySelector(".add-user-btn");
const AddUserModal = document.querySelector("#addUserModal");
const AddUserCancel = document.querySelector("#addUserCancel");
const AddUserAdd = document.querySelector("#addUserAdd");


////////////////////////////////////////////////////
// EVENTS FOR DELETE MODAL
deleteBtn.addEventListener("click", showDeleteModal);
deleteYes.addEventListener("click", showDeleteModal);
deleteNo.addEventListener("click", showDeleteModal);

// EVENTS FOR ADD USER MODAL
AddUserBtn.addEventListener("click", showAddUserModal);
AddUserCancel.addEventListener("click", showAddUserModal);
AddUserAdd.addEventListener("click", showAddUserModal);


/////////////////////////////////////////////////////

function showDeleteModal() {
    deleteModal.classList.toggle("show");
};

function showAddUserModal() {
    AddUserModal.classList.toggle("show");
};