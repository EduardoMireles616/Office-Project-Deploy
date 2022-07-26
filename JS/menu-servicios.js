import { instalacion,
         mudanzas,
         reconfiguracion,
         armado,
         desarmado,
         mobiliario,
         computadoras,
         cerrar,
         cerrarMudanzas,
         cerrarRec,
         instalacionMD,
         armadoMD,
         desarmadoMD,
         cerrarMD,
         mudanzasMD,
         reconfiguracionMD,
         mobiliarioMD,
         computadorasMD,
         cerrarMudanzasMD,
         reparacionMD,
         mobiliarioRecMD,
         cerrarReconfiguracionMD,
         cerrarArmado,
         cerrarDesarmado,
         cerrarMobiliario,
         cerrarComputadoras,
         mobiliarioRec,
         cerrarMobiliarioRec,
         RecIntS,
         recInt,
         cerrarRecInt,
         selectArmadoMD,
         cerrararmadoMD,
         cerrarDesarmadoMD,
         cerrarMudanzaMobiliarioMD,
         cerrarMudanzaComputadorasMD,
         cerrarRecMobiliarioMD,
         cerrarReperacionMD,
         nosotrosServ,
         nosotros,
         nosotrosMenuServ,
         nosotros2,
         nosotros3,
         nosotros4, 
         nosotros5,
         nosotros6,
         clientes, 
         clientesGaleria,
         clientes2,
         clientes3,
         clientes4,
         clientes5,
         clientes6,
         contacto1,
         contacto2,
         contacto3,
         contacto4,
         contacto5,
         contacto6,
         contactoForm,
         contactoTitulo,
         otrosClientes,
         clientesPrincipales,
         clientesPrincipalesTitulo,
        nosotrosMD1,
        nosotrosMD2,
        nosotrosMD3,
        nosotrosMD4,
        nosotrosMD5,
        nosotrosMD6,
        nosotros_menuServMD1,
        cerrar_nosotrosMD1,
        nosotros_menuServMD2,
        cerrar_nosotrosMD2,
        selectDesarmadoMD,
        nosotros_menuServMD3,
        cerrar_nosotrosMD3,
        selectMudanzaMobiliarioMD,
        nosotros_menuServMD4,
        cerrar_nosotrosMD4,
        selectMudanzaComputadorasMD,
        nosotros_menuServMD5,
        cerrar_nosotrosMD5,
        selectMobiliarioRecMD,
        nosotros_menuServMD6,
        cerrar_nosotrosMD6,
        selectReparacionMD,
        contactoFormMD1,
        contactoMD1,
        contactoMD2,
        contactoMD3,
        contactoMD4,
        contactoMD5,
        contactoMD6,
        ccerrar_contactoMD1,
        contactoFormMD2,
        cerrar_contactoMD2,
        contactoFormMD3,
        cerrar_contactoMD3,
        contactoFormMD4,
        cerrar_contactoMD4,
        contactoFormMD5,
        cerrar_contactoMD5,
        contactoFormMD6,
        cerrar_contactoMD6,
        clientesMD1,
        galeriaClientesMD1,
        cerrar_clientesMD1,
        clientesMD2,
        galeriaClientesMD2,
        cerrar_clientesMD2,
        clientesMD3,
        galeriaClientesMD3,
        cerrar_clientesMD3,
        clientesMD4,
        galeriaClientesMD4,
        cerrar_clientesMD4,
        clientesMD5,
        galeriaClientesMD5,
        cerrar_clientesMD5,
        clientesMD6,
        galeriaClientesMD6,
        cerrar_clientesMD6,
        procesoMudanzaComputadoras,
        procesoMudanzaMobiliario,
        procesoRec,
        procesoArmadoDesarmado,
        procesoArmadoDesarmadoMD


} from '../JS/utils/selectores.js'

import {
    armadoSeleccionado, 
    desarmadoSeleccionado, 
    mobiliarioSeleccionado, 
    mudanzaComputadorasSeleccionado, 
    mudanzaMobiliarioSeleccionado, 
    mudanzasSeleccionado, 
    reconfiguracionSeleccionado,
    reconfiguraciónMobiliarioSeleccionado,
    reparacionSeleccionado

} from '../JS/utils/funciones_menu-serv.js'

import { 
    regresarInstalacion, 
    regresarmudanzas, 
    regresarRec,
    regresarInstalacionMD,
    regresarMudanzasMD,
    regresarReconfiguracionMD,
    regresarArmado,
    regresarDesarmado,
    regresarMobiliario,
    regresarComputadoras,
    regresarMobiliarioRec,
    regresarRecInt,
    regresarArmadoMD,
    regresarDesrmadoMD,
    regresarMudanzaMobiliarioMD,
    regresarMudanzaComputadorasMD,
    regresarReconfiguraciónMobiliarioMD,
    regresarReparacionMD

} from '../JS/utils/funciones_retroceso_menu-serv.js'

import {
    mobiliarioSeleccionadoMD, 
    mudanzasSeleccionadoMD,
    reconfiguracionSeleccionadoMD,
    armadoSeleccionadoMDS,
    desarmadoSeleccionadoMDS,
    mudanzaMobiliarioSeleccionadoMDS,
    mudanzaComputadorasSeleccionadoMDS,
    recMobiliarioSeleccionadoMDS,
    reparacionMobiliarioSeleccionadoMDS
} from '../JS/utils/funciones_menu-sev-md.js'


//Eventos
eventListeners();
function eventListeners() {

    //Eventos de despiegue de servicio y retroceso
    instalacion.addEventListener('click', desplegar);
    mudanzas.addEventListener('click', desplegar);
    reconfiguracion.addEventListener('click', desplegar);

    //Eventos de regresar al estado inicial
    cerrar.addEventListener('click', regresarInstalacion);
    cerrarMudanzas.addEventListener('click', regresarmudanzas);
    cerrarRec.addEventListener('click', regresarRec);

    //Eventos de despiegue de servicio y retroceso debajo de MD
    instalacionMD.addEventListener('click', desplegarMD);
    mudanzasMD.addEventListener('click', desplegarMD)
    reconfiguracionMD.addEventListener('click', desplegarMD);

    //Eventos de despliegue de servicio espesifico debajo de MD
    armadoMD.addEventListener('click', desplegarMDS);
    desarmadoMD.addEventListener('click', desplegarMDS);

    mobiliarioMD.addEventListener('click', desplegarMDS);
    computadorasMD.addEventListener('click', desplegarMDS);

    mobiliarioRecMD.addEventListener('click', desplegarMDS);
    reparacionMD.addEventListener('click', desplegarMDS);

    //Eventos de regresar al estado inicial debajo de MD
    cerrarMD.addEventListener('click', regresarInstalacionMD);
    cerrarMudanzasMD.addEventListener('click', regresarMudanzasMD);
    cerrarReconfiguracionMD.addEventListener('click', regresarReconfiguracionMD);

    //Eventos de regresar al estado inicial de servicio espesifico debajo de MD
    cerrararmadoMD.addEventListener('click', regresarArmadoMD);
    cerrarDesarmadoMD.addEventListener('click', regresarDesrmadoMD);

    cerrarMudanzaMobiliarioMD.addEventListener('click', regresarMudanzaMobiliarioMD);
    cerrarMudanzaComputadorasMD.addEventListener('click', regresarMudanzaComputadorasMD);

    cerrarRecMobiliarioMD.addEventListener('click', regresarReconfiguraciónMobiliarioMD);
    cerrarReperacionMD.addEventListener('click', regresarReparacionMD)

    //Eventos de despliegue de el servicio especifico seleccionado
    armado.addEventListener('click', desplegarS);
    desarmado.addEventListener('click', desplegarS);

    mobiliario.addEventListener('click', desplegarS);
    computadoras.addEventListener('click', desplegarS);

    mobiliarioRec.addEventListener('click', desplegarS);
    recInt.addEventListener('click', desplegarS)

    //Eventos de regresar a las opciones de servicios desde un servicio espescifico
    cerrarArmado.addEventListener('click', regresarArmado); 
    cerrarDesarmado.addEventListener('click', regresarDesarmado);

    cerrarMobiliario.addEventListener('click', regresarMobiliario);
    cerrarComputadoras.addEventListener('click', regresarComputadoras);

    cerrarMobiliarioRec.addEventListener('click', regresarMobiliarioRec);
    cerrarRecInt.addEventListener('click', regresarRecInt);

    //Nosotros Menu serv Desplegar
    nosotros.addEventListener('click', desplegarNosotros);
    nosotros2.addEventListener('click', desplegarNosotros);
    nosotros3.addEventListener('click', desplegarNosotros);
    nosotros4.addEventListener('click', desplegarNosotros);
    nosotros5.addEventListener('click', desplegarNosotros);
    nosotros6.addEventListener('click', desplegarNosotros);

    //Clientes
    clientes.addEventListener('click', desplegarClientes);
    clientes2.addEventListener('click', desplegarClientes);
    clientes3.addEventListener('click', desplegarClientes);
    clientes4.addEventListener('click', desplegarClientes);
    clientes5.addEventListener('click', desplegarClientes);
    clientes6.addEventListener('click', desplegarClientes);

    //Contacto
    contacto1.addEventListener('click', desplegarContacto);
    contacto2.addEventListener('click', desplegarContacto);
    contacto3.addEventListener('click', desplegarContacto);
    contacto4.addEventListener('click', desplegarContacto);
    contacto5.addEventListener('click', desplegarContacto);
    contacto6.addEventListener('click', desplegarContacto);

    //Nosotros debajo de MD
    nosotrosMD1.addEventListener('click', desplegarNosotrosMD1);
    nosotrosMD2.addEventListener('click', desplegarNosotrosMD2);
    nosotrosMD3.addEventListener('click', desplegarNosotrosMD3);
    nosotrosMD4.addEventListener('click', desplegarNosotrosMD4);
    nosotrosMD5.addEventListener('click', desplegarNosotrosMD5);
    nosotrosMD6.addEventListener('click', desplegarNosotrosMD6);

    //Cerrar Nosotros debajo de MD
    cerrar_nosotrosMD1.addEventListener('click', cerrarNosotrosMD1);
    cerrar_nosotrosMD2.addEventListener('click', cerrarNosotrosMD2);
    cerrar_nosotrosMD3.addEventListener('click', cerrarNosotrosMD3);
    cerrar_nosotrosMD4.addEventListener('click', cerrarNosotrosMD4);
    cerrar_nosotrosMD5.addEventListener('click', cerrarNosotrosMD5);
    cerrar_nosotrosMD6.addEventListener('click', cerrarNosotrosMD6);

    //Contacto debajo de MD
     contactoMD1.addEventListener('click', desplegarContactoMD1);
     contactoMD2.addEventListener('click', desplegarContactoMD2);
     contactoMD3.addEventListener('click', desplegarContactoMD3);
     contactoMD4.addEventListener('click', desplegarContactoMD4);
     contactoMD5.addEventListener('click', desplegarContactoMD5);
     contactoMD6.addEventListener('click', desplegarContactoMD6);

     ccerrar_contactoMD1.addEventListener('click', cerrarContactoMD1);
     cerrar_contactoMD2.addEventListener('click', cerrarContactoMD2);
     cerrar_contactoMD3.addEventListener('click', cerrarContactoMD3);
     cerrar_contactoMD4.addEventListener('click', cerrarContactoMD4);
     cerrar_contactoMD5.addEventListener('click', cerrarContactoMD5);
     cerrar_contactoMD6.addEventListener('click', cerrarContactoMD6);

     //Clientes denajo de MD
     clientesMD1.addEventListener('click', desplegarClientesMD1);
     clientesMD2.addEventListener('click', desplegarClientesMD2);
     clientesMD3.addEventListener('click', desplegarClientesMD3);
     clientesMD4.addEventListener('click', desplegarClientesMD4);
     clientesMD5.addEventListener('click', desplegarClientesMD5);
     clientesMD6.addEventListener('click', desplegarClientesMD6);

     cerrar_clientesMD1.addEventListener('click', cerrarClientesMD1);
     cerrar_clientesMD2.addEventListener('click', cerrarClientesMD2);
     cerrar_clientesMD3.addEventListener('click', cerrarClientesMD3);
     cerrar_clientesMD4.addEventListener('click', cerrarClientesMD4);
     cerrar_clientesMD5.addEventListener('click', cerrarClientesMD5);
     cerrar_clientesMD6.addEventListener('click', cerrarClientesMD6);

}
//Funciones

//!Aplicacion de Dispositivos de Escritorio 
//----------Retrae los otros sevicios y enfoca los sub servicios de la seleccion
function desplegar(e){

    if (e.target.classList.contains('select_instalacion')) {

        if (true) {
            mobiliarioSeleccionado();
            return;
            
        }
     } 
    
    else if (e.target.classList.contains('select_mudanzas') || e.target.classList.contains('container__servicio--mudanzas')) {

        if (true) {
            mudanzasSeleccionado();
            return;

        }
    }
    
    else if (e.target.classList.contains('select-reconfiguracion') || e.target.classList.contains('container__servicio--reconfiguracion')) {

        if (true) {
            reconfiguracionSeleccionado();
            return;

        }
    } 
}


function desplegarS(e) {

    // ! Eventos al seleccionar sub-servicios de la seccion MOBILIARIO
    if (e.target.classList.contains('select_armado')) {

        if (true) {
            armadoSeleccionado();
            return;   
        }
    }
    
    if (e.target.classList.contains('select-desarmado') || e.target.classList.contains('container__servicio--desarmado')) {

        if (true) {
            desarmadoSeleccionado();
            return;
        }
    }

    // ! Eventos al seleccionar sub-servicios de la seccion Mudanzas
    if (e.target.classList.contains('select-mobiliario') || e.target.classList.contains('container__servicio--mobiliario')) {

        if (true) {
            mudanzaMobiliarioSeleccionado();   
            return;

        }
    }

    if (e.target.classList.contains('select-computadoras') || e.target.classList.contains('container__servicio--computadoras')) {

        if (true) {
            mudanzaComputadorasSeleccionado();
            return;

        }
    }

    // ! Eventos al seleccionar sub-servicios de la seccion Reconfiguración
    if (e.target.classList.contains('select-mobiliario-rec') || e.target.classList.contains('container__servicio--mobiliario-rec')) {

        if (true) {
            reconfiguraciónMobiliarioSeleccionado();
            return;

        }
    }

    if (e.target.classList.contains('select-rec_int') || e.target.classList.contains('container__servicio--rec_int')) {

        if (true) {
            reparacionSeleccionado();
            return;

        }
    }
    
}

//---------Desplegar Nosotros de menu de servicios
function desplegarNosotros(e) {
    
    if (e.target.classList.contains('opciones__servicio--btn')) {
        
        if (true) {
            
            nosotrosMenuServ.classList.remove('ocultar');
            clientesGaleria.classList.add('ocultar');
            contactoForm.classList.add('ocultar');
            contactoTitulo.classList.add('ocultar');
            otrosClientes.classList.add('ocultar');
            clientesPrincipalesTitulo.classList.add('ocultar');
            clientesPrincipales.classList.add('ocultar');
            procesoMudanzaComputadoras.classList.add('ocultar');
            procesoMudanzaMobiliario.classList.add('ocultar');
            procesoRec.classList.add('ocultar');
            procesoArmadoDesarmado.classList.add('ocultar');
        }

    }
}

//---------Desplegar Clientes de menu de servicios
function desplegarClientes(e) {

    if (e.target.classList.contains('opciones__servicio--btn')) {
        
        if (true) {
            clientesPrincipalesTitulo.classList.remove('ocultar');
            clientesPrincipales.classList.remove('ocultar');
            otrosClientes.classList.remove('ocultar');
            clientesGaleria .classList.remove('ocultar');
            nosotrosMenuServ.classList.add('ocultar');
            contactoForm.classList.add('ocultar');
            contactoTitulo.classList.add('ocultar');
            procesoMudanzaComputadoras.classList.add('ocultar');
            procesoMudanzaMobiliario.classList.add('ocultar');
            procesoRec.classList.add('ocultar');
            procesoArmadoDesarmado.classList.add('ocultar');
            
        }
    }
}

//---------Desplegar Contacto de Menú de servicios
function desplegarContacto(e) {
    if (e.target.classList.contains('opciones__servicio--btn')) {
        
        if (true) {
            contactoTitulo.classList.remove('ocultar');
            contactoForm.classList.remove('ocultar');
            clientesGaleria .classList.add('ocultar');
            nosotrosMenuServ.classList.add('ocultar');
            otrosClientes.classList.add('ocultar');
            clientesPrincipalesTitulo.classList.add('ocultar');
            clientesPrincipales.classList.add('ocultar');
            procesoMudanzaComputadoras.classList.add('ocultar');
            procesoMudanzaMobiliario.classList.add('ocultar');
            procesoRec.classList.add('ocultar');
            procesoArmadoDesarmado.classList.add('ocultar');
        }
    }
}

//!Aplicacion de Dispositivos moviles
//----------Retrae los otros sevicios y enfoca los sub servicios de la seleccion debajo de MD
function desplegarMD(e) {
    
    if (e.target.classList.contains('select_instalacion-md')) {

        if (true) {
            mobiliarioSeleccionadoMD();
            return;         
        }
    } 

    if (e.target.classList.contains('select_mudanzas-md-down') || e.target.classList.contains('container__servicio--mudanzas-md-down')) {

        if (true) {
            mudanzasSeleccionadoMD();
            return;
        } 
    }

    if (e.target.classList.contains('select-reconfiguracion-md') || e.target.classList.contains('container__servicio--reconfiguracion-md')) {

        if (true) {
            reconfiguracionSeleccionadoMD();
            return;
        } 
    } 

}

function desplegarMDS(e) {

    if (e.target.classList.contains('select-armado-md-down') || e.target.classList.contains('container__servicio--armado-md-down')) {

        if (true) {
            armadoSeleccionadoMDS();
            return;         
        }
    }
    
    if (e.target.classList.contains('select-desarmado') || e.target.classList.contains('container__servicio--desarmado-md-down')) {

        if (true) {
            desarmadoSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-mobiliario-md') || e.target.classList.contains('container__servicio--mobiliario-md-down')) {

        if (true) {
            mudanzaMobiliarioSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-computadoras-md') || e.target.classList.contains('container__servicio--computadoras-md-down')) {

        if (true) {
            mudanzaComputadorasSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-mobiliario-rec-md') || e.target.classList.contains('container__servicio--mobiliario-rec-md-down')) {

        if (true) {
            recMobiliarioSeleccionadoMDS();
            return;         
        }
    }

    if (e.target.classList.contains('select-rec_int-md') || e.target.classList.contains('container__servicio--rec_int-md-down')) {

        if (true) {
            reparacionMobiliarioSeleccionadoMDS();
            return;         
        }
    }
}

//?Funciones de desplegar Nosotros debajo de MD

function desplegarNosotrosMD1(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectArmadoMD.classList.add('ocultar');
            nosotros_menuServMD1.classList.remove('ocultar');
        }
    }
}

function desplegarNosotrosMD2(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectDesarmadoMD.classList.add('ocultar');
            nosotros_menuServMD2.classList.remove('ocultar');
        }
    }
}

function desplegarNosotrosMD3(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectMudanzaMobiliarioMD.classList.add('ocultar');
            nosotros_menuServMD3.classList.remove('ocultar');
        }
    }
}

function desplegarNosotrosMD4(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectMudanzaComputadorasMD.classList.add('ocultar');
            nosotros_menuServMD4.classList.remove('ocultar');
            
        }
    }
}

function desplegarNosotrosMD5(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectMobiliarioRecMD.classList.add('ocultar');
            nosotros_menuServMD5.classList.remove('ocultar');
        }
    }
}

function desplegarNosotrosMD6(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectReparacionMD.classList.add('ocultar');
            nosotros_menuServMD6.classList.remove('ocultar');
        }
    }
}

function cerrarNosotrosMD1() {
    selectArmadoMD.classList.remove('ocultar');
    nosotros_menuServMD1.classList.add('ocultar');
}

function cerrarNosotrosMD2() {
    selectDesarmadoMD.classList.remove('ocultar');
    nosotros_menuServMD2.classList.add('ocultar');
}

function cerrarNosotrosMD3() {
    selectMudanzaMobiliarioMD.classList.remove('ocultar');
    nosotros_menuServMD3.classList.add('ocultar');
}

function cerrarNosotrosMD4() {
    selectMudanzaComputadorasMD.classList.remove('ocultar');
    nosotros_menuServMD4.classList.add('ocultar');
}

function cerrarNosotrosMD5() {
    selectMobiliarioRecMD.classList.remove('ocultar');
    nosotros_menuServMD5.classList.add('ocultar');
}

function cerrarNosotrosMD6() {
    selectReparacionMD.classList.remove('ocultar');
    nosotros_menuServMD6.classList.add('ocultar');
}

//?Funciones de desplegar Contacto debajo de MD

function desplegarContactoMD1(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            contactoFormMD1.classList.remove('ocultar');
            selectArmadoMD.classList.add('ocultar');
        }
    }
}

function desplegarContactoMD2(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            contactoFormMD2.classList.remove('ocultar');
            selectDesarmadoMD.classList.add('ocultar');
        }
    }
}

function desplegarContactoMD3(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            contactoFormMD3.classList.remove('ocultar');
            selectMudanzaMobiliarioMD.classList.add('ocultar');
        }
    }
}

function desplegarContactoMD4(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            contactoFormMD4.classList.remove('ocultar');
            selectMudanzaComputadorasMD.classList.add('ocultar');
        }
    }
}

function desplegarContactoMD5(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            contactoFormMD5.classList.remove('ocultar');
            selectMobiliarioRecMD.classList.add('ocultar');
        }
    }
}

function desplegarContactoMD6(e) {
    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            contactoFormMD6.classList.remove('ocultar');
            selectReparacionMD.classList.add('ocultar');
        }
    }
}

function cerrarContactoMD1() {
    contactoFormMD1.classList.add('ocultar');
    selectArmadoMD.classList.remove('ocultar');
}

function cerrarContactoMD2() {
    contactoFormMD2.classList.add('ocultar');
    selectDesarmadoMD.classList.remove('ocultar');
}

function cerrarContactoMD3() {
    contactoFormMD3.classList.add('ocultar');
    selectMudanzaMobiliarioMD.classList.remove('ocultar');
}

function cerrarContactoMD4() {
    contactoFormMD4.classList.add('ocultar');
    selectMudanzaComputadorasMD.classList.remove('ocultar');
}

function cerrarContactoMD5() {
    contactoFormMD5.classList.add('ocultar');
    selectMobiliarioRecMD.classList.remove('ocultar');
}

function cerrarContactoMD6() {
    contactoFormMD6.classList.add('ocultar');
    selectReparacionMD.classList.remove('ocultar');
}

//?Funciones de desplegar Clientes debajo de MD

function desplegarClientesMD1(e) {

    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectArmadoMD.classList.add('ocultar');
            galeriaClientesMD1.classList.remove('ocultar');
        }
    }
}

function desplegarClientesMD2(e) {

    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectDesarmadoMD.classList.add('ocultar');
            galeriaClientesMD2.classList.remove('ocultar');
        }
    }
}

function desplegarClientesMD3(e) {

    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectMudanzaMobiliarioMD.classList.add('ocultar');
            galeriaClientesMD3.classList.remove('ocultar');
        }
    }
}

function desplegarClientesMD4(e) {

    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectMudanzaComputadorasMD.classList.add('ocultar');
            galeriaClientesMD4.classList.remove('ocultar');
        }
    }
}

function desplegarClientesMD5(e) {

    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectMobiliarioRecMD.classList.add('ocultar');
            galeriaClientesMD5.classList.remove('ocultar');
        }
    }
}

function desplegarClientesMD6(e) {

    if (e.target.classList.contains('btn-servicioMD')) {
        
        if (true) {
            selectReparacionMD.classList.add('ocultar');
            galeriaClientesMD6.classList.remove('ocultar');
        }
    }
}

function cerrarClientesMD1() {

    selectArmadoMD.classList.remove('ocultar');
    galeriaClientesMD1.classList.add('ocultar');
}

function cerrarClientesMD2() {

    selectDesarmadoMD.classList.remove('ocultar');
    galeriaClientesMD2.classList.add('ocultar');
}

function cerrarClientesMD3() {

    selectMudanzaMobiliarioMD.classList.remove('ocultar');
    galeriaClientesMD3.classList.add('ocultar');
}

function cerrarClientesMD4() {

    selectMudanzaComputadorasMD.classList.remove('ocultar');
    galeriaClientesMD4.classList.add('ocultar');
}

function cerrarClientesMD5() {

    selectMobiliarioRecMD.classList.remove('ocultar');
    galeriaClientesMD5.classList.add('ocultar');
}

function cerrarClientesMD6() {

    selectReparacionMD.classList.remove('ocultar');
    galeriaClientesMD6.classList.add('ocultar');
}