(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{59:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),o=a(100),i=a(8),l=a.n(i),c=a(2),s=a(60),u=a(6),d=a(26),h=a(99);function f(){var e=r.a.useState(""),t=l()(e,2),a=t[0],n=t[1],o=r.a.useState([]),i=l()(o,2),c=i[0],f=i[1],p=r.a.useState(""),g=l()(p,2),v=g[0],b=g[1],y=r.a.useState(""),w=l()(y,2),E=w[0],C=w[1],F=r.a.useState(0),k=l()(F,2),S=k[0],x=k[1];r.a.useEffect((function(){fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(e){var t=Object.values(e),a=t[0];t.shift(),t.shift(),t.unshift(a),t.unshift({code:"BRL",bid:"1"});var n=(1e3*parseFloat(t[5].bid)).toString();t[5]={code:"BTC",bid:n},console.log(t[5]),f(t),b("1"),C("1")}))}),[]);return r.a.createElement(u.a,{style:m.view},r.a.createElement(h.a,{style:m.text},"Valor"),r.a.createElement(s.a,{style:m.input,onChangeText:n,onChange:function(e){return function(e){x(parseFloat(v)/parseFloat(E)*parseFloat(""==e.target.value?"0":e.target.value))}(e)},keyboardType:"numeric",maxLength:10,value:a}),r.a.createElement(u.a,{style:m.separator}),r.a.createElement(h.a,{style:m.text},"Moeda Origem"),r.a.createElement(d.a,{selectedValue:v,style:{height:50,width:250},onValueChange:function(e,t){return function(e,t){b(e),x(parseFloat(e)/parseFloat(E)*parseFloat(""==a?"0":a))}(e)}},c.map((function(e,t){return r.a.createElement(d.a.Item,{label:e.code,value:e.bid})}))),r.a.createElement(u.a,{style:m.separator}),r.a.createElement(h.a,{style:m.text},"Moeda Destino"),r.a.createElement(d.a,{selectedValue:E,style:{height:50,width:250},onValueChange:function(e,t){return function(e,t){C(e),x(parseFloat(v)/parseFloat(e)*parseFloat(""==a?"0":a))}(e)}},c.map((function(e,t){return r.a.createElement(d.a.Item,{label:e.code,value:e.bid})}))),r.a.createElement(u.a,{style:m.separator}),r.a.createElement(h.a,{style:m.text},"Valor Convertido: ",S.toFixed(2)," "))}var m=c.a.create({view:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center",alignSelf:"center",backgroundColor:"white"},text:{width:250,alignSelf:"center",justifyContent:"center",fontSize:28,fontFamily:"roboto",color:"black",fontWeight:"bold",fontStyle:"normal"},input:{width:250,height:35,margin:6,padding:10,backgroundColor:"white",borderRadius:10,borderColor:"black",borderWidth:2,fontSize:28},separator:{marginVertical:20,height:1,width:"80%",backgroundColor:"#eee"}});function p(){return r.a.createElement(o.a,null,r.a.createElement(f,null))}},61:function(e,t,a){a(62),e.exports=a(94)},62:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/CurrencyConverter/expo-service-worker.js",{scope:"/CurrencyConverter/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[61,1,2]]]);
//# sourceMappingURL=app.ad965f44.chunk.js.map