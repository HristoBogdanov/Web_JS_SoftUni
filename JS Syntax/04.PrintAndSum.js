function PrintRangeAndSum(start, end)
{
    const values=[];
    let sum=0;
    for(let i=start; i<=end;i++)
    {
        sum+=i;
        values.push(i);
    }

    console.log(values.join(' '));
    console.log(`Sum: ${sum}`);
}
