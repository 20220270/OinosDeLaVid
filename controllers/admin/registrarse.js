const addForm = document.getElementById("FormValidacion");

addForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(addForm.checkValidity() === false){
        e.stopPropagation();
        addForm.classList.add('was-validated');
        return false
    }
})