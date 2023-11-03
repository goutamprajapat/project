// @ts-nocheck
var cflp = document.getElementById("cflp");

const signUp = () => {
  cflp.classList.add("active");
};
const SignInBTn = () => {
  cflp.classList.remove("active");
};

// ! password show hide icon
const pass = document.getElementById("lpassword");
let pass_icon = document.getElementById("pass_icon");

let showicon = () => {
  pass.value === ""
    ? (pass_icon.style.display = "none")
    : (pass_icon.style.display = "block");
};

//password type check icon
pass_icon?.addEventListener("click", () => {
  if (pass.type === "text") {
    pass.type = "password";
    pass_icon.classList.replace("bi-eye-slash", "bi-eye");
  } else {
    pass.type = "text";
    pass_icon.classList.replace("bi-eye", "bi-eye-slash");
  }
});

//  user validation in login
const usr_n = document.getElementById("username"),
  usr_p = document.getElementById("lpassword");
let pass_valid = document.getElementById("password_valid");
let usr_valid = document.getElementById("username_valid");
let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let pass_regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
function checkPasswordValidation(value) {
  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(value)) {
    return "Password must not contain Whitespaces.";
  }

  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(value)) {
    return "Password must have at least one Uppercase Character.";
  }

  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(value)) {
    return "Password must have at least one Lowercase Character.";
  }

  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(value)) {
    return "Password must contain at least one Digit.";
  }

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
  if (!isContainsSymbol.test(value)) {
    return "Password must contain at least one Special Symbol.";
  }

  const isValidLength = /^.{6,}$/;
  if (!isValidLength.test(value)) {
    return "enter a password of at least 6 characters.";
  }

  return "";
}
const SignIN_f = document.getElementById("SignIN");

SignIN_f?.addEventListener("submit", SignInFun);
function SignInFun(e) {
  e.preventDefault();

  if (usr_n.value == "") {
    usr_valid.innerHTML = "please input text or email *";
    return false;
  } else if (!email_regex.test(usr_n.value)) {
    usr_valid.innerHTML = "please enter valid email *";
    return false;
  }

  if (usr_p.value == "") {
    pass_valid.innerHTML = "Enter Your Password *";
    return false;
  }

  if (true) {
    let s = localStorage.getItem("s_username");
    let p = localStorage.getItem("s_password");
    if (usr_n.value === s) {
      if (usr_p.value === p) {
        setTimeout(() => {
          window.location.href = "./Page/home.html";
          usr_n.value = "";
          usr_p.value = "";
        }, 3000);
      } else {
        pass_valid.innerHTML = "Password is wrong";
        return false;
      }
    } else {
      usr_valid.innerHTML = "Username is wrong";
      return false;
    }
  }

  return true;
}

usr_n.addEventListener("keyup", () => {
  usr_valid.innerHTML = "";
});
usr_p.addEventListener("keyup", () => {
  pass_valid.innerHTML = "";
});
// signup password validation

const signup_form = document.getElementById("SignUp");
const s_username = document.getElementById("signUp_username");
const s_password = document.getElementById("signUp_password");
const f_name = document.getElementById("f_name");
const l_name = document.getElementById("l_name");

const s_username_valid = document.getElementById("username_valid_signup");
const s_password_valid = document.getElementById("password_valid_signup");

signup_form.addEventListener("submit", signupEVENT);
function signupEVENT(e) {
  e.preventDefault();

  if (s_username.value == "") {
    s_username_valid.innerHTML = "please input text or email *";
    return false;
  } else if (!email_regex.test(s_username.value)) {
    s_username_valid.innerHTML = "please enter valid email *";
    return false;
  }

  if (s_password.value == "") {
    s_password_valid.innerHTML = "Enter Your Password *";
    return false;
  }
  if (true) {
    localStorage.setItem("s_username", s_username.value);
    localStorage.setItem("s_password", s_password.value);
    localStorage.setItem("f_name", f_name.value);
    localStorage.setItem("l_name", l_name.value);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
  s_username_valid.value = "";
  s_password_valid.value = "";
  return true;
}

s_password.addEventListener("keyup", () => {
  if (s_password.value.length == 0) {
    s_password_valid.innerHTML = "";
    return;
  } else {
    s_password_valid.innerHTML = checkPasswordValidation(s_password.value);
  }
});

const ck = window.localStorage;

console.log(ck);
