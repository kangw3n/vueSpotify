<template>
		<div class="container">

			<div id="track" v-if="artist">
				<header class="album-header">
					<div class="row">
						<div class="col-md-4">
							<div v-if="artist.images.length > 0">
								<img :src="artist.images[0].url" class="album-thumb" alt="">
							</div>
						</div>
						<div class="col-md-8">
							<h2>{{artist.name}}</h2>
							<h4>Follower: {{artist.followers.total}}</h4>
							<h5>Popularity: {{artist.popularity}}</h5>
							<a :href="artist.external_urls.spotify" target="_blank" class="btn btn-primary">View Artist In Spotify</a>
						</div>
					</div>
				</header>

				<div class="album-tracks">
					<h2>Album Tracks</h2>
					<div v-for="track of tracks">
						<div class="well">
							<div class="row">
								<div class="col-md-2">
									<img class="album-thumb" :src="track.album.images[0].url" alt="">
									<span>{{track.album.name}}</span><br>
									<router-link :to="'/album/' + track.album.id" >View Album </router-link>
								</div>
								<div class="col-md-10">
									<h4>{{track.name}} </h4>
									<a :href="track.preview_url" target="_blank" class="btn btn-primary">Preview Track</a>
									<div>
										{{track.duration_ms | msMinute}} - 	Popularity: {{track.popularity}} <br>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>


			</div>

			<div v-if="errorMsg">
				<h1>Error Occurs: {{errorMsg}}</h1>
			</div>


	</div>
</template>

<script>
    export default{
        data(){
            return{
                id: this.$route.params.id,
                tracks: '',
                artist: '',
                errorMsg: ''
            }
        },
        filters: {
          msMinute: function(millseconds) {
						var seconds = Math.floor(millseconds / 1000);
						var days = Math.floor(seconds / 86400);
						var hours = Math.floor((seconds % 86400) / 3600);
						var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
						var timeString = '';


						if(days > 0) timeString += (days > 1) ? (days + " days ") : (days + " day ");
						if(hours > 0) timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
						if(minutes >= 0) timeString += (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");

						return timeString;
          }
        },
        created: function() {
					var tracksUrl = `https://api.spotify.com/v1/artists/${this.id}/top-tracks?country=TW`;
					var artistUrl = `https://api.spotify.com/v1/artists/${this.id}`;

          this.$http.get(tracksUrl)
            .then(function(e) {
              this.tracks = e.data.tracks;
            }, function(e) {
              this.errorMsg = e.data.error.message + ', status: ' + e.status
            })

					this.$http.get(artistUrl)
						.then(function(e) {
							this.artist = e.data;
						}, function(e) {
              this.errorMsg = e.data.error.message + ', status: ' + e.status
            })
        }
    }
</script>
