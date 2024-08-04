const yup = require("yup");

const sportTypeYupSchema = yup.object().shape({
  name: yup.string().required("Nome do tipo de esporte é obrigatório"),
});

module.exports.localYupSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
  zipCode: yup
    .string()
    .matches(/^\d{5}-\d{3}$/, "O CEP deve estar no formato xxxxx-xxx")
    .required("O CEP é obrigatório"),
  city: yup.string().required("A cidade é obrigatória"),
  state: yup.string().required("O estado é obrigatório"),
  neighborhood: yup.string().required("O bairro é obrigatório"),
  street: yup.string().required("A rua é obrigatória"),
  number: yup.string().required("O número é obrigatório"),
  complement: yup.string(),
  latitude: yup
    .number()
    .required("A latitude é obrigatória")
    .test("is-decimal", "A latitude deve ser um número decimal", (value) =>
      /^\d*\.?\d*$/.test(value)
    ),
  longitude: yup
    .number()
    .required("A longitude é obrigatória")
    .test("is-decimal", "A longitude deve ser um número decimal", (value) =>
      /^\d*\.?\d*$/.test(value)
    ),
  userId: yup.number().required("O ID do usuário é obrigatório"),
  type: yup
    .mixed()
    .oneOf(
      ["basico", "premium"],
      "O tipo do local deve ser um dos seguintes valores: basico, premium"
    )
    .required("O tipo é obrigatório"),
  sportTypes: yup
    .array()
    .of(sportTypeYupSchema)
    .required("Tipos de esporte são obrigatórios"),
});
