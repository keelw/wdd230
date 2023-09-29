const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
  });
}

function setChapterList() {
    localStorage.setItem('bomList', JSON.stringify(chaptersArray));
}

function getChapterList () {
    return JSON.parse(localStorage.getItem('bomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    setChapterList();
}
