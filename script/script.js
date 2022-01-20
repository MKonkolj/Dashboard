const blackAlpha = document.querySelector("#blackAlpha");
/////////////////////////////////////////////////////
// DELETE MODAL
const deleteBtns = document.querySelectorAll(".delete-option");
const deleteModal = document.querySelector("#deleteModal");
const deleteYes = document.querySelector("#deleteYes");
const deleteNo = document.querySelector("#deleteNo");
// INVOICE MODAL
const invoiceBtns = document.querySelectorAll(".invoice-option");
const invoiceModal = document.querySelector("#invoiceModal");
const closeBtn = document.querySelector("#closeBtn");
// ADD USER MODAL
const addUserBtn = document.querySelector("#addUserBtn");
const addUserModal = document.querySelector("#addUserModal");
const addUserCancel = document.querySelector("#addUserCancel");
const addUserAdd = document.querySelector("#addUserAdd");
//EDIT USER
const editBtns = document.querySelectorAll(".edit-option");
const editUserCancel = document.querySelector("#editUserCancel");
const editUserSave = document.querySelector("#editUserSave");
const editUserModal = document.querySelector("#editUserModal");

// EVENTS FOR DELETE MODAL
deleteBtns.forEach(element => {
    element.addEventListener("click", toggleDeleteModal);
});

deleteBtn.addEventListener("click", toggleDeleteModal);
deleteYes.addEventListener("click", toggleDeleteModal);
deleteNo.addEventListener("click", toggleDeleteModal);

//FUNCTION 
function toggleDeleteModal() {
    deleteModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};


//////////////////////////////////////////////////////

// EVENTS FOR ADD USER MODAL
addUserBtn.addEventListener("click", toggleNewUserModal);
addUserCancel.addEventListener("click", toggleNewUserModal);
addUserAdd.addEventListener("click", toggleNewUserModal);

//FUNCTION
function toggleNewUserModal() {
    addUserModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

//////////////////////////////////////////////////////

// EVENTS FOR EDIT USER MODAL
editBtns.forEach(element => {
    element.addEventListener("click", toggleEditUserModal);
});

editBtn.addEventListener("click", toggleEditUserModal);
editUserCancel.addEventListener("click", toggleEditUserModal);
editUserSave.addEventListener("click", toggleEditUserModal);

//FUNCTION 
function toggleEditUserModal() {
    editUserModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

//////////////////////////////////////////////////////

// // EVENTS FOR INVOICE MODAL
invoiceBtns.forEach(element => {
    element.addEventListener("click", toggleInvoiceModal)
});

closeBtn.addEventListener("click", toggleInvoiceModal);

//FUNCTION
function toggleInvoiceModal() {
    invoiceModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

///////////////////////////////////////////////////////
//BLACK ALPHA TO CLOSE MODAL
blackAlpha.addEventListener("click", () => {
    deleteModal.classList.remove("show");
    addUserModal.classList.remove("show");
    editUserModal.classList.remove("show");
    invoiceModal.classList.remove("show");
    blackAlpha.classList.remove("show");
});

////////////////////////////////////////////////////
// VIEW PROFILE FOR EACH
const viewBtns = document.querySelectorAll(".options-container a");

viewBtns.forEach(element => {
    element.href = "user-profile.html";
});


/////////////////////////////////////////////////////
// SIDEBAR TOGGLE

document.querySelector("#burger").addEventListener("click", () => {
    document.querySelector("#sidebarMenu").classList.toggle("show");
})