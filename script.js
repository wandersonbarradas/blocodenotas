//Dados
let notas = [
  {
    titulo: "Nota numero 1",
    conteudo:
      "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido",
  },
  {
    titulo: "Nota numero 2",
    conteudo:
      "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido",
  },
  {
    titulo: "Nota numero 3",
    conteudo:
      "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido",
  },
  {
    titulo: "Nota numero 4",
    conteudo:
      "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido",
  },
  {
    titulo: "Nota numero 5",
    conteudo:
      "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido",
  },
];
let edicao = false;
let editando = "";
//Eventos
document.querySelector("#salvar").addEventListener("click", salvar);
//Funções
function carregarNotas() {
  notas.forEach((item, index) => {
    let liItem = document.querySelector(".models .list-item").cloneNode(true);
    // liItem.setAttribute("data-key", index);
    liItem.querySelector("h5").innerHTML = item.titulo;
    liItem.querySelector("p").innerHTML = item.conteudo;
    liItem.addEventListener("click", () => {
      document.querySelector(".edit-header input").value = notas[index].titulo;
      document.querySelector(".edit-body textarea").value =
        notas[index].conteudo;
      editando = index;
      edicao = true;
      layout();
    });
    document.querySelector(".list").appendChild(liItem);
  });
}
// function blockEdit() {
//   if (edicao) {
//     document.querySelector(".edit-header").style.display = "flex";
//     document.querySelector(".edit-body").style.display = "flex";
//   } else {
//     document.querySelector(".edit-header").style.display = "none";
//     document.querySelector(".edit-body").style.display = "none";
//   }
// }

function salvar() {
  let title = document.querySelector(".edit-header input").value;
  let content = document.querySelector(".edit-body textarea").value;
  notas[editando].titulo = title;
  notas[editando].conteudo = content;
  edicao = false;
  document.querySelector(".list").innerHTML = "";
  carregarNotas();
  layout();
}

function layout() {
  let areaEditi = document.querySelector(".areaEdit");
  let list = document.querySelector(".list");
  let aside = document.querySelector(".aside");
  if (edicao) {
    areaEditi.classList.remove("d-none");
    areaEditi.classList.add("d-flex");
    aside.classList.add("menu-aside");
    list.classList.remove("screenFull");
  } else {
    areaEditi.classList.remove("d-flex");
    areaEditi.classList.add("d-none");
    aside.classList.remove("menu-aside");
    list.classList.add("screenFull");
  }
}
carregarNotas();
