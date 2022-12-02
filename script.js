window.onload=()=>{
console.log("loaded")

const body = document.getElementById("content")

const htmlString =`
    <form action="">
    <input type="checkbox" id="callList" name="ckeckbox" value="checked">
    <label for="callList"> ik wens niet meer opgebeld te worden</label><br>
    <div id="infoText">
    <p id="">
    Bellen we u te vaak op? Geen probleem, 
    we geven onze callcenters door dat u niet langer wenst opgebeld te worden.
     U kunt u ook nog steeds registreren op de <a herf="#">bel-me-niet-meer-lijst</a>.
    </p>
    <input type="tel" id="phone" name="phone" placeholder="Telefoon" required>
    <input type="submit" id="submitBtn" value="Submit">
    </div>
    </form>
    `
body.innerHTML += htmlString;
const infoText = document.getElementById("infoText");
infoText.style.visibility = "hidden";
const checkbox = document.getElementById("callList");
checkbox.addEventListener("change", isBtnChecked);
const submitBtn = document.getElementById("submitBtn");
submitBtn.style.visibility = "hidden";
function isBtnChecked(){
    if(this.checked){
        console.log('btn checked');
        infoText.style.visibility = "visible"
    }
    else{
        console.log('btn not checked');
        infoText.style.visibility = "hidden";
    }

}
const phone = document.getElementById("phone");
phone.addEventListener("keyup", numberValidation)
//regular expression
let regex = /^\+32\d{8}$/;
function numberValidation(){
    if(phone.value.match(regex)){
        console.log("ok");
        submitBtn.style.visibility = "visible";
    }else{
        console.log(phone.value);
    }
   
 
}

}