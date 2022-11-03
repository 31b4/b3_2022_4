var primek =[];
primek.push(2,3);
var keret=document.getElementById("keret");
for (let i = 4; i < 1000; i++) {
    let x=0;
    for (j=0; j<primek.length; j++) {
        if (!(i%primek[j]==0)) {
            x++
        }
    }
    if (x==primek.length) {
        primek.push(i);
    }
}
console.log(primek)

db=0;
var ikerprimek =[];
console.log(primek.length);
for (let i = 0; i < primek.length; i++) {
    if (primek[i+1]-primek[i]==2) {
        db++;
        vegeredmeny="("+primek[i]+","+primek[i+1]+")"
        ikerprimek.push(vegeredmeny);
    } 
}
console.log(db);
console.log(ikerprimek);
keret.innerHTML=ikerprimek;