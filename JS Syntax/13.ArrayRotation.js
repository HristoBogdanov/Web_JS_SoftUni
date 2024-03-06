function RotateArray(elements, numberOfRotations)
{
    for(let i=0;i<numberOfRotations;i++)
    {
        let first=elements[0];
        elements.shift();
        elements.push(first);
    }

    console.log(elements.join(" "));
}