//1ª 
const minhalista = document.querySelector('#lista')
const Lista = minhalista.querySelector('ul')
console.log("Quantidade de filhos da lista: "+ Lista.children.length)

//2ª 
function modificarItem(){
Lista.children[1].innerHTML = "<li>Item modificado</li>"
}
//3ª 
function novoItem(){
Lista.innerHTML += "<li>Novo Item</li>"
}
//4ª 
function adicionarItem(){
    let novoItem = document.createElement("li")
    novoItem.innerHTML = ("Item Criado Dinamicamente");
    Lista.appendChild(novoItem)
}


//5ª 
function ocListatarSenha(){
    const senha = document.querySelector('input')
    if(senha.type == 'password'){
    senha.setAttribute('type','text')
    }else{
    senha.setAttribute('type','password')
    }
}

//6 ª 
function mudarCor(){
Lista.children[2].style.color = "red";
Lista.children[3].style.fontWeight = "bold"
}

//7ª 
function antes(){
    minhalista.before("Antes da lista")
}

function depois(){
    minhalista.after("Depois da Lista")
}

function novoItemInner(){
    Lista.innerHTML += "<li>Novo Item</li>"
}
