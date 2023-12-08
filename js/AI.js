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
//    console.log(AI)
   const cardContainer = document.getElementById('card-container');
//    const features = element.features;
//    console.log(features)

   AI.forEach(element => {
        console.log(element);

        // const elements = element.features;
        // console.log(elements)
        // elements.forEach(AiSingleFeatures => {
        //     console.log(AiSingleFeatures)
        // })


        const aiCard =document.createElement('div');
        aiCard.classList = 'card bg-green-100 p-4 shadow-xl';
        aiCard.innerHTML = `
        <figure><img src="${element.image}" alt="phones" /></figure>
        <div class="card-body">
        <h2 class="card-title">Features</h2>
          <p>1. ${element.features[0]} </p>
          <p>2. ${element.features[1]} </p>
          <p>3. ${element.features[2]} </p>
          
          <hr>
          <h4 class="text-3xl">${element.name}</h4>
          <p>${element.published_in}</p>
          
        `;
        cardContainer.appendChild(aiCard) 
   });

}


