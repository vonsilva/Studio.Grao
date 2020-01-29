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
    definCookie('nome_user', nome_user, 30);
    $('#modal').modal('hide');

    sleep(800).then(() => {
        var nome = pegarCookie('nome_user');

        // Exibir modal com nome
        document.getElementById("a_nome").innerHTML = nome;

        // Exibir modal com nome
        $('#modal_nome').modal('show');
      })
};
    

// Função para salvar com enter
function salvar_enter(e){
    e=e||window.event;
    var key = e.keyCode;
    if(key==13) {
        var nome_user = document.getElementById('nome_user').value;
        definCookie('nome_user', nome_user, 30);
        $('#modal').modal('hide');
        
        sleep(800).then(() => {
            var nome = pegarCookie('nome_user');
    
            // Exibir modal com nome
            document.getElementById("a_nome").innerHTML = nome;
    
            // Exibir modal com nome
            $('#modal_nome').modal('show');
          })

        }
    };


function fechar() {
    $('#modal_nome').modal('hide');
}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


var nome = pegarCookie('nome_user');
console.log(nome);

if (nome == '' || nome === 'Anônimo') {
    definCookie('nome_user', 'Anônimo', 30);

     // Exibir modal
    $('#modal').modal('show');

}
else {
    document.getElementById("a_nome").innerHTML = nome;

    // Exibir modal com nome
    $('#modal_nome').modal('show');
}

console.log(nome);