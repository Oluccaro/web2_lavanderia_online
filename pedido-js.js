let cart = []; //carrinho

const adicionarCarrinho = () => {
  seleciona(".adicionarRoupa").addEventListener("click", () => {
    console.log("Adicionar no Carrinho");
  });
};

const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const pegarKey = (e) => {
  // .closest retorna o elemento mais proximo que tem a class que passamos
  // do .roupaItem ele vai pegar o valor do atributo data-key
  let key = e.target.closest(".roupaItem").getAttribute("data-key");
  console.log("Roupa clicada " + key);
  console.log(roupaJson[key]);

  // garantir que a quantidade inicial de pizzas é 1
  quantRoupas = 1;
  // Para manter a informação de qual pizza foi clicada
  modalKey = key;

  return key;
};
