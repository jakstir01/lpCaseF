let datos=[];
let usuarios={};

function tareas(v){
    switch(v.target.id){
        case "ejemplo":
            console.log("mensaje");
        break;
    }
}

let num=1;
let textos=["","Los mejores materiales","Diseños originales","Iluminacion multicolor"]

function gal(valor) {
    num += valor;
    if(num>3) {num = 1;}
    if(num<1) {num = 3;}

    ele("banner").src = "graficos/galeria/banner"+num+".jpg";
    ele("textos").innerHTML = textos[num];
}

function ele(x){
    return document.getElementById(x)
}