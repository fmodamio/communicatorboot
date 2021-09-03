<template>
<header>
  <!-- Background image -->
  <div
    class="p-5 text-center cover"
    style="
      height: 200px;
      background-size: cover;
    ">
    <div class="mask" >
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="display-1">COMMUNICATOR</h1>
          <h4 class=".font-weight-normal text-black">Elige tu destino</h4>
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
	.cover{
		/*color: rgb(255, 255, 255);*/
		/*position: relative;*/
		height: 200px;
		background: url("../assets/header3.jpg") no-repeat;
	}
	@media screen and (max-width: 768px) {
    .cover{
    /*color: rgb(255, 255, 255);*/
    /*position: relative;*/
    height: 200px;
    background: url("../assets/header4.jpg") no-repeat;
  }
	}
</style>