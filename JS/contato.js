
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // TELEFONE
  // ==========================
  const telefoneInput = document.getElementById("telefone");

  if (telefoneInput) {
    telefoneInput.addEventListener("input", function () {

      let v = this.value.replace(/\D/g, "").slice(0, 13);

      let resultado = "";

      if (v.length > 0) resultado += "+" + v.slice(0, 2);
      if (v.length > 2) resultado += " (" + v.slice(2, 4) + ")";
      if (v.length > 4) resultado += " " + v.slice(4, 9);
      if (v.length > 9) resultado += "-" + v.slice(9, 13);

      this.value = resultado;
    });
  }



  // ==========================
  // CEP
  // ==========================
  const cepInput = document.getElementById("cep");

  if (cepInput) {

    cepInput.addEventListener("input", function () {
      let valor = this.value.replace(/\D/g, '');
      if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
      }
      this.value = valor;
    });

    cepInput.addEventListener("blur", function () {

      const cep = this.value.replace(/\D/g, '');

      if (cep.length !== 8) return;

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(dados => {

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
  const textarea = document.querySelector("textarea");

  if (textarea) {
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }

});