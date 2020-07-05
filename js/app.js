class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    AddBook(){
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${this.title}</td>
            <td>${this.author}</td>
            <td>${this.isbn}</td>
            <td><input type="button" name="delete" value="X"></td>
        `;
        lista.appendChild(tr);
        formulario.reset();
    }

    DeleteBook(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
        }
    }

    AddMessage(type, message){
        const div = document.createElement('div');
        if(type === 'info'){
            div.className = 'alert alert-dismissible alert-info mt-3';
            div.innerHTML = `
                ${message}
            `;
            card.appendChild(div);
        }
        else if(type === 'success'){
            div.className = 'alert alert-dismissible alert-success mt-3';
            div.innerHTML = `
                ${message}
            `;
            card.appendChild(div);
        }
        else if(type === 'danger'){
            div.className = 'alert alert-dismissible alert-danger mt-3';
            div.innerHTML = `
                ${message}
            `;
            card.appendChild(div);
        }

        setTimeout(function(){
            div.remove();
        }, 3000);
        
    }

}

const formulario = document.getElementById('form-books');
const lista = document.getElementById('lista-libros');
const card = document.querySelector('.message-book');

formulario.addEventListener('submit', SendData);
lista.addEventListener('click', ClickDelete);

function SendData(e){
    e.preventDefault();

    const title = document.getElementById('book').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    libro = new Book(title, author, isbn);

    if(title === '' || author === '' || isbn === ''){
        libro.AddMessage('danger', 'Complete the form please');
    }
    else{
        libro.AddBook();
        libro.AddMessage('info', 'Book added succesfully');
    }

}

function ClickDelete(e){
    const new_book = new Book();
    new_book.DeleteBook(e.target);
    new_book.AddMessage('success','Book deleted succesfully!');
}