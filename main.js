const username = document.getElementById("username")
const email = document.getElementById("email")
const cnic = document.getElementById("cnic")
const password = document.getElementById("password")




//Multiple user's///
const createAccount = () => {
    console.log(username.value)
    console.log(email.value)
    console.log(cnic.value)
    console.log(password.value)

    const userObj = {
        username: username.value,
        email: email.value,
        cnic: cnic.value,
        password: password.value,

    }

    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === userObj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        alert("successfully signup")
        window.location.assign("./index.html")

    } else {
        alert("email already exists")
    }



}


const login = () => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value) => {
        return value.email === email.value && value.password === password.value
    })

    console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("login")
        window.location.assign("./dashboard.html")

    } else {
        alert("invalid")
    }

}


logout = () => {
    window.localStorage.clear();
    window.location.assign("./index.html")

    // alert("heloo");

}