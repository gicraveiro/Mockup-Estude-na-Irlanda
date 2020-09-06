<template>
  <div class="page">
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
          aria-current-label="Current page">
      </b-pagination>
      
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" @click="isCardModalActive = true">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image">
                      <img src="@/assets/image1.jpg" alt="Imagehey">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p>R$ 3500</p>
                    <p>Dublin</p>
                  </div>
                </div>

                <div class="content">
                  Escola para brasileiros de língua inglesa. 
                </div>
              </div>
            </div>

            <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
              <div class="Modalcard">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="@/assets/image1.jpg" alt="Image">
                  </figure>
                </div>
                
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src="@/assets/image1.jpg" alt="ImageTEST">
                      </figure>
                    </div>
                    
                    <div class="media-content">
                      <p class="title is-4">Dublin</p>
                      <p class="subtitle is -6">Intercâmbio em Dublin é tudo de bom</p>
                    </div>
                  </div>

                  <div class="content">
                    Existem muitas escolas e oportunidades maravilhosas que você pode aproveitar.
                    É sério. <a>@bulmaio</a>
                    <a>#css</a> <a>#responsive</a>
                    <br>
                    <small>11:09 PM - 1 Jan 2016</small>
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
      order: 'is-centered',
      size: 'is-small',
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      isCardModalActive: false
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

section {
    background-color:#FF8C00
}

b-pagination {
  background-color: green;
  border: 5px;
}

.image {
  width:150px;
  margin: 0 auto;
}

.card {
  width:20rem;
  height: 180px;
  background-color: #FFFFFF;
  border-radius:15px;

}

.content {
  font-size: 15px;
  margin: 0 auto;
  border:none;
}

.Modalcard {
  background-color:white;
}

</style>
