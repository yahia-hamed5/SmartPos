let emailInput=document.querySelector('#email');
let passwordInput=document.querySelector('#password');
let errorEmail=document.querySelector('#errorEmail');
let errorPassword=document.querySelector('#errorPassword');

function navigate(event) {
    event.preventDefault();
    let email=emailInput.value;
    let password=passwordInput.value;
    let usersData = JSON.parse(localStorage.getItem("usersPos"));
    if (usersData == null) {
      usersData=[]      
    }
    let uniqeEmail = usersData.findIndex((el, index) => {
        return ((el.email.toLowerCase() == email.toLowerCase())&&(el.password === password))
      });

      if (uniqeEmail == -1) {
        // alert('Falied Email And Password')
        errorEmail.classList.replace('d-none','d-block')
        errorPassword.classList.replace('d-none','d-block')
      }else{
        errorEmail.classList.replace('d-block','d-none')
        errorPassword.classList.replace('d-block','d-none')
        // console.log(usersData[uniqeEmail].name);
        sessionStorage.setItem('tokeen',usersData[uniqeEmail].name);
        localStorage.setItem('index',uniqeEmail);
        window.location.href='./categories.html'
      }
    // window.location.href='./categories.html'
}