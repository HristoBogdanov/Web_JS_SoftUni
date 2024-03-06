function PrintMatrix(index)
{
    const arr=[];
    for(let i=0;i<index;i++)
    {
        arr.push(index);
    }
    for(let i=0;i<index;i++)
    {
        console.log(arr.join(" "));
    }
}