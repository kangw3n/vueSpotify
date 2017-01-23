<template>
	<div id="app" >
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

    }
  }
}


</script>

