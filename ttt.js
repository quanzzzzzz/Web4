// Toggle show/hide password
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    this.src = type === 'password' ? 'Close.png' : 'Open.png';
});

// Form validation
const form = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordFieldInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Helper function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

form.addEventListener('submit', function (e) {
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Validate email
    function isValidEmail(email) {
        return email.includes('@');  // Kiểm tra có chứa '@'
    }
    
    // Kiểm tra form khi người dùng nhấn "Đăng nhập"
    form.addEventListener('submit', function (e) {
        // Reset thông báo lỗi
        emailError.textContent = '';
        passwordError.textContent = '';
    
        let isValid = true;
    
        // Kiểm tra email
        const emailValue = emailField.value.trim();
        if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Email phải có ký tự @';
            isValid = false;
        }
    
        // Kiểm tra mật khẩu
        const passwordValue = passwordFieldInput.value.trim();
        if (passwordValue === '') {
            passwordError.textContent = 'Mật khẩu không được để trống';
            isValid = false;
        }
    
        // Nếu có lỗi, ngăn không cho form submit
        if (!isValid) {
            e.preventDefault();
        }
    });

    // Validate password
    const passwordValue = passwordFieldInput.value.trim();
    if (passwordValue === '') {
        passwordError.textContent = 'Mật khẩu không được để trống';
        isValid = false;
    }

    // If validation fails, prevent form submission
    if (!isValid) {
        e.preventDefault();
    }
});