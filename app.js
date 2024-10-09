let cardBox=document.querySelector(".cardBox");
let url="https://feecq.github.io/api/movies.json";
let response=fetch(url);
response.then((v)=>{
    return v.json();
}).then((contest)=>{
    console.log(contest);   //here v is arry.
  let ihtml="";
    for(let item in contest){
        console.log(contest[item]);
        ihtml+=`
         <div class="card">
            <div class="img">
                <img src="${contest[item].image}" alt="error">
            </div><!--img end-->
            <div class="content"> 
               <h3>${contest[item].movie}</h3>
               <p>Rating: ${contest[item].rating/2}/5</p>
               <p class="star">★★★★☆</p>
               <p><a href="${contest[item].imdb_url}">visit here</a></p>

            </div> <!--end content-->
            </div> <!--end card-->
        `
    }
    cardBox.innerHTML=ihtml;
});
function filterCard(){
    
    let inputField=document.querySelector(".inputField").value.toLowerCase();
    
    let cards=document.querySelectorAll(".card");

    cards.forEach(card =>{
        let name=card.querySelector("h3").textContent.toLowerCase();
        // let name =card.getAttribute("card").toLowerCase();
        if(name.includes(inputField)) {
            card.classList.remove("hidden");
        }
        else{
            card.classList.add("hidden");
        }
    });
    document.querySelector(".inputField").value = ""; 
}
