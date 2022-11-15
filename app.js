
//----------------Seccion de productos memoria ram----------------//
const ram = document.getElementById('ram'); const services = document.getElementById('services');
const seccionRAM = document.getElementById('memoriasRAM'); const backRam = document.createElement("button");
const nav = document.getElementById('container');
const logo = document.getElementById('contLogo');

ram.addEventListener('click', (e) => {
    e.preventDefault();
    backRam.className = "backRam"; backRam.textContent = "X"
    services.style.display = 'none';
    seccionRAM.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backRam);
    backRam.addEventListener('click', (e) => {
        seccionRAM.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backRam);
        logo.style.display = 'flex';
    });
});

//----------------Seccion de productos memoria ssd----------------//
const ssd = document.getElementById('ssd'); const seccionSSD = document.getElementById('memoriaSSD');
const backSsd = document.createElement("button");

ssd.addEventListener('click', (e) => {
    e.preventDefault();
    backSsd.className = "backSsd"; backSsd.textContent = "X"
    services.style.display = 'none';
    seccionSSD.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backSsd);
    backSsd.addEventListener('click', (e) => {
        seccionSSD.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backSsd);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos tarjetas graficas-------------//
const graf = document.getElementById('graf'); const seccionGraf = document.getElementById('TarjetaGrafica');
const backGraf = document.createElement("button");

graf.addEventListener('click', (e) => {
    e.preventDefault();
    backGraf.className = "backGraf"; backGraf.textContent = "X"
    services.style.display = 'none';
    seccionGraf.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backGraf);
    backGraf.addEventListener('click', (e) => {
        seccionGraf.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backGraf);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos tarjetas madre-------------//
const madre = document.getElementById('mother'); const seccionMother = document.getElementById('TarjetaMadre');
const backMother = document.createElement("button");

madre.addEventListener('click', (e) => {
    e.preventDefault();
    backMother.className = "backMother"; backMother.textContent = "X"
    services.style.display = 'none';
    seccionMother.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backMother);
    backMother.addEventListener('click', (e) => {
        seccionMother.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backMother);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos fuentes de poder-------------//
const poder = document.getElementById('poder'); const seccionPoder = document.getElementById('FuentePoder');
const backPoder = document.createElement("button");

poder.addEventListener('click', (e) => {
    e.preventDefault();
    backPoder.className = "backPoder"; backPoder.textContent = "X"
    services.style.display = 'none';
    seccionPoder.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backPoder);
    backPoder.addEventListener('click', (e) => {
        seccionPoder.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backPoder);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos teclados y mouses-------------//
const teclaMouse = document.getElementById('teclaMouse'); const seccionTeclaMouse = document.getElementById('TecladoMouse');
const backTeclaMouse = document.createElement("button");

teclaMouse.addEventListener('click', (e) => {
    e.preventDefault();
    backTeclaMouse.className = "backTeclaMouse"; backTeclaMouse.textContent = "X"
    services.style.display = 'none';
    seccionTeclaMouse.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backTeclaMouse);
    backTeclaMouse.addEventListener('click', (e) => {
        seccionTeclaMouse.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backTeclaMouse);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos monitores-------------//
const moni = document.getElementById('moni'); const seccionMoni = document.getElementById('Monitores');
const backMoni = document.createElement("button");

moni.addEventListener('click', (e) => {
    e.preventDefault();
    backMoni.className = "backMoni"; backMoni.textContent = "X"
    services.style.display = 'none';
    seccionMoni.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backMoni);
    backMoni.addEventListener('click', (e) => {
        seccionMoni.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backMoni);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos cooling-------------//
const cooling = document.getElementById('cooling'); const seccionCooling = document.getElementById('Cooling');
const backCooling = document.createElement("button");

cooling.addEventListener('click', (e) => {
    e.preventDefault();
    backCooling.className = "backCooling"; backCooling.textContent = "X"
    services.style.display = 'none';
    seccionCooling.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backCooling);
    backCooling.addEventListener('click', (e) => {
        seccionCooling.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backCooling);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos cases-------------//
const cases = document.getElementById('case'); const seccionCase = document.getElementById('Cases');
const backCase = document.createElement("button");

cases.addEventListener('click', (e) => {
    e.preventDefault();
    backCase.className = "backCase"; backCase.textContent = "X"
    services.style.display = 'none';
    seccionCase.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backCase);
    backCase.addEventListener('click', (e) => {
        seccionCase.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backCase);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos headsets---------------//
const head = document.getElementById('head'); const seccionHeadset = document.getElementById('Headset');
const backHead = document.createElement("button");

head.addEventListener('click', (e) => {
    e.preventDefault();
    backHead.className = "backHead"; backHead.textContent = "X"
    services.style.display = 'none';
    seccionHeadset.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backHead);
    backHead.addEventListener('click', (e) => {
        seccionHeadset.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backHead);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos webcam------------------//
const webcam = document.getElementById('webCam'); const seccionWebcam = document.getElementById('WebCam');
const backWebcam = document.createElement("button");

webcam.addEventListener('click', (e) => {
    e.preventDefault();
    backWebcam.className = "backWebcam"; backWebcam.textContent = "X"
    services.style.display = 'none';
    seccionWebcam.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backWebcam); 
    backWebcam.addEventListener('click', (e) => {
        seccionWebcam.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backWebcam);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos microphonos-------------//
const micro = document.getElementById('micro'); const seccionMicro = document.getElementById('Microphono');
const backMicro = document.createElement("button");

micro.addEventListener('click', (e) => {
    e.preventDefault();
    backMicro.className = "backMicro"; backMicro.textContent = "X"
    services.style.display = 'none';
    seccionMicro.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backMicro);
    backMicro.addEventListener('click', (e) => {
        seccionMicro.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backMicro);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos combos------------------//
const combos = document.getElementById('combos'); const seccionCombos = document.getElementById('Combo');
const backCombo = document.createElement("button");

combos.addEventListener('click', (e) => {
    e.preventDefault();
    backCombo.className = "backCombo"; backCombo.textContent = "X"
    services.style.display = 'none';
    seccionCombos.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backCombo);
    backCombo.addEventListener('click', (e) => {
        seccionCombos.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backCombo);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos redes------------------//
const red = document.getElementById('red'); const seccionRedes = document.getElementById('Redes');
const backRed = document.createElement("button");

red.addEventListener('click', (e) => {
    e.preventDefault();
    backRed.className = "backRed"; backRed.textContent = "X"
    services.style.display = 'none';
    seccionRedes.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backRed);
    backRed.addEventListener('click', (e) => {
        seccionRedes.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backCbackRedombo);
        logo.style.display = 'flex';
    });
});

//------------Seccion de productos parlantes------------------//
const parlante = document.getElementById('parlante'); const seccionParlante = document.getElementById('Parlantes');
const backParlante = document.createElement("button");

parlante.addEventListener('click', (e) => {
    e.preventDefault();
    backParlante.className = "backParlante"; backParlante.textContent = "X"
    services.style.display = 'none';
    seccionParlante.style.display = 'block';
    logo.style.display = 'none';

    nav.appendChild(backParlante);
    backParlante.addEventListener('click', (e) => {
        seccionParlante.style.display = 'none';
        services.style.display = 'block';
        nav.removeChild(backParlante);
        logo.style.display = 'flex';
    });
});

const categoriasDestacadas = document.getElementById('categoriasDestacadas');
categoriasDestacadas.addEventListener('click', (e) => {
    e.preventDefault();
    seccionRAM.style.display = 'none'; seccionSSD.style.display = 'none'; seccionGraf.style.display = 'none';
    seccionMother.style.display = 'none'; seccionPoder.style.display = 'none';seccionTeclaMouse.style.display = 'none';
    seccionMoni.style.display = 'none'; seccionCooling.style.display = 'none'; seccionCase.style.display = 'none'; seccionHeadset.style.display = 'none';
    seccionWebcam.style.display = 'none'; seccionMicro.style.display = 'none'; seccionCombos.style.display = 'none';
    seccionRedes.style.display = 'none'; seccionParlante.style.display = 'none'; services.style.display = 'block';
});

const menu_cart = document.getElementById('menu-cart'); const menulateral = document.getElementById("contMenu");
const cartMenu = document.getElementById('cartMenu'); const backMenu = document.getElementById('backMenu');

menu_cart.addEventListener('click', (e) => {
    e.preventDefault();
    backMenu.textContent = "X"; menulateral.style.left = '200%';
});

backMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menulateral.style.left = '-200%';
});

//--------------Funciones para agregar ram al carrito-------------------//
var contador = 1; var conPro = 1;
const ram1 = document.getElementById('ram1');
ram1.addEventListener('click', (e) => {
    e.preventDefault();

    if(contador <= 1) {
        const nombProducto = document.createElement('h3');
        const precioProducto = document.createElement('p');
        const masmenosProducto = document.createElement('div');
        var contProducto = document.createElement('h5');
        const masProducto = document.createElement('button');
        const menosProducto = document.createElement('button');
        const eliminarProducto = document.createElement('button');
    
        masmenosProducto.className = 'masmenosProducto';
        contProducto.className = 'contProducto';
        masProducto.className = 'masPro';
        menosProducto.className = 'menosPro';
        eliminarProducto.className = 'eliminarPro';

        nombProducto.textContent = nombresRam[0];
        precioProducto.textContent = preciosRam[0];

        masProducto.textContent = '+';
        contProducto.textContent = conPro;
        menosProducto.textContent = '-';

        agregarProductos.appendChild(nombProducto);
        agregarProductos.appendChild(precioProducto);
        agregarProductos.appendChild(masmenosProducto);

        masmenosProducto.appendChild(menosProducto);
        masmenosProducto.appendChild(contProducto);
        masmenosProducto.appendChild(masProducto);
        masmenosProducto.appendChild(eliminarProducto);

        const masmas = document.querySelector('.masPro');
        masmas.addEventListener('click', (e) => {
            e.preventDefault();
            contProducto.textContent = conPro += 1;
        });
        const menosmenos = document.querySelector('.menosPro');
        menosmenos.addEventListener('click', (e) => {
            e.preventDefault();
                contProducto.textContent = conPro--;
                if (conPro <= 1) {
                    conPro = 1;
                }
        });
        const deletePro = document.querySelector('.eliminarPro');
        deletePro.addEventListener('click', (e) => {
            e.preventDefault();
                agregarProductos.removeChild(nombProducto);
                agregarProductos.removeChild(precioProducto);
                agregarProductos.removeChild(masmenosProducto);
        });
    }
    contador++;
});

var contador2 = 1; var contPro2 = 1;
const ram2 = document.getElementById('ram2');
ram2.addEventListener('click', (e) => {
    e.preventDefault();

    if(contador2 <= 1) {
        const nombProducto2 = document.createElement('h3');
        const precioProducto2 = document.createElement('p');
        const masmenosProducto2 = document.createElement('div');
        var contProducto2 = document.createElement('h5');
        const masProducto2 = document.createElement('button');
        const menosProducto2 = document.createElement('button');
        const eliminarProducto2 = document.createElement('button');
    
        masmenosProducto2.className = 'masmenosProducto2';
        contProducto2.className = 'contProducto2';
        masProducto2.className = 'masPro2';
        menosProducto2.className = 'menosPro2';
        eliminarProducto2.className = 'eliminarPro2';

        nombProducto2.textContent = nombresRam[1];
        precioProducto2.textContent = preciosRam[1];

        masProducto2.textContent = '+';
        contProducto2.textContent = contPro2;
        menosProducto2.textContent = '-';

        agregarProductos.appendChild(nombProducto2);
        agregarProductos.appendChild(precioProducto2);
        agregarProductos.appendChild(masmenosProducto2);

        masmenosProducto2.appendChild(menosProducto2);
        masmenosProducto2.appendChild(contProducto2);
        masmenosProducto2.appendChild(masProducto2);
        masmenosProducto2.appendChild(eliminarProducto2);
    
        const masmas2 = document.querySelector('.masPro2');
        masmas2.addEventListener('click', (e) => {
            e.preventDefault();
            contProducto2.textContent = contPro2 += 1;
        });
        const menosmenos2 = document.querySelector('.menosPro2');
        menosmenos2.addEventListener('click', (e) => {
            e.preventDefault();
                contProducto2.textContent = contPro2--;
                if (contPro2 <= 1) {
                    contPro2 = 1;
                }
        });
        let deletePro2 = document.querySelector('.eliminarPro2');
        deletePro2.addEventListener('click', (e) => {
            e.preventDefault();
                agregarProductos.removeChild(nombProducto2);
                agregarProductos.removeChild(precioProducto2);
                agregarProductos.removeChild(masmenosProducto2);
        });
    }
    contador2++;
});

var contador3 = 1; var contPro3 = 1;
const ram3 = document.getElementById('ram3');
ram3.addEventListener('click', (e) => {
    e.preventDefault();

    if(contador3 <= 1) {
        const nombProducto3 = document.createElement('h3');
        const precioProducto3 = document.createElement('p');
        const masmenosProducto3 = document.createElement('div');
        var contProducto3 = document.createElement('h5');
        const masProducto3 = document.createElement('button');
        const menosProducto3 = document.createElement('button');
        const eliminarProducto3 = document.createElement('button');
    
        masmenosProducto3.className = 'masmenosProducto3';
        contProducto3.className = 'contProducto3';
        masProducto3.className = 'masPro3';
        menosProducto3.className = 'menosPro3';
        eliminarProducto3.className = 'eliminarPro3';

        nombProducto3.textContent = nombresRam[2];
        precioProducto3.textContent = preciosRam[2];

        masProducto3.textContent = '+';
        contProducto3.textContent = contPro3;
        menosProducto3.textContent = '-';

        agregarProductos.appendChild(nombProducto3);
        agregarProductos.appendChild(precioProducto3);
        agregarProductos.appendChild(masmenosProducto3);

        masmenosProducto3.appendChild(menosProducto3);
        masmenosProducto3.appendChild(contProducto3);
        masmenosProducto3.appendChild(masProducto3);
        masmenosProducto3.appendChild(eliminarProducto3);
    
        const masmas3 = document.querySelector('.masPro3');
        masmas3.addEventListener('click', (e) => {
            e.preventDefault();
            contProducto3.textContent = contPro3 += 1;
        });
        const menosmenos3 = document.querySelector('.menosPro3');
        menosmenos3.addEventListener('click', (e) => {
            e.preventDefault();
                contProducto3.textContent = contPro3--;
                if (contPro3 <= 1) {
                    contPro3 = 1;
                }
        });
        const deletePro3 = document.querySelector('.eliminarPro3');
        deletePro3.addEventListener('click', (e) => {
            e.preventDefault();
                agregarProductos.removeChild(nombProducto3);
                agregarProductos.removeChild(precioProducto3);
                agregarProductos.removeChild(masmenosProducto3);
        });
    }
    contador3++;
});

var contador4 = 1; var contPro4 = 1;
const ram4 = document.getElementById('ram4');
ram4.addEventListener('click', (e) => {
    e.preventDefault();

    if(contador4 <= 1) {
        const nombProducto4 = document.createElement('h3');
        const precioProducto4 = document.createElement('p');
        const masmenosProducto4 = document.createElement('div');
        var contProducto4 = document.createElement('h5');
        const masProducto4 = document.createElement('button');
        const menosProducto4 = document.createElement('button');
        const eliminarProducto4 = document.createElement('button');
    
        masmenosProducto4.className = 'masmenosProducto4';
        contProducto4.className = 'contProducto4';
        masProducto4.className = 'masPro4';
        menosProducto4.className = 'menosPro4';
        eliminarProducto4.className = 'eliminarPro4';

        nombProducto4.textContent = nombresRam[3];
        precioProducto4.textContent = preciosRam[3];

        masProducto4.textContent = '+';
        contProducto4.textContent = contPro4;
        menosProducto4.textContent = '-';

        agregarProductos.appendChild(nombProducto4);
        agregarProductos.appendChild(precioProducto4);
        agregarProductos.appendChild(masmenosProducto4);

        masmenosProducto4.appendChild(menosProducto4);
        masmenosProducto4.appendChild(contProducto4);
        masmenosProducto4.appendChild(masProducto4);
        masmenosProducto4.appendChild(eliminarProducto4);
    
        const masmas4 = document.querySelector('.masPro4');
        masmas4.addEventListener('click', (e) => {
            e.preventDefault();
            contProducto4.textContent = contPro4 += 1;
        });
        const menosmenos4 = document.querySelector('.menosPro4');
        menosmenos4.addEventListener('click', (e) => {
            e.preventDefault();
                contProducto4.textContent = contPro4--;
                if (contPro4 <= 1) {
                    contPro4 = 1;
                }
        });
        const deletePro4 = document.querySelector('.eliminarPro4');
        deletePro4.addEventListener('click', (e) => {
            e.preventDefault();
                agregarProductos.removeChild(nombProducto4);
                agregarProductos.removeChild(precioProducto4);
                agregarProductos.removeChild(masmenosProducto4);
        });
    }
    contador4++;
});

var contador5 = 1; var contPro5 = 1;
const ram5 = document.getElementById('ram5');
ram5.addEventListener('click', (e) => {
    e.preventDefault();

    if(contador5 <= 1) {
        const nombProducto5 = document.createElement('h3');
        const precioProducto5 = document.createElement('p');
        const masmenosProducto5 = document.createElement('div');
        var contProducto5 = document.createElement('h5');
        const masProducto5 = document.createElement('button');
        const menosProducto5 = document.createElement('button');
        const eliminarProducto5 = document.createElement('button');
    
        masmenosProducto5.className = 'masmenosProducto5';
        contProducto5.className = 'contProducto5';
        masProducto5.className = 'masPro5';
        menosProducto5.className = 'menosPro5';
        eliminarProducto5.className = 'eliminarPro5';

        nombProducto5.textContent = nombresRam[4];
        precioProducto5.textContent = preciosRam[4];

        masProducto5.textContent = '+';
        contProducto5.textContent = contPro5;
        menosProducto5.textContent = '-';

        agregarProductos.appendChild(nombProducto5);
        agregarProductos.appendChild(precioProducto5);
        agregarProductos.appendChild(masmenosProducto5);

        masmenosProducto5.appendChild(menosProducto5);
        masmenosProducto5.appendChild(contProducto5);
        masmenosProducto5.appendChild(masProducto5);
        masmenosProducto5.appendChild(eliminarProducto5);
    
        const masmas5 = document.querySelector('.masPro5');
        masmas5.addEventListener('click', (e) => {
            e.preventDefault();
            contProducto5.textContent = contPro5 += 1;
        });
        const menosmenos5 = document.querySelector('.menosPro5');
        menosmenos5.addEventListener('click', (e) => {
            e.preventDefault();
                contProducto5.textContent = contPro5--;
                if (contPro5 <= 1) {
                    contPro5 = 1;
                }
        });
        const deletePro5 = document.querySelector('.eliminarPro5');
        deletePro5.addEventListener('click', (e) => {
            e.preventDefault();
                2
                agregarProductos.removeChild(masmenosProducto5);
        });
    }
    contador5++;
});