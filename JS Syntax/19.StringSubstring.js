function CheckContainedWord(word, text)
{
    textSplitted=text.split(" ");
    for(let i=0;i<textSplitted.length;i++)
    {
        if(textSplitted[i].toLowerCase()===word.toLowerCase())
        {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}