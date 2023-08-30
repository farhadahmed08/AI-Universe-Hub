let count=0;
const loadData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();
    const AI = data.data.tools;
    // console.log(AI)
    displayData(AI)
}
loadData()

const displayData = (AI)=>{
   console.log(AI)
   const cardContainer = document.getElementById('card-container');
   AI.forEach(element => {
        console.log(element);
        const aiCard =document.createElement('div');
        aiCard.classList = 'card bg-green-100 p-4 shadow-xl';
        aiCard.innerHTML = `
        <figure><img src="${element.image}" alt="phones" /></figure>
        <div class="card-body">
        <h2 class="card-title">Features</h2>
          <p> ${count++} ${element.features}</p>
          
          <hr>
          <h4 class="text-3xl">${element.name}</h4>
          <p>${element.published_in}</p>
          
        `;
        cardContainer.appendChild(aiCard) 
   });

}


