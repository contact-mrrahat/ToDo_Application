
let allpost = document.querySelector(".allpost");
let titel = document.querySelector(".titel");
let contant = document.querySelector(".contant");
let btn = document.querySelector(".post_btn");
let arry = [];




btn.addEventListener("click", function(){
   
   arry.push({
        titel: titel.value,
        contant : contant.value,
   })

   titel.value="";
   contant.value="";
   allpost.innerHTML="";
   post();
    
    
})

function post (){

        arry.map((value) => {
          allpost.innerHTML += `<div class="post_ariya">
        <div class="post_title">
            <h1>${value.titel}</h1>
          </div>
          <div class="post_contant">
            <p>${value.contant}</p>
          </div>
          <button type="button" class="btn btn-success edit_btn">Edit</button>
          <button type="button" class="btn btn-danger delete_btn">Delete</button>
    </div>`;
        });
 
        let delete_btn = document.querySelectorAll(".delete_btn");
        let deleteBtnConvert= Array.from(delete_btn);
        

        deleteBtnConvert.map((value , index)=>{
          value.addEventListener("click", function(){
            arry.splice(index, 1)

            allpost.innerHTML="";
            post()
          })
        })
        
        
        
        
        

    
}

