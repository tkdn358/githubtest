
// リストを作り、予定の追加を行う
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', () => {
    const input = document.getElementById('new-todo');
    const li = document.createElement('li');
    li.innerText = input.value;

// リストにdoneを付与し、完了の処理を行う
    const doneButton = document.createElement('button');
    doneButton.innerText = '完了';
    li.appendChild(doneButton);
    doneButton.addEventListener('click', () => {
        const li = doneButton.closest('li');
        li.classList.add('done');
    });

//　ulにliを追加
    const ul = document.querySelector('ul');
    ul.appendChild(li);
});

/*
const buttonList = document.querySelectorAll('button');
[...buttonList].forEach((button) => {
    button.addEventListener('click', () => {
        const li = button.closest('li');
        li.classList.add('done');
    });    
});
*/

/*
const li = document.querySelector('li');
button.addEventListener('click', () => {
    li.classList.add('done');
});
*/