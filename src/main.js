import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';


//components
import Search from './components/search.component.vue';
import About from './components/about.component.vue';
import Track from './components/track.component.vue';
import Album from './components/album.component.vue';
import Artist from './components/artist.component.vue';
// import Playlist from './components/playlist.component.vue';
import TopTrack from './components/toptracks.component.vue';


//middleware
Vue.use(vueRouter);
Vue.use(vueResource);


const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: Search},
		{path: '/about', component: About},
		{path: '/track/:id', component: Track},
		{path: '/album/:id', component: Album},
		{path: '/artist/:id', component: Artist},
		// {path: '/playlist/:id', component: Playlist},
		{path: '/top-tracks/:id', component: TopTrack}


	],
	linkActiveClass: 'active'
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
