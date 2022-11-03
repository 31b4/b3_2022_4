var table=document.getElementById("keret");


function Start(hatv){
    document.getElementById("keret").innerHTML=""
    for (let i = 0; i < Math.pow(2,hatv); i++) {
        var sor=document.createElement("tr");
        for (let j=0; j<=hatv; j++) {
            var cella=document.createElement("td");
            cella.style.border="1px solid black";
            cella.innerHTML="_________";
            cella.style.cursor="pointer"
            cella.addEventListener("click",function(){kattint(i,j);},false);
            sor.appendChild(cella);
        }
        table.appendChild(sor);
    }
    
    for (let i = 0; i < Math.pow(2,hatv); i++) {
        table.getElementsByTagName("tr")[i].getElementsByTagName("td")[0].innerHTML=i+1;
    }
    
}
function kattint(sor,oszlop) {
    var block=Math.floor(sor/(Math.pow(2,oszlop+1)));
    let nov=Math.pow(2,oszlop)-1;
    if (table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+nov].getElementsByTagName("td")[oszlop].innerHTML!="_________" &&
        table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+Math.pow(2,oszlop)+nov].getElementsByTagName("td")[oszlop].innerHTML!="_________" &&
        table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+Math.pow(2,oszlop)+nov].getElementsByTagName("td")[oszlop+1].innerHTML=="_________"
        ) {
            if (Math.round(Math.random())==0) {
                table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+Math.pow(2,oszlop)+nov].getElementsByTagName("td")[oszlop+1].innerHTML=table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+nov].getElementsByTagName("td")[oszlop].innerHTML;
            } else {
                table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+Math.pow(2,oszlop)+nov].getElementsByTagName("td")[oszlop+1].innerHTML=table.getElementsByTagName("tr")[block*Math.pow(2,oszlop+1)+Math.pow(2,oszlop)+nov].getElementsByTagName("td")[oszlop].innerHTML;
            }
        } else {
            console.log("hiba");
        }
    console.log(sor,oszlop)
}