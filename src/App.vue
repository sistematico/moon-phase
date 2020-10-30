<template>
  <div id="app">
    <img :alt="this.moonprops.phase.name" :src="this.moonprops.phase.img" />
    <Moon :moonprops="moonprops" />
  </div>
</template>

<script>
import Moon from './components/Moon'

export default {
  name: 'App',
  components: {
    Moon
  },
  data() {
    return {
      moonprops: {
        title: 'Fases da Lua',
        phase: {
          name: '',
          img: '/img/moon/default.svg'
        }
      }
    }
  },
  methods: {
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
	    jd = c + e + day - 694039.09;		// jd is total days elapsed
      jd /= 29.5305882;				        // divide by the moon cycle

      
      b = parseInt(jd);						    // int(jd) -> b, take integer part of jd
      jd -= b;							          // subtract integer part to leave fractional part of original jd
      
      moon.cycle = jd
	    b = Math.round(jd * 8);			    // scale fraction from 0-8 and round

	    if (b >= 8) {
        b = 0;		//0 and 8 are the same so turn 8 into 0
      }
      
      //moon.cycle = parseInt(jd * 100)

	    switch (b) {
		    case 0:
			    moon.name = 'Lua Nova';
          moon.img = '/img/moon/nova.svg';
			  break;
		    case 1:
          // (côncava)
			    moon.name = 'Lua Crescente';
          moon.img = '/img/moon/crescente_concava.svg';
			  break;
		    case 2:
			    moon.name = 'Quarto Crescente';
          moon.img = '/img/moon/quarto_crescente.svg';
			  break;
		    case 3:
          // (convexa)
			    moon.name = 'Lua Crescente';
          moon.img = '/img/moon/crescente_convexa.svg';
			  break;
		    case 4:
			    moon.name = 'Lua Cheia';
          moon.img = '/img/moon/cheia.svg';
			  break;
		    case 5:
          //  (convexa)
			    moon.name = 'Lua Minguante';
          moon.img = '/img/moon/minguante_convexa.svg';
			  break;
		    case 6:
			    moon.name = 'Quarto Minguante';
          moon.img = '/img/moon/quarto_minguante.svg';
			  break;
		    case 7:
          //  (côncava)
			    moon.name = 'Lua Minguante';
          moon.img = '/img/moon/minguante_concava.svg';
			  break;
		    default:
			    moon.name = 'Erro';
          moon.img = '/img/moon/nova.svg';
	    }   
      return moon;
    }
  },
  mounted() {
    this.moonprops.phase = this.moonPhase(new Date().getFullYear(),new Date().getMonth(),new Date().getDate());
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

html, body {
  height: 100%;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* margin-top: 60px; */
}
</style>
