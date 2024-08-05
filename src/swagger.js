require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();

const {
  env: { APP_PORT },
} = process;

const doc = {
  info: {
    title: "GarciaExercise-Backend",
    description:
      "Api criada para o segundo modulo do FloripaMaisTec 2024, baseado no projeto do modulo 1",
  },
  host: `localhost:${APP_PORT}`,
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Users",
      description: "Requisições de usuários",
    },
    {
      name: "Local",
      description: "Requisições de locais",
    },
  ],
  definitions: {
    // Definições para Users
    userLoginBody: {
      email: "email do usuário",
      password: "123456",
    },
    userLogin200: {
      message: "Usuário logado com sucesso",
      accessToken: "token",
    },
    userLogin400: {
      message: "Usuário / Senha inválido(s)",
    },
    userLogin404: {
      message: "Usuário não encontrado",
    },
    userLogin500: {
      message: "Não foi possível completar a requisição.",
    },
    userRegisterBody: {
      name: "Osvaldo Tiago Ferreira",
      gender: "male",
      email: "osvaldo.tiago.ferreira@supracolor.com.br",
      cpf: "13573541500",
      phoneNumber: "79998355326",
      birthDate: "2000-01-01",
      password: "Tm9r6xUxBK",
      userType: "admin",
      address: {
        zipCode: "12345-678",
        city: "Cidade",
        state: "Estado",
        street: "Rua",
        number: "123",
        complement: "Apto 456",
        neighborhood: "Bairro",
        referencePoint: "Ponto de referência",
      },
    },
    userRegister201: { message: "Usuário registrado com sucesso" },
    userRegister400: {
      message: "Campo cpf deve estar no formato 000.000.000-00",
    },
    userRegister409: { message: "E-mail já cadastrado" },
    userRegister500: { message: "Não foi possível completar o registro." },

    userUpdateBody: {
      name: "Osvaldo Tiago Ferreira",
      gender: "male",
      email: "osvaldo.tiago.ferreira@supracolor.com.br",
      cpf: "13573541500",
      phoneNumber: "79998355326",
      birthDate: "2000-01-01",
      password: "Tm9r6xUxBK",
      userType: "admin",
      address: {
        zipCode: "12345-678",
        city: "Cidade",
        state: "Estado",
        street: "Rua",
        number: "123",
        complement: "Apto 456",
        neighborhood: "Bairro",
        referencePoint: "Ponto de referência",
      },
    },
    userUpdate200: { message: "Dados do usuário atualizados com sucesso" },
    userUpdate400: { message: "Usuário não encontrado" },
    userUpdate500: { message: "Não foi possível completar a atualização." },

    userDelete200: { message: "Usuário deletado com sucesso" },
    userDelete500: { message: "Não foi possível completar a exclusão." },

    userShow200: {
      data: {
        name: "Osvaldo Tiago Ferreira",
        gender: "male",
        email: "osvaldo.tiago.ferreira@supracolor.com.br",
        cpf: "135.735.415-00",
        phoneNumber: "(79) 99835-5326",
        birthDate: "2000-01-01",
        userType: "admin",
        address: {
          zipCode: "12345-678",
          city: "Cidade",
          state: "Estado",
          street: "Rua",
          number: "123",
          complement: "Apto 456",
          neighborhood: "Bairro",
          referencePoint: "Ponto de referência",
        },
        createdAt: "2023-10-15T00:14:49.882Z",
        updatedAt: "2023-10-15T00:14:49.882Z",
      },
    },
    userShow400: { message: "Id deve ser um INTEGER" },
    userShow404: { message: "Usuário não encontrado" },
    userShow500: { message: "Não foi possível completar a requisição." },

    localCreateBody: {
      name: "Local Exemplo",
      description: "Descrição do local",
      zipCode: "12345-678",
      city: "Cidade",
      state: "Estado",
      street: "Rua",
      number: "123",
      complement: "Apto 456",
      latitude: -23.5505,
      longitude: -46.6333,
      userId: 1,
      type: "tipo do local",
      sportTypes: [{ name: "Musculação" }, { name: "Yoga" }],
    },
    localCreate201: { message: "Local criado com sucesso" },
    localCreate400: {
      message: "Erro de validação dos campos",
    },
    localCreate409: {
      message: "Dados duplicados, como tipo de esporte já cadastrado.",
    },
    localCreate500: {
      message: "Não foi possível completar a criação do local.",
    },

    localUpdateBody: {
      name: "Local Atualizado",
      description: "Descrição atualizada",
      zipCode: "12345-678",
      city: "Cidade Atualizada",
      state: "Estado Atualizado",
      street: "Rua Atualizada",
      number: "123",
      complement: "Apto 456 Atualizado",
      latitude: -23.5505,
      longitude: -46.6333,
      userId: 1,
      type: "tipo atualizado",
      sportTypes: [{ name: "Futebol" }],
    },
    localUpdate200: { message: "Local atualizado com sucesso" },
    localUpdate400: {
      message: "Erro de validação dos campos ou local não encontrado",
    },
    localUpdate403: { message: "Permissão negada para atualizar o local" },
    localUpdate500: {
      message: "Não foi possível completar a atualização do local.",
    },

    localDelete200: { message: "Local deletado com sucesso" },
    localDelete400: {
      message: "Erro de validação do ID ou local não encontrado",
    },
    localDelete403: { message: "Permissão negada para deletar o local" },
    localDelete500: {
      message: "Não foi possível completar a exclusão do local.",
    },

    localShow200: {
      data: {
        name: "Local Exemplo",
        description: "Descrição do local",
        zipCode: "12345-678",
        city: "Cidade",
        state: "Estado",
        street: "Rua",
        number: "123",
        complement: "Apto 456",
        latitude: -23.5505,
        longitude: -46.6333,
        userId: 1,
        type: "tipo do local",
        sportTypes: [{ name: "Musculação" }, { name: "Yoga" }],
        createdAt: "2023-10-15T00:14:49.882Z",
        updatedAt: "2023-10-15T00:14:49.882Z",
      },
    },
    localShow400: { message: "Id deve ser um INTEGER" },
    localShow404: { message: "Local não encontrado" },
    localShow500: { message: "Não foi possível completar a requisição." },

    localMapLink200: {
      lat: -23.5505,
      lon: -46.6333,
      mapLink: "https://www.google.com/maps?q=-23.5505,-46.6333",
    },
    localMapLink404: { message: "CEP não encontrado ou erro ao gerar o link" },
    localMapLink500: {
      message:
        "Não foi possível completar a requisição para o link do Google Maps.",
    },
    adminIndex200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          name: { type: "string", example: "Admin Example" },
          email: { type: "string", example: "admin@example.com" },
          cpf: { type: "string", example: "123.456.789-00" },
          birthDate: { type: "string", format: "date", example: "1980-01-01" },
          adminType: { type: "string", example: "admin" },
        },
      },
    },
    adminStoreBody: {
      type: "object",
      properties: {
        name: { type: "string", example: "Osvaldo Tiago Ferreira" },
        gender: {
          type: "string",
          enum: ["male", "female", "other"],
          example: "male",
        },
        cpf: { type: "string", example: "135.735.415-00" },
        email: {
          type: "string",
          example: "osvaldo.tiago.ferreira@supracolor.com.br",
        },
        birthDate: { type: "string", format: "date", example: "2000-01-01" },
        password: { type: "string", example: "Tm9r6xUxBK" },
        adminType: { type: "string", example: "admin" },
        address: {
          type: "object",
          properties: {
            zipCode: { type: "string", example: "12345-678" },
            city: { type: "string", example: "Cidade" },
            state: { type: "string", example: "Estado" },
            street: { type: "string", example: "Rua" },
            number: { type: "string", example: "123" },
            complement: { type: "string", example: "Apto 456" },
            neighborhood: { type: "string", example: "Bairro" },
            referencePoint: { type: "string", example: "Ponto de referência" },
          },
        },
      },
    },
    adminStore201: {
      type: "object",
      properties: {
        message: { type: "string", example: "Usuário registrado com sucesso" },
      },
    },
    adminStore400: {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Campo cpf deve estar no formato 000.000.000-00",
        },
      },
    },
    adminStore409: {
      type: "object",
      properties: {
        message: { type: "string", example: "E-mail já cadastrado" },
      },
    },
    adminStore500: {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Não foi possível completar o registro.",
        },
      },
    },
    adminDestroy200: {
      type: "object",
      properties: {
        message: { type: "string", example: "Usuário deletado com sucesso" },
      },
    },
    adminDestroy400: {
      type: "object",
      properties: {
        message: { type: "string", example: "Usuário não encontrado" },
      },
    },
    adminUpdateBody: {
      type: "object",
      properties: {
        name: { type: "string", example: "Osvaldo Tiago Ferreira" },
        gender: {
          type: "string",
          enum: ["male", "female", "other"],
          example: "male",
        },
        cpf: { type: "string", example: "135.735.415-00" },
        email: {
          type: "string",
          example: "osvaldo.tiago.ferreira@supracolor.com.br",
        },
        birthDate: { type: "string", format: "date", example: "2000-01-01" },
        password: { type: "string", example: "Tm9r6xUxBK" },
        adminType: { type: "string", example: "admin" },
        address: {
          type: "object",
          properties: {
            zipCode: { type: "string", example: "12345-678" },
            city: { type: "string", example: "Cidade" },
            state: { type: "string", example: "Estado" },
            street: { type: "string", example: "Rua" },
            number: { type: "string", example: "123" },
            complement: { type: "string", example: "Apto 456" },
            neighborhood: { type: "string", example: "Bairro" },
            referencePoint: { type: "string", example: "Ponto de referência" },
          },
        },
      },
    },
    adminUpdate200: {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Dados do usuário atualizados com sucesso",
        },
      },
    },
    adminUpdate400: {
      type: "object",
      properties: {
        message: { type: "string", example: "Usuário não encontrado" },
      },
    },
    adminUpdate500: {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Não foi possível completar a atualização.",
        },
      },
    },
    adminShow200: {
      type: "object",
      properties: {
        data: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            name: { type: "string", example: "Osvaldo Tiago Ferreira" },
            gender: { type: "string", example: "male" },
            cpf: { type: "string", example: "135.735.415-00" },
            email: {
              type: "string",
              example: "osvaldo.tiago.ferreira@supracolor.com.br",
            },
            birthDate: {
              type: "string",
              format: "date",
              example: "2000-01-01",
            },
            adminType: { type: "string", example: "admin" },
            address: {
              type: "object",
              properties: {
                zipCode: { type: "string", example: "12345-678" },
                city: { type: "string", example: "Cidade" },
                state: { type: "string", example: "Estado" },
                street: { type: "string", example: "Rua" },
                number: { type: "string", example: "123" },
                complement: { type: "string", example: "Apto 456" },
                neighborhood: { type: "string", example: "Bairro" },
                referencePoint: {
                  type: "string",
                  example: "Ponto de referência",
                },
              },
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2023-10-15T00:14:49.882Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2023-10-15T00:14:49.882Z",
            },
          },
        },
      },
    },
    adminShow400: {
      type: "object",
      properties: {
        message: { type: "string", example: "Id deve ser um INTEGER" },
      },
    },
    adminShow404: {
      type: "object",
      properties: {
        message: { type: "string", example: "Usuário não encontrado" },
      },
    },
    adminShow500: {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Não foi possível completar a requisição.",
        },
      },
    },
  },
};

const outputFile = "./src/swagger.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
