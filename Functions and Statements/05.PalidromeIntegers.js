function PrintPalidromeBoolean(input)
{
    for(let i=0;i<input.length;i++)
    {
        let reversed=Number(String(input[i]).split('').reverse().join(''));
        console.log(input[i]===reversed);
    }
}