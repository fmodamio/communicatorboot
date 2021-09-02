<template>
<header>
  <!-- Background image -->
  <div
    class="p-5 text-center bg-image"
    style="
      background-image: url('https://images.unsplash.com/photo-1571125681108-52fcb1fdace2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');
      height: 200px;
      margin-top: 10px;
      background-size: cover;
    ">
    <div class="mask" >
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">COMMUNICATOR</h1>
          <h4 class="mb-3">Decide tu destino</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>
</template>

<script>
	export default {
		props: ['npl'],
	}
</script>

<style>
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