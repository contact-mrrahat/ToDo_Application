
let allpost = document.querySelector(".allpost");
let titel = document.querySelector(".titel");
let contant = document.querySelector(".contant");
let btn = document.querySelector(".post_btn");
let post_btn = document.querySelector(".post_btn")
let update_btn = document.querySelector(".update_btn")
let arry = [];
let indextStore;




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

update_btn.addEventListener("click", function(){
  arry[indextStore].titel=titel.value;
  arry[indextStore].contant=contant.value;

  allpost.innerHTML="";
  post()

  update_btn.style.display=("none");
  post_btn.style.display=("inline-block")

  titel.value="";
  contant.value="";

  
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

        let edit_btn= document.querySelectorAll(".edit_btn");
        let edit_btnConvert = Array.from(edit_btn);

        edit_btnConvert.map((value,index) => {
          value.addEventListener("click", function(){
            titel.value=arry[index].titel;
            contant.value=arry[index].contant;

            post_btn.style.display=("none");
            update_btn.style.display=("inline-block");

            indextStore=index;
            
          })
        })


        
        
        
        
        

    
}

