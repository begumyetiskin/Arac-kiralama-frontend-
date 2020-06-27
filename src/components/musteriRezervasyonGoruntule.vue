<template>

  <div class="musteriRezervasyonGoruntule">
    
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
</div>
</template>

<script>
export default {
  name: 'musteriRezervasyonGoruntule', 
  data: function() {
    return {
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