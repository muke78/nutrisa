window.onload=function(){const t=document.forms[0].categoria,e=document.getElementById("container"),n=document.getElementById("sabores"),o=document.getElementById("send-button"),a=document.getElementById("finish");o.addEventListener("click",(function(t){t.preventDefault();let n=c[0],o=c[1].value.trim();var i=c[2].value;if(0==n.selectedIndex)return!1;if(!["Chocolate","Fresa","Vainilla","Napolitano","Limón"].includes(o))return console.log("Opción inválida"),!1;if(null==o||0==o.length||/^\s+/.test(o)||/\d+/.test(o))return!1;if(null==i||isNaN(i)||i<=0||i>99)return!1;!function(){var t=l;let n=c[1].value.trim();var o=c[0].value,a=document.forms[0].size.value,i=document.getElementById("cacahuates"),d=document.getElementById("chocolate"),u=document.getElementById("chispas"),m=document.getElementById("leche"),h=[i,d,u,m],p=new r(t,o,n,c[2].value,a,h);console.log(p.id),l+=1;const g=document.createElement("div");g.className="card",g.innerHTML=`<p><strong>${o} de ${p.sabor}</strong><br>\n    \n    Cantidad: ${p.cantidad}   Precio: ${p.precio}   Complementos: ${p.extras}4 c/u\n    \n    Total a pagar: ${p.getTotal()}</p>\n    \n    <input type="button" class="button" name="delete" value="Eliminar">`,e.appendChild(g),product_list.push(p),document.forms[0].reset(),console.log(product_list),e.removeEventListener("click",s),e.addEventListener("click",(function(t){console.log(t.target+": "+t.target.name+" "+p.id),"delete"===t.target.name&&s(t.target,p.id)}))}();product_list.length>0&&(a.style.display="block")})),a.addEventListener("click",(function(){var t=0;for(i=0;i<product_list.length;i++)console.log(product_list[i]),t+=product_list[i].getTotal();alert("Monto total a pagar: "+t)})),t.addEventListener("change",(function(){"Helado"==t.value?n.textContent="Chocolate (14.0), Vainilla (12.0), Fresa (9.98), Limón (6.0), Napolitano (7.5)":"Torta"==t.value&&(n.textContent="Chocolate (14.0), Vainilla (12.0), Fresa (9.98), Limón (6.0)")})),product_list=[];var l=0,c=document.forms[0].elements;function s(t,e){"delete"===t.name&&(t.parentElement.remove(),product_list.length>0&&(product_list.splice(e,1),l-=1),console.log("Productos: "+product_list.length))}function r(t,e,n,o,a,i){switch(this.id=t,this.tipo=e,this.sabor=n,this.cantidad=o,this.tamaño=a,this.extras="",console.log("ID: "+t),n){case"Chocolate":this.precio=14;break;case"Vainilla":this.precio=12;break;case"Fresa":this.precio=9.98;break;case"Napolitano":this.precio=7.5;break;case"Limón":this.precio=6}this.subtotal=this.cantidad*this.precio;var l=0;"pequeño"==this.tamaño?l+=2:"mediano"==this.tamaño?l+=5:l+=7;for(var c=0,s=0;s<i.length;s++)1==i[s].checked&&(c+=4,this.extras+=i[s].value+", ");this.getTotal=function(){return this.subtotal+l+c}}};