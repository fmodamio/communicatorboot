<template>
	<Header/>
	<div class="container intro">
		<figure class="text-end" style="margin-top:50px;">
			<blockquote class="blockquote">
				<p>Si la felicidad prevista no llega a materializarse, siempre está la posibilidad de echarle la culpa a una elección equivocada antes que a nuestra incapacidad para vivir a la altura de las oportunidades que se nos ofrecen.</p>
			</blockquote>
			<figcaption class="blockquote-footer">Zygmunt Bauman</figcaption>
		</figure>
		<figure class="text-end" style="margin-top:50px;">
			<blockquote class="blockquote">
				<p>Uno de los más grandes errores es juzgar a los políticos y sus programas por sus intenciones, en vez que por sus resultados.</p>
			</blockquote>
			<figcaption class="blockquote-footer">Milton Friedman <cite title="aka Morgan Freeman">aka Morgan Freeman</cite></figcaption>
		</figure>
		<figure class="text-end" style="margin-top:50px;">
			<blockquote class="blockquote">
				<p>Me comí una hamburguesa y el juego me llamó alienado. ¡Fue genial!”</p>
			</blockquote>
			<figcaption class="blockquote-footer">Pupi24 <cite title="Communicator">Communicator</cite></figcaption>
		</figure>
	</div>
	<div class="container" style="margin-top: 100px; margin-bottom: 50px; border: 2px;
		border-color: black;
		border-style: solid;
		background-color: whitesmoke;
		padding: 35px;
		text-align: justify;">
		<p>Bienvenido a COMMUNICATOR, un juego inspirado en la vida cotidiana y basado en algunas de las doctrinas filosóficas que defienden la capacidad de libre elección del ser humano y el valor teleológico de sus decisiones.</p>
		<p>El equipo humano detrás de la ideación y programación de esta tosca simulación vital está en profundo desacuerdo con dichas doctrinas en general y sus axiomas en particular. De hecho, las considera perniciosas para la vida, o cuanto menos, meros instrumentos adaptativos al servicio del poder para el control de las masas a lo largo de la historia.</p>
		<p>En los últimos siglos de este mundo, cada vez más globalizado y coMMunicado, estas teorías aparentemente “buenas” para el ser humano han sido utilizadas, con total desvergüenza, para sustentar ideologías de lo más diversas, desde aquellas que se aferran agresivamente a la idea del individuo, hasta aquellas que intentan regular los sistemas colectivos más utópicos.</p>
		<p>Pero quizá es pronto todavía para comprender las profundas relaciones entre COMMUNICATOR y el día a día de todos nosotros, o con “la sociedad del cansancio”, según la describe Byung-Chul Han, incluso con el Tao, o con el legado de la Unión Soviética durante el periodo estalinista, por ejemplo.</p>
		<p>Tras una experiencia superficial, para muchos, este juego será una tontería. Perfecto, no fue pensado para ellos. Sin embargo, tras unas cuantas partidas, la experiencia adquirida permitirá a los jugadores más reflexivos profundizar sobre algunos conceptos, y pronto estas relaciones serán evidentes para los jugadores más intuitivos, y a la larga, una cuestión obvia para todos.</p>
		<p>El jugador no debe olvidar en ningún momento que objetivo principal es entretener a los usuarios, el equipo humano no se hace responsable de los posibles cambios en la cosmovisión tras las primeras partidas, ni de los posibles paralelismos que puedan establecer con sus propias vidas, ni muchísimo menos de las metalecturas e ironías implícitas en el propio juego.</p>
		<p>Un consejo al jugador primerizo:
		No se confíe, ya que aquí, como en la vida, nada es lo que parece…</p>
	</div>
	<div class="container" style="margin-bottom: 20px; width: 30%">
		<div class="d-grid gap-2">
			<button class="btn btn-dark" type="button" @click="goToNewGame()">EMPEZAR</button>
			<button class="btn btn-dark" type="button" @click="goToGoogle()">SALIR</button>
			<button class="btn btn-secondary" type="button" @click="goToAbout()">ACERCA DEL JUEGO</button>
		</div>
	</div>
</template>

<script>
import Header from './Header.vue'

export default {
	name: 'Inicial',
	components: {
		Header,
	},
	methods:{
		goToNewGame(){
			this.$router.push('/juego'); 
		},
		goToGoogle(){
			window.location.href = "https://google.com/contact";
		},
		goToAbout(){
			window.location.href = "https://geohack.toolforge.org/geohack.php?pagename=La_Libertad,_Chontales&params=12_13_N_85_10_W_region:NI_type:city(11429);"
		}
	}
}
</script>

<style>
	.intro{
		margin-top: 100px; margin-bottom: 100px; border: 2px;
		border-color: black;
		border-style: solid;
		background-color: whitesmoke;
	}
	p{

		/*text-align: left;
		text-align: justify;
		text-justify: inter-word;
		color: aqua;
		color: black;
		font-family: 'Roboto', sans-serif;
		margin-right: 150px;
		margin-left: 150px;
		margin-top: 40px;
		margin-bottom: 40px;*/
	}
	body{
		/*background-image: url('~@/assets/nasa2.jpg');
		background-color: #030119;
		background-size: cover;
		background-repeat: no-repeat;*/
		background: #607D8B !important; 
	}

	@media screen and (max-width: 768px) {
		.intro{
			margin-top: 100px; 
			margin-bottom: 100px;
			margin-right: 5px;
			margin-left: 50px;
			border: 2px;
			border-color: black;
			border-style: solid;
			background-color: whitesmoke;
		}
		p{
			text-align: left;
			text-align: justify;
			text-justify: inter-word;
			color: black;
			font-family: 'Roboto', sans-serif;
			margin-right: 10px;
			margin-left: 10px;
			margin-top: 40px;
			margin-bottom: 40px;
		}
		body{
			/*background-image: url('~@/assets/space2.jpg');
			background-color: #030119;
			background-size: auto;
			background-repeat: no-repeat;*/
		}
	}
</style>