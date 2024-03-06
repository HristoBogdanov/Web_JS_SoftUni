function DetermineSameNumbers(number)
{
    const digits=[];
    while(number>0)
    {
        digits.push(number%10);
        number=Math.floor(number/10);
    }

    let flag=true;
    let sum=0;
    for(let i=0;i<digits.length-1;i++)
    {
        sum+=digits[i];
        if(digits[i]!==digits[i+1])
        {
            flag=false;      
        }
    }
    sum+=digits[digits.length-1]

    console.log(flag);
    console.log(sum);
}