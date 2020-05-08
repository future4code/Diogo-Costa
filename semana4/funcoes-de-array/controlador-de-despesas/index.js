// 1 tela 3 sessões

// 1 sessão cadastro valor: tipo de despesa: (select) descrição(campo)

function despesas(func) {
  event.preventDefault();
  const valorGasto = document.getElementById("gasto").value;
  const tipoDeValor = document.getElementById("tipo").value;
  const descricaoValor = document.getElementById("descricao").value;

  const despesasSalvas = [
    {
      valor: valorGasto,
      tipo: tipoDeValor,
      descricao: descricaoValor,
    },
  ];

  filtro(despesasSalvas);
  //console.log(despesasSalvas);

  if (valorGasto === "" || tipoDeValor === "") {
    alert(`Por favor preencha os campos`);
  }

  document.getElementById("gasto").value = "";
  document.getElementById("tipo").value = 0;
  document.getElementById("descricao").value = "";
}

// 2 sessão lista das despesas, valor: descrição: tipo de gasto

const filtro = (res) => {
  console.log(descricao.value);
};

// filtra a lista -- tipo de gasto: valor máximo: valor minimo  ao mesmo tempo.

// 3 sessão extrato -- valor total dos gastos
