function ReplaceWords(wordsToReplace, text)
{
    const words=wordsToReplace.split(", ");
    const textWords=text.split(" ");


    for(let i=0;i<textWords.length;i++)
    {
        if(textWords[i].includes('*'))
        {
            let length=textWords[i].length;
            for(let j=0;j<words.length;j++)
            {
                if(words[j].length===length)
                {
                    textWords[i]=words[j]
                }
            }
        }
    }
    console.log(textWords.join(" "));
}