<template>
<header>
  <!-- Background image -->
  <div
    class="p-5 text-center bg-image"
    style="
      background-image: url('https://images.unsplash.com/photo-1571125681108-52fcb1fdace2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');
      height: 200px;
      background-size: cover;
    ">
    <div class="mask" >
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-black">
          <h1 class="display-1">COMMUNICATOR</h1>
          <h4 class="display-6">Decide tu destino</h4>
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

	@media screen and (max-width: 768px) {
	}
</style>