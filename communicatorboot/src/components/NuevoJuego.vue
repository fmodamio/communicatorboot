<template>
	<Header :npl="npl1"/>
	<div class="container">
		<div v-if="show1">
			<div class="container" style="width: 60%; margin-top: 100px; border: 2px; border-color: black;
			border-style: solid;
			background-color: whitesmoke;">
				<div class="mb-3">
					<label for="exampleFormControlInput1" class="form-label">Bienvenido jugador, ¿cómo podemos dirigirnos a ti?</label>
					<input v-model="nameplayer" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mi nombre es...">
				</div>
				<button class="btn btn-dark" type="submit" @click="postPlayer()" style="margin-top: 20px; margin-bottom: 30px;">Comenzar</button>
			</div>
		</div>
		<div v-if="show2">
			<Partida :idp="idplayer" :history="hist" :myimage="img"/>
		</div>
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

	.text1{
		margin-left: 150px;
	}

	@media screen and (max-width: 768px) {

		.text1{
			margin-left: 10px;
		}
	}
</style>