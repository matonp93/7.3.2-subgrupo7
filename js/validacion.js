function showAlertSuccess() {
  document.getElementById('alert-success').classList.add('show');
}

function showAlertError() {
  document.getElementById('alert-danger').classList.add('show');
}

// Get inputs
const campos = {
  name: document.getElementById('nombre'),
  lastname: document.getElementById('apellido'),
  email: document.getElementById('email'),
  password1: document.getElementById('password1'),
  password2: document.getElementById('password2'),
};

const terminos = document.getElementById('terminos');

function checksMarcados() {
  return terminos.checked;
}

function contraseñademasiadoCorta() {
  return campos.password1.value.length <= 6;
}

function esIgual() {
  return campos.password1.value == campos.password2.value;
}

function ningunVacio() {
  for (const key in campos) {
    if (!campos[key].value) {
      return false;
    }
  }
}

document.getElementById('regBtn').addEventListener('click', () => {
  if (
    contraseñademasiadoCorta() ||
    !esIgual() ||
    !ningunVacio() ||
    checksMarcados()
  ) {
    showAlertError();
  } else {
    showAlertSuccess();
  }
});

// Function showAlertSuccess() {
//     document.getElementById("alert-success").classList.add("show");
// }

// function showAlertError() {
//     document.getElementById("alert-danger").classList.add("show");
// }

// function validateForm() {
//     const username = document.getElementById('nombre').value;
//     const lastname = document.getElementById('apellido').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password1').value;
//     const confirmPassword = document.getElementById('password2').value;
//     const acceptTerms = document.getElementById('terminos').checked;

//     if (username === '' || lastname=== ''|| email=== ''|| password === '' || confirmPassword === '' || !acceptTerms) {
//         alert('Ningún campo puede estar vacío y debes aceptar los términos y condiciones.');
//         return;
//     }

//     if (password.length < 6) {
//         alert('La contraseña debe tener al menos 6 caracteres.');
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert('Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.');
//         return;
//     }

//     // Si todas las validaciones pasan, puedes enviar el formulario o realizar cualquier otra acción aquí.
//     alert('Registro exitoso!');
// }
// document.getElementById('loginForm').addEventListener('submit', (event) => {
//     event.preventDefault();
//     validateForm();
// });

//
