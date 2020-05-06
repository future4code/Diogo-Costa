const dados = {
  titulo: "",
  autor: "",
  postagem: "",
};

function getTitle(event) {
  //event.preventDefault();
  const titulo = document.querySelector("#title").value;
  const autor = document.querySelector("#author").value;
  const postagem = document.querySelector("#post").value;

  const dadosCompletos = {
    //...dados,
    titulo: titulo,
    autor: autor,
    postagem: postagem,
  };

  console.log(dadosCompletos);
}

//getTitle();
