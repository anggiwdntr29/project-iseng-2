$('#searchButton').on('click', () => {
    getResult()
})

$('#searchInput').on('keyup', (e) => {
    if (e.keyCode === 13) {
        getResult();
    }
})

function getResult() {
    $('#result').html(`
        <h3 class="animate__animated animate__fadeInDown">YO NDAK TAU KOK TANYA SAYA</h3>
        <div class="gif-hehe animate__animated animate__fadeIn">
            <img src="https://gifimage.net/wp-content/uploads/2017/07/funny-animal-gif-3.gif">
            <img src="https://media3.giphy.com/media/QUXYcgCwvCm4cKcrI3/giphy.gif">
        </div>
    `)
}