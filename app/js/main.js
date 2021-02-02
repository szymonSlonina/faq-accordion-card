function arrowClicked(index){
    const hideableParent = document.getElementsByClassName('hideable')[index];
    const question = hideableParent.getElementsByTagName('span')[0];
    const img = hideableParent.getElementsByTagName('img')[0];
    const answer = hideableParent.getElementsByTagName('p')[0];

    if(question.classList.contains('spanClicked')){
        question.classList.remove('spanClicked');
        img.classList.remove('imgClicked');
        answer.classList.add('hidden');
    } else {
        question.classList.add('spanClicked');
        img.classList.add('imgClicked');
        answer.classList.remove('hidden');
    }
}