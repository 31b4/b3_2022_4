function Start() {
    document.getElementById("eredmeny").innerHTML = "Eredmény: ";
    var eredmeny = [];
    var ip =document.getElementById("keres").value
    let sv2 = [];

    if (ip.length == 39) {
        var sv = [];
        sv.push(ip.split(":"));  
        let j;
        for (let i = 0; i < sv[0].length; i++) {
                if (i < sv[0].length-1 && sv[0][i] == "0000") {
                    j = 1;
                    while (sv[0][i] == sv[0][i+j]) {
                        j++;
                    }
                    if (j > 1) {
                        sv2.push(sv[0][i].replace("0000", ""));
                        i+=j-1;
                    }
                    else{
                        sv2.push(sv[0][i].replace("0000", "0"))
                    }
                }
                else if (sv[0][i][0] == 0) {
                    j=0;
                    while (sv[0][i][j] == 0) {
                        j++
                    }
                    sv2.push(Array.from(sv[0][i]).slice(j,4));
                }
                else{
                    sv2.push(sv[0][i]);
                }            
            }
            console.log(sv2);
    
    }
    else{
        let igaz = true;
        let j;           
        var sv = [];     
        sv.push(ip.split(":")); 
        
        for (let i = 0; i < sv[0].length; i++) {
            if (sv[0][i] == "" && igaz) {
                j = sv[0].length;
                while (j != 9) {
                    sv2.push("0000");
                    j++;
                }
                igaz = false;
            }
            else{
                if (sv[0][i].length < 4) {
                    let nulla = [""];
                    j = sv[0][i].length;
                    
                    while (j != 4) {
                        j++;
                        nulla[0] += 0
                    }
                    console.log(nulla);
                    sv2.push(nulla+sv[0][i]);
                }
                else{
                    sv2.push(sv[0][i])
                }
            }            
        }                
    }

    console.log(sv);
    for (let i = 0; i < sv2.length; i++) {
        if (i == 0 && sv2[i] == "") {
            eredmeny+=":"
        }              
        for (let j = 0; j < sv2[i].length; j++) {            
            eredmeny += sv2[i][j];
        }
        if (!(i == sv2.length-1)) {
            eredmeny+= ":"            
        }
    }        
    document.getElementById("eredmeny").innerHTML+= eredmeny
}