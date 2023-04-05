const togglePassword = document.getElementById('toggle-password');
const edit = document.getElementsByClassName('edit');
const copy = document.getElementsByClassName('copy');

const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');

let saveFlag = false;

if(togglePassword!=undefined){
    togglePassword.addEventListener('click',(event) => {
        const type = userPassword.getAttribute('type')==='password'?'text':'password';
        userPassword.setAttribute('type',type);
        togglePassword.classList.toggle('bi-eye');
    });
}

document.addEventListener('click',(event) => {
    if(!(event.target.classList.contains('user-details')||event.target.classList.contains('input__field')||event.target.classList.contains('edit'))){
        userName.style.pointerEvents = 'none';
        userName.style.userSelect = 'none';
        userName.readOnly = true;
        userEmail.style.pointerEvents = 'none';
        userEmail.style.userSelect = 'none';
        userEmail.readOnly = true;
        if(userPassword!=undefined){
            userPassword.style.pointerEvents = 'none';
            userPassword.style.userSelect = 'none';
            userPassword.readOnly = true;
        }
    }
});

Array.from(edit).forEach(element => {
    element.addEventListener('click',(event) => {
        saveFlag = true;
        document.getElementById("save").removeAttribute('disabled');
        switch(parseInt(element.id)){
            case 1:
                userName.style.pointerEvents = 'auto';
                userName.style.userSelect = 'auto';
                userName.removeAttribute('readonly');
                break;
            case 2:
                userEmail.style.pointerEvents = 'auto';
                userEmail.style.userSelect = 'auto';
                userEmail.removeAttribute('readonly');
                break;
            case 3:
                userPassword.style.pointerEvents = 'auto';
                userPassword.style.userSelect = 'auto';
                userPassword.removeAttribute('readonly');
                break;
        }
    });
});

Array.from(copy).forEach(element => {
    element.addEventListener('click',(event) => {
        element.classList.toggle('bi-check');
        element.classList.toggle('bi-clipboard');

        switch(parseInt(element.id)){
            case 1:
                navigator.clipboard.writeText(userName.value);
                break;
            case 2:
                navigator.clipboard.writeText(userEmail.value);
                break;
            case 3:
                navigator.clipboard.writeText(userPassword.value);
                break;
        }
        
        setTimeout(() => {
            element.classList.toggle('bi-check');
            element.classList.toggle('bi-clipboard');
        },1000);
    });
});

if(document.getElementById('save')!=undefined){
    document.getElementById('save').addEventListener('click',(event) => {
        saveFlag = false;
    });
}

window.addEventListener('beforeunload',(event) => {
    if(saveFlag){
        event.preventDefault();
        event.returnValue = '';
    }
});