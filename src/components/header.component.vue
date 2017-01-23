<template>
	<nav class="navbar navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link class="navbar-brand" to="/" exact>vueSpotify</router-link>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li>
						<router-link to="/" exact>Home</router-link>
					</li>
					<li>
						<router-link to="/about">About</router-link>
					</li>
				</ul>
			</div><!--/.nav-collapse -->
		</div>
	</nav>
</template>

<script>
    export default{
        name: 'spotify-header',
        data(){
            return{
            }
        }
    }

</script>


<style>
	.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a.active {
		color: #2ebd59;
		font-weight: bolder;
	}


	a {
	color: #2ebd59;
}

.artist-header {
	padding-bottom: 20px;
	margin-bottom: 20px;
	border-bottom: solid 1px #333;
}

.artist-thumb {
	width: 80px;
	height: 80px;
	object-fit: cover;
	margin-right: 10px;
}

.flexy {
	display: flex;
	flex-flow: row wrap;
}

.main {
	border-bottom: 1px solid #333;
	padding: 30px 0;
}

.album {
	text-align: center;
	background: #333;
	padding: 10px 20px;
	border: 1px solid #666;
}

.album-thumb {
	width: 100%;
}

.artist-albums .well {
	margin-bottom: 20px;
	overflow: auto;
	min-height: 400px;
	display: flex;
	align-items: center;
}

.spacer {
	display: inline-block;
	margin: 0 5px;
}


</style>
