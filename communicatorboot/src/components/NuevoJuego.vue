<template>
	<Header :npl="npl1"/>
	<div v-if="show1">
		<div class="presentacion">
			<p>Bienvenido jugador, ¿cómo podemos dirigirnos a ti?</p>
			<input v-model="nameplayer" placeholder="mi nombre es..." class="text1" v-bind:style="{
			textAlign:'left', backgroundColor: 'white'}">
		</div>
		<button class="button1" @click="postPlayer()">Comenzar</button>
	</div>
	<div v-if="show2">
		<Partida :idp="idplayer" :history="hist" :myimage="img"/>
	</div>
</template>

<script>
import Header from './Header.vue'
import Partida from './Partida.vue'
import axios from 'axios'

export default {
	name: 'NuevoJuego',
	data() {
		return {
			show1: true,
			show2: false,
			nameplayer: "",
			idplayer:"",
			hist:"",
			img:"",
			npl1:""
		};
	},
	components: {
		Header, Partida
	},
	methods:{
		postPlayer(){
			axios.post('http://192.168.1.43:8000/api/player/', {
				nombre: this.nameplayer,
				//ya se revisaran los headers
				/*headers:{
					'Access-Control-Allow-Origin': '*',
					'Content-type': 'application/json',
				}*/
			})
			.then(response => {
				//console.log(response.data.id)
				//ya no hace falta cookie
				//this.$cookies.set('id', response.data.id, "86400")
				//ni redirigir, ya que se carga el componente Partida
				//this.$router.push('/game')
				this.show1 = false
				this.show2 = true
				this.idplayer = response.data.id
				this.npl1 = "Jugador: " + this.nameplayer
				this.hist = "La historia vendra de la llamada a la API"
				this.img = "room1.jpg"
				//asi se pasaba el id del jugador como parametro get
				/*this.$router.push({
					path: '/game',
					query: {
						id: this.game || response.data.id
					}
				})*/
			})
			.catch(function (error) {
				console.log(error)
			})
		}
	}
}

</script>

<style>
	.presentacion{
		margin-top: 300px;
		margin-bottom: 40px;
	}
	.button1{
		background-color: #008CBA;
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin-right: 150px;
		margin-left: 150px;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.button2{
		/*margin: 0;
		position: absolute;
		left: 45%;*/
		background-color: transparent;
		border: none;
		color: aqua;
		font-family: 'Roboto', sans-serif;
		/*padding: 15px 32px;*/
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 25px;
		font-weight:700;
	}

	.button3{
		/*margin: 0;
		position: absolute;
		left: 45%;*/
		background-color: transparent;
		border: none;
		color: grey;
		font-family: 'Roboto', bold;
		/*padding: 15px 32px;*/
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 25px;
		font-weight:700;
	}

	.button4{
		background-color: royalblue;
		border: none;
		color: yellowgreen;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin-right: 10px;
		margin-left: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.text1{
		margin-left: 150px;
	}

	@media screen and (max-width: 768px) {
		.presentacion{
			margin-top: 200px;
			margin-bottom: 40px;
		}
		.botonazul{
			
		}
		.button1{
			background-color: #008CBA;
			border: none;
			color: white;
			padding: 15px 32px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			margin-right: 150px;
			margin-left: 10px;
			margin-top: 0px;
			margin-bottom: 0px;
		}

		.button2{
			/*margin: 0;
			position: absolute;
			left: 30%;*/
			background-color: transparent;
			border: none;
			color: aqua;
			font-family: 'Roboto', bold;
			/*padding: 15px 32px;*/
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 25px;
		}

		.button3{
			/*margin: 0;
			position: absolute;
			left: 30%;*/
			background-color: transparent;
			border: none;
			color: grey;
			font-family: 'Roboto', bold;
			/*padding: 15px 32px;*/
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 25px;
		}

		.button4{
			background-color: royalblue;
			border: none;
			color: yellowgreen;
			/*padding: 15px 32px;*/
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 10px;
			margin-right: 10px;
			margin-left: 10px;
			margin-top: 10px;
			margin-bottom: 10px;
		}

		.text1{
			margin-left: 10px;
		}
	}
</style>