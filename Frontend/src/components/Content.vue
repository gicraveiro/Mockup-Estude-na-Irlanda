<template>
  <section class="hero is-fullheight">

<!-- PAGINATION  -->
    <b-pagination
      class="padding"
      total=20
      v-model="current"
      range-before=3
      range-after=3
      order="is-centered"
      size="is-small"
      per-page=1
      icon-prev="chevron-left"
      icon-next="chevron-right"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    ></b-pagination>

<!-- LISTA DE CARDS -->
    <div class="row" >
      <div class="padding" v-for="(item,index) in listacards">
  <!-- CARD -->
        <div class="card" @click="isCardModalActive = true">
      <!-- SEÇÃO SUPERIOR DO CARD -->
          <div class="media">
        <!-- IMAGEM DO CARD -->
            <figure class="image">
              <img src="@/assets/image.png" alt="Imagehey" />
            </figure>

            <div class="card-title">
          <!-- ESTRELAS -->                
              <b-icon icon="star"></b-icon>
              <b-icon icon="star"></b-icon>
              <b-icon icon="star"></b-icon>
              <b-icon icon="star"></b-icon>
              <b-icon icon="star-outline"></b-icon>
        <!-- TITULO DO CARD -->
              <p>R$ 3500</p>
              <p>Dublin</p>
            </div>
          </div>

      <!-- SEÇÃO INFERIOR DO CARD -->
        <!-- TEXTO -->
          <div class="content">
            Escola para brasileiros de língua inglesa.
          </div>

        </div>
    <!-- MODAL DENTRO DO CARD -->
        <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <!-- CARROUSEL COM AS IMAGENS GRANDES -->
          <b-carousel class="white-background">
            <b-carousel-item v-for="(carousel,i) in carousels" :key="i">
              <div class="card-image">
                <img src="@/assets/imagebig.png" alt="Image" />
              </div>
            </b-carousel-item>
          </b-carousel>
      <!-- MODAL A - TEXTO -->
          <div class="modalA" v-if="type === 'A'">

            <div class="modal-card-title">
                <div class="left">Escola para brasileiros de língua inglesa</div>
                <div class="right">Dublin</div>
            </div> 

            <p class="texto">
                Intercâmbio em Dublin é tudo de bom <br>
                texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto
              </p>
      <!-- MINICARDS DENTRO DO MODAL -->
            <div class="cards-do-modal">

              <div class="card">
                <div class="modal-card-title">
                  <div class="left">Dublin</div>
                  <div class="right">R$ 3500</div>
                </div> 
                  
                <div class="content">
                  20hs semanais <br>
                  Inicio 20/08/2021 <br>
                  Fim 10/11/2021 <br>
                  Material Incluso <br>
                </div>
      <!-- BOTÕES DO MINICARD DO MODAL -->
                <b-button @click="cardPageB">Saiba Mais</b-button>
                <b-button @click="cardPageC" class="buttonB">Inscrever-se</b-button>
              </div>

            </div>

          </div>

      <!-- MODAL B - TEXTO -->
          <div class="modalB" v-if="type === 'B'">
            <div class="modal-card-title">
                <div class="left">Escola para brasileiros de língua inglesa</div>
                <div class="right">Dublin</div>
            </div> 

            <p class="texto">
                MODAL B
              </p>
      <!-- MINICARDS DENTRO DO MODAL -->
            <div class="white-background">
              MODULO 1
            </div>

      <!-- BOTÕES DO MINICARD DO MODAL -->
            <b-button @click="cardPageA">Voltar</b-button>
            <b-button @click="cardPageC" class="buttonB">Inscrever-se</b-button>
          </div>

      <!-- MODAL C - TEXTO -->
          <div class="modalC" v-if="type === 'C'">
            <div class="modal-card-title">
                <div class="left">Escola para brasileiros de língua inglesa</div>
                <div class="right">Dublin</div>
            </div> 
            <div class="container">
              <p class="texto">
                MODAL C
              </p>
           <!-- BOTÕES DO MINICARD DO MODAL -->
            <b-button @click="cardPageA">Voltar</b-button>
          </div>    
            </div>
        </b-modal> 
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "Content",
  methods:{
    cardPageA(){
      this.type="A";
    },
    cardPageB() {
      this.type="B";
    },
    cardPageC (){
      this.type="C"
    }
  },
  data() {
    return {
      current: 1, /* marca página atual no pagination */
      isCardModalActive: false, /* indica se o modal está na tela no momento*/
      carousels:[ /* diferentes páginas do carousel */
        {},{},{}
      ],
      listacards: [ /* vetor de cards */
        {},{},{}
      ],
      type:"A", /* indica modelo do card do modal a ser exibido */
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section { /* plano de fundo do componente */
  background-color: #ff9811;
}
.padding { /* padding dos cards e pagination */
  padding:1rem;
}
.image { /* tamanho da imagem do card */
  width: 160px;
}

.card-image { /* tamanho da imagem do modal */
  height:400px;
}

.card { /* card */
  width: 20rem;
  height: 150px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 0; /* posicionar imagem do card*/
  color: black;
}

.card-title { /* titulo do card */
  text-align: center;
}

.modal-card-title { /* titulos dentro do modal */
  clear:both;
  font-weight:bold;
  font-size: 1.25rem;
}

.left { /* titulo do card à esquerda */
  float:left;
}
.right { /* titulo do card à direita */
  text-align:right;
}

.texto { /* texto dos modais */
  text-align:justify;
  font-size:1.25rem;
  color:black;
  padding-top:1rem;
}

.cards-do-modal .modal-card-title { /* titulo dos minicards do modal */
  color:white;
  font-size: 20px;
}

.cards-do-modal .card { /* minicards dos modais */
  height: 230px;
  padding:1rem;
  margin:2rem;
  background-color:#ff9811;
  color: white !important;
  text-align:left;
  font-family: arial;
  font-weight: bold;
}

.content { /* texto de todos os cards */
  font-size: 15px; 
}

.modalA .button, .modalC .button, .modalB .button { /* botões saiba mais e voltar */
  background-color: white;
  color: #6DA544;
  border-radius:15px;
  font-weight:bold;
  border-color:white;
}

.modalA { /* card A */
  background-color: white;
}
.modalB { /* card B */
  background-color: #ff9811;
  color: white;
}
.modalC , .cardA .buttonB, .modalB .buttonB  { /* card C e botões inscrever-se */
  background-color: #6DA544;
  color:white;
  border-color: #6da544;
}
</style>
