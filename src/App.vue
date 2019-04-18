<template>
	<div id="app">
		<spotify-header/>

		<div class="main">

				<router-view></router-view>

		</div>
	</div>
</template>

<script>
import HeaderComponent from './components/header.component.vue';


export default {
  name: 'app',
  components: {
    'spotify-header' : HeaderComponent
  },
  data () {
    return {
      token: ''
    }
  },
  created() {
    this.$http.get('http://slimapp:8181/token').then(response => {
      // get body data
      Vue.http.headers.common['Authorization'] = `Bearer ${response.body.token}`;
    });
  }
}


</script>

