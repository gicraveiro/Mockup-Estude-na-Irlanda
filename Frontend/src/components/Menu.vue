<template>
  <div class="page">
    <!-- unico elemento -->
    <template>
      <b-navbar class="center" >
        <template slot="start">
          <b-navbar-item>
            <b-icon icon="filter-outline"></b-icon>
          </b-navbar-item>
          <b-navbar-item>
            <label id="filtro">Filtros:</label>
          </b-navbar-item>
<!--
          <b-navbar-item>
            <ejs-multiselect id='multiselect' :dataSource='sportsData' placeholder="Find a game" mode="CheckBox" :fields='fields'></ejs-multiselect>
          </b-navbar-item>
-->
          <b-navbar-item>
            <b-navbar-dropdown label="Cidades" class="green" boxed="true" arrowless="true" hoverable="true">
              <div class="container">
                <b-checkbox>Dublin</b-checkbox>
                <b-checkbox>Dublin</b-checkbox>
              </div>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown class="dropbtn" label="Horário" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox class="dropdown" v-model="checkboxGroup" native-value="Manhã">Manhã</b-checkbox>
              <b-checkbox class="dropdown" v-model="checkboxGroup" native-value="Tarde">Tarde</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Noite">Noite</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Sabado">Sabado</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item class="green">
            <b-navbar-dropdown label="Aula" class="green" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox v-model="checkboxGroup" native-value="General">General</b-checkbox>
              <b-checkbox v-model="checkboxGroup" native-value="Business">Business</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item >
            <b-navbar-dropdown label="Vagas" class="green" boxed="true" arrowless="true" hoverable="true">
              <b-checkbox class="green" v-model="checkboxGroup" native-value="Abertas">Abertas</b-checkbox>
              <b-checkbox class="green" v-model="checkboxGroup" native-value="Fechado">Fechado</b-checkbox>
              <b-checkbox class="green" v-model="checkboxGroup" native-value="Em breve">Em breve</b-checkbox>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <b-navbar-dropdown label="Data" class="green" boxed="false" arrowless="true" hoverable="true">
              <b-field>
                <label>Início: </label>
                <b-datepicker
                  v-model="selected"
                  :show-week-number="showWeekNumber"
                  :locale="locale"
                  placeholder="Click to select..."
                  icon="bell-outline"
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
              
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
            <label>ordenar por:</label>
          </b-navbar-item>

          <b-navbar-item class="orange">
            <b-navbar-dropdown label="preço" >
              <b-navbar-item>preço</b-navbar-item>
              <b-navbar-item>nota</b-navbar-item>
            </b-navbar-dropdown>
          </b-navbar-item>

          <b-navbar-item>
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
//MultiSelect.Inject(CheckBoxSelection);
//Vue.use(MultiSelectPlugin);
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

.center { /*nao funciona*/
  margin:auto;
  
}


.green { /* a maior parte não funciona no navegador*/
  background-color: #6B8E23;
  border-radius:10px;
  padding: none;
  color: white;
  font-size: 20px;
  font-family: arial;
  font-weight: bold;
}
.orange {
  color: orange;

}

b-navbar-dropdown label  /*:not(#filtro, b-navbar b-checkbox)*/{
  color: #6B8E23;
  font-size: 20PX;
  font-weight: bold;
}

#filtro {
  font-size: 25px;
  font-weight: bold;
}

.dropbtn {
  background-color: #435FF4;
  border-radius:25px;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer; 
}

.dropdown {

  background-color: #6B8E23;
  color: white;
}

.green:hover {
  background-color:brown;
}

.container {
  background-color: yellowgreen;
}

b-navbar.b-navbar-item.b-navbar-dropdown.b-checkbox {
  display: inline;
  background-color: blue;
}

</style>
