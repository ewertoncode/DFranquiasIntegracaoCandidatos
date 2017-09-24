class InteressadoView {

    constructor(seletor, uuidBandeira) {
        if(seletor == '') {
            throw Error('Informe o seleter que o formulário será inserido');
        }
        if(uuidBandeira == '') {
            throw Error('Informe o uuid da bandeira');
        }
        this._elemento = document.querySelector('#'+seletor);
        this._uuidBandeira = uuidBandeira;
    }

    insertInPage() {
        this._elemento.innerHTML = this.showForm();
    }

    showForm() {
        return `
        <form id="form-interessado-bandeira">
            <input type="hidden" name="uuid_bandeira" id="uuid_bandeira" value="${this._uuidBandeira}" />
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="form-group">
                        <label for="nome" class="required">Nome</label>
                        <input type="text" name="nome" id="nome" class="form-control" tabindex="1" placeholder="Seu nome"  />
                    </div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="form-group">
                        <label for="nome" class="required">Email</label>
                        <input type="email" name="email" id="email" class="form-control" tabindex="2" placeholder="Seu email"  />
                        <small id="emailHelp" class="form-text text-muted">Este email será usado para acessar o portal e acompanhar as fases do seu processo.</small>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <div class="form-group">
                        <label for="nome" class="required">Data de nascimento</label>
                        <input type="date" name="data_nascimento" id="data_nascimento" class="form-control" tabindex="3"  />
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="form-group">
                        <label for="nome" class="required">Estado civil</label>
                        <select name="estado_civil" class="form-control" tabindex="4" id="estado_civil">
                            <option value="SOLTEIRO">Solteiro</option>
                            <option value="CASADO">Casado</option>
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="form-group">
                        <label for="nome" class="required">CPF</label>
                        <input type="text" name="cpf" id="cpf" class="form-control" tabindex="4"  />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <div class="form-group">
                        <label for="nome" class="required">CEP</label>
                        <input type="text" name="cep" id="cep" class="form-control" tabindex="5"  />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-12">
                    <div class="form-group">
                        <button type="submit" id="enviar" class="btn btn-success" on-click="enviaFormInteressado()">Enviar solicitação</button>
                    </div>
                </div>
            </div>
            
        </form>
        `;
    }
}