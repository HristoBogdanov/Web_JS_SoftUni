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

//using function:
//const button=createElement("button", "Delete", [], null, taskActions)