// DELETE MODAL
const deleteBtn = document.querySelector("#deleteBtn");
const deleteModal = document.querySelector("#deleteModal");
const deleteYes = document.querySelector("#deleteYes");
const deleteNo = document.querySelector("#deleteNo");

// ADD USER MODAL
const addUserBtn = document.querySelector("#addUserBtn");
const addUserModal = document.querySelector("#addUserModal");
const addUserCancel = document.querySelector("#addUserCancel");
const addUserAdd = document.querySelector("#addUserAdd");

//EDIT USER
const editBtn = document.querySelector("#editBtn");
const editUserCancel = document.querySelector("#editUserCancel");
const editUserSave = document.querySelector("#editUserSave");
const editUserModal = document.querySelector("#editUserModal");

//OTHER
const blackAlpha = document.querySelector("#blackAlpha");

////////////////////////////////////////////////////
// EVENTS FOR DELETE MODAL
deleteBtn.addEventListener("click", toggleDeleteModal);
deleteYes.addEventListener("click", toggleDeleteModal);
deleteNo.addEventListener("click", toggleDeleteModal);

// EVENTS FOR ADD USER MODAL
addUserBtn.addEventListener("click", toggleNewUserModal);
addUserCancel.addEventListener("click", toggleNewUserModal);
addUserAdd.addEventListener("click", toggleNewUserModal);

// EVENTS FOR EDIT USER MODAL
editBtn.addEventListener("click", toggleEditUserModal);
editUserCancel.addEventListener("click", toggleEditUserModal);
editUserSave.addEventListener("click", toggleEditUserModal);

/////////////////////////////////////////////////////

function toggleDeleteModal() {
    deleteModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

function toggleNewUserModal() {
    addUserModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

function toggleEditUserModal() {
    editUserModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

//BLACK ALPHA CLOSE MODAL
blackAlpha.addEventListener("click", () => {
    deleteModal.classList.remove("show");
    addUserModal.classList.remove("show");
    editUserModal.classList.remove("show");
    blackAlpha.classList.remove("show");
});