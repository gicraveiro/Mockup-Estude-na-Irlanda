<template>
  <div class="contentComponent">
    <section class="hero is-fullheight">
      <b-pagination
        :total="total"
        v-model="current"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :per-page="perPage"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      ></b-pagination>

      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" @click="isCardModalActive = true">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image">
                      <img src="@/assets/image.png" alt="Imagehey" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <b-icon icon="star"></b-icon>
                    <b-icon icon="star"></b-icon>
                    <b-icon icon="star"></b-icon>
                    <b-icon icon="star"></b-icon>
                    <b-icon icon="star-outline"></b-icon>
                    <p>R$ 3500</p>
                    <p>Dublin</p>
                  </div>
                </div>

                <div class="content">Escola para brasileiros de língua inglesa.</div>
              </div>
            </div>

            <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
              <div class="Modalcard">
                <b-carousel>
                  <b-carousel-item v-for="(carousel,i) in carousels" :key="i">
                    <div class="card-image">
                      <figure class="bigimage">
                        <img src="@/assets/imagebig.png" alt="Image" />
                      </figure>
                    </div>
                  </b-carousel-item>
                </b-carousel>

                <div class="card-content">

                  <div class="media">

                    <div class="media-content">
                      <p class="title is-4">Dublin</p>
                      <p class="subtitle is -6">
                        Intercâmbio em Dublin é tudo de bom <br>
                        texto texto texto texto texto texto texto texto texto
                        texto texto texto texto texto texto texto texto texto
                        texto texto texto texto texto texto texto texto texto
                        texto texto texto texto texto texto texto texto texto
                      </p>
                    </div>
                  </div>

                  <div class="content">

                  </div>

                  <div class="cards-do-modal">

                  </div>

                </div>

              </div>

            </b-modal> 
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      total: 20,
      current: 1,
      perPage: 1,
      rangeBefore: 3,
      rangeAfter: 3,
      order: "is-centered",
      size: "is-small",
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isCardModalActive: false,
      carousels:[
        {},{},{}
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-color: #ff9811;
}

.image {
  width: 160px;
  margin: 0 auto;
  border-radius: 15px;
}

.card-image {
  height:400px;
}

.card {
  width: 20rem;
  height: 180px;
  background-color: #ffffff;
  border-radius: 15px;
}

.card-content {
  padding: 0; /* posicionar imagem do card*/
}

.media-content {
  text-align: center;
  /*vertical-align:bottom;
  height:50px;*/ /* nao funciona */
}
.content {
  font-size: 15px;
}

.Modalcard {
  background-color: white;
}
</style>
