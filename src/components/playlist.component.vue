<template>
		<div class="container">

			<!--<div id="single" v-if="track">-->
				<!--<header class="album-header">-->
					<!--<div class="row">-->
						<!--<div class="col-md-4">-->
							<!--<div v-if="track.album.images.length > 0">-->
								<!--<img :src="track.album.images[0].url" class="album-thumb" alt="">-->
							<!--</div>-->
						<!--</div>-->
						<!--<div class="col-md-8">-->
							<!--<h4 v-if="track.artists.length > 0">-->
			          <!--<span class="spacer" v-for="artist of track.artists">-->
			            <!--<router-link :to="'/artist/' + artist.id">{{artist.name}}</router-link>-->
			          <!--</span>-->
							<!--</h4>-->
							<!--<h2>{{track.name}}</h2>-->
							<!--<h5>Album Name: <router-link :to="'/album/' + track.album.id">{{track.album.name}}</router-link></h5>-->
							<!--<a :href="track.external_urls.spotify" target="_blank" class="btn btn-primary">View In Spotify</a>-->
						<!--</div>-->
					<!--</div>-->
				<!--</header>-->
			<!--</div>-->

		</div>
</template>

<script>
    export default{
        name: 'playlists',
        data(){
            return{
                id: this.$route.params.id,
                playlist: this.$route.query.href
            }
        },
        created: function() {

          this.$http.get(this.playlist)
            .then(function(e) {
            console.log(e)
              this.track = e.data;
            })

        }
    }
</script>
