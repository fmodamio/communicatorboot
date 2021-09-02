<template>
	<div class="header">
		<h1>COMMUNICATOR</h1>
		<p class="nombrejugador">{{npl}}</p>
	</div> 
</template>

<script>
	export default {
		props: ['npl'],
	}
</script>

<style>
	.header {
		/*padding: 25px;*/
		width: 100%;
		height: 150px;
		text-align: center;
		background: #2c2d3f;
		color: white;
		font-family: 'Roboto', sans-serif;
		font-size: 25px;
		background-color: #030119;
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;
		/*background-image: url('~@/assets/universe.jpg');
		background-size: cover;*/

	}

	.nombrejugador {
		margin: 0;
		color: grey;
		text-align: right;
		font-size: 15px;
		margin-right: 15px;
	}

	@media screen and (max-width: 768px) {
		.header {
			width: 100%;
			height: 90px;
			text-align: center;
			background: #2c2d3f;
			color: white;
			font-family: 'Roboto', sans-serif;
			font-size: 15px;
			background-color: #030119;
			position: absolute;
			left: 0px;
			right: 0px;
			top: 0px;
			/*background-image: url('~@/assets/nasa2.jpg');
			background-size: cover;*/
		}

		.nombrejugador {
			margin: 0;
			color: grey;
			text-align: right;
			font-size: 10px;
			margin-right: 5px;
		}
	}
</style>