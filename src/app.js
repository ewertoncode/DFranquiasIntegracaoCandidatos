const DFSDK = {
    divId : '',
    uuidBandeira: '',
};

window.onload = () => {
    const interessadoConroller = new InteressadoController(DFSDK.divId, DFSDK.uuidBandeira);
    document.querySelector('form').addEventListener('submit',  interessadoConroller.save.bind(interessadoConroller));
}
