window.addEventListener("load", solve);

function solve() {

  const inputFields={
    studentName: document.querySelector("#student"),
    university:document.querySelector("#university"),
    score:document.querySelector("#score"),
  }
  
  const ulPreviewList=document.querySelector("#preview-list");
  const ulCandidateList=document.querySelector("#candidates-list");
  
  const nextBtn=document.querySelector("#next-btn")
    
  nextBtn.addEventListener("click", nextStudent);


  function nextStudent(){
    if(inputFields.studentName.value==="" || inputFields.university.value==="" || inputFields.score.value===""){
      return;
    }

    const li=createElement("li", null, ["application"],null,ulPreviewList);
    const newArticle=createElement("article",null, [], null, li);
    const nameHeading=createElement("h4",inputFields.studentName.value,[],null,newArticle);
    const universityParagraph=createElement("p",`University: ${inputFields.university.value}`,[],null,newArticle);
    const scoreParagraph=createElement("p",`Score: ${inputFields.score.value}`,[],null,newArticle);
    const editButton=createElement("button", "edit", ["action-btn","edit"],null,li);
    const applyButton=createElement("button", "apply", ["action-btn","apply"],null,li);

    nextBtn.disabled=true;
    inputFields.studentName.value="";
    inputFields.university.value="";
    inputFields.score.value="";

    document.querySelector(".edit").addEventListener("click", editStudent);
    document.querySelector(".apply").addEventListener("click", applyForScholorship);

  }

  function editStudent(e){
    const parentArticle=e.target.parentElement.querySelector("article");

    const newName=parentArticle.querySelector("h4").textContent;
    const newUniversity=parentArticle.querySelectorAll("p")[0].textContent.split(" ")[1];
    const newScore=parentArticle.querySelectorAll("p")[1].textContent.split(" ")[1].trim();

    inputFields.studentName.value=newName;
    inputFields.university.value=newUniversity
    inputFields.score.value=Number(newScore);

    ulPreviewList.innerHTML=""

    nextBtn.disabled=false;
  }


  function applyForScholorship(e){
    const candidateArticle=parentArticle=e.target.parentElement.querySelector("article");

    const liCandidate=createElement("li", null,["application"],null,ulCandidateList);
    liCandidate.appendChild(candidateArticle);

    ulPreviewList.innerHTML=""
    nextBtn.disabled=false;
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
}
  