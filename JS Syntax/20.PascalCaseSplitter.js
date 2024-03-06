function PrintSplittedText(text)
{
    const resultArr=[];
    for(let i=0;i<text.length;i++)
    {
        let toUpper=text[i].toUpperCase();
        if(text[i]===text[i].toUpperCase())
        {
            let startIndex=i;
            for(let j=startIndex+1;j<text.length;j++)
            {
                let endIndex=0;
                if(j===text.length-1)
                {
                    endIndex=j+1;
                    resultArr.push(text.substring(startIndex,endIndex));
                    break;
                }
                if(text[j]===text[j].toUpperCase())
                {
                    endIndex=j;
                    resultArr.push(text.substring(startIndex,endIndex));
                    break;
                }
            }
        }
    }
    console.log(resultArr.join(", "));
}