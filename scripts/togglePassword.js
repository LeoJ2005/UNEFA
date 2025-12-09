document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('togglePassword'); 
    const passwordInput = document.getElementById('password');
    
    const openIconPath = '../img/icons/eye-open.svg';
    const slashIconPath = '../img/icons/eye-slash.svg';
    

    if (toggleIcon && passwordInput) {
        toggleIcon.addEventListener('click', function (e) {

            const currentType = passwordInput.getAttribute('type');
            const newType = currentType === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', newType);


            if (newType === 'text') {
    
                this.setAttribute('src', slashIconPath);
            } else {

                this.setAttribute('src', openIconPath);
            }
        });
    }
});