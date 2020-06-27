<template>

  <div id="ilkEkran">    
    
    <div class="uyelik">
        <form action="" @submit.stop.prevent="">
        <label><strong>{{title}}</strong></label> 
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        &ensp;&ensp;&ensp;&ensp;        
        <input type="text"  v-model="girisPost.kullaniciNick" placeholder="Kullanıcı Adı">
		    <input type="password" v-model="girisPost.kullaniciSifre" placeholder="Şifre">   
        <button class="button" @click="girisYap">Giriş Yap</button>
        
    </form> 
    </div>
    <div id = "kayitOlusturma">
        <h1>Yeni Bir Hesap Oluştur</h1>
        <form action="" @submit.stop.prevent="">
            <input type="text" v-model ="kayitPost.kullaniciAdSoyad" placeholder="Ad Soyad">
            <input type="text" v-model ="kayitPost.kullaniciTel" placeholder="Cep Telefonu"> <br> <br>
            <input type="text" v-model ="kayitPost.kullaniciNick" placeholder="Kullanıcı Adı"> 
            <input type="password" v-model ="kayitPost.kullaniciSifre" placeholder="Yeni Şifre"> <br> <br>
            <input type="password" v-model ="kayitPost.kullaniciSifreTekrar" placeholder="Şifreyi Tekrar Giriniz"><br> <br>
            <button class="button" @click="kaydetKullanici"> Kayıt Ol</button>   
        </form>  
       
    </div>
    
  </div>
</template>

<script>
import http from "../http-common";

//import Axios from 'axios';

export default {
  name: 'ilkEkran',
  
  data(){
    return{
      title: "Sivas Araç Kiralama",
      kayitPost: {
        kullaniciAdSoyad: "",
        kullaniciTel: "",
        kullaniciNick: "",
        kullaniciSifre: "",
        kullaniciSifreTekrar: ""
      },
      girisPost: {
        kullaniciNick: "",
        kullaniciSifre: ""
      }

    }
  },

  methods: {
    kaydetKullanici(){
      console.log(http)
      http.post("http://localhost:8080/api/kayit-ol",{
        ...this.kayitPost 
      })
      .then(response =>{
        console.log(response);
        this.kayitPost = {}
      })
      .catch(e => console.log(e));    
    },
    girisYap(){
      http.post("http://localhost:8080/api/girisYap",{
        ...this.girisPost
      })
      .then(response => {
        console.log(response);
        localStorage.setItem("currentUser",JSON.stringify(response.data));
        if (response.data.rol == 1){
            this.$router.push("/musteriAnasayfa")
            
        }
        
        if (response.data.rol == 0){
            this.$router.push("/adminArabaGoruntule")
        }

        this.girisPost = {}
        
      })
      .catch(e => console.log(e));    
    }
  }
 
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

.uyelik input{
    font-size: 16px;
}

.kayitOlusturma{
    padding: 20px;
    margin-top: 75px;
    width: 30%;
    background-color:silver;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
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

</style>