const btnPlay = document.querySelector('#play')
const btnPause = document.querySelector('#pause')
const audio = document.querySelector('audio')
const imgAudio = document.querySelector('#img-musica')
const nomeArtista = document.querySelector('#artista-musica')
const nomeMusica = document.querySelector('#nome-musica')

function tocaAudio(artista,musica) {
    audio.src = "audios/" + artista + ".mp3"
    audio.play()

    imgAudio.src = "img/" + artista + ".jpg"
    nomeArtista.textContent = artista
    nomeMusica.textContent = musica

    btnPlay.addEventListener('click', function(){
        audio.play()
    })

    btnPause.addEventListener('click', function() {
        audio.pause()
    }) 
}