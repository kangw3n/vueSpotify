<template>
		<div class="container">

			<div id="album" v-if="album">
				<header class="album-header">
					<div class="row">
						<div class="col-md-4">
							<div v-if="album.images.length > 0">
								<img :src="album.images[0].url" class="album-thumb" alt="">
							</div>
						</div>
						<div class="col-md-8">
							<h4 v-if="album.artists.length > 0">
			          <span v-for="artist of album.artists">
			            {{artist.name}}
			          </span>
							</h4>

							<h2>{{album.name}}</h2>
							<h5>Release Date: {{album.release_date}}</h5>
							<a :href="album.external_urls.spotify" target="_blank" class="btn btn-primary">View In Spotify</a>
						</div>
					</div>
				</header>

				<div class="album-tracks">
					<h2>Album Tracks</h2>
					<div v-for="track of album.tracks.items">
						<div class="well">
							<h5>{{track.track_number}} - <router-link :to="'/track/' + track.id"> {{track.name}}</router-link></h5>
							<div>
								Artists: <span class="spacer" v-for="artist of track.artists"> <router-link :to="'/artist/' + artist.id">{{artist.name}}</router-link></span>
							</div>
							<a :href="track.preview_url" target="_blank">Preview Track</a>
						</div>
					</div>
				</div>
			</div>

		</div>
</template>

<script>
    export default{
        data(){
            return{
                id: this.$route.params.id,
                album: ''
            }
        },
        created: function() {
          const _this = this;
					let albumUrl = `https://api.spotify.com/v1/albums/${this.$route.params.id}`;

          this.$http.get(albumUrl)
            .then(function(e) {
              this.album = e.data;
            })

        }
    }
</script>
