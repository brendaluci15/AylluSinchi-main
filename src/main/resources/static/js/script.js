const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

function iniciar(){
       var usuario, contra;
       usuario= document.getElementById("usuario").value;
       contra= document.getElementById("contra").value;
       if (usuario == "fred" && contra == "123"){
              alert ("usuario y contraseña correcto");
       window.location = "/cuerpo";}
       
       else{
              alert(" usuario y contraseña incorrecto.");
       }
}