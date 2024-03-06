function PrintNthElement(elements, step){
    const result=[];
    for(let i=0;i<elements.length;i+=step)
    {
        result.push(elements[i]);
    }
    return result;
}
