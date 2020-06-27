<template>

  <div id="musteriAnasayfa">    
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
      <li @click="gitMusteriAnasayfa "><a href="#musteriAnasayfa">Ana sayfa</a></li>
      <li @click="gitMusteriHakkimizda"><a href="#musteriHakkimizda">Hakkımızda</a></li>
      <li @click="gitMusteriArabaGoruntule"><a href="#musteriArabaGoruntule">Arabalar</a></li>
      <li @click="gitMusteriRezervasyonGoruntule"><a href="#musteriRezarvasyonGoruntule">Rezervasyon Görüntüle</a></li>
    </ul>
  </div>

  <div class="rezervasyon">     
    <form action="" @submit.stop.prevent="">    
      <label>Arabalar</label>  
       <select id="cars" name="cars" v-model ="rezervasyonPost.arabaModel">
         <option v-for="(araba, index) in arabalar" :key="index" >{{araba.arabaModel}}</option>         
       </select><br><br>     
      <label>Alış Tarihi / Saati</label> 
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;      
      <label>İade Tarihi / Saati</label> 
      <br>
      
      <input type="datetime-local" name="alistarih"    v-model ="rezervasyonPost.alisTarihi">         
      &ensp;&ensp;
      <input type="datetime-local" name="iadetarih" v-model ="rezervasyonPost.teslimTarihi"><br><br>
      <button type="button" @click="rezervasyonYap">Kaydet</button>
    </form>     
  </div>
  </div>
</template>


<script> 
import httpClient from "../http-common";


export default {
  
  name: 'musteriAnasayfa',
  data: function() {
    return{      
      
      title:"Sivas Araç Kiralama",
      arabalar: [],
      kullanici: [],
      rezervasyonPost:{
        kullaniciAdSoyad:"",
        kullaniciTel:"",
        arabaModel: "",
        alisTarihi: "",
        teslimTarihi: ""
      }
    }    
  },
  
  methods: {
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
    rezervasyonYap(){
      httpClient.post("http://localhost:8080/api/rezervasyonlar",{
        ...this.rezervasyonPost 
      })
      .then(response => { 
        let user = JSON.parse(localStorage.getItem("currentUser"));           
        console.log(user.kullaniciAdSoyad);
        console.log(user.kullaniciTel);
        this.rezervasyonPost = {
          kullaniciAdSoyad:user.kullaniciAdSoyad,
          kullaniciTel:user.kullaniciTel
        }
      })
      .catch(e => console.log(e));   
       
    },
    
    refreshList() {
        this.getirArabalar();
        this.rezervasyonYap();
        
      },
    cikisYap(){
      this.$router.push('/ilkEkran');
      //localStorage.clear();
    },
    gitMusteriAnasayfa (){
          this.$router.push('/musteriAnasayfa');
      },
      gitMusteriHakkimizda (){
          this.$router.push('/musteriHakkimizda');
      },
      gitMusteriArabaGoruntule (){
          this.$router.push('/musteriArabaGoruntule');
      },
      gitMusteriRezervasyonGoruntule (){
          this.$router.push('/musteriRezervasyonGoruntule');
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
  width: 40%;
  background-color:silver;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  margin-left: 30px;;
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