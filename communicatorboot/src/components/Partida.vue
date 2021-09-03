<template>

<div class="container-fluid" style="margin-top: 50px;">
	<div class="row">
		<!-- Marcador -->
		<div class="col">
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Estadisticas</button>
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
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Inventario</button>
					</h2>
					<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<p>Aqui van cosas</p>
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingThree">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Acciones</button>
					</h2>
					<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<p>Aqui van mas cosas</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Historia -->
		<div class="col">
			<div class="card" style="width: 55rem;">
				<img :src="getImgUrl(this.laimgdeaqui)" class="card-img-top" alt="laimgdeaqui">
				<div class="card-body">
					<h5 class="card-title">{{this.tituloaqui}}</h5>
					<p class="card-text">{{this.lahistdeaqui}}</p>
				</div>
				<div class="btn-group" role="group" aria-label="Basic mixed styles example">
					<button type="button" class="btn btn-secondary" @click="loadNewHistory()">Opcion1</button>
					<button type="button" class="btn btn-secondary" @click="loadNewHistory2()">Opcion2</button>
					<button type="button" class="btn btn-secondary" @click="loadNewHistory3()">Opcion3</button>
					<button type="button" class="btn btn-secondary" @click="loadNewHistory4()">Opcion4</button>
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
			tituloaqui: "Casa",
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
			this.tituloaqui = "Calle"
			this.laimgdeaqui = "street4.jpg",
			this.lahistdeaqui = "sales a la calle y...\npopopopopo\nhuhuhuhdjsha dkja h djksahdj khajkdhajk hdsjkas hdkjahsd jkshdkahd kjahsd kjs ahd kj aslk daj lkq wj diqw jdiqwj doqiw jdo iqwjdoqiwjdqwd jqwidj qwjdoi qwjdo we1qe1231  3123 1dq sd12 3e1 2 e1d12r123 12 312 fd 1fw2e1 2312d12e 2 3  2 3 d1 d1 w2d12 e3 12e d1 1de2ed 1 12d1 2 d12 ed12 e1 3 2d 12e2e 12d 12 fd12e 21 d1 2wfd12ed 12f 12f 12r 12e 13 3   e 2e"
		},
		loadNewHistory2(){
			this.tituloaqui = "Casa"
			this.laimgdeaqui = "room1.jpg",
			this.lahistdeaqui = "vuelves a tu cuarto y..."
		},
		loadNewHistory3(){
			this.tituloaqui = "Centro comercial"
			this.laimgdeaqui = "mall1.jpg",
			this.lahistdeaqui = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat mollis lobortis. Donec nec fringilla purus, ut elementum massa. Nullam iaculis lorem ac sem suscipit varius. Aliquam elementum orci id mauris rhoncus, in aliquet turpis tristique. Duis sed orci sed odio viverra pretium in in elit. Pellentesque vitae interdum arcu, sit amet ullamcorper urna. Quisque id fermentum enim. Sed ac nulla efficitur, rhoncus massa eu, auctor ligula. Praesent blandit porttitor elit, sit amet sagittis erat faucibus aliquam. Etiam cursus nunc sed odio consequat, eu dictum dui congue. Sed condimentum varius odio, sed venenatis metus lacinia a. Ut ut lorem et. "
		},
		loadNewHistory4(){
			this.tituloaqui = "Calle chunga"
			this.laimgdeaqui = "street5.jpg",
			this.lahistdeaqui = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper tincidunt dictum. Nulla suscipit est viverra erat faucibus placerat. Aliquam scelerisque neque magna, at blandit sapien eleifend vel. Suspendisse est libero, tempus et libero ut, ultrices placerat quam. Etiam non lacus quis purus auctor ornare nec vitae lacus. Nunc at elementum velit. Phasellus quis mi sed ipsum elementum porta ac in enim. Curabitur nec neque a eros luctus venenatis eget ut velit. Nunc rutrum blandit risus vestibulum tincidunt. Integer sed interdum odio. Donec dui orci, accumsan a aliquam quis, finibus suscipit risus. Nulla tristique, velit vitae egestas porttitor, nunc ante gravida tortor, ac placerat nisl arcu ut turpis. Etiam blandit purus et mi porttitor, vel efficitur ante volutpat. Suspendisse nisi ipsum, dictum vitae viverra sit amet, mattis vitae sem. Integer pulvinar nulla ac lorem cursus, vitae congue urna commodo. Curabitur ut felis eu purus dictum pulvinar malesuada et dui. Cras eget quam diam. Quisque non dolor nec dolor ornare viverra. Cras nec tellus sit amet turpis tempor laoreet. Quisque vitae posuere massa, non pharetra diam. Donec at varius tortor. Aliquam vel ex ut enim pretium posuere et id metus. Nunc elementum imperdiet est. Cras in urna nec sem convallis ornare. Mauris pharetra viverra metus, in tincidunt sapien lacinia at. Mauris id felis mauris. Sed aliquet elementum urna, in convallis tellus molestie vitae. Suspendisse molestie iaculis orci. Ut fermentum, leo eu fermentum tristique, tellus nunc rutrum erat, vel hendrerit orci ligula vel eros. Etiam elementum, nibh a lacinia faucibus, felis nisi imperdiet ante, sit amet vehicula mi mi ut nisl. Proin sollicitudin sem sit amet nulla gravida congue. Maecenas eleifend vehicula posuere. Vestibulum sit amet risus a magna eleifend congue sed gravida arcu. Sed aliquam congue eleifend. Suspendisse ligula orci, pharetra viverra consequat vitae, finibus in justo. Nulla facilisi. Donec ultricies consectetur scelerisque. Ut ut dolor porta, facilisis justo vitae, consectetur lorem. Aenean sollicitudin vulputate maximus. Donec accumsan odio nec dictum dictum. Sed pretium turpis at mi accumsan, vitae faucibus quam ullamcorper. Duis ornare hendrerit magna quis gravida. Sed semper in magna non dignissim. Donec egestas iaculis consectetur. Mauris at felis libero. Aliquam erat volutpat. Fusce nisi neque, ultrices eu diam sit amet, eleifend gravida enim. Nulla risus tortor, auctor non nulla nec, aliquam eleifend quam. Vivamus eget felis vitae dolor eleifend blandit. Nulla ullamcorper massa ex, quis pharetra urna luctus at. In hac habitasse platea dictumst. Curabitur sed orci mauris. "
		},
	},
	mounted() {
		//este metodo ya no hace nada
		this.getIdFromCookie()
		console.log("idp:"+this.idp+"img:"+this.myimage)
	}
}

</script>

<style>
	.card{
		max-width: 100%;

	}
	.test{
			height: 100%;
			margin-bottom: 50px;
	}

	@media screen and (max-width: 768px) {
		.test{
			width: 100%;
			object-fit: cover;
		}
	}
</style>