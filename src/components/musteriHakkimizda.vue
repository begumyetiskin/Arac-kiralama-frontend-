<template>

  <div class="musteriHakkimizda">
    
    <div class="uyelik">      
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

  <div class="icerik">
	  <p>  <br><br> 1995 yılında iş makinesi, ekipman ve hafif ticari araç kiralama ile başlayan yolculuğumuz, 
    2020 yılında binek araç ve 4X4 arazi araçların filomuza 
		  eklenmesi ile müşteri odaklı, rekabetçi fiyat avantajı ve yeni nesil 
		  hizmet anlayışı ile bugün Sivas ofisimizde 
		  ilk günkü heyecanla devam ediyor. <br><br>

		  Yurt içinde her müşterimize özel hizmet vererek avantajlı, 
		  güvenilir, yenilikçi ve global bir marka olma yolunda emin adımlarla ilerliyoruz.
	  </p>
  </div>

  </div>
</template>

<script>
export default {
  name: 'musteriHakkimizda',
  data: function(){
    return{
      title: "Sivas Araç Kiralama"
    }    
  },
  methods: {
      cikisYap(){
          this.$router.push('/ilkEkran');
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
      }
  },
}
</script>

<style>

.uyelik{
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

.icerik{
  margin-top: 75px; 
  width: 700px;
  height: 250px;
  position: absolute;
  left: 50px;
  top: 100px;
  border-style: double;
  color:#34495e;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>