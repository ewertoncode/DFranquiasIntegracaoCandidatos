class InteressadoController {

    constructor(divId, uuidBandeira) {

        this._interessadoView = new InteressadoView(divId, uuidBandeira);
        this._interessadoView.insertInPage();

        const $ = document.querySelector.bind(document);
        this._inputUuidBandeira = $("#uuid_bandeira");
        this._inputNome = $("#nome");
        this._inputEmail = $("#email");
        this._inputDataNascimento = $("#data_nascimento");
        this._inputEstadoCivil = $("#estado_civil");
        this._inputCPF = $("#cpf");
        this._inputCep = $("#cep");    

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    save(event) {
        event.preventDefault();
        let interessado = this._criaInteressado();
        this._mensagem.texto = 'Interessado cadastrado com sucesso!'
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputUuidBandeira.value = '';
        this._inputNome.value = '';
        this._inputEmail.value = '';
    }

    _criaInteressado() {
        let dataNascimento = null;
        console.log(this._inputNome);
        
        if(this._inputDataNascimento !== null) {
            dataNascimento = new Date(... this._inputDataNascimento.value.split('-').map(
                (item, indice) => item - indice % 2)
            )
        }

        return new Interessado(this._inputUuidBandeira.value, this._inputNome.value, 
            this._inputEmail.value, dataNascimento, this._inputEstadoCivil.value, this._inputCPF.value);
    }

}