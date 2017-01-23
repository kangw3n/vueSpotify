let searchMusic = (_this, str, type="track") => {
	const searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=TW`;

	_this.$http.get(searchUrl)
		.then(function (res) {
			_this.song = res.data.tracks.items;
		})

}



export default {
	searchMusic
}