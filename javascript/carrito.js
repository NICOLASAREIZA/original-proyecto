let boxminus = document.getElementById("boxminus");
let boxcant = document.getElementById("boxcant");
let boxplus = document.getElementById("boxplus");
let valorproducto = 150000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorproducto);
document.getElementById("preciounidad").innerHTML = auxValorProducto;



boxplus.addEventListener("click", function(){
    //console.log("Hola, vengo de la consola...");
    //alert("hola soy el minus");
    let auxCant = boxcant.innerHTML;
    if (auxCant < 10){
        auxCant++;
        boxcant.innerHTML = auxCant;
        cacularsubtotal();
        actualizar();
    }

});


boxminus.addEventListener("click", function(){
    //console.log("Hola, vengo de la consola...");
    //alert("hola soy el minus");
    let auxCant = boxcant.innerHTML;
    if (auxCant > 0){
        auxCant--;
        boxcant.innerHTML = auxCant;
        cacularsubtotal();
        actualizar();
    }

});


function cacularsubtotal(){
    let auxCant = valorproducto * Number(boxcant.innerHTML);;
    let auxCantUMil = Intl.NumberFormat("de-DE").format(auxCant);
    document.getElementById("Subtotal").innerHTML = auxCantUMil;

}

function actualizar(){
    let auxCant = boxcant.innerHTML;
    document.getElementById("numero-productos").innerHTML = auxCant;
}
