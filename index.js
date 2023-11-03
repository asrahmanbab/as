




const search_form = document.getElementById("search-form");
const search_input = document.getElementById("search-input");
const serch_result= document.getElementById("result")
const search_btn = document.getElementById("btn");
const show_more = document.getElementById("show-more");


let keyword = "";
let page = 1 ;
let acceskey = "7fl3dpYTm3QnO3xF5ZVQr1xX89Oq7GzOmVCXOWk-_HA";



async function searchImage(){
      keyword = search_input.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acceskey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        serch_result.innerHTML = "";
    }
    const Result = data.results

   Result.map((result) =>{
     
    const image = document.createElement("img");
     image.src    = result.urls.small

     const imagelink = document.createElement("a")
        imagelink.href   = result.links.html

       imagelink.appendChild(image);
       serch_result.appendChild(imagelink);
      


    
   })
   show_more.style.display = "block";
    
}
search_form.addEventListener("submit",(e) =>{
    e.preventDefault();
    page=1;
    searchImage();
})
show_more.addEventListener("click",() =>{
    page++
    searchImage()
})

