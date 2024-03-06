function PrintResult(number1,number2)
{
    function CalculateFactorial(number)
    {
        let result=1;

        for(let i=1;i<=number;i++)
        {
            result*=i;
        }

        return result;
    }

    const Factorial1=CalculateFactorial(number1);
    const Factorial2=CalculateFactorial(number2);

    let result=(Factorial1/Factorial2).toFixed(2);
    console.log(result);
}