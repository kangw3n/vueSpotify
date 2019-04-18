<template>

	<div class="container">
		<h1>Need Music?</h1>
		<div class="lead">
			Use Spotify to listen music!
		</div>

		<form @submit="preventDefault">
			<div class="form-group">
				<input type="text" class="form-control" placeholder="Search Music..." name="searchStr" v-model="search" @keyup="searchString">
			</div>

			<select @change="changeType">
				<option v-for="i of types" :key="i">{{i}}</option>
			</select>

		</form>


		<div v-if="songs.length !== 0">
			<div v-for="(res, i) of songs" :key="i">
				<div class="row">
					<div class="col-md-12">
						<div class="search-res well">
							<h4>
								<!-- to do: track artists album-->
								<router-link :to="{path: queryType + '/' + res.id}">{{res.name}}</router-link>
								<!--<router-link :to="'/' + queryType + '/' + res.id ">{{res.name}}</router-link>-->
							</h4>

							<div v-if="res.genres">
								<strong>Genres: </strong>
								<span class="spacer" v-for="genre of res.genres">{{genre}}</span>
							</div>

							<div v-if="res.artists">
								<strong>Artists: </strong>
								<span class="spacer" v-for="artist of res.artists"><router-link :to="'/artist/' + artist.id">{{artist.name}}</router-link></span>
							</div>

							<div v-if="res.album">
								<strong>Album: </strong>
								<span class="spacer"><router-link :to="'/album/' + res.album.id" @click="">{{res.album.name}}</router-link></span>
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>


		<div v-if="errorMsg">
			<h3>Error Occurs: {{errorMsg}}</h3>
		</div>


	</div>


</template>


<script>
		import _ from 'lodash';

    export default{

        data(){
            return{
                types: ['track', 'album', 'artist'],
                search: '',
                songs: [],
                queryType: 'track',
                errorMsg: '',
                guidance: ''
            }
        },
        methods: {
					searchString : _.debounce(function(e) {
						this.search = e.target.value || this.search;

						if (!this.search.length) {
							this.songs = [];
							this.errorMsg = 'No Results Found!';
							return;
						}

						this.searchMusicServices();

					}, 1000),

					searchMusicServices() {
						const getSongUrl =  `https://api.spotify.com/v1/search?query=${this.search}&offset=0&limit=20&type=${this.queryType}&market=TW`;
						this.$http.get(getSongUrl)
							.then(function(res) {
								this.songs = res.data[this.queryType + 's'].items;
								this.errorMsg = '';
							}, function(err) {
								this.errorMsg = err.statusText;
							})
					},

	        changeType(e) {
						var selected = e.target.value;
						this.queryType = e.target.value;
						if (this.search.length) this.searchMusicServices();
	        },

	        preventDefault(e) {
	          e.preventDefault();
	          this.searchMusicServices();
	        }
        }
    }


</script>

<style scoped>



</style>
