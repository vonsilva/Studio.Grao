//Função definir cookie
function definCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    
//Função para pegar Cookie
function pegarCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }

    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    };


//função para botão 'Ok!'
function salvar() {
    var nome_user = document.getElementById('nome_user').value;
    if (nome_user === '') {
        definCookie('nome_user', 'Anônimo', 30);
    }
    else {
        definCookie('nome_user', nome_user, 30);
    }   
    $('#modal').modal('hide');


    var nome = pegarCookie('nome_user');

    // Exibir modal com nome
    document.getElementsByClassName("a_nome")[0].innerHTML = nome;

    // Exibir modal com nome
    $('#modal_nome').modal('show');

};
    

// Função para salvar com enter
function salvar_enter(e){
    e=e||window.event;
    var key = e.keyCode;
    var nome_user = document.getElementById('nome_user').value;
    if(key == 13 && nome_user === '') {
        definCookie('nome_user', 'Anônimo', 30);
        console.log('passou');
    }
    else if (key == 13 && nome_user != ''){
        definCookie('nome_user', nome_user, 30);
        console.log('nao foi');
    }   

    $('#modal').modal('hide');

    var nome = pegarCookie('nome_user');
    
    // Exibir modal com nome
    document.getElementsByClassName("a_nome")[0].innerHTML = nome;

    // Exibir modal com nome
    $('#modal_nome').modal('show');
 
    };


function fechar() {
    $('#modal_nome').modal('hide');
    $('#modal_acesso').modal('hide');
}


//Pegar nome do usuário
var nome = pegarCookie('nome_user');


//Verificar se existe cookie com o nome, e mostrar modal com nome ou reacesso
if (nome == '' || nome === 'Anônimo') {
     // Exibir modal
    $('#modal').modal('show');

}
else {
    document.getElementsByClassName("a_nome")[1].innerHTML = nome;

    // Exibir modal
    $('#modal_acesso').modal('show');       
}
