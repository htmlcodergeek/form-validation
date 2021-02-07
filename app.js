let userName   = document.getElementById('Username');

let userPassword = document.getElementById('password');


/** Add Event listener */
userName.addEventListener('input',(event)=>{
          event.preventDefault();

          let userValue = userName.value;

          /** Regex Expression */
          let uPattern  = /[a-zA-z ]*$/;

          let userResult = userValue.search(uPattern);

          if(userResult > 0){
               document.getElementById('name_err').innerHTML = `Numbers or Special Characters Are Not Allowed`;
          }else{
               document.getElementById('name_err').innerHTML =``;
          }

});



/** For pASSWORD FIELD */

userPassword.addEventListener('input',(event)=>{
          event.preventDefault();

          let width = 0;     
          let UppPattern = /(?=.*[A-Z])/;
          let LowPattern = /(?=.*[a-z])/;
          let numPattern = /(?=.*[0-9])/;
          let splPattern = /(?=.*\W)/;
          let Passvalue  = userPassword.value;

          let uppres = Passvalue.search(UppPattern);

          let lowres = Passvalue.search(LowPattern);

          let numres = Passvalue.search(numPattern);

          let splres = Passvalue.search(splPattern);

          if(uppres == 0){
                document.getElementById('upp').style.color = `green`;
                width +=10;
          }else{
               document.getElementById('upp').style.color = ``;
          }

          if(lowres == 0){
               document.getElementById('lower').style.color = `green`;
               width +=10;
         }else{
              document.getElementById('lower').style.color = ``;
         }
         if(numres == 0){
               document.getElementById('num').style.color = `green`;
               width +=10;
          }else{
         document.getElementById('num').style.color = ``;
          }
          if(splres == 0){
               document.getElementById('spl').style.color = `green`;
               width +=10;
          }else{
              document.getElementById('spl').style.color = ``;
          }

          document.getElementById('pass_err').style.width = parseInt(width) +'%';
          document.getElementById('pass_err').style.backgroundColor = `green`;

          if(parseInt(width) > 9  && parseInt(width) <= 30){
               document.getElementById('pass_err').style.backgroundColor = `red`;
          }
});

function ShowPassword(){
      if(userPassword.type == 'password'){
            userPassword.type = 'text';
      }else{
            userPassword.type = 'password';
      }
}