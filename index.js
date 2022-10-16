let text = document.querySelector("#textcalc");

function veiw(value){
  text.value += value;
}


function backone(){
  let Fnum = text.value;
  let lin = Fnum.length - 1;
  text.value = Fnum.slice(0 , lin);
}

function calc(){
  try{
    text.value = eval(text.value);
  }catch(err){
    text.value = "error";
  }
}