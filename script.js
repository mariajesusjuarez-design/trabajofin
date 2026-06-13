function confeti(){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="10px";

c.style.height="10px";

c.style.background=
`hsl(${Math.random()*360},100%,50%)`;

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

document.body.appendChild(c);

let y=0;

const caer=setInterval(()=>{

y+=5;

c.style.top=y+"px";

if(y>window.innerHeight){

c.remove();

clearInterval(caer);

}

},20);

}

setInterval(confeti,250);