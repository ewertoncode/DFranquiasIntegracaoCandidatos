# Formulário de cadastro de candidatos

O DFranquias é um software de software de gestão da expansão, implantação e qualidade de franquias, utilizado pelas franqueadoras, franquias e candidatos.
	
O processo de expansão inicia com a captura de leads/candidatos a implantar uma nova franquia, sendo o candidato tornando-se um franqueado. 

Este script cria um formulário no site da franqueadora (cliente do DFranquias), para que os candidatos à implantação de uma nova franquia possam se cadastrar.

## Como usar

```javascript
<script src="js/main.js"></script>
    <script>
        DFSDK = {
            divId: 'form',
            uuidBandeira: '123456',
            token: ''
        };
    </script>
```

## Em desenvolvimento

### Requirements
npm e babel.

Os códigos escritos foram transcompilados utilizando o babel. Portanto, caso queira contribuir, execute o babel que o código será gerado em js/main.js.

```bash
$ npm run babel
```
