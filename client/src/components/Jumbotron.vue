<script>
export default {
  name: "Jumbotron",
};
</script>

<template>

<section>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000" >
        <img src="../assets/img-web-1.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-dark">
            <h2 >Welcome to U Can Cinema</h2>
            <p>Enjoy Your Watching</p>
          </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000" >
        <img src="../assets/img-web2.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" >
        <img src="../assets/img-web3.png" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section>
    
</template>