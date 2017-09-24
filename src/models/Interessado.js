class Interessado {

    constructor(_uuidBandeira, _nome, _email, _dataNascimento, _estadoCivil, _cpf) {
        Object.assign(this, {_uuidBandeira, _nome, _email, _dataNascimento, _estadoCivil, _cpf});
    }

    get uuidBandeira() {
        return this._uuidBandeira;
    }

    

} 