function createCloseButton(li) {
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => span.parentElement.style.display = 'none';
}
  
// Всем li создать кнопку удаления
document.querySelectorAll('li').forEach(createCloseButton);

// Добавления класса при нажатии на элемент li
document.querySelector('ul').addEventListener('click', (e) => {
if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
});

// Добавление li с заданным значением
function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = '';

    createCloseButton(li);
}

DelAll.onclick = function () {
    let elems = document.querySelectorAll('li');
  
    elems.forEach(element => {
        element.remove();
    });
    
}

OnlyCheked.onclick = function () {
    let elems = document.querySelectorAll('li');
  
    elems.forEach(element => {
        if (element.className !== 'checked') {
            element.remove();
        }
    });
}

OnlyNotCheked.onclick = function () {
    let elems = document.querySelectorAll('li');
  
    elems.forEach(element => {
        if (element.className === 'checked') {
            element.remove();
        }
    });

}
