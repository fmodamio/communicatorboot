<template>
		<!--<div class="historia">
			<div class="marco">
					<div class="portaimagen">
						<img class="test" :src="getImgUrl(this.laimgdeaqui)" v-bind:alt="laimgdeaqui">
					</div>
					<div class="portahistoria">
						<p class="hist">{{this.lahistdeaqui}}</p>
					</div>
					<div class="portabotones">
						<button class="button4" @click="loadNewHistory()">Opcion1</button>
						<button class="button4" @click="loadNewHistory2()">Opcion2</button>
						<button class="button4">Opcion3</button>
						<button class="button4">Opcion4</button>
					</div>
			</div>
			<div class="marcador">
					<p class="stats">vida: 100%</p>
					<p class="stats">hambre: 50</p>
					<p class="stats">sueño: 1000</p>
					<p class="stats">caca:2</p>
					<p class="stats">Sup. moral: 1000</p>
			</div>
		</div>-->
<div class="container-fluid" style="margin-top: 50px;">
	<div class="row">
		<div class="col">
			<div class="card" style="width: 45rem;">
				<img :src="getImgUrl(this.laimgdeaqui)" class="card-img-top" alt="laimgdeaqui">
				<div class="card-body">
					<h5 class="card-title">Casa</h5>
					<p class="card-text">{{this.lahistdeaqui}}</p>
				</div>
				<div class="container">
					<button type="button" class="btn btn-outline-primary" @click="loadNewHistory()">Opcion1</button>
					<button type="button" class="btn btn-outline-primary" @click="loadNewHistory2()">Opcion2</button>
					<button type="button" class="btn btn-outline-primary" @click="loadNewHistory()">Opcion3</button>
					<button type="button" class="btn btn-outline-primary" @click="loadNewHistory()">Opcion4</button>
				</div>
			</div>
		</div>
		<div class="col">
				<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Estadisticas
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
				<p><strong>vida:</strong> 100%</p>
				<p><strong>hambre:</strong> 50</p>
				<p><strong>sueño:</strong> 1000</p>
				<p><strong>caca:</strong> 2</p>
				<p><strong>Sup. moral:</strong> 1000</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Inventario
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Acciones
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

		</div>
	</div>
</div>

</template>

<script>

export default {
	name: 'Partida',
	props: ['idp','history','myimage'],
	data() {
		return {
			id: "",
			laimgdeaqui: this.myimage,
			lahistdeaqui: this.history,
		};
	},
	methods:{
		getIdFromCookie(){
			//ya no se recupera la cookie
			/*const id = this.$cookies.get("id")
			console.log(id);*/
		},
		getImgUrl(pic) {
			return require('@/assets/hist/'+pic)
		},
		loadNewHistory(){
			this.laimgdeaqui = "street4.jpg",
			this.lahistdeaqui = "sales a la calle y...\npopopopopo\nhuhuhuhdjsha dkja h djksahdj khajkdhajk hdsjkas hdkjahsd jkshdkahd kjahsd kjs ahd kj aslk daj lkq wj diqw jdiqwj doqiw jdo iqwjdoqiwjdqwd jqwidj qwjdoi qwjdo we1qe1231  3123 1dq sd12 3e1 2 e1d12r123 12 312 fd 1fw2e1 2312d12e 2 3  2 3 d1 d1 w2d12 e3 12e d1 1de2ed 1 12d1 2 d12 ed12 e1 3 2d 12e2e 12d 12 fd12e 21 d1 2wfd12ed 12f 12f 12r 12e 13 3   e 2e",
			console.log("yeah")
		},
		loadNewHistory2(){
			this.laimgdeaqui = "room1.jpg",
			this.lahistdeaqui = "vuelves a tu cuarto y...",
			console.log("yeah")
		}
	},
	mounted() {
		//este metodo ya no hace nada
		this.getIdFromCookie()
		console.log("idp:"+this.idp+"img:"+this.myimage)
	}
}

</script>

<style>
	.historia{
		margin-top: 200px;
		width: 100%;
		height: 750px;
		overflow: hidden;
		/*border-color: black;
		border-style: solid;
		background-color: black;*/
	}
	.marco{
		width: 50%;
		height: 750px;
		text-align: center;
		position: relative;
		top: 0%;
		left: 25%;
		float: left;
		background-size: cover;
		/*border: 2px;
		border-color: black;
		border-style: solid;*/
		background-color: transparent;
	}
	.hist{
		text-align: left;
		text-align: justify;
		text-justify: inter-word;
		color: whitesmoke;
		font-family: 'Roboto', sans-serif;
		margin-right: 40px;
		margin-left: 40px;
		margin-top: 40px;
		margin-bottom: 10px;
	}
	.stats{
		color:  red;
		margin-right: 10px;
		margin-left: 10px;
		margin-top: 5px;
		margin-bottom: 10px;
		font-size: 16px;
	}
	.marcador{
		/*position: relative;
		top:  0%;
		left: 10%;*/
		float: right;
		width: 15%;
		height: 200px;
		/*text-align: center;*/
		background-color: darkgrey;
		margin-right: 40px;
	}
	.test{
			height: 100%;
			margin-bottom: 50px;
	}
	.portaimagen{
		width: 100%;
		height: 450px;
		/*border: 2px;
		border-color: black;
		border-style: solid;
		background-color: blue;*/
	}
	.portahistoria{
		width: 100%;
		height: 200px;
		/*border: 2px;
		border-color: black;
		border-style: solid;*/
		background-color: #030119;
	}
	.portabotones{
		width: 100%;
		height: 75px;
		position: relative;
		bottom: 0;
		/*border: 2px;
		border-color: black;
		border-style: solid;
		background-color: green;*/
	}
	@media screen and (max-width: 768px) {
		.historia{
			margin-top: 100px;
		}
		.marco{
			width: 60%;
			height: 800px;
			text-align: center;
			position: relative;
			top: 0%;
			left: 20%;
			background-size: cover;
			/*border: 2px;
			border-color: black;
			border-style: solid;
			background-color: grey;*/
		}
		.marcador{
			/*position: relative;
			top:  0%;
			left: 10%;*/
			/*float: right;*/
			width: 15%;
			height: 200px;
			/*text-align: center;*/
			background-color: darkgrey;
			margin-right: 5px;
		}
		.stats{
			color: red;
			margin-right: 5px;
			margin-left: 5px;
			margin-top: 5px;
			margin-bottom: 5px;
			font-size: 8px;
		}
		.test{
			width: 100%;
			object-fit: cover;
		}
		.portaimagen{
			width: 100%;
			height: 250px;
			/*border: 2px;
			border-color: black;
			border-style: solid;
			background-color: blue;*/
		}
		.portahistoria{
			width: 100%;
			height: 350px;
			/*border: 2px;
			border-color: black;
			border-style: solid;
			background-color: yellow;*/
		}
		.portabotones{
			width: 100%;
			height: 75px;
			position: relative;
			bottom: 0;
			/*border: 2px;
			border-color: black;
			border-style: solid;
			background-color: green;*/
		}
	}
</style>