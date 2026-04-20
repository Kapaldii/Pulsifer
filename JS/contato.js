// =============================================
// ARQUIVO JAVASCRIPT PARA CONTATO.JS
// Fun��o para busca autom�tica de endere�o via CEP usando API ViaCEP
// =============================================// Script para buscar endereço pelo CEP //
// DOMContentLoaded garante que o código só seja executado após o carregamento completo do DOM//
document.addEventListener("DOMContentLoaded", function () {

// Pega o que foi digitado no CEP e guarda para usar na API//
    const cepInput = document.getElementById("cep");

// Evento blur é acionado quando o campo perde o foco, ou seja, quando o usuário//
// termina de digitar o CEP e clica fora da tela// 
  cepInput.addEventListener("blur", function () {

    // Remove tudo que não for número do CEP ("01001-000" → "01001000")//
    const cep = this.value.replace(/\D/g, '');

    // Verifica se o CEP tem exatamente 8 dígitos, caso contrário, não "chama a API"//
    if (cep.length !== 8) return;

    // Chama a API do ViaCEP para buscar os dados do endereço com base no CEP inserido no campo "cep"//
    //  (Por exemplo: https://viacep.com.br/ws/01001000/json) //
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    // Converte a resposta da API para JSON e preenche os campos de endereço com os dados retornados//  
    // "=>" é a sintaxe de função de seta (arrow function) do JavaScript, que é uma forma mais simples do que escrever function e return//
      .then(res => res.json())
      // Quando os dados são recebidos, verifica se a resposta da API contém um erro (por exemplo, se o CEP não for encontrado) e, se não houver erro, preenche os campos de endereço com os dados retornados pela API//
      .then(dados => {
        if (dados.erro) return;
    // "||" Significa "ou", e é usado para indicar que, se o valor da esquerda for false, deve ser usado o valor da direita.
    //  Por exemplo, "dados.logradouro || ''" significa que, se "dados.logradouro" for false (como null ou undefined), deve ser usado uma string vazia ("") em vez disso.// 
        document.getElementById("rua").value = dados.logradouro || "";
        document.getElementById("bairro").value = dados.bairro || "";
        document.getElementById("cidade").value = dados.localidade || "";
        document.getElementById("estado").value = dados.uf || "";
      });
  });
});

// Auto-ajustar a altura do textarea//

const textarea = document.querySelector("textarea");

textarea.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
});
