let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#Email");
let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");
let errorName = document.querySelector("#errorName");
let errorEmail = document.querySelector("#errorEmail");
let errorPassword = document.querySelector("#errorPassword");
let errorConfirm = document.querySelector("#errorConfirm");

const handelRegister = (event) => {
  event.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmInput.value;
  let userObj = { name, email, password };
  let errorBag = 0;

  let usersData = JSON.parse(localStorage.getItem("usersPos"));
  let usersArr = [];
  if (!nemeRegex.test(name)) {
    errorBag++;
    errorName.innerText='Failed Name'
    errorName.classList.replace('d-none','d-block')
    console.log('name')
  }else{
    errorName.classList.replace('d-block','d-none')
  }

  if (!emailRegex.test(email)) {
    errorBag++;
    errorEmail.innerText='Failed Email'
    errorEmail.classList.replace('d-none','d-block')
    console.log('email')

  }else{
    errorEmail.classList.replace('d-block','d-none')
  }
  if (!passwordRegex.test(password)) {
    errorBag++;
    errorPassword.innerText='Failed Password! Must contain uppercase and lowercase letters, numbers and symbols. '
    errorPassword.classList.replace('d-none','d-block')
    console.log('pass')

  }else{
    errorPassword.classList.replace('d-block','d-none')

  }
  if (password != confirmPassword) {
    errorBag++;
    errorConfirm.innerText='Failed Confirm Password'
    errorConfirm.classList.replace('d-none','d-block')
    console.log('con')

  }else{
    errorConfirm.classList.replace('d-block','d-none')

  }

  if (errorBag != 0) {
    // alert("failed Register");
  } else {
    if (usersData == null) {
      usersArr.push(userObj);
      localStorage.setItem("usersPos", JSON.stringify(usersArr));
      window.location.href = "./login.html";
    } else {
      let uniqeEmail = usersData.findIndex((el, index) => {
        return el.email.toLowerCase() == email.toLowerCase()
      });
      if (uniqeEmail == -1) {
          console.log(uniqeEmail)
          usersData.push(userObj);
          localStorage.setItem("usersPos", JSON.stringify(usersData));
          window.location.href = "./login.html";
        } else {
          console.log(uniqeEmail);
          alert("Email Exist");
      }
    }
  }
};
