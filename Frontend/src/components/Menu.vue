<template>
  <div class="page">
    <!-- unico elemento -->
    <template>
      <b-navbar style="z-index:1;" transparent="true" >
        <template slot="start">
          <b-navbar-item tag="div">
            <b-icon icon="filter-outline"></b-icon>
          </b-navbar-item>
          <b-navbar-item tag="div">
            <label id="filtro">Filtros:</label>
          </b-navbar-item>

          <b-dropdown class="vertical-center">
            <button class="green" slot="trigger" hoverable="true">
              <p>Cidades</p>
            </button>
            <b-navbar-item class="container">
              <b-checkbox>Dublin</b-checkbox>
              <b-checkbox>Dublin</b-checkbox>
            </b-navbar-item>
          </b-dropdown>

          <b-navbar-item tag="div">
            <b-navbar-dropdown class="green" label="Cidades" arrowless="true" hoverable="true">
              <b-navbar-item class="container" tag="div">
                <b-checkbox>Dublin</b-checkbox>
                <b-checkbox>Dublin</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown class="green" label="Horário" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-checkbox class="dropdown" v-model="checkboxGroup" native-value="Manhã">Manhã</b-checkbox>
                <b-checkbox class="dropdown" v-model="checkboxGroup" native-value="Tarde">Tarde</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Noite">Noite</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Sabado">Sabado</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item class="green">
            <b-navbar-dropdown label="Aula" class="green" boxed="true" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-checkbox v-model="checkboxGroup" native-value="General">General</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Business">Business</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item >
            <b-navbar-dropdown label="Vagas" style="color:white;" class="green" boxed="true" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-checkbox v-model="checkboxGroup" native-value="Abertas">Abertas</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Fechado">Fechado</b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Em breve">Em breve</b-checkbox>
              </b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Data" class="green" boxed="false" arrowless="true" hoverable="true">
              <b-navbar-item class="container">
                <b-field>
                  <label>Início: </label>
                  <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                  </b-datepicker>
                </b-field>
                <b-field>
                  <label>Fim: </label>
                  <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus>
                  </b-datepicker>
                </b-field>
              </b-navbar-item>  
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item class="text-green" tag="div">
            <label>ordenar por:</label>
          </b-navbar-item>

          <b-navbar-item class="orange">
            <b-navbar-dropdown label="preço">
              <b-navbar-item>preço</b-navbar-item>
              <b-navbar-item>nota</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item class="text-green" tag="div">
            <label>valor:</label>
          </b-navbar-item>

          <b-navbar-item size="lg">
            <b-slider></b-slider>
          </b-navbar-item>
        </template>

        <template slot="end"></template>
      </b-navbar>
    </template>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
/*      sportsData: [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' },
        { Id: 'game4', Game: 'Golf' },
        { Id: 'game5', Game: 'Cricket' },
        { Id: 'game6', Game: 'Handball' },
        { Id: 'game7', Game: 'Karate' },
        { Id: 'game8', Game: 'Fencing' },
        { Id: 'game9', Game: 'Boxing' }
      ],
      fields : { text: 'Game', value: 'Id' }
*/    };

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*
.center { 
  margin:auto;  
}*/ /*nao funciona*/
/*
button {
  background-color: brown;
}*/

#filtro {
  font-size: 25px;
  font-weight: bold;
}

.vertical-center {
  top: 75%;
  transform: translateY(-50%);
}

.green { /* a maior parte não funciona no navegador*/
  background-color: #6B8E23;
  border-radius:10px;
  color: white;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
  margin:0px;
}

.green:hover {
  background-color:orange;
  color: white;
}

.container {
  background-color: white;
  color: orange;
  display:flex;
  justify-content:left;
}
/*
.orange {
  color: orange;
}*/

.text-green /*:not(#filtro, b-navbar b-checkbox)*/{
  color: #6B8E23;
  font-size: 20PX;
  font-weight: bold;
}

/*
.dropbtn {
  background-color: #435FF4;
  border-radius:25px;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer; 
}*/
/*
.dropdown {
  background-color: #6B8E23;
  color: white;
}*/
/*
.b-navbar-item.b-navbar-dropdown.b-checkbox {
  display: inline;
  background-color: blue;
}*/

</style>
