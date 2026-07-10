function enviarWhatsApp() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let vehiculo = document.getElementById("vehiculo").value;
    let fecha = document.getElementById("fecha").value;
    let comentarios = document.getElementById("comentarios").value;

    if(nombre === "" || telefono === ""){

        alert("Por favor completa el nombre y el teléfono.");

        return;

    }

    let mensaje =
`Hola TRIANA TRUCKS ESPECIAL S.A.S.

Quiero solicitar una cotización.

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Ciudad de origen: ${origen}
Ciudad de destino: ${destino}
Tipo de vehículo: ${vehiculo}
Fecha del servicio: ${fecha}

Comentarios:
${comentarios}`;

    let url = "https://wa.me/573197369079?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");

}
/* ===========================
   MENÚ HAMBURGUESA
=========================== */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("activo");

    if(menu.classList.contains("activo")){

        menuToggle.innerHTML = "✕";

    }else{

        menuToggle.innerHTML = "☰";

    }

});

/* Cerrar menú al seleccionar una opción */

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("activo");

        menuToggle.innerHTML = "☰";

    });

});
/* ===========================
   PRELOADER
=========================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("ocultar");

    }, 1200);

});
/* ===========================
   CONTADORES ANIMADOS
=========================== */

const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach(contador => {

        const objetivo = +contador.dataset.numero;

        let actual = 0;

        const incremento = objetivo / 100;

        const actualizar = () => {

            actual += incremento;

            if(actual < objetivo){

                contador.textContent = Math.floor(actual);

                requestAnimationFrame(actualizar);

            }else{

                if(objetivo === 20){

                    contador.textContent = "20+";

                }else if(objetivo === 5000){

                    contador.textContent = "5000+";

                }else if(objetivo === 100){

                    contador.textContent = "100%";

                }else if(objetivo === 24){

                    contador.textContent = "24/7";

                }

            }

        };

        actualizar();

    });

};

const observador = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            iniciarContadores();

            observador.disconnect();

        }

    });

});

observador.observe(document.querySelector(".estadisticas"));
