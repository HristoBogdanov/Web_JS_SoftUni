function PrintCharsInBetween(char1, char2)
{
    const result=[];

    let AsciChar1=char1.charCodeAt(0);
    let AsciChar2=char2.charCodeAt(0);

    if(AsciChar1>AsciChar2)
    {
        let a=AsciChar1;
        AsciChar1=AsciChar2;
        AsciChar2=a;
    }

    for(let i=AsciChar1+1; i<AsciChar2;i++)
    {
        result.push(String.fromCharCode(i));
    }
    console.log(result.join(" "));
}