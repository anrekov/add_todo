// TODO form has submit function

function createCloseButton(li) {
    let span = document.createElement('SPAN');

    span.innerText = '\u00D7';
    span.className = 'close';
    li.appendChild(span);

    span.onclick = () => span.parentElement.remove();
}

// Всем li создать кнопку удаления
document.querySelectorAll('li').forEach(createCloseButton);

// Добавление класса при нажатии на элемент li
document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
        e.target.classList.toggle('checked');
});

// Добавление li с заданным значением
function add() {
    let li = document.createElement('LI');
    let input_value = document.formMain.task.value;

    li.innerText = input_value;

    document.querySelector('ul').appendChild(li);
    document.formMain.task.value = '';

    createCloseButton(li);
}

// TODO rename to deleteAll - y
deleteAll.onclick = function () {
    let elems = document.querySelectorAll('li');

    elems.forEach(element => {
        element.remove();
    });

}

// todo rename filterDone / filterChecked - y
filterDone.onclick = function () {
    let elems = document.querySelectorAll('li');

    elems.forEach(element => {
        if (element.className !== 'checked') {
            element.style.display = 'none';
        } else element.style.display = '';
    });
}

// todo rename filterActive - y
filterActive.onclick = function () {
    let elems = document.querySelectorAll('li');

    elems.forEach(element => {
        if (element.className === 'checked') {
            element.style.display = 'none';
        } else element.style.display = '';
    });
}

// todo rename to filterAll - y
filterAll.onclick = function () {
    let elems = document.querySelectorAll('li');

    elems.forEach(element => {
        element.style.display = '';
    });
}