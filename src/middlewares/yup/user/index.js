const yup = require("yup");

module.exports.userYupSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  gender: yup
    .mixed()
    .oneOf(
      ["Homem", "Mulher", "Outro"],
      "Campo gênero deve possuir um dos seguintes valores: homem, mulher, outro"
    ),
  cpf: yup
    .string()
    .trim()
    .matches(
      /^(\d{3}[.]\d{3}[.]\d{3}[-]\d{2})/,
      "Campo cpf deve estar no formato 000.000.000-00"
    )
    .required("CPF é obrigatório"),
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  birthDate: yup
    .date()
    .min(new Date(1900, 1, 1), "Não é possível inserir uma data tão distante")
    .max(new Date(), "Não é possível incluir uma data futura")
    .required("Data de nascimento é obrigatória"),
  userType: yup
    .mixed()
    .oneOf(
      ["basico", "premium"],
      "Campo de tipo de usuário deve possuir um dos seguintes valores: basico, premium"
    ),
  address: yup
    .object()
    .shape({
      zipCode: yup
        .string("Campo CEP deve ser do tipo string")
        .matches(/^\d{5}-\d{3}$/, "CEP deve estar no formato xxxxx-xxx")
        .required("O campo CEP é obrigatório"),
      city: yup
        .string("Campo cidade deve ser do tipo string")
        .required("O campo cidade é obrigatório"),
      state: yup
        .string("Campo estado deve ser do tipo string")
        .required("O campo estado é obrigatório"),
      street: yup
        .string("Campo rua deve ser do tipo string")
        .required("O campo rua é obrigatório"),
      number: yup
        .string("Campo número deve ser do tipo inteiro")
        .required("O campo número é obrigatório"),
      complement: yup.string("Campo complemento deve ser do tipo string"),
      neighborhood: yup
        .string("Campo bairro deve ser do tipo string")
        .required("O campo bairro é obrigatório"),
      referencePoint: yup.string("Campo referencia deve ser do tipo string"),
    })
    .required("Campos de endereço são obrigatórios"),
});
