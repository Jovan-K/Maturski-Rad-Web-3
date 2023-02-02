let audio0 = new Audio('./himne/srb.mp3')
let audio1 = new Audio('./himne/bug.mp3')
let audio2 = new Audio('./himne/rum.mp3')
let audio3 = new Audio('./himne/madj.mp3')
let audio4 = new Audio('./himne/hrv.mp3')
let audio5 = new Audio('./himne/bih.mp3')
let audio6 = new Audio('./himne/alb.mp3')
let audio7 = new Audio('./himne/mak.mp3')
let audio8 = new Audio('./himne/crnag.mp3')

document.getElementById('serbia').addEventListener("mouseover", ()=>{
    audio0.play();
});
document.getElementById('bulgaria').addEventListener("mouseover", ()=>{
    audio1.play();
});
document.getElementById('romania').addEventListener("mouseover", ()=>{
    audio2.play();
});
document.getElementById('hungary').addEventListener("mouseover", ()=>{
    audio3.play();
});
document.getElementById('croatia').addEventListener("mouseover", ()=>{
    audio4.play();
});
document.getElementById('bih').addEventListener("mouseover", ()=>{
    audio5.play();
});
document.getElementById('albania').addEventListener("mouseover", ()=>{
    audio6.play();
});
document.getElementById('macedonia').addEventListener("mouseover", ()=>{
    audio7.play();
});
document.getElementById('montenegro').addEventListener("mouseover", ()=>{
    audio8.play();
});


document.getElementById('serbia').addEventListener("mouseout", ()=>{
    audio0.pause();
});
document.getElementById('bulgaria').addEventListener("mouseout", ()=>{
    audio1.pause();
});
document.getElementById('romania').addEventListener("mouseout", ()=>{
    audio2.pause();
});
document.getElementById('hungary').addEventListener("mouseout", ()=>{
    audio3.pause();
});
document.getElementById('croatia').addEventListener("mouseout", ()=>{
    audio4.pause();
});
document.getElementById('bih').addEventListener("mouseout", ()=>{
    audio5.pause();
});
document.getElementById('albania').addEventListener("mouseout", ()=>{
    audio6.pause();
});
document.getElementById('macedonia').addEventListener("mouseout", ()=>{
    audio7.pause();
});
document.getElementById('montenegro').addEventListener("mouseout", ()=>{
    audio8.pause();
});


document.getElementById('autordugme').addEventListener("click", ()=>{
    alert("Izvinjavam se profesore, mnogo me je mrzelo da uradim ovo.")
})
document.getElementById('uputstvodugme').addEventListener("click", ()=>{
    alert("Izvinjavam se profesore, mnogo me je mrzelo da uradim ovo.")
})

document.getElementById('serbia').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=300,left=210,width=300,height=150");  
    newtab.document.write("<p> Srbija <br><br> Glavni grad: Beograd <br> Broj stanovnika: 6,945 miliona<br> Povrsina:88.361 km2</p>");  
});
document.getElementById('bulgaria').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=490,left=490,width=300,height=150");  
    newtab.document.write("<p> Bugarska <br><br>Glavni grad: Sofija <br> Broj stanovnika:6,878 miliona <br> Povrsina:110.994 km2</p>");  
});
document.getElementById('romania').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=100,left=380,width=300,height=150");  
    newtab.document.write("<p>Rumunija <br><br> Glavni grad: Bukurest <br> Broj stanovnika:19,12 miliona <br> Povrsina: 238.937km2</p>");  
});
document.getElementById('hungary').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=10,left=40,width=300,height=150");  
    newtab.document.write("<p> Madjarska <br><br>Glavni grad: Budimpesta <br> Broj stanovnika:9,71 milion <br> Povrsina: 93.025km2</p>");  
});
document.getElementById('croatia').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=100,left=35,width=300,height=150");  
    newtab.document.write("<p> Hrvatska <br><br> Glavni grad: Zagreb <br> Broj stanovnika: 3,899 miliona<br> Povrsina:56.594 km2</p>");  
});
document.getElementById('bih').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=260,left=30,width=300,height=150");  
    newtab.document.write("<p> Bosna i Hercegovina <br><br>Glavni grad: Sarajevo <br> Broj stanovnika: 3,271 miliona<br> Povrsina:51.209 km2</p>");  
});
document.getElementById('albania').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=560,left=120,width=300,height=150");  
    newtab.document.write("<p> Albanija <br><br> Glavni grad: Tirana <br> Broj stanovnika: 2,812 miliona<br> Povrsina:28.748km2</p>"); 
});
document.getElementById('macedonia').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=570,left=320,width=300,height=150");  
    newtab.document.write("<p> Makedonija <br><br> Glavni grad: Skoplje <br> Broj stanovnika:2,065 miliona <br> Povrsina: 25.713km2</p>");  
});
document.getElementById('montenegro').addEventListener("click", ()=>{
    let newtab = window.open("", "", "top=450,left=60,width=300,height=150");  
    newtab.document.write("<p> Crna Gora <br><br> Glavni grad: Podgorica <br> Broj stanovnika:619.211 <br> Povrsina: 13.812km2</p>");
});
