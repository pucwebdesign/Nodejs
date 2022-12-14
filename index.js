const prompt = require("prompt");

/**
 * Nome: apenas letras, campo obrigatório;
 * Sobrenome: apenas letras, campo obrigatório;
 * Email: dever ser um email válido;
 * CPF: deve ser um CPF válido.
 */
const schema = {
  properties: {
    nome: {
      pattern: /[A-Za-zÀ-ȕ]/gm,
      message: "apenas letras, campo obrigatório",
      required: true,
    },
    sobrenome: {
      pattern: /[A-Za-zÀ-ȕ]/gm,
      message: "apenas letras, campo obrigatório",
      required: true,
    },
    email: {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: "O email deve ser válido",
    },
    cpf: {
      pattern:
        /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
      message: "O cpf deve ser válido",
    },
  },
};

prompt.start();

prompt.get(schema, function (error, result) {
  for (const [key, value] of Object.entries(result)) {
    console.log(`${key}: ${value}`);
  }
  if (error) throw new Error("Houve algum erro no envio dos dados");
});
