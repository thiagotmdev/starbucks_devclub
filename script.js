function trocaImagem(cor){
    let circ = document.getElementById('circulo');

    circ.style.background = cor;

    let cup = document.getElementById('copo');
    
    if(cor === '#017143'){
        cup.src = './img/img1.png';
    }
    else if(cor === '#DDA0DD') {
        cup.src = './img/img2.png';
    } else {
        cup.src = './img/img3.png';
    }
}