window.onload=()=>{
    console.log("loaded")

    const body = document.getElementById("content")

    const htmlString =`
        <form action="">
        <h4>Welke communicatie wenst u niet langer te ontvangen?</h4>
        <input type="checkbox" id="callList" name="ckeckbox" value="checked">
        <label for="callList"> ik wens niet meer opgebeld te worden</label><br>
        <div id="infoText">
        <p id="">
        Bellen we u te vaak op? Geen probleem, 
        we geven onze callcenters door dat u niet langer wenst opgebeld te worden.
        U kunt u ook nog steeds registreren op de <a herf="#">bel-me-niet-meer-lijst</a>.
        </p>
        <input type="tel" id="phone" name="phone" placeholder="Telefoon" required><br>
        <label id="invalid"> Gelieve een geldig nummer in te vullen</label><br>
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
    const invalid = document.getElementById("invalid");
    invalid.style.visibility = "hidden";
    submitBtn.disabled = true;
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
            phone.style.borderColor = "green";
            invalid.style.visibility = "hidden"
            submitBtn.disabled = false;
        }else{
            phone.style.borderColor = "red";
            console.log(phone.value);
            invalid.style.visibility = "visible"
            submitBtn.disabled = true;
        }
    
    }
    // submitBtn.addEventListener("click", submitNumber);
    // function submitNumber(e){
    // e.preventDefault();

    // const submitString = `<p>U wordt niet meer opgebeld door onze callcenters. Dank u <br>
    // uw telefoon nummer: ${phone.value}</p><br>
    // <button type="button" href="">terug</button>`
    // body.innerHTML += submitString;
    // }

}