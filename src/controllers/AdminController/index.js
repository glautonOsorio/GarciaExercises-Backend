const { createNewAdmin } = require("./functions/admin.store");
const { findAllAdmin } = require("./functions/admin.index");
const { deleteAdmin } = require("./functions/admin.destroy");
const { updateAdmin } = require("./functions/admin.update");
const { findOneAdmin } = require("./functions/admin.show");

class AdminController {
  async index(req, res) {
    // #swagger.tags = ['Admin']
    // #swagger.summary = 'Retorna todos os usuários cadastrados'
    // #swagger.description = 'Endpoint retornar todos os usuários cadastrados no banco de dados.'
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/AdminIndex200" }
        } */
    await findAllAdmin(req, res);
  }

  async store(req, res) {
    // #swagger.tags = ['Admin']
    // #swagger.summary = 'Cadastra um novo usuário ou admin'
    // #swagger.description = 'Endpoint para cadastrar um novo usuário ou admin no banco de dados'
    /* #swagger.parameters["body"] = { 
        in: "body",
        description:`
        <ul>
          <li><b>name</b>: Nome do usuário com máximo e mínimo de 64 e 8 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>gender</b>: Genero do usuário, com opções pré-definidas: male, female, other. <mark>Campo obrigatório</mark></li>
          <li><b>cpf</b>: CPF do usuário no formato 000.000.000-00. <mark>Campo obrigatório</mark></li>
          <li><b>email</b>: E-mail do usuário. <mark>Campo obrigatório</mark></li>
          <li><b>birthDate</b>: Data de nascimento do usuário. <mark>Campo obrigatório</mark></li>
          <li><b>password</b>: A senha deve conter no mínimo 6 caracteres. <mark>Campo obrigatório</mark></li>
          <li><b>AdminType</b>: Tipo de usuário. <mark>Campo obrigatório</mark></li>
          <li><b>address</b>: Objeto com os dados do endereço do usuário, contendo os campos:
            <ul>
              <li><b>zipCode</b>: CEP. <mark>Campo obrigatório</mark></li>
              <li><b>city</b>: Cidade. <mark>Campo obrigatório</mark></li>
              <li><b>state</b>: Estado. <mark>Campo obrigatório</mark></li>
              <li><b>street</b>: Rua. <mark>Campo obrigatório</mark></li>
              <li><b>number</b>: Número. <mark>Campo obrigatório</mark></li>
              <li><b>complement</b>: Complemento.</li>
              <li><b>neighborhood</b>: Bairro. <mark>Campo obrigatório</mark></li>
              <li><b>referencePoint</b>: Ponto de referência.</li>
            </ul>
          </li>
        </ul>`,
        type: "object",
        schema: { $ref: "#/definitions/AdminStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/AdminStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Cpf informado fora do padrão (123.456.789.10)',
          schema: { $ref: "#/definitions/AdminStore400" }
        } */
    /* #swagger.responses[409] = { 
          description: 'Erro de CPF e/ou E-mail já cadastrado\nExemplo: Tentativa de cadastrar um usuário com um e-mail existente no banco.',
          schema: { $ref: "#/definitions/AdminStore409" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/AdminStore500" }
        } */

    await createNewAdmin(req, res);
  }

  async destroy(req, res) {
    // #swagger.tags = ['Admin']
    // #swagger.summary = 'Deleta um usuário'
    // #swagger.description = 'Endpoint para deletar um usuário por meio de seu Id.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'Admin ID.' }
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/AdminDestroy200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado um usuário com o Id fornecido',
          schema: { $ref: "#/definitions/AdminDestroy200" }
        } */
    await deleteAdmin(req, res);
  }

  async update(req, res) {
    // #swagger.tags = ['Admin']
    // #swagger.summary = 'Atualiza um usuário'
    // #swagger.description = 'Endpoint para atualizar um usuário por meio de seu Id.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'Admin ID.' }

    /* #swagger.parameters["body"] = { 
        in: "body",
        description:`
        <ul>
          <li><b>name</b>: Nome do usuário com máximo e mínimo de 64 e 8 caracteres, respectivamente. <mark>Campo obrigatório</mark></li>
          <li><b>gender</b>: Genero do usuário, com opções pré-definidas: male, female, other. <mark>Campo obrigatório</mark></li>
          <li><b>cpf</b>: CPF do usuário no formato 000.000.000-00. <mark>Campo obrigatório</mark></li>
          <li><b>email</b>: E-mail do usuário. <mark>Campo obrigatório</mark></li>
          <li><b>birthDate</b>: Data de nascimento do usuário. <mark>Campo obrigatório</mark></li>
          <li><b>password</b>: A senha deve conter no mínimo 6 caracteres. <mark>Campo obrigatório</mark></li>
          <li><b>AdminType</b>: Tipo de usuário. <mark>Campo obrigatório</mark></li>
          <li><b>address</b>: Objeto com os dados do endereço do usuário, contendo os campos:
            <ul>
              <li><b>zipCode</b>: CEP. <mark>Campo obrigatório</mark></li>
              <li><b>city</b>: Cidade. <mark>Campo obrigatório</mark></li>
              <li><b>state</b>: Estado. <mark>Campo obrigatório</mark></li>
              <li><b>street</b>: Rua. <mark>Campo obrigatório</mark></li>
              <li><b>number</b>: Número. <mark>Campo obrigatório</mark></li>
              <li><b>complement</b>: Complemento.</li>
              <li><b>neighborhood</b>: Bairro. <mark>Campo obrigatório</mark></li>
              <li><b>referencePoint</b>: Ponto de referência.</li>
            </ul>
          </li>
        </ul>`,
        type: "object",
        schema: { $ref: "#/definitions/AdminUpdateBody" },
        required: true} */
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/AdminUpdate200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado um usuário com o Id fornecido',
          schema: { $ref: "#/definitions/AdminUpdate400" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/Admintore500" }
        } */
    await updateAdmin(req, res);
  }

  async show(req, res) {
    // #swagger.tags = ['Admin']
    // #swagger.summary = 'Exibe um usuário pelo ID'
    // #swagger.description = 'Endpoint para exibir os dados de um usuário por meio de seu Id.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'Admin ID.' }
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/AdminShow200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando é passado um Id não inteiro.',
          schema: { $ref: "#/definitions/AdminShow400" }
        } */
    await findOneAdmin(req, res);
  }
}

module.exports = new AdminController();
