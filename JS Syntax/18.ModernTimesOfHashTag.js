function FindSpecialWords(text)
{
    words=text.split(" ");
    for(let i=0;i<words.length;i++)
    {
        let currentWord=words[i];
        if(currentWord[0]==="#")
        {
            flag=true;
            for(let j=1;j<currentWord.length;j++)
            {
                if(currentWord[j].toLowerCase() == currentWord[j].toUpperCase())
                {
                    flag=false;
                    break;
                }
            }
            if(flag && currentWord.length>1)
            {
                currentWord=currentWord.replace("#", "");
                console.log(currentWord);
            }
        }
    }
}