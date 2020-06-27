import Vue from "vue";
import VueRouter from "vue-router";

import musteriAnasayfa from "./components/musteriAnasayfa";
import musteriHakkimizda from "./components/musteriHakkimizda";
import musteriRezervasyonGoruntule from "./components/musteriRezervasyonGoruntule";
import musteriArabaGoruntule from "./components/musteriArabaGoruntule";
import ilkEkran from "./components/ilkEkran";
import adminArabaGoruntule from "./components/adminArabaGoruntule";
import adminMusteriGoruntule from "./components/adminMusteriGoruntule";
import adminRezervasyonGoruntule from "./components/adminRezervasyonGoruntule";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: ilkEkran},
	{ path: "/ilkEkran", name:"kaydet", component: ilkEkran},
	{ path: "/musteriAnasayfa", component: musteriAnasayfa},
	{ path: "/musteriHakkimizda", component: musteriHakkimizda },
	{ path: "/musteriRezervasyonGoruntule", component: musteriRezervasyonGoruntule},
	{ path: "/musteriArabaGoruntule", name:"arabaListesi", component: musteriArabaGoruntule},
	{ path: "/adminArabaGoruntule", component: adminArabaGoruntule},	
	{ path: "/adminMusteriGoruntule", name:"musteriListesi", component: adminMusteriGoruntule},
	{ path: "/adminRezervasyonGoruntule", component: adminRezervasyonGoruntule},
];

export const router = new VueRouter({
	mode: "history",
	routes
});

router.beforeEach((to, from, next) => {
	const lc = localStorage.getItem("currentUser");
	console.log(lc)
	
	if(lc==undefined || lc==null || lc==='undefined') {
		console.error("yetkisiz giriş")
	} 
	else {
	let user = 	JSON.parse(lc);

  	if( user==null ||user.rol==null) {
	  console.error("yetkisiz giriş")	  
	  } 
	else if(user.rol==1) {
	  console.log("müşteri")
	  } 
	else {
	  console.log("admin")
  	}
  }

  next()
})