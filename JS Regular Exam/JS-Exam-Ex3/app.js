const buttons={
    addVacation:document.querySelector("#add-vacation"),
    editVacation:document.querySelector("#edit-vacation"),
    loadVacations:document.querySelector("#load-vacations"),
}

const inputFields={
    nameInput:document.querySelector("#name"),
    daysInput:document.querySelector("#num-days"),
    dateInput:document.querySelector("#from-date"),
}

const vacationList=document.querySelector("#list")

let allVacations;

function attachEvents(){
    buttons.loadVacations.addEventListener("click", loadAllVacations);
    buttons.addVacation.addEventListener("click", addVacation);
    buttons.editVacation.addEventListener("click",editVacation);
}

async function loadAllVacations(event){
    allVacations=await(await fetch("http://localhost:3030/jsonstore/tasks/")).json();
    vacationList.innerHTML="";

    Object.values(allVacations).forEach(vacation=>{
        const div=createElement("div",null,["container"],vacation._id,vacationList);
        const nameHeading=createElement("h2",vacation.name,[],null,div);
        const dateHeading=createElement("h3",vacation.date,[],null,div);
        const daysHeading=createElement("h3",vacation.days,[],null,div);
        const changeButton=createElement("button","Change",["change-btn"],null,div);
        const doneButton=createElement("button","Done",["done-btn"],null,div);
    })

    document.querySelectorAll(".change-btn").forEach(button =>{
        button.addEventListener("click", changeVacation);
    })
    document.querySelectorAll(".done-btn").forEach(button=>{
        button.addEventListener("click", doneVacation);
    })
}

async function addVacation(event){
    event.preventDefault();
    const newVacation={
        date:inputFields.dateInput.value,
        days:inputFields.daysInput.value,
        name:inputFields.nameInput.value,
    }

    await fetch("http://localhost:3030/jsonstore/tasks/",{
        method:"POST",
        body:JSON.stringify(newVacation)
    })

    loadAllVacations();

    inputFields.dateInput.value=""
    inputFields.daysInput.value="";
    inputFields.nameInput.value="";

    
}

async function editVacation(event){
    event.preventDefault();
    const vacationId=document.querySelector("#form h1").id;
    const newVacation={
        date:inputFields.dateInput.value,
        days:inputFields.daysInput.value,
        name:inputFields.nameInput.value,
    }

    await fetch(`http://localhost:3030/jsonstore/tasks/${vacationId}`,{
        method:"PUT",
        body:JSON.stringify(newVacation)
    })

    await loadAllVacations();

    inputFields.nameInput.value="";
    inputFields.daysInput.value="";
    inputFields.nameInput.value="";

    buttons.editVacation.disabled=true;
    buttons.addVacation.disabled=false;
}

async function changeVacation(e){
    const divElement=e.target.parentElement;
    const vacationId=divElement.id;
    document.querySelector("#form h1").id=vacationId;
    vacationList.removeChild(divElement);

    inputFields.nameInput.value=divElement.querySelector("h2").textContent;
    inputFields.daysInput.value=Number(divElement.querySelectorAll("h3")[1].textContent);
    inputFields.dateInput.value=divElement.querySelectorAll("h3")[0].textContent;

    buttons.editVacation.disabled=false;
    buttons.addVacation.disabled=true;
}

async function doneVacation(e){
    const divElement=e.target.parentElement;
    const vacationId=divElement.id;

    await fetch(`http://localhost:3030/jsonstore/tasks/${vacationId}`,{
        method:"DELETE",
    })

    loadAllVacations();
}


function createElement(type, textContent, classes, id, parent){
    const element=document.createElement(type);
    if(textContent){
        element.textContent=textContent;
    }

    if(classes && classes.length>0){
        element.classList.add(...classes);
    }

    if(id){
        element.setAttribute("id", id);
    }

    if(parent){
        parent.appendChild(element);
    }

    return element;
}

attachEvents();