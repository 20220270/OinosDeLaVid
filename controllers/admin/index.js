const addForm = document.getElementById("ValidacionInicio");

addForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(addForm.checkValidity() === false){
        e.stopPropagation();
        addForm.classList.add('was-validated');
        return false
    }
})


