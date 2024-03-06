function PrintOddAndEvenSums(number)
{

    const OddNumbers=[];
    const EvenNumbers=[];

    const digits=number.toString().split("");

    for(let i=0;i<digits.length;i++)
    {
        if(digits[i]%2==0){
            EvenNumbers.push(Number(digits[i]));
        }
        else{
            OddNumbers.push(Number(digits[i]));
        }
    }

    let OddSum=OddNumbers.reduce((acc,curr) =>acc+curr,0);
    let EvenSum=EvenNumbers.reduce((acc,curr) =>acc+curr,0);

    console.log(`Odd sum = ${OddSum}, Even sum = ${EvenSum}`);
}