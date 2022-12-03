window.onload=()=>{
    console.log("loaded")

    const body = document.getElementById("content");
// form html string
    const htmlString =`
    <p>Welke communicatie wenst u niet langer te ontvangen?</p>
        <form action="" id="formBox">
        <input type="checkbox" id="callList" name="ckeckbox" value="checked">
        <label for="callList" id="checkLabel"> ik wens niet meer opgebeld te worden</label><br>
        <div id="infoText">
       
        </div>
        
        </form>
        `;
    body.innerHTML += htmlString;
// form postion where info will be shown if user checks the box
    const infoText = document.getElementById("infoText");
    infoText.style.visibility = "hidden";
// checkbox & evend listener onChange
    const checkbox = document.getElementById("callList");
    checkbox.addEventListener("change", isBtnChecked);



/**
 * The function checks if the checkbox is checked, if it is, it shows the infoText and adds the phone
 * input field and submit button
 */
    function isBtnChecked(){
        if(this.checked){
            console.log('btn checked');
            infoText.style.visibility = "visible";    
            formBox.style.transitionDuration = ".6s";    
            formBox.style.borderColor = "gold";
            checkLabel.style.fontWeight = "normal";
            infoText.innerHTML += `  
            <br><label id="">
            Bellen we u te vaak op? Geen probleem, 
            we geven onze callcenters door dat u niet langer wenst opgebeld te worden.
            U kunt u ook nog steeds registreren op de <a href="">bel-me-niet-meer-lijst</a>.
            </label><br><br>
            <input type="tel" id="phone" name="phone" placeholder="Telefoon" required>
            <label id="invalid"> Gelieve een geldig nummer in te vullen</label><br><br>
            <input type="submit" id="submitBtn" value="Submit">
          `;

          //disable submit button until phone number is validated
          const submitBtn = document.getElementById("submitBtn");
          submitBtn.disabled = true;
          //if the phone number is invalid a messege will be shown under the input field
          const invalid = document.getElementById("invalid");
          invalid.style.visibility = "hidden";
          // get phone number from input field, ever keyup it checks and validates
          const phone = document.getElementById("phone");
          phone.addEventListener("keyup", numberValidation)
          submitBtn.addEventListener("click", submitNumber);
          // if number is valid user can submit number
          function submitNumber(e){
          e.preventDefault();
          const infoText = document.getElementById("infoText");
          infoText.innerHTML = "";
          infoText.innerHTML += `<p>U wordt niet meer opgebeld door onze callcenters. Dank u <br>
          uw telefoon nummer: ${phone.value}</p><br>`;
          }
          //regular expression to validate belgain phone number
          // always start with +32 "/^\+32\"" fallowed by 8 random digits
          let regex = /^\+32\d{8,}$/;
          function numberValidation(){
              if(phone.value.match(regex)){
                  console.log("ok");
                  phone.style.borderColor = "#27AE60";
                  invalid.style.visibility = "hidden"
                  submitBtn.disabled = false;
                  submitBtn.style.transitionDuration = ".6s";
                  submitBtn.style.backgroundColor = "#27AE60"
                  submitBtn.style.cursor = "pointer"
                  
              }else{
                  phone.style.borderColor = "red";
                  console.log(phone.value);
                  invalid.style.visibility = "visible"
                  submitBtn.disabled = true;
                  submitBtn.style.backgroundColor = "lightGrey"
                  submitBtn.style.cursor = "default"
              }
          
          }
          
        }
        else{
            console.log('btn not checked');
            infoText.style.visibility = "hidden";
            formBox.style.borderColor = "lightGrey"
            formBox.style.transitionDuration = ".6s"; 
            infoText.innerHTML = "";
            checkLabel.style.fontWeight = "lighter";

        }

    }
    

   

}