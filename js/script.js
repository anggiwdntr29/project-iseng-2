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
            <img src="hehe.gif" alt="yo ndak tau">
        </div>
    `)
}