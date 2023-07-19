let products = {
    type: [
      {
        id: 1,
        productName: "Blusa Infantil Stich",
        price: "R$56,90",
        image: "imagens/infantil/1.jpg",
        category: "children",
        quantidade:0
      },
      {
        id: 2,
        productName: "Blusa Infantil Sonic",
        price: "R$45,50",
        image: "imagens/infantil/2.jpg",
        category: "children",
        quantidade:0
      },
      {
        id: 3,
        productName: "Vestido infantil Xadrez",
        price: "R$50,00",
        image: "imagens/infantil/3.jpg",
        category: "children",
        quantidade:0
      },
      {
        id: 4,
        productName: "Blusa infantil dinoussauros",
        price: "R$40,00",
        image: "imagens/infantil/4.jpg",
        category: "children",
        quantidade:0
      },
      {
        id: 5,
        productName: "Moletom infantil vermelho",
        price: "R$75,00",
        image: "imagens/infantil/5.jpg",
        category: "children",
        quantidade:0
      },
      {
        id: 6,
        productName: "Vestido Infantil Onça",
        price: "R$42,50",
        image: "imagens/infantil/6.jpg",
        category: "children",
        quantidade:0
      },
      {
        id: 7,
        productName: "Camisa Xadrez",
        price: "R$40,00",
        image: "imagens/masculino/1.jpg",
        category: "men",
        quantidade:0
      },
      {
        id: 8,
        productName: "Blusa Manga Longa",
        price: "R$85,00",
        image: "imagens/masculino/2.jpg",
        category: "men",
        quantidade:0
      },
      {
        id: 9,
        productName: "Camisa Personagem",
        price: "R$45,50",
        image: "imagens/masculino/3.jpg",
        category: "men",
        quantidade:0
      },
      {
        id: 10,
        productName: "Camisa Personagem",
        price: "R$35,90",
        image: "imagens/masculino/4.jpg",
        category: "men",
        quantidade:0
      },
      {
        id: 11,
        productName: "Camisa Floral",
        price: "R$50,99",
        image: "imagens/masculino/5.jpg",
        category: "men",
        quantidade:0
      },
      {
        id: 12,
        productName: "Camisa Lisa",
        price: "R$55,00",
        image: "imagens/masculino/6.jpg",
        category: "men",
        quantidade:0
      },
      {
        id: 13,
        productName: "Camisa Xadrez",
        price: "R$56,90",
        image: "imagens/feminino/1.jpg",
        category: "fem",
        quantidade:0
      },
      {
        id: 14,
        productName: "Camisa Listrada",
        price: "R$48,90",
        image: "imagens/feminino/2.jpg",
        category: "fem",
        quantidade:0
      },
      {
        id: 15,
        productName: "Blusa Botão",
        price: "R$45,50",
        image: "imagens/feminino/3.jpg",
        category: "fem",
        quantidade:0
      },
      {
        id: 16,
        productName: "Blusa Bege",
        price: "R$35,00",
        image: "imagens/feminino/4.jpg",
        category: "fem",
        quantidade:0
      },
      {
        id: 17,
        productName: "Blusa Onça",
        price: "R$50,00",
        image: "imagens/feminino/5.jpg",
        category: "fem",
        quantidade:0
      },
      {
        id: 18,
        productName: "Blusa Preta",
        price: "R$45,00",
        image: "imagens/feminino/6.jpg",
        category: "fem",
        quantidade:0
      },
    ],
  };

  // Loop para criação do campo e inserção dos objetos
  
  for (let i of products.type) {
    // Criando a classe central para adicionar os objetos
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    // Criando a div das imagens
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Adicionando as imagens de cada produto
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Criando uma div para o nome dos objetos
    let container = document.createElement("div");
    container.classList.add("container");
    // Adicionando o nome dos objetos
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // Criando um campo para o preço dos objetos/produtos
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);
//  Criando os botoes 
    let btn = document.createElement("input");
        btn.type = "button";
        btn.value = "Adicionar";
        btn.className = "btn btn-primary btn-sm";
        btn.setAttribute("key", i.id)
        container.appendChild(btn);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  // Filtrar os produtos - pego o botao do HTML e puxo o valor delas 
  function filterProduct(value) {
    // Variavel botao que recebe os botoes no HTML
    let buttons = document.querySelectorAll(".button-value");
    // pego a var criada e percorro o array com forEach - executa a cada item do array (parametro - novo item)
    buttons.forEach((button) => {
      // Fução para criar uma classe quando o parametro é executado (exibe os produtos ou não) // Veirificar se o valor é igual a do innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    // Selecionando os produtos
    
    let elements = document.querySelectorAll(".card");
    // Percorrendo todos os elementos
    
    elements.forEach((element) => {
      // Exibir todos os produtos
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        // Classe por categoria - remove e exibe outros podutos
        if (element.classList.contains(value)) {
          
          element.classList.remove("hide");
        } else {
          
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Buscador
  document.getElementById("search").addEventListener("click", () => {
    //Iniciando as funções atraves do click
    let inputBusc = document.getElementById("inputBusc").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //passando por todos os elementos e mostrando o indice
    elements.forEach((element, index) => {
      //verificando se o innerText possui oo valor pesquisado
      if (element.innerText.includes(inputBusc.toUpperCase())) {
        //mostrando os produtos correspondentes
        cards[index].classList.remove("hide");
        // ocultando outros produtos
      } else {
        
        cards[index].classList.add("hide");
      }
    });
  });
  
  // Mostrando tudo ao carregar o site
  window.onload = () => {
    filterProduct("all");
  };

  // Carrinho

  // Array de produtos que serão adicionados
  let carComp = [];

  // Função para adicionar os itens ao carrinho - o parametro usado foi o ID do produto presente no array products.type
  // Com o find() verifico se existe um certo item no carrinho, em caso positivo é adicionado o quantiade ++ a sacola
addItem = (productId) => {
  let product = products.type.find(item => item.id === productId);
  if (product) {
    let itemInCart = carComp.find(item => item.id === productId);
    if (itemInCart) {
      itemInCart.quantidade++;
    } else {
      carComp.push({...product, quantidade: 1});
    }
    console.log("Produtos no carrinho:", carComp);
  } else {
    console.log("Produto não encontrado.");
  }
};

var prod = document.getElementsByClassName("btn btn-primary btn-sm");
for (var i = 0; i < prod.length; i++) {
  prod[i].addEventListener("click", function() {
    let key = parseInt(this.getAttribute("key"));
    addItem(key);
    return false;
  });
}


// Modal - Carrinho 

const openModalButton = document.getElementById("carrinho")
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const produtos = document.getElementById("products");

openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
  produtos.style.display ='none';

  let carModal = document.getElementById("carModal-body");


});

closeModalButton.addEventListener('click', function() {
  modal.style.display = 'none';
  produtos.style.display ='grid';
});

function renderCart() {
  let cartBody = document.getElementById("carModal-body");
  cartBody.innerHTML = ""; // Limpa o conteúdo atual do modal do carrinho

  carComp.forEach((product) => {
    // Criando elementos para exibir as informações do produto no carrinho
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.classList.add("imageproduct")
    cartItem.appendChild(productImage);

    let productName = document.createElement("span");
    productName.classList.add("productname");
    productName.innerText = product.productName;
    cartItem.appendChild(productName);


    let productPrice = document.createElement("span");
    productPrice.classList.add("productprice");
    productPrice.innerText = product.price;
    
    cartItem.appendChild(productPrice);

    let productQuantity = document.createElement("span");
    productQuantity.classList.add("productqtt");
    productQuantity.innerText = "Quantidade: " + product.quantidade;
    cartItem.appendChild(productQuantity);


    cartBody.appendChild(cartItem);
  });
}

addItem = (productId) => {
  let product = products.type.find((item) => item.id === productId);
  if (product) {
    let itemInCart = carComp.find((item) => item.id === productId);
    if (itemInCart) {
      itemInCart.quantidade++;
    } else {
      carComp.push({ ...product, quantidade: 1 });
    }
    console.log("Produtos no carrinho:", carComp);
    renderCart(); // Renderiza os produtos no modal do carrinho
  } else {
    console.log("Produto não encontrado.");
  }
};

openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
  produtos.style.display = 'none';

  renderCart(); // Renderiza os produtos no modal do carrinho
});



  


