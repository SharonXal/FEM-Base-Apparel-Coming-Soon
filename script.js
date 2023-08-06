var emailAddress = document.querySelector("#email-id"),
btn = document.querySelector("button"),
emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
error = document.querySelector(".icon-error"),
error_msg = document.querySelector(".error-text");

btn.addEventListener('click', ()=>{
    if(!emailAddress.value.match(emailformat)){
        error.className = 'icon-error-show';
        error_msg.className = "error-text-show";
    }
    else{
        error.className = 'icon-error';
        error_msg.className = 'error-text';
    }
});

