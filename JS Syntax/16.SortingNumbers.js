function SortArray(numbers)
{
    const resultArray=[];
    numbers=numbers.sort((a,b)=>a-b);
    
    const length=numbers.length;

    for(let i=0;i<length;i++)
    {
        if(i%2===0)
        {
            resultArray.push(numbers.shift());
        }
        else
        {
            resultArray.push(numbers.pop());
        }
    }
    return resultArray;
}
    