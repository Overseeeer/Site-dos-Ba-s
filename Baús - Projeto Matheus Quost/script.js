function disableImage(image) {
    image.classList.add('disabled');
    image.onclick = null;
}

function clickAndDisable(link) {
    // disable subsequent clicks
    link.onclick = function(event) {
       event.preventDefault();
    }
}   

function mostrarConteudo(){
    var conteudo = document.getElementById('conteudo');
            if (conteudo.style.display === 'none') {
                conteudo.style.display = 'block';
            } else {
                conteudo.style.display = 'none';
            }
}

function mostrarConteudo() {
    document.getElementById('conteudo').style.display = 'block';
}

function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

function esconderBotao() {
    document.getElementById('meuBotao').classList.add('hidden');
}