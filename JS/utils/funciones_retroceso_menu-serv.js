import { instalacion,
    mudanzas,
    reconfiguracion,
    armado,
    desarmado,
    mobiliario,
    computadoras,
    mobiliarioRec,
    recInt,
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
    armadoS,
    cerrarArmado,
    desarmadoS,
    cerrarDesarmado,
    mobiliarioS,
    cerrarMobiliario,
    computadorasS,
    cerrarComputadoras,
    cerrarMobiliarioRec,
    mobiliarioRecS,
    cerrarRecInt,
    RecIntS,
    selectArmadoMD,
    cerrararmadoMD,
    cerrarDesarmadoMD,
    selectDesarmadoMD,
    selectMudanzaMobiliarioMD,
    cerrarMudanzaMobiliarioMD,
    cerrarMudanzaComputadorasMD,
    selectMudanzaComputadorasMD,
    cerrarRecMobiliarioMD,
    selectMobiliarioRecMD,
    cerrarReperacionMD,
    selectReparacionMD,
    nosotros,
    nosotrosMenuServ,
    clientesGaleria,
    contactoTitulo,
    contactoForm,
    otrosClientes,
    clientesPrincipales,
    clientesPrincipalesTitulo,
    nosotros_menuServMD1,
    nosotros_menuServMD2,
    nosotros_menuServMD3,
    nosotros_menuServMD4,
    nosotros_menuServMD5,
    nosotros_menuServMD6,
    contactoFormMD1,
    contactoFormMD2,
    contactoFormMD3,
    contactoFormMD4,
    contactoFormMD5,
    contactoFormMD6,
    galeriaClientesMD1,
    galeriaClientesMD2,
    galeriaClientesMD3,
    galeriaClientesMD4,
    galeriaClientesMD5,
    galeriaClientesMD6,
    procesoMudanzaComputadoras,
    procesoMudanzaMobiliario,
    procesoRec,
    procesoArmadoDesarmado,
    procesoArmadoDesarmadoMD

    

} from '../utils/selectores.js'
import { mudanzaMobiliarioSeleccionadoMDS } from './funciones_menu-sev-md.js';

//TODO: Regresa la pagina a su estado inicial con lo servicios

// ? Menu principal de Servicios
//! Regresa de haber seleccionado "MOBILIARIO" al estado normal del menú de servicios
export function regresarInstalacion() {
    mudanzas.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    cerrar.classList.add('ocultar');
    cerrar.classList.remove('active');
    armado.classList.add('ocultar');
    desarmado.classList.add('ocultar');
    procesoArmadoDesarmado.classList.add('ocultar')
}

//! Regresa de haber seleccionado "MUDANZAS" al estado normal del menú de servicios
export function regresarmudanzas() {
    instalacion.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    mudanzas.classList.remove('container__servicio--mudanzas-s');
    mudanzas.classList.add('container__servicio--mudanzas')
    cerrarMudanzas.classList.add('ocultar');
    cerrarMudanzas.classList.remove('active');
    mobiliario.classList.add('ocultar');
    computadoras.classList.add('ocultar');
    procesoMudanzaComputadoras.classList.add('ocultar');
    procesoMudanzaMobiliario.classList.add('ocultar');
}

//! Regresa de haber seleccionado "RECONFIGURACION" al estado normal del menú de servicios
export function regresarRec() {
    instalacion.classList.remove('ocultar');
    mudanzas.classList.remove('ocultar');
    reconfiguracion.classList.remove('container__servicio--reconfiguracion-s');
    reconfiguracion.classList.add('container__servicio--reconfiguracion')
    cerrarRec.classList.add('ocultar');
    cerrarRec.classList.remove('active');
    mobiliarioRec.classList.add('ocultar');
    recInt.classList.add('ocultar');
    procesoRec.classList.add('ocultar');
}

// ? Menu de Sub-ervicio especifico seleccionado
//? Mobiliario
//! Regresa de haber sellecionado "Armado" a los sub-servicios de "MOBILIARIO"
export function regresarArmado() {
    armadoS.classList.add('ocultar')
    cerrarArmado.classList.add('ocultar');
    cerrarArmado.classList.remove('active');
    desarmado.classList.remove('ocultar');
    instalacion.classList.remove('ocultar');
    armado.classList.add('container__servicio--armado');
    armado.classList.remove('container__servicio--armado-s-s');
    nosotrosMenuServ.classList.add('ocultar');
    clientesGaleria.classList.add('ocultar');
    contactoTitulo.classList.add('ocultar');
    contactoForm.classList.add('ocultar');
    otrosClientes.classList.add('ocultar');
    clientesPrincipalesTitulo.classList.add('ocultar');
    clientesPrincipales.classList.add('ocultar');
    procesoArmadoDesarmado.classList.remove('ocultar');
    
}

//! Regresa de haber sellecionado "Desarmado" a los sub-servicios de "MOBILIARIO"
export function regresarDesarmado() {
    desarmadoS.classList.add('ocultar')
    cerrarDesarmado.classList.add('ocultar');
    cerrarDesarmado.classList.remove('active');
    desarmado.classList.remove('ocultar');
    instalacion.classList.remove('ocultar');
    armado.classList.remove('ocultar');
    desarmado.classList.add('container__servicio--desarmado');
    desarmado.classList.remove('container__servicio--desarmado-s-s');
    nosotrosMenuServ.classList.add('ocultar');
    clientesGaleria.classList.add('ocultar');
    contactoTitulo.classList.add('ocultar');
    contactoForm.classList.add('ocultar');
    otrosClientes.classList.add('ocultar');
    clientesPrincipalesTitulo.classList.add('ocultar');
    clientesPrincipales.classList.add('ocultar');
    procesoArmadoDesarmado.classList.remove('ocultar');
}

//?Mudanza
//! Regresa de haber sellecionado "Mobiliario" a los sub-servicios de "MUDANZA"
export function regresarMobiliario() {
    mobiliarioS.classList.add('ocultar')
    cerrarMobiliario.classList.add('ocultar');
    cerrarMobiliario.classList.remove('active');
    mobiliario.classList.remove('ocultar');
    mudanzas.classList.remove('ocultar');
    computadoras.classList.remove('ocultar');
    mobiliario.classList.add('container__servicio--mobiliario');
    mobiliario.classList.remove('container__servicio--mobiliario-s-s');
    nosotrosMenuServ.classList.add('ocultar');
    clientesGaleria.classList.add('ocultar');
    contactoTitulo.classList.add('ocultar');
    contactoForm.classList.add('ocultar');
    otrosClientes.classList.add('ocultar');
    clientesPrincipalesTitulo.classList.add('ocultar');
    clientesPrincipales.classList.add('ocultar');
    procesoMudanzaMobiliario.classList.add('ocultar');
    procesoMudanzaMobiliario.classList.add('ocultar')
}

//! Regresa de haber sellecionado "Computadoras" a los sub-servicios de "MUDANZA"
export function regresarComputadoras() {
    computadorasS.classList.add('ocultar')
    cerrarComputadoras.classList.add('ocultar');
    cerrarComputadoras.classList.remove('active');
    computadoras.classList.remove('ocultar');
    mudanzas.classList.remove('ocultar');
    mobiliario.classList.remove('ocultar');
    computadoras.classList.add('container__servicio--computadoras');
    computadoras.classList.remove('container__servicio--computadoras-s-s');
    nosotrosMenuServ.classList.add('ocultar');
    clientesGaleria.classList.add('ocultar');
    contactoTitulo.classList.add('ocultar');
    contactoForm.classList.add('ocultar');
    otrosClientes.classList.add('ocultar');
    clientesPrincipalesTitulo.classList.add('ocultar');
    clientesPrincipales.classList.add('ocultar');
    procesoMudanzaComputadoras.classList.add('ocultar');
}

//? Reconfiguración
export function regresarMobiliarioRec() {
    mobiliarioRecS.classList.add('ocultar')
    cerrarMobiliarioRec.classList.add('ocultar');
    cerrarMobiliarioRec.classList.remove('active');
    recInt.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    mobiliarioRec.classList.remove('ocultar');
    mobiliarioRec.classList.add('container__servicio--mobiliario-rec');
    mobiliarioRec.classList.remove('container__servicio--mobiliario-rec-s-s');
    nosotrosMenuServ.classList.add('ocultar');
    clientesGaleria.classList.add('ocultar');
    contactoTitulo.classList.add('ocultar');
    contactoForm.classList.add('ocultar');
    otrosClientes.classList.add('ocultar');
    clientesPrincipalesTitulo.classList.add('ocultar');
    clientesPrincipales.classList.add('ocultar');
    procesoRec.classList.remove('ocultar');
}

export function regresarRecInt() {
    RecIntS.classList.add('ocultar')
    cerrarRecInt.classList.add('ocultar');
    cerrarRecInt.classList.remove('active');
    mobiliarioRec.classList.remove('ocultar');
    reconfiguracion.classList.remove('ocultar');
    recInt.classList.remove('ocultar');
    recInt.classList.add('container__servicio--reconfiguracion');
    recInt.classList.remove('container__servicio--mobiliario-recInt-s-s');
    nosotrosMenuServ.classList.add('ocultar');
    clientesGaleria.classList.add('ocultar');
    contactoTitulo.classList.add('ocultar');
    contactoForm.classList.add('ocultar');
    otrosClientes.classList.add('ocultar');
    clientesPrincipalesTitulo.classList.add('ocultar');
    clientesPrincipales.classList.add('ocultar');
}

// ? Menu principal de Servicios debajo de tamaño de pantalla MEDIANO
//! Regresa de haber seleccionado "MOBILIARIO" al estado normal del menú de servicios debajo de tamaño mediano de pantalla
export function regresarInstalacionMD() {
    mudanzasMD.classList.remove('ocultar');
    reconfiguracionMD.classList.remove('ocultar');
    cerrarMD.classList.add('ocultar');
    cerrarMD.classList.remove('active');
    armadoMD.classList.add('ocultar');
    desarmadoMD.classList.add('ocultar');
    nosotros_menuServMD1.classList.add('ocultar');
    procesoArmadoDesarmadoMD.classList.add('ocultar');
}

//! Regresa de haber seleccionado "MUDANZAS" al estado normal del menú de servicios debajo de tamaño mediano de pantalla
export function regresarMudanzasMD() {
    instalacionMD.classList.remove('ocultar');
    reconfiguracionMD.classList.remove('ocultar');
    mudanzasMD.classList.remove('container__servicio--mudanzas-md-down-s');
    mudanzasMD.classList.add('container__servicio--mudanzas-md-down')
    cerrarMudanzasMD.classList.add('ocultar');
    cerrarMudanzasMD.classList.remove('active');
    mobiliarioMD.classList.add('ocultar');
    computadorasMD.classList.add('ocultar')
}

//! Regresa de haber seleccionado "RECONFIGURACIÓN" al estado normal del menú de servicios debajo de tamaño mediano de pantalla
export function regresarReconfiguracionMD() {
    instalacionMD.classList.remove('ocultar');
    mudanzasMD.classList.remove('ocultar');
    reconfiguracionMD.classList.remove('container__servicio--reconfiguracion-md-down-s');
    reconfiguracionMD.classList.add('container__servicio--reconfiguracion-md-down')
    cerrarReconfiguracionMD.classList.add('ocultar');
    cerrarReconfiguracionMD.classList.remove('active');
    mobiliarioRecMD.classList.add('ocultar');
    reparacionMD.classList.add('ocultar');
    

}

export function regresarMudanzaMobiliarioMD() {
    mudanzasMD.classList.remove('ocultar');
    computadorasMD.classList.remove('ocultar');
    mobiliarioMD.classList.remove('container__servicio--mobiliario-md-down-s');
    mobiliarioMD.classList.add('container__servicio--mobiliario-md-down');
    selectMudanzaMobiliarioMD.classList.add('ocultar');
    cerrarMudanzaMobiliarioMD.classList.add('ocultar');
    nosotros_menuServMD3.classList.add('ocultar');
    contactoFormMD3.classList.add('ocultar');
    galeriaClientesMD3.classList.add('ocultar');
}

export function regresarMudanzaComputadorasMD() {
    mudanzasMD.classList.remove('ocultar');
    mobiliarioMD.classList.remove('ocultar');
    computadorasMD.classList.remove('container__servicio--computadoras-md-down-s');
    computadorasMD.classList.add('container__servicio--computadoras-md-down');
    selectMudanzaComputadorasMD.classList.add('ocultar');
    cerrarMudanzaComputadorasMD.classList.add('ocultar');
    nosotros_menuServMD4.classList.add('ocultar');
    contactoFormMD4.classList.add('ocultar');
    galeriaClientesMD4.classList.add('ocultar');
}

export function regresarReconfiguraciónMobiliarioMD() {

    reconfiguracionMD.classList.remove('ocultar');
    reparacionMD.classList.remove('ocultar');
    mobiliarioRecMD.classList.remove('container__servicio--mobiliario-rec-md-down-s');
    mobiliarioRecMD.classList.add('container__servicio--mobiliario-rec-md-down');
    selectMobiliarioRecMD.classList.add('ocultar');
    cerrarRecMobiliarioMD.classList.add('ocultar');
    nosotros_menuServMD5.classList.add('ocultar');
    contactoFormMD5.classList.add('ocultar');
    galeriaClientesMD5.classList.add('ocultar');

}

export function regresarReparacionMD() {

    reconfiguracionMD.classList.remove('ocultar');
    mobiliarioRecMD.classList.remove('ocultar');
    reparacionMD.classList.remove('container__servicio--rec_int-md-down-s');
    reparacionMD.classList.add('container__servicio--rec_int-md-down');
    selectReparacionMD.classList.add('ocultar');
    cerrarReperacionMD.classList.add('ocultar');
    nosotros_menuServMD6.classList.add('ocultar');
    contactoFormMD6.classList.add('ocultar');
    galeriaClientesMD6.classList.add('ocultar');
    
    
}

//!Regresar del la seccion de inofrmacion del sub servicio de armado 
export function regresarArmadoMD(){
    selectArmadoMD.classList.add('ocultar')
    instalacionMD.classList.remove('ocultar');
    armadoMD.classList.remove('container__servicio--armado-md-down-s');
    armadoMD.classList.add('container__servicio--armado-md-down');
    cerrararmadoMD.classList.add('ocultar');
    cerrararmadoMD.classList.remove('active');
    desarmadoMD.classList.remove('ocultar');
    nosotros_menuServMD1.classList.add('ocultar');
    contactoFormMD1.classList.add('ocultar');
    galeriaClientesMD1.classList.add('ocultar');
}

//!Regresar del la seccion de inofrmacion del sub servicio de desarmado 
export function regresarDesrmadoMD(){
    selectDesarmadoMD.classList.add('ocultar')
    instalacionMD.classList.remove('ocultar');
    desarmadoMD.classList.remove('container__servicio--desarmado-md-down-s');
    desarmadoMD.classList.add('container__servicio--desarmado-md-down');
    cerrarDesarmadoMD.classList.add('ocultar');
    cerrarDesarmadoMD.classList.remove('active');
    armadoMD.classList.remove('ocultar');
    nosotros_menuServMD2.classList.add('ocultar');
    contactoFormMD2.classList.add('ocultar');
    galeriaClientesMD2.classList.add('ocultar');
}



