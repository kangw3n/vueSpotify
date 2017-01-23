<template>
		<div class="container">

			<div v-if="artist">
				<header class="artist-header clearfix">

					<h1>
			    <span v-if="artist.images.length > 0">
				    <img :src="artist.images[0].url" class="artist-thumb img-circle" alt="">
			    </span>
						{{artist.name}}
					</h1>
					<p v-if="artist.genres.length > 0">
						Genres: <span class="spacer" v-for="genres of artist.genres">{{genres}}</span>
					</p>
					<div class="col-md-3">
						<router-link :to="'/top-tracks/' + artist.id" class="btn btn-success">View all Tracks</router-link>
					</div>
				</header>

				<form id="albumFilter">
					<div class="form-group">
						<label class="control-label" for="inputDefault">Filter Album</label>
						<input type="text" v-model="term" name="albumFilter" class="form-control" id="inputDefault" @keyup="changed">
					</div>
				</form>

				<div class="artist-albums">
					<div class="row flexy">

						<div class="col-md-3 well" v-for="album of filteredTerm">
							<div class="album" v-if="album.images.length > 0">

								<img class="album-thumb img-thumbnail" :src="album.images[0].url" alt="">
								<h4>{{album.name}}</h4>
								<router-link :to="'/album/' + album.id" class="btn btn-default btn-block">Album Details</router-link>

							</div>
						</div>


					</div>
				</div>

			</div>

			<div v-if="errorMsg">
				<header class="artist-header clearfix">
					<h3> Request Error: {{errorMsg}}</h3>
					<h2 v-if="albumMsg">{{albumMsg}}</h2>
				</header>

			</div>


		</div>
</template>

<script>
    export default{
        data(){
            return{
                id: this.$route.params.id,
                artist: '',
                albums: '',
                term: '',
                errorMsg: '',
                albumMsg: ''
            }
        },
        computed: {
          filteredTerm() {
            var term = this.term;
						if (this.albums !== '' && this.term !== '') {
						  return this.albums.filter(function(item) {
	              return item.name.indexOf(term) > -1;
	            });
						} else {
							return this.albums;
						}
          }

        },
        methods:{
          changed: function() {
            console.log(this.term);

          }
        },
        created: function() {
					let artistUrl = `https://api.spotify.com/v1/artists/${this.$route.params.id}`;
					let albumsUrl = `https://api.spotify.com/v1/artists/${this.$route.params.id}/albums`;

          this.$http.get(artistUrl)
            .then(function(e) {
              this.artist = e.data;
            }, function(err) {
              this.errorMsg = err.message || err;
            });

          this.$http.get(albumsUrl)
            .then(function(e) {
              this.albums = e.data.items;
            }, function(err) {
              this.albumMsg = err.statusText || err.message;
            })

        }
    }
</script>
