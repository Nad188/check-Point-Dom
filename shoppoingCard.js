
// ==================================================================  Delete items from the cart.  =========================================================================


var dlt=document.querySelectorAll('.delete-btn')
console.log(dlt.parentElement)

for(let i=0;i<dlt.length;i++){
  var button=dlt[i];
  button.addEventListener('click',function(rmv){
     var removeProduct=rmv.target
     removeProduct.parentElement.remove()
  })


}



// ============================================================================================================================================================================

 
  






// ======================================================================= heart-shaped button  ==================================================================================
var favourite=document.getElementsByClassName('fas fa-heart')

for (let heart of favourite){
    heart.addEventListener('click',function(){
      if(heart.style.color==="red"){
        heart.style.color='white'
      }else{
        heart.style.color='red'

      }
    })
}
// ==============================================================================================================================================================================











// ====================================================Adjust the quantity of each item through  “+” and “-” buttons.=========================================================
 
var plus=document.getElementsByClassName('add-btn');
var minus=document.getElementsByClassName('minus-btn');

for (let i=0;i<plus.length;i++){
  var addButton=plus[i]
  addButton.addEventListener('click',function(add){
       var addButtonProcuct = add.target
      var Qnt = addButtonProcuct.parentElement.children[5]
      var QntValue=Qnt.value;
      var newQntValue=parseInt(QntValue) + 1;
      Qnt.value=newQntValue;
     
      total();
      
  })
}

for (let i=0;i<minus.length;i++){
  var addButton=minus[i]
  addButton.addEventListener('click',function(add){
       var addButtonProcuct = add.target
      var Qnt = addButtonProcuct.parentElement.children[5]
      var QntValue=Qnt.value;
      var newQntValue=parseInt(QntValue) - 1;
      Qnt.value=newQntValue;
      if(Qnt.value>=0){
        Qnt.value=newQntValue
      }else{
        Qnt.value=0
      }
      total()
      
  })
}
// =================================================================================================================================================================================





// ===================================================================== total price adjusted==============================================================================================

function total(){
  let quantity=Array.from(document.getElementsByClassName('quantity'))
  let price=Array.from(document.getElementsByClassName('price'))
  totalPrice=0;
  for(let i=0;i<quantity.length;i++){
    totalPrice+=quantity[i].value*price[i].innerHTML

  }
  return (document.getElementById('yourTotalPrice')).innerHTML=totalPrice + "dt"
 }
