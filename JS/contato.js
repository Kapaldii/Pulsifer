
// Isso faz com que o código JavaScript seja executado somente depois que todo o conteúdo da página (HTML, CSS, imagens) tiver sido carregado. Assim, garantimos que os elementos do DOM estejam disponíveis para serem manipulados pelo JavaScript, evitando erros de "elemento não encontrado".
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // TELEFONE
  // ==========================
  // Isso cria uma variável chamada "telefoneInput" que armazena a referência ao elemento HTML com o ID "telefone". O método "getElementById" é usado para selecionar esse elemento específico na página.  
    const telefoneInput = document.getElementById("telefone");
  // Se o elemento existir (ou seja, se "telefoneInput" não for nulo), o código dentro do bloco "if" será executado.
  if (telefoneInput) {
    // Isso executa uma função sempre que o usuário digitar algo no campo de telefone. O evento "input" é acionado toda vez que o valor do campo é alterado, seja por digitação, colagem ou exclusão.
    telefoneInput.addEventListener("input", function () {

     //Remove todos os caracteres que não são dígitos usando a expressão regular /\D/g e limita o número a 13 dígitos usando slice(0, 13). O resultado é armazenado na variável "numero".
      let numero = this.value.replace(/\D/g, "").slice(0, 13);
     // A seguir, o código constrói a string formatada para o número de telefone. Ele verifica o comprimento do número e adiciona os caracteres de formatação (como "+", "(", ")", " ", "-") conforme necessário. O resultado final é armazenado na variável "resultado".
      let resultado = "";
     //Se o número tiver mais de 0 dígitos, adiciona um "+" seguido dos dois primeiros dígitos do número.
      if (numero.length > 0) resultado += "+" + numero.slice(0, 2);
     //Se o número tiver mais de 2 dígitos, adiciona um espaço e os próximos dois dígitos entre parênteses.
      if (numero.length > 2) resultado += " (" + numero.slice(2, 4) +
       ")";
     //Se o número tiver mais de 4 dígitos, adiciona um espaço e os próximos cinco dígitos.
      if (numero.length > 4) resultado += " " + numero.slice(4, 9);
     //Se o número tiver mais de 9 dígitos, adiciona um hífen e os últimos quatro dígitos. 
      if (numero.length > 9) resultado += "-" + numero.slice(9, 13);
      // Finalmente, o valor formatado é atribuído de volta ao campo de telefone, garantindo que o usuário veja o número formatado corretamente enquanto digita.
      this.value = resultado;
    });
  }



  // ==========================
  // CEP
  // ==========================
  // Isso cria uma variável chamada "cepInput" que armazena a referência ao elemento HTML com o ID "cep".
  const cepInput = document.getElementById("cep");
  // Se o elemento existir (ou seja, se "cepInput" não for nulo), o código dentro do bloco "if" será executado.
  if (cepInput) {
    // Isso executa uma função sempre que o usuário digitar algo no campo de CEP. O evento "input" é acionado toda vez que o valor do campo é alterado, seja por digitação, colagem ou exclusão.
    cepInput.addEventListener("input", function () {
      //Remove todos os caracteres que não são dígitos usando a expressão regular /\D/g.  
      let valor = this.value.replace(/\D/g, '');
      // Em seguida, se o número tiver mais de 5 dígitos, insere um hífen após os primeiros cinco dígitos usando a expressão regular /^(\d{5})(\d)/.
      if (valor.length > 5) {
        // A expressão regular /^(\d{5})(\d)/ captura os primeiros cinco dígitos como um grupo (representado por $1) e o próximo dígito como outro grupo (representado por $2). O método replace então substitui a string original por uma nova string que consiste no primeiro grupo seguido de um hífen e do segundo grupo, resultando no formato "12345-678".
        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

      }
      // O resultado é armazenado de volta no campo de CEP.
      this.value = valor;
    });
   
  // Isso executa uma função quando o campo de CEP perde o foco (evento "blur"). Isso significa que a função será chamada quando o usuário clicar fora do campo de CEP ou navegar para outro campo.
    cepInput.addEventListener("blur", function () {
      //Remove todos os caracteres que não são dígitos usando a expressão regular /\D/g e armazena o resultado na variável "cep".
      const cep = this.value.replace(/\D/g, '');
     // Se o número de CEP tiver exatamente 8 dígitos, a função continua. Caso contrário, ela retorna sem fazer nada.
      if (cep.length !== 8) return;
      // Se o CEP for válido, a função faz uma requisição para a API ViaCEP usando o método fetch. A URL da API é construída dinamicamente usando o valor do CEP. A API ViaCEP retorna informações de endereço com base no CEP fornecido.
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        // O método fetch retorna uma promessa (Promise) que é resolvida com a resposta da requisição. O código usa o método then para processar a resposta. Primeiro, ele converte a resposta em formato JSON usando res.json(), e depois processa os dados retornados pela API.
        .then(res => res.json())
        // A seguir, o código verifica se a resposta contém um campo "erro". Se esse campo existir, significa que o CEP não foi encontrado, e a função retorna sem fazer nada. 
        .then(dados => {
        // Caso contrário, os campos de endereço (rua, bairro, cidade e estado) são preenchidos com os dados retornados pela API. O operador || é usado para garantir que, se algum dos campos estiver ausente na resposta da API, ele seja preenchido com uma string vazia em vez de undefined.
          if (dados.erro) return;

          document.getElementById("rua").value = dados.logradouro || "";
          document.getElementById("bairro").value = dados.bairro || "";
          document.getElementById("cidade").value = dados.localidade || "";
          document.getElementById("estado").value = dados.uf || "";
        });
    });
  }



  // ==========================
  // TEXTAREA
  // ==========================
  // Isso seleciona o elemento <textarea> da página e armazena a referência na variável "textarea". O método querySelector é usado para selecionar o primeiro elemento que corresponde ao seletor CSS "textarea".
  const textarea = document.querySelector("textarea");
  // Se o elemento existir (ou seja, se "textarea" não for nulo), o código dentro do bloco "if" será executado.
  if (textarea) {
    // Isso executa uma função sempre que o usuário digitar algo no campo de texto. O evento "input" é acionado toda vez que o valor do campo é alterado, seja por digitação, colagem ou exclusão.
    textarea.addEventListener("input", function () {
      // O código dentro da função ajusta a altura do campo de texto para se adequar ao conteúdo digitado. Primeiro, ele define a altura do campo como "auto" para permitir que o navegador calcule a altura necessária com base no conteúdo atual. Em seguida, ele define a altura do campo como o valor de scrollHeight, que é a altura total do conteúdo dentro do campo de texto, incluindo o conteúdo que pode estar oculto devido à rolagem. 
      // Isso garante que o campo de texto se expanda verticalmente para acomodar todo o conteúdo digitado pelo usuário.
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }

});
// ==========================
// Número da casa
// ==========================
const numero = document.getElementById("numero");
// Isso adiciona um ouvinte de evento "input" ao campo de número. Sempre que o usuário digitar algo no campo, a função dentro do ouvinte será executada.
numero.addEventListener("input", () => {
  // O código dentro da função verifica se o valor do campo de número é menor que 0. Se for, ele define o valor do campo como 0. Isso garante que o usuário não possa inserir números negativos no campo de número.
  if (numero.value < 0) {
    numero.value = 0;
  }
});