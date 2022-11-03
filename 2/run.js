var kovetkezolink;
var elozolink;
var jelenlegioldal=0;


function megjelenit() {
    $.ajax({
        url:"http://www.neowsapp.com/rest/v1/neo/browse",
        method:"get",
        dataType:"json",
        success:function(szerverValasz) {
            console.log(szerverValasz);
            $("#h2oldal").html("Oldal: "+szerverValasz.page.number);
            for (let i=0; i<szerverValasz.near_earth_objects.length; i++) {
                let ul=document.createElement("ul");
                let div=document.createElement("div");
                let li1=document.createElement("li");
                let li2=document.createElement("li");
                let li3=document.createElement("li");
                let li4=document.createElement("li");
                let link=document.createElement("a");
                let name=szerverValasz.near_earth_objects[i].name;
                let atmeromax=szerverValasz.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_max;
                let atmeromin=szerverValasz.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_min;
                
                link.innerHTML="Link: "+szerverValasz.near_earth_objects[i].links.self;
                link.href=szerverValasz.near_earth_objects[i].links.self;
                li1.append("Neve: "+name+" ");
                li2.append("Minimum Átmérő: "+atmeromin+" ");
                li3.append("Maximum Átmérő: "+atmeromax+" ");
                li4.append(link);
                ul.append(li1);
                ul.append(li2);
                ul.append(li3);
                ul.append(li4);
                div.append(ul);
                $("#keret").append(div);
            }
            kovetkezolink=szerverValasz.links.next;
        }
    });
}


function Kovetkezo() {
    $.ajax({
        url:kovetkezolink,
        method:"get",
        dataType:"json",
        success:function(szerverValasz) {
            console.log(szerverValasz);
            $("#keret").html("");
            $("#h2oldal").html("Oldal: "+szerverValasz.page.number);
            for (let i=0; i<szerverValasz.near_earth_objects.length; i++) {
                let ul=document.createElement("ul");
                let div=document.createElement("div");
                let li1=document.createElement("li");
                let li2=document.createElement("li");
                let li3=document.createElement("li");
                let li4=document.createElement("li");
                let link=document.createElement("a");
                let name=szerverValasz.near_earth_objects[i].name;
                let atmeromax=szerverValasz.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_max;
                let atmeromin=szerverValasz.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_min;
                link.innerHTML="Link: "+szerverValasz.near_earth_objects[i].links.self;
                link.href=szerverValasz.near_earth_objects[i].links.self;
                li1.append("Neve: "+name+" ");
                li2.append("Minimum Átmérő: "+atmeromin+" ");
                li3.append("Maximum Átmérő: "+atmeromax+" ");
                li4.append(link);
                ul.append(li1);
                ul.append(li2);
                ul.append(li3);
                ul.append(li4);
                div.append(ul);
                $("#keret").append(div);
            }
            kovetkezolink=szerverValasz.links.next;
            elozolink=szerverValasz.links.prev;
            jelenlegioldal=parseInt(szerverValasz.page.number);
        }
    });
}


function Elozo() {
    if (jelenlegioldal>0) {
        $.ajax({
            url:elozolink,
            method:"get",
            dataType:"json",
            success:function(szerverValasz) {
                console.log(szerverValasz);
                $("#keret").html("");
                $("#h2oldal").html("Oldal: "+szerverValasz.page.number);
                for (let i=0; i<szerverValasz.near_earth_objects.length; i++) {
                    let ul=document.createElement("ul");
                    let div=document.createElement("div");
                    let li1=document.createElement("li");
                    let li2=document.createElement("li");
                    let li3=document.createElement("li");
                    let li4=document.createElement("li");
                    let link=document.createElement("a");
                    let name=szerverValasz.near_earth_objects[i].name;
                    let atmeromax=szerverValasz.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_max;
                    let atmeromin=szerverValasz.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_min;
                    link.innerHTML="Link: "+szerverValasz.near_earth_objects[i].links.self;
                    link.href=szerverValasz.near_earth_objects[i].links.self;
                    li1.append("Neve: "+name+" ");
                    li2.append("Minimum Átmérő: "+atmeromin+" ");
                    li3.append("Maximum Átmérő: "+atmeromax+" ");
                    li4.append(link);
                    ul.append(li1);
                    ul.append(li2);
                    ul.append(li3);
                    ul.append(li4);
                    div.append(ul);
                    $("#keret").append(div);
                }
                kovetkezolink=szerverValasz.links.next;
                elozolink=szerverValasz.links.prev;
                jelenlegioldal=parseInt(szerverValasz.page.number);
            }
        });
    } else {
        alert("Nincs előző oldal");
    }
}



$(document).ready(function(){
    megjelenit();
});