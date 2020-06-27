<template>

  <div class="musteriHakkimizda">
    
    <div class="header">      
        <label><strong>{{title}}</strong></label>   
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;
      <button class="button" @click="cikisYap">Çıkış Yap</button>        
    </div>

  <div class="menu">
    <ul>      
      <li @click="gitAdminArabaGoruntule"><a href="#adminArabaGoruntule">Arabalar</a></li>
      <li @click="gitAdminMusteriGoruntule"><a href="#adminMusteriGoruntule">Müşteriler</a></li>
      <li @click="gitAdminRezervasyonGoruntule"><a href="#adminRezervasyonGoruntule">Rezervasyonlar</a></li>
    </ul>
  </div>

    <div class="col-md-6">            
            <table border="1">
              <body>
                <tr>
                  <td>Araba Model</td>
                  <td>Araba Renk</td>
                  <td>Araba Yılı</td>
                  <td>Araba Km</td>
                  <td>Kullanım Durumu</td>
                </tr>
                <tr v-for="(araba, index) in arabalar" :key="index">
                <td >
                  {{araba.arabaModel}} 
                </td>
                <td>
                  {{araba.arabaRenk}}
                </td>
                <td>
                  {{araba.arabaYili}}
                </td>
                <td>
                  {{araba.arabaKm}}
                </td>
                <td>
                  {{araba.kullanimDurumu}}
                </td>
                </tr>
              </body>
            </table>
      </div>
  </div>
</template>

<script>
import httpClient from "../http-common";
export default {
  name: 'adminArabaGoruntule',
  data: function(){
    return{
      title: "Sivas Araç Kiralama",
      arabalar: []
    }    
  },
  methods: {
      cikisYap(){
        this.$router.push('/ilkEkran');
      },
    getirArabalar() {
      httpClient
        .get("/arabalar")
        .then(response => {
          this.arabalar = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
    refreshList() {
        this.getirArabalar();
      },
      gitAdminArabaGoruntule (){
          this.$router.push('/adminArabaGoruntule');
      },
      gitAdminMusteriGoruntule(){
          this.$router.push('/adminMusteriGoruntule');
      },      
      gitAdminRezervasyonGoruntule (){
          this.$router.push('/adminRezervasyonGoruntule');
      }
  },
  mounted() {
    this.getirArabalar();
  }
}
</script>

<style>

.header{
  padding: 10px;
  margin-top: 0px;
  background-color:#34495e;/*rosybrown;/*;#805664;*/
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  color:white/*#34495e,seashell*/;
}

.button {
  font-size: 16px;
  border-radius: 4px;
  background-color: white;
  color: black;
  border: 2px solid silver;
  }
  
.button:hover {
  background-color: silver;
  color: white;
}

.rezervasyon{
  padding: 20px;
  margin-top: 75px;
  width: 30%;
  background-color:silver;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
}

body{
  background-image: url("arkaplan1.jpg");  
  margin:0 0;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow:hidden;
    background-color:#8d8d8b /* #533740 */;
  }

li {
    display:inline-block;
}

li a {
    display: block;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    text-align: center;
    padding: 14px 18px;
    text-decoration: none;
}

li a:hover{
    background-color:#34495e; /* burlywood */
}


</style>