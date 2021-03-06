const connection = require("../database/connection");
const generateUniqueId = require("../utils/generateUniqueId");

module.exports = {
  async index(request, response) {
    //lista as ongs que estao no banco
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async Create(request, response) {
    /**
     * Criando um ID - 4bytes de caracteres hexa para criaçao do id
     * Crypto biblioteca do proprio node - letras e numeros
     */
    const { name, email, whatsapp, city, uf } = request.body;

    //cria o id da ong
    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  },
};
