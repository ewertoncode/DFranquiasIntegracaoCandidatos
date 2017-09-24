'use strict';

var DFSDK = {
    divId: '',
    uuidBandeira: ''
};

window.onload = function () {
    var interessadoConroller = new InteressadoController(DFSDK.divId, DFSDK.uuidBandeira);
    document.querySelector('form').addEventListener('submit', interessadoConroller.save.bind(interessadoConroller));
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InteressadoController = function () {
    function InteressadoController(divId, uuidBandeira) {
        _classCallCheck(this, InteressadoController);

        this._interessadoView = new InteressadoView(divId, uuidBandeira);
        this._interessadoView.insertInPage();

        var $ = document.querySelector.bind(document);
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

    _createClass(InteressadoController, [{
        key: "save",
        value: function save(event) {
            event.preventDefault();
            var interessado = this._criaInteressado();
            this._mensagem.texto = 'Interessado cadastrado com sucesso!';
            this._mensagemView.update(this._mensagem);
            this._limpaFormulario();
        }
    }, {
        key: "_limpaFormulario",
        value: function _limpaFormulario() {
            this._inputUuidBandeira.value = '';
            this._inputNome.value = '';
            this._inputEmail.value = '';
        }
    }, {
        key: "_criaInteressado",
        value: function _criaInteressado() {
            var dataNascimento = null;
            console.log(this._inputNome);

            if (this._inputDataNascimento !== null) {
                dataNascimento = new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(this._inputDataNascimento.value.split('-').map(function (item, indice) {
                    return item - indice % 2;
                })))))();
            }

            return new Interessado(this._inputUuidBandeira.value, this._inputNome.value, this._inputEmail.value, dataNascimento, this._inputEstadoCivil.value, this._inputCPF.value);
        }
    }]);

    return InteressadoController;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interessado = function () {
    function Interessado(_uuidBandeira, _nome, _email, _dataNascimento, _estadoCivil, _cpf) {
        _classCallCheck(this, Interessado);

        Object.assign(this, { _uuidBandeira: _uuidBandeira, _nome: _nome, _email: _email, _dataNascimento: _dataNascimento, _estadoCivil: _estadoCivil, _cpf: _cpf });
    }

    _createClass(Interessado, [{
        key: "uuidBandeira",
        get: function get() {
            return this._uuidBandeira;
        }
    }]);

    return Interessado;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mensagem = function () {
    function Mensagem() {
        var texto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, Mensagem);

        this._texto = texto;
    }

    _createClass(Mensagem, [{
        key: 'texto',
        get: function get() {
            return this._texto;
        },
        set: function set(texto) {
            this._texto = texto;
        }
    }]);

    return Mensagem;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MensagemView = function () {
    function MensagemView(seletor) {
        _classCallCheck(this, MensagemView);

        this._elemento = document.querySelector(seletor);
    }

    _createClass(MensagemView, [{
        key: "template",
        value: function template(model) {
            return model.texto ? "<p class=\"alert alert-success\">" + model.texto + "</p>" : "<p></p>";
        }
    }, {
        key: "update",
        value: function update(model) {
            this._elemento.innerHTML = this.template(model);
        }
    }]);

    return MensagemView;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InteressadoView = function () {
    function InteressadoView(seletor, uuidBandeira) {
        _classCallCheck(this, InteressadoView);

        if (seletor == '') {
            throw Error('Informe o seleter que o formulário será inserido');
        }
        if (uuidBandeira == '') {
            throw Error('Informe o uuid da bandeira');
        }
        this._elemento = document.querySelector('#' + seletor);
        this._uuidBandeira = uuidBandeira;
    }

    _createClass(InteressadoView, [{
        key: 'insertInPage',
        value: function insertInPage() {
            this._elemento.innerHTML = this.showForm();
        }
    }, {
        key: 'showForm',
        value: function showForm() {
            return '\n        <form id="form-interessado-bandeira">\n            <input type="hidden" name="uuid_bandeira" id="uuid_bandeira" value="' + this._uuidBandeira + '" />\n            <div class="row">\n                <div class="col-xs-12 col-md-6">\n                    <div class="form-group">\n                        <label for="nome" class="required">Nome</label>\n                        <input type="text" name="nome" id="nome" class="form-control" tabindex="1" placeholder="Seu nome"  />\n                    </div>\n                </div>\n                <div class="col-xs-12 col-md-6">\n                    <div class="form-group">\n                        <label for="nome" class="required">Email</label>\n                        <input type="email" name="email" id="email" class="form-control" tabindex="2" placeholder="Seu email"  />\n                        <small id="emailHelp" class="form-text text-muted">Este email ser\xE1 usado para acessar o portal e acompanhar as fases do seu processo.</small>\n                    </div>\n                </div>\n            </div>\n\n            <div class="row">\n                <div class="col-xs-12 col-md-4">\n                    <div class="form-group">\n                        <label for="nome" class="required">Data de nascimento</label>\n                        <input type="date" name="data_nascimento" id="data_nascimento" class="form-control" tabindex="3"  />\n                    </div>\n                </div>\n                <div class="col-xs-12 col-md-4">\n                    <div class="form-group">\n                        <label for="nome" class="required">Estado civil</label>\n                        <select name="estado_civil" class="form-control" tabindex="4" id="estado_civil">\n                            <option value="SOLTEIRO">Solteiro</option>\n                            <option value="CASADO">Casado</option>\n                        </select>\n                    </div>\n                </div>\n                <div class="col-xs-12 col-md-4">\n                    <div class="form-group">\n                        <label for="nome" class="required">CPF</label>\n                        <input type="text" name="cpf" id="cpf" class="form-control" tabindex="4"  />\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12 col-md-4">\n                    <div class="form-group">\n                        <label for="nome" class="required">CEP</label>\n                        <input type="text" name="cep" id="cep" class="form-control" tabindex="5"  />\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12 col-md-12">\n                    <div class="form-group">\n                        <button type="submit" id="enviar" class="btn btn-success" on-click="enviaFormInteressado()">Enviar solicita\xE7\xE3o</button>\n                    </div>\n                </div>\n            </div>\n            \n        </form>\n        ';
        }
    }]);

    return InteressadoView;
}();
