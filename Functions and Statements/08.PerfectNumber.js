function CheckForPerfection(number)
{
    function CheckIfPositive(number)
    {
        return(number>0);
    }

    function SumOfDivisors(number)
    {
        const divisors=[];

        for(let i=1;i<number;i++)
        {
            if(number%i===0)
            {
                divisors.push(i);
            }
        }

        let sum=divisors.reduce((acc,curr)=>acc+curr,0);
        return sum;
    }

    function CheckSumAndNumberEquality(number)
    {
        return number===SumOfDivisors(number);
    }

    if(CheckIfPositive(number) && CheckSumAndNumberEquality(number)){
        console.log("We have a perfect number!")
    }
    else{
        console.log("It's not so perfect.")
    }
}