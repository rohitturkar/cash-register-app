const billAmount=document.querySelector("#input-text");
const cashGiven=document.querySelector("#cash-given")
const calculateBtn=document.querySelector("#calculate-btn")
const clearBtn=document.querySelector("#clear-btn");
const errorMsg=document.querySelector("#errorMsg");
const noOfNotes=document.querySelectorAll("#noOfnotes");

let availableNotes=[2000,500,100,50,20,10,5,1];


calculateBtn.addEventListener("click",function validateBillAmountAndCashGiven(){
    hideMessage();
    if(billAmount.value>0){
   if(cashGiven.value>=billAmount.value){
     const amountTobeReturned=cashGiven.value-billAmount.value;
     calculateChange(amountTobeReturned);
   }
   else{
    errorMsgDisplay("the cash given atleast should be equal to bill Amount")
   }
    }
    else{
        errorMsgDisplay("the bill amount should be positive")
    }
})

function calculateChange(amount){
  for(let i=0;i<availableNotes.length;i++){
    const NumberOfNotesPresent=Math.trunc(amount/availableNotes[i]);
    amount=amount%availableNotes[i];
    noOfNotes[i].innerText=NumberOfNotesPresent;
  }
}

function hideMessage(){
    errorMsg.style.display="none";
}

function errorMsgDisplay(message){
    errorMsg.style.display="block";
    errorMsg.innerText=message;
}

clearBtn.addEventListener("click",function clearBrowser(){
    location.reload();
});