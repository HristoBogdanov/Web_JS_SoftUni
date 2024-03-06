function solve(input){
    const wordsToCheck=input[0].split(" ");
    input.splice(0,1);

    const words=[];

    wordsToCheck.forEach(word => {
        words.push({
            nameOfWord:word,
            occcurances:0
        });
    });

    input.forEach(word=>{
        words.forEach(wordToCheck=>{
            if(word===wordToCheck.nameOfWord){
                wordToCheck.occcurances++;
            }
        });
    });
    words.sort(sortCount);
    words.forEach(word=>{
        console.log(`${word.nameOfWord} - ${word.occcurances}`);
    })

    function sortCount(a,b){
        if(a.occcurances<b.occcurances){
            return 1;
        }
        if(a.occcurances>b.occcurances){
            return -1;
        }
        return 0;
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    );