let todo_items = [];

function add() {
    let task = document.querySelector("#task").value;
    let todo_date = document.querySelector("#date").value;

    if (todo_date === '' && task === '') {
        alert("must provide task and date");
        return;
    }
    if (todo_date === '') {
        alert("must provide date");
        document.querySelector("#task").value = '';
        return;
    }
    if (task === '') {
        alert("must provide task");
        document.querySelector("#date").value = '';
        return;
    }
    todo_items.push({ todo_item: task, dueDate: todo_date });
    document.querySelector("#task").value = '';
    document.querySelector("#date").value = '';

    console.log(todo_items);
}

function display() {
    let item = document.getElementById("display");

    // if(todo_items.length > 1){
    todo_items.sort((a, b) => {
        let da = new Date(a.dueDate);
        let db = new Date(b.dueDate);

        return da - db;
    });
    // }

    let new_html = "";

    for (let i = 0; i < todo_items.length; i++) {
        new_html += `
        
        <span>${todo_items[i].todo_item}</span>
        <span>${todo_items[i].dueDate}</span>
        <button onClick="todo_items.splice(${i},1); display();">Delete</button>
        
        `;
    }

    item.innerHTML = new_html;
}



