function showOptions(button){
    const submenu = button.nextElementSibling;
    const bt = document.querySelectorAll(".bt_nav")
    const Bt_cima = false
    const submenu_status = false
    const verif = () =>{
        Bt_cima = true
        submenu_status = true
    }
    submenu.addEventListener("mouseenter", verif);
    bt.addEventListener("mouseenter", verif);
    if(Bt_cima && submenu_status){
        submenu.style.display = 'block';
    }else{
        submenu.style.display = 'none';
    }
}
function CARD(img) {
    var cartao = document.createElement('div');
    cartao.className = 'cartao';
    cartao.innerHTML = '<h2>Opa</h2><p>Conteúdo do cartão...</p>';
    return cartao;
}
document.getElementById('conteudo_card').appendChild(CARD(null));







