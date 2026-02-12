

const pets = document.querySelectorAll(".pet");


const nome = document.getElementById("nomeDoPet");
const descricao = document.getElementById("descricao");
const fotoGrande = document.getElementById("fotoGrande");



for (let i = 0; i < pets.length; i++) {
 
    
  const pet = pets[i];

  
  const miniatura = pet.querySelector("img");

  

  miniatura.addEventListener("click", () => {
    
    nome.textContent = pet.querySelector("h2").textContent; 

   
    descricao.textContent = pet.querySelector(".descricao").textContent; 
    

    fotoGrande.src = miniatura.src;
  });
}