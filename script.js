document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const sex = document.querySelector('input[name="sex"]:checked');
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const reason = document.getElementById("reason").value.trim();

 
      document.querySelectorAll(".error").forEach(el => el.textContent = "");

      if (!firstName) {
        document.getElementById("firstNameError").textContent = "required";
        valid = false;
      }
      if (!lastName) {
        document.getElementById("lastNameError").textContent = "required";
        valid = false;
      }
      if (!sex) {
        document.getElementById("sexError").textContent = "required";
        valid = false;
      }
      if (!email) {
        document.getElementById("emailError").textContent = "required";
        valid = false;
      }
      if (!password) {
        document.getElementById("passwordError").textContent = "required";
        valid = false;
      }
      if (!reason) {
        document.getElementById("reasonError").textContent = "required";
        valid = false;
      }

      if (valid) {

        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("sex", sex.value);
        localStorage.setItem("email", email);
        localStorage.setItem("reason", reason);


        window.location.href = "result.html";
      }
    });
  }


  if (document.getElementById("profileFirstName")) {
    document.getElementById("profileFirstName").textContent = localStorage.getItem("firstName");
    document.getElementById("profileLastName").textContent = localStorage.getItem("lastName");
    document.getElementById("profileEmail").textContent = localStorage.getItem("email");
    document.getElementById("profileSex").textContent = localStorage.getItem("sex");
    document.getElementById("profileReason").textContent = localStorage.getItem("reason");
  }
});
