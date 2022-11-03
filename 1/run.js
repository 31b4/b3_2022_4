var szamok = []
var tiltott = []
//-ha kell
function Start() {
    var szam = document.getElementById("inp").value
    if (szam >=0 && szam <= 99) {
        if (szamok.includes(szam)){
            szamok = szamok.filter(item => item !== szam)
            tiltott.push(szam)
        }
        if (szam != 0 && !tiltott.includes(szam)) {
            szamok.push(szam)
        }
        else if(szam == 0){
            var asd =""
            for (let i = 0; i < szamok.length; i++) {
                asd += szamok[i]+" "
            }
            document.getElementById("ide").innerHTML=asd
        }
    }
}