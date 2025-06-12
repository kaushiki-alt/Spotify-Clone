function songCard(thumbnail, songTitle, artists) {

    let html = `<div class="song1 column-flex panel-gap">
                    <button class="song-btn">
                        <img src=${thumbnail} alt="Thumbnail"
                        class="song-img">
                        <span class="songTitle">
                            ${songTitle}
                        </span>
                        <span class="songArtists">
                            <a href="#">Pritam</a>,
                            <a href="#">Arijit Singh</a>,
                            <a href="#">Shashwat Singh</a>,
                            <a href="#">Qaisar-Ul-Jafri</a>
                        </span>
                    </button>
                </div>
`
}