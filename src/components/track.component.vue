<template>
		<div class="container">
			<div id="single" v-if="track">
				<header class="album-header">
					<div class="row">
						<div class="col-md-4">
							<div v-if="track.album.images.length > 0">
								<img :src="track.album.images[0].url" class="album-thumb" alt="">
							</div>
						</div>
						<div class="col-md-8">
							<h4 v-if="track.artists.length > 0">
			          <span class="spacer" v-for="artist of track.artists">
			            <router-link :to="'/artist/' + artist.id">{{artist.name}}</router-link>
			          </span>
							</h4>
							<h2>{{track.name}}</h2>
							<h5>Album Name: <router-link :to="'/album/' + track.album.id">{{track.album.name}}</router-link></h5>
							<a :href="track.external_urls.spotify" target="_blank" class="btn btn-primary">View In Spotify</a>
						</div>
					</div>
				</header>
			</div>

			<div v-if="errorMsg">
				<h3>Error Occurs: {{errorMsg}}</h3>
			</div>

		</div>
</template>

<script>
    export default{
        data(){
            return{
                id: this.$route.params.id,
                track: '',
                errorMsg: ''
            }
        },
        created: function() {
					let trackurl = `https://api.spotify.com/v1/tracks/${this.$route.params.id}`;

          this.$http.get(trackurl)
            .then(function(e) {
              console.log(e.data);
              this.track = e.data;
            }, function(e) {
              this.errorMsg = e.data.error.message + ', status: ' + e.status
            })

        }
    }
</script>
