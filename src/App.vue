<template>
  <div id="app">
    <img alt="Moon Phase" src="./assets/logo.png" />
    <Moon :moonprops="moonprops" />
  </div>
</template>

<script>
import Moon from './components/Moon'
import './scripts/moon'

export default {
  name: 'App',
  components: {
    Moon
  },
  data() {
    return {
      moonprops: {
        title: 'Moon Phase',
        phase: 'Loading...'
      }
    }
  },
  methods: {
    getMoon() {
      this.moonprops.phase = this.moonPhase(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
    },
    moonPhase(year, month, day) {
      // Source: http://jivebay.com/calculating-the-moon-phase/
      // Modified from http://www.voidware.com/moon_phase.htm
    
	    let c, e, jd, b = 0;
      let moon = {};

	    if (month < 3) {
		    year--;
		    month += 12;
	    }

	    ++month;

	    c = 365.25 * year;
	    e = 30.6 * month;
	    jd = c + e + day - 694039.09;		//jd is total days elapsed
	    jd = jd / 29.5305882;				//divide by the moon cycle
	    b = parseInt(jd);						//int(jd) -> b, take integer part of jd
	    jd -= b;							//subtract integer part to leave fractional part of original jd
	    b = Math.round(jd * 8);				//scale fraction from 0-8 and round

	    if (b >= 8 ) {
		    b = 0;		//0 and 8 are the same so turn 8 into 0
	    }

	    switch (b) {
		    case 0:
			    moon.name = 'Lua Nova';
          moon.img = 'nova.png';
			  break;
		    case 1:
			    moon.name = 'Lua Crescente (côncava)';
          moon.img = 'nova.png';
			  break;
		    case 2:
			    moon.name = 'Quarto Crescente';
          moon.img = 'nova.png';
			  break;
		    case 3:
			    moon.name = 'Lua Crescente (convexa)';
          moon.img = 'nova.png';
			  break;
		    case 4:
			    moon.name = 'Lua Cheia';
          moon.img = 'nova.png';
			  break;
		    case 5:
			    moon.name = 'Lua Minguante (convexa)';
          moon.img = 'nova.png';
			  break;
		    case 6:
			    moon.name = 'Quarto Minguante';
          moon.img = 'nova.png';
			  break;
		    case 7:
			    moon.name = 'Lua Minguante (côncava)';
          moon.img = 'nova.png';
			  break;
		    default:
			    moon.name = 'Erro';
          moon.img = 'nova.png';
	    }    
      return moon.name;
    }
  },
  mounted() {
    this.getMoon()
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");
#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
