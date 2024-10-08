const { createNewUser } = require("./functions/user.store");
const { findAllUsers } = require("./functions/user.index");
const { deleteUser } = require("./functions/user.destroy");
const { updateUser } = require("./functions/user.update");
const { userLogin } = require("./functions/user.login");
const { findOneUser } = require("./functions/user.show");

class UsersController {
  async index(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Retorna todos os usuários cadastrados'
    // #swagger.description = 'Endpoint retornar todos os usuários cadastrados no banco de dados.'
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/userIndex200" }
        } */
    await findAllUsers(req, res);
  }

  async store(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Cadastra um novo usuário'
    // #swagger.description = 'Endpoint para cadastrar um novo usuário no banco de dados'
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
          <li><b>userType</b>: Tipo de usuário. <mark>Campo obrigatório</mark></li>
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
        schema: { $ref: "#/definitions/userStoreBody" },
        required: true} */
    /* #swagger.responses[201] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/userStore201" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Valida os campos e trás o motivo da falha.\n Exemplo: Cpf informado fora do padrão (123.456.789.10)',
          schema: { $ref: "#/definitions/userStore400" }
        } */
    /* #swagger.responses[409] = { 
          description: 'Erro de CPF e/ou E-mail já cadastrado\nExemplo: Tentativa de cadastrar um usuário com um e-mail existente no banco.',
          schema: { $ref: "#/definitions/userStore409" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/userStore500" }
        } */

    await createNewUser(req, res);
  }

  async destroy(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Deleta um usuário'
    // #swagger.description = 'Endpoint para deletar um usuário por meio de seu Id.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'User ID.' }
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/userDestroy200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado um usuário com o Id fornecido',
          schema: { $ref: "#/definitions/userDestroy200" }
        } */
    await deleteUser(req, res);
  }

  async update(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Atualiza um usuário'
    // #swagger.description = 'Endpoint para atualizar um usuário por meio de seu Id.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'User ID.' }

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
          <li><b>userType</b>: Tipo de usuário. <mark>Campo obrigatório</mark></li>
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
        schema: { $ref: "#/definitions/userUpdateBody" },
        required: true} */
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/userUpdate200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando não for localizado um usuário com o Id fornecido',
          schema: { $ref: "#/definitions/userUpdate400" }
        } */
    /* #swagger.responses[500] = { 
          description: 'Caso de erro ao gerar a resposta.\nExemplo: Tentando atribuir um novo valor a uma constante.',
          schema: { $ref: "#/definitions/userStore500" }
        } */
    await updateUser(req, res);
  }

  async show(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Exibe um usuário pelo ID'
    // #swagger.description = 'Endpoint para exibir os dados de um usuário por meio de seu Id.'
    // #swagger.parameters['id'] = { in: 'path', type: 'integer', description: 'User ID.' }
    /* #swagger.responses[200] = { 
          description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/userShow200" }
        } */
    /* #swagger.responses[400] = { 
          description: 'Exemplo de resposta de quando é passado um Id não inteiro.',
          schema: { $ref: "#/definitions/userShow400" }
        } */
    await findOneUser(req, res);
  }

  async login(req, res) {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Loga um usuário'
    // #swagger.description = 'Endpoint para logar um usuário no sistema'
    /* #swagger.parameters["body"] = {
        in: "body",
        description:`
        <ul>
          <li><b>email</b>: E-mail do usuário. <mark>Campo obrigatório</mark></span></li>
          <li><b>password</b>: A senha deve conter no mínimo 6 caracteres. <mark>Campo obrigatório</mark></li>
        </ul>`,
        type: "object",
        schema: { $ref: "#/definitions/userLoginBody" },
        required: true} */
    /* #swagger.responses[200] = {
      description: 'Exemplo de resposta de sucesso',
          schema: { $ref: "#/definitions/userLogin200" }
        }*/
    /* #swagger.responses[400] = {
      description: 'Exemplo de resposta de quando não for localizado um usuário com o e-mail fornecido',
          schema: { $ref: "#/definitions/userLogin400" }
        }
     */
    await userLogin(req, res);
  }
}

module.exports = new UsersController();
