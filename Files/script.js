document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dobInput = document.getElementById('dob');
    const phoneInput = document.getElementById('phone');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            // Here you can submit the form or do other things
            form.submit(); // Remove this line if you don't want to submit the form
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Email is not valid');
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        // Validate Password
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            showSuccess(passwordInput);
        }

        // Validate Date of Birth
        if (dobInput.value.trim() === '') {
            showError(dobInput, 'Date of Birth is required');
            isValid = false;
        } else {
            showSuccess(dobInput);
        }

        // Validate Phone Number
        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phoneInput.value.trim())) {
            showError(phoneInput, 'Phone number is not valid');
            isValid = false;
        } else {
            showSuccess(phoneInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /^\d{10}$/;
        return re.test(phone);
    }
});
