const { createNewLocal } = require("./functions/local.store");
const { findAllLocal } = require("./functions/local.index");
const { deleteLocal } = require("./functions/local.destroy");
const { updateLocal } = require("./functions/local.update");
const { findOneLocal } = require("./functions/local.show");
const { localMapLink } = require("./functions/local.mapLink");

class LocalController {
  async index(req, res) {
    // #swagger.tags = ['Local']
    // #swagger.summary = 'Retorna todos os locais cadastrados'
    // #swagger.description = 'Endpoint para retornar todos os locais cadastrados no banco de dados.'
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/LocalIndex200" }
        } */
    await findAllLocal(req, res);
  }

  async store(req, res) {
    // #swagger.tags = ['Local']
    // #swagger.summary = 'Cadastra um novo local'
    // #swagger.description = 'Endpoint para cadastrar um novo local no banco de dados.'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:`
        <ul>
          <li><b>name</b>: Nome do local com máximo e mínimo de 64 e 8 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>description</b>: Descrição do local. <mark>Campo obrigatório</mark></li>
          <li><b>zipCode</b>: CEP do local. <mark>Campo obrigatório</mark></li>
          <li><b>city</b>: Cidade do local. <mark>Campo obrigatório</mark></li>
          <li><b>state</b>: Estado do local. <mark>Campo obrigatório</mark></li>
          <li><b>street</b>: Rua do local. <mark>Campo obrigatório</mark></li>
          <li><b>number</b>: Número do local. <mark>Campo obrigatório</mark></li>
          <li><b>complement</b>: Complemento do endereço.</li>
          <li><b>latitude</b>: Latitude do local. <mark>Campo obrigatório</mark></li>
          <li><b>longitude</b>: Longitude do local. <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: ID do usuário associado ao local. <mark>Campo obrigatório</mark></li>
          <li><b>type</b>: Tipo do local. <mark>Campo obrigatório</mark></li>
          <li><b>sportTypes</b>: Lista de tipos de esportes associados ao local, com os campos:
            <ul>
              <li><b>name</b>: Nome do tipo de esporte. <mark>Campo obrigatório</mark></li>
            </ul>
          </li>
        </ul>`,
        type: "object",
        schema: { $ref: "#/definitions/LocalCreateBody" },
        required: true
      } */
    /* #swagger.responses[201] = { 
          description: 'Local criado com sucesso.',
          schema: { $ref: "#/definitions/LocalCreate201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e traz o motivo da falha.',
          schema: { $ref: "#/definitions/LocalCreate400" }
        } */
    /* #swagger.responses[409] = { 
          description: 'Erro de dados duplicados, como tipo de esporte já cadastrado.',
          schema: { $ref: "#/definitions/LocalCreate409" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Erro interno ao tentar criar o local.',
          schema: { $ref: "#/definitions/LocalCreate500" }
        } */
    await createNewLocal(req, res);
  }

  async destroy(req, res) {
    // #swagger.tags = ['Local']
    // #swagger.summary = 'Deleta um local'
    // #swagger.description = 'Endpoint para deletar um local por meio de seu ID.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'Local ID.' }
    /* #swagger.responses[200] = { 
          description: 'Local deletado com sucesso.',
          schema: { $ref: "#/definitions/LocalDelete200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Erro de validação do ID ou local não encontrado.',
          schema: { $ref: "#/definitions/LocalDelete400" }
        } */
    /* #swagger.responses[403] = { 
          description: 'Permissão negada para deletar o local.',
          schema: { $ref: "#/definitions/LocalDelete403" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Erro interno ao tentar deletar o local.',
          schema: { $ref: "#/definitions/LocalDelete500" }
        } */
    await deleteLocal(req, res);
  }

  async update(req, res) {
    // #swagger.tags = ['Local']
    // #swagger.summary = 'Atualiza um local'
    // #swagger.description = 'Endpoint para atualizar um local por meio de seu ID.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'Local ID.' }
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:`
        <ul>
          <li><b>name</b>: Nome do local com máximo e mínimo de 64 e 8 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>description</b>: Descrição do local. <mark>Campo obrigatório</mark></li>
          <li><b>zipCode</b>: CEP do local. <mark>Campo obrigatório</mark></li>
          <li><b>city</b>: Cidade do local. <mark>Campo obrigatório</mark></li>
          <li><b>state</b>: Estado do local. <mark>Campo obrigatório</mark></li>
          <li><b>street</b>: Rua do local. <mark>Campo obrigatório</mark></li>
          <li><b>number</b>: Número do local. <mark>Campo obrigatório</mark></li>
          <li><b>complement</b>: Complemento do endereço.</li>
          <li><b>latitude</b>: Latitude do local. <mark>Campo obrigatório</mark></li>
          <li><b>longitude</b>: Longitude do local. <mark>Campo obrigatório</mark></li>
          <li><b>userId</b>: ID do usuário associado ao local. <mark>Campo obrigatório</mark></li>
          <li><b>type</b>: Tipo do local. <mark>Campo obrigatório</mark></li>
          <li><b>sportTypes</b>: Lista de tipos de esportes associados ao local, com os campos:
            <ul>
              <li><b>name</b>: Nome do tipo de esporte. <mark>Campo obrigatório</mark></li>
            </ul>
          </li>
        </ul>`,
        type: "object",
        schema: { $ref: "#/definitions/LocalUpdateBody" },
        required: true
      } */
    /* #swagger.responses[200] = { 
          description: 'Local atualizado com sucesso.',
          schema: { $ref: "#/definitions/LocalUpdate200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Erro de validação do ID ou dados fornecidos.',
          schema: { $ref: "#/definitions/LocalUpdate400" }
        } */
    /* #swagger.responses[403] = { 
          description: 'Permissão negada para atualizar o local.',
          schema: { $ref: "#/definitions/LocalUpdate403" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Erro interno ao tentar atualizar o local.',
          schema: { $ref: "#/definitions/LocalUpdate500" }
        } */
    await updateLocal(req, res);
  }

  async show(req, res) {
    // #swagger.tags = ['Local']
    // #swagger.summary = 'Exibe um local pelo ID'
    // #swagger.description = 'Endpoint para exibir os dados de um local por meio de seu ID.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'Local ID.' }
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/LocalShow200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Erro de validação do ID.',
          schema: { $ref: "#/definitions/LocalShow400" }
        } */
    /* #swagger.responses[403] = { 
          description: 'Permissão negada para visualizar o local.',
          schema: { $ref: "#/definitions/LocalShow403" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Erro interno ao tentar visualizar o local.',
          schema: { $ref: "#/definitions/LocalShow500" }
        } */
    await findOneLocal(req, res);
  }

  async showMapLink(req, res) {
    // #swagger.tags = ['Local']
    // #swagger.summary = 'Obtém o link do Google Maps para um local'
    // #swagger.description = 'Endpoint para obter o link do Google Maps para um local com base no seu ID. O link é gerado a partir do CEP do local.'
    // #swagger.parameters['localId'] = { in: 'path', type: 'integer', description: 'ID do local.' }
    /* #swagger.responses[200] = { 
          description: 'Link do Google Maps para o local.',
          schema: { $ref: "#/definitions/LocalMapLink200" }
        } */
    /* #swagger.responses[404] = { 
          description: 'Local não encontrado ou erro ao gerar o link.',
          schema: { $ref: "#/definitions/LocalMapLink404" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Erro interno ao tentar gerar o link do Google Maps.',
          schema: { $ref: "#/definitions/LocalMapLink500" }
        } */
    await localMapLink(req, res);
  }
}

module.exports = new LocalController();
