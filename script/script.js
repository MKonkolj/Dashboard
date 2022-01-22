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
const editBtn = document.querySelector("#profileEditBtn");
const editUserCancel = document.querySelector("#editUserCancel");
const editUserSave = document.querySelector("#editUserSave");
const editUserModal = document.querySelector("#editUserModal");
//TIME MODAL
const timeBtns = document.querySelectorAll(".time-option");
const timeModal = document.querySelector("#timeModal");
const timeYes = document.querySelector ("#timeYes");
const timeNo = document.querySelector ("#timeNo");

/////////////////////////////////////////////////////////////////////

if (deleteBtns.length > 0) {
    //FUNCTION 
    function toggleDeleteModal() {
    deleteModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
    };

    //EVENTS FOR DELETE MODAL
    deleteBtns.forEach(element => {
        element.addEventListener("click", toggleDeleteModal);
    });

    deleteYes.addEventListener("click", toggleDeleteModal);
    deleteNo.addEventListener("click", toggleDeleteModal);
}

/////////////////////////////////////////////////////////////////////

if (addUserBtn !== null) {
    //FUNCTION
    function toggleNewUserModal() {
        addUserModal.classList.toggle("show");
        blackAlpha.classList.toggle("show");
    };

    // EVENTS FOR ADD USER MODAL
    addUserBtn.addEventListener("click", toggleNewUserModal);
    addUserCancel.addEventListener("click", toggleNewUserModal);
    addUserAdd.addEventListener("click", toggleNewUserModal);
}

//////////////////////////////////////////////////////


if (editBtns.length > 0) {
//FUNCTION 
function toggleEditUserModal() {
    editUserModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

// EVENTS FOR EDIT USER MODAL
editBtns.forEach(element => {
    element.addEventListener("click", toggleEditUserModal);
});

editUserCancel.addEventListener("click", toggleEditUserModal);
editUserSave.addEventListener("click", toggleEditUserModal);

if (editBtn !== null) {
    editBtn.addEventListener("click", toggleEditUserModal);
}
}

//////////////////////////////////////////////////////

// // EVENTS FOR INVOICE MODAL
invoiceBtns.forEach(element => {
    element.addEventListener("click", toggleInvoiceModal)
});

 (closeBtn !== null) ? closeBtn.addEventListener("click", toggleInvoiceModal): false;

//FUNCTION
function toggleInvoiceModal() {
    invoiceModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
};

///////////////////////////////////////////////////////

if (timeBtns.length > 0) {
//EVENTS FOR TIME MODAL
timeBtns.forEach(element => {
    element.addEventListener("click", toggleTimeModal)
})

function toggleTimeModal() {
    timeModal.classList.toggle("show");
    blackAlpha.classList.toggle("show");
}

timeYes.addEventListener("click", toggleTimeModal);
timeNo.addEventListener("click", toggleTimeModal);
}

///////////////////////////////////////////////////////
//BLACK ALPHA TO CLOSE MODAL
blackAlpha.addEventListener("click", () => {
    if (deleteModal !== null) {
        deleteModal.classList.remove("show");
    }
    if (addUserModal !== null) {
        addUserModal.classList.remove("show");
    }
    if (editUserModal !== null) {
        editUserModal.classList.remove("show");
    }
    if (blackAlpha !== null) {
        blackAlpha.classList.remove("show");
    }
    if (invoiceModal !== null) {
        invoiceModal.classList.remove("show");
    }
    if (timeBtns.length > 0) {
        timeModal.classList.remove("show");
    }
});

////////////////////////////////////////////////////
// VIEW PROFILE FOR EACH
const viewBtns = document.querySelectorAll(".options-container a");

viewBtns.forEach(element => {
    element.href = "user-profile.html";
});


/////////////////////////////////////////////////////
// SIDEBAR TOGGLE
const burger = document.querySelector("#burger");
const sidebarMenu = document.querySelector("#sidebarMenu");

burger.addEventListener("click", () => {
    sidebarMenu.classList.toggle("show");
});