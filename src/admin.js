if(JSON.parse(localStorage.getItem("userLogin") ?? "{}").role != "admin") {
    window.location.href = "/";
}else {
    document.querySelector(".userLogin").innerText = `Xin chào ${JSON.parse(localStorage.getItem("userLogin")).name}`;
}
function logOut() {
    localStorage.removeItem("userLogin");
    window.location.href = "/";
}

function loadMenuData(page) {
    window.location.href = `/admin/${page}/index.html`
}

