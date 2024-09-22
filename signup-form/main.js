// const password = document.getElementById('password').value.trim();
const pass = document.getElementById("password");
const msg = document.getElementById("messaged");
const str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
       msg.style.display= "block";
    }
    
    else{
       msg.style.display = "none";
    }

    if(pass.value.length < 4){
       str.innerHTML = "weak";
    }
    
    else if(pass.value.length >= 4 && pass.value.length < 8){ 
        str.innerHTML = "medium";
    }

    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
    }
    
})

function validatePassword() {
    const password = document.getElementById('password').value;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    if (!specialCharacter.test(password)) {
        str.innerText = "must contain special character.";
    }
}

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) return;

    const dob = new Date(dobInput);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age-display').innerText = `Age: ${age} years`;
}