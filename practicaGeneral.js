    //   <!-- --------------------------CONTENIDO 1---------------------------- -->
function agregarContenido1(){
    let texto="Después de la quiebra del Grupo Chrysler, se definió nuevamente la política de marcas del grupo. La gama de camionetas de Dodge contaba con imagen suficiente como para formar su propia marca. El logotipo de RAM Trucks es el ornamento del carnero, usado por los vehículos Dodge desde los años 1930"
document.getElementById("parrafo1").innerHTML = texto;
}

function borrarContenido1(){
    let =texto = " ";
    document.getElementById("parrafo1").innerHTML = texto;
}
function agregarPrecio1(){
 document.getElementById("precio1").innerHTML = `$1500`;
}
function borrarPrecio1(){
    document.getElementById("precio1").innerHTML = " ";
}
    //   <!-- --------------------------CONTENIDO 2---------------------------- -->

function agregarContenido2(){
    let texto2="Después de la quiebra del Grupo Chrysler, se definió nuevamente la política de marcas del grupo. La gama de camionetas de Dodge contaba con imagen suficiente como para formar su propia marca. El logotipo de RAM Trucks es el ornamento del carnero, usado por los vehículos Dodge desde los años 1930"
document.getElementById("parrafo2").innerHTML = texto2;
}

function borrarContenido2(){
    let =texto2 = " ";
    document.getElementById("parrafo2").innerHTML = texto2;
}

    //   <!-- --------------------------CONTENIDO 3---------------------------- -->
    function agregarContenido3(){
        let texto3="Después de la quiebra del Grupo Chrysler, se definió nuevamente la política de marcas del grupo. La gama de camionetas de Dodge contaba con imagen suficiente como para formar su propia marca. El logotipo de RAM Trucks es el ornamento del carnero, usado por los vehículos Dodge desde los años 1930"
    document.getElementById("parrafo3").innerHTML = texto3;
    }
    
    function borrarContenido3(){
        let =texto3 = " ";
    document.getElementById("parrafo3").innerHTML = texto3;
    }
    //   <!-- --------------------------FIN CONTENIDOS---------------------------- -->

function cambiarImagen(){
    document.getElementById("img1").src = "img/img11.jpg" 
}

function regresarImagen(){
    document.getElementById("img1").src = "img/img22.jpg"   
}