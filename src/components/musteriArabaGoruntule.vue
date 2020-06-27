<template>

  <div class="musteriArabaGoruntule">    
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
      <li @click="gitMusteriAnasayfa"><a href="#musteriAnasayfa">Ana sayfa</a></li>
      <li @click="gitMusteriHakkimizda"><a href="#musteriHakkimizda">Hakkımızda</a></li>
      <li @click="gitMusteriArabaGoruntule"><a href="#musteriArabaGoruntule">Arabalar</a></li>
      <li @click="gitMusteriRezervasyonGoruntule"><a href="#musteriRezarvasyonGoruntule">Rezervasyon Görüntüle</a></li>
    </ul>
  </div>

      <div class="col-md-6">            
            <table id="arabalar" border="1">
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
  name: 'musteriArabaGoruntule',
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
    gitMusteriAnasayfa (){
        this.$router.push('/musteriAnasayfa');
      },
    gitMusteriHakkimizda(){
        this.$router.push('/musteriHakkimizda');
      },
    gitMusteriArabaGoruntule (){
        this.$router.push('/musteriArabaGoruntule');
      },
    gitMusteriRezervasyonGoruntule (){
        this.$router.push('/musteriRezervasyonGoruntule');
      },

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
/*
#arabalar {
margin-top: 75px; 
position: absolute;
  left: 50px;
  top: 100px;
border-collapse: collapse;

}
 
#arabalar td, #arabalar td {
border: 1px solid #ddd;
padding: 8px;
}
 
#arabalar tr:nth-child(even){background-color: #f2f2f2;}
 
#arabalar tr:hover {
background-color: #2ecc71;
color:#fff;
}
 
#arabalar td {

text-align: left;
background-color: #2c3e50;
color: white;
}*/

</style>