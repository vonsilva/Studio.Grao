$(document).ready(function() {
    $('#modal').modal('show');
})

function getCookie(cname) {
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


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };


function salvar() {
    var nome_user = document.getElementById('nome_user').value;
    setCookie('nome_user', nome_user, 30);
    $('#modal').modal('hide');
    console.log(nome_user);
};
    

function salvar_enter(e){
    e=e||window.event;
    var key = e.keyCode;
    if(key==13) {
        var nome_user = document.getElementById('nome_user').value;
        setCookie('nome_user', nome_user, 30);
        $('#modal').modal('hide');
        return true;
        }
    };


