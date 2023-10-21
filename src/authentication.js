function renderHeader() {
    let loginData = null;
    if (localStorage.getItem("userLogin")){
        loginData = JSON.parse(localStorage.getItem("userLogin"))
    }
    
    let headerEl = document.querySelector(".mainHeader");
    
    headerElTring = `
        <div class="logo">
            <img onclick="window.location.href='/'" src="/assets/img/channels4_profile.jpg">
        </div>
        <div class="nav">
            <input type="text" placeholder="Tìm kiếm">
            <i id="btn-search" style="color: rgba(0, 0, 0, 0.696);" class="fa-solid fa-magnifying-glass"></i>
            <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
        </div>
        
      `
      headerEl.innerHTML = headerElTring
}
renderHeader()  

renderFooter()


function loadForm(type = "login") {
    if (type == "login") {
        let pageEL = document.querySelector(".formUserBox");
        let pageELString = `
        <form class="userBox" onsubmit="login(event)">
        <div class="userTitle" >
            <span>Đăng nhập và tạo tài khoản</span>
        </div>
        <div>
            <input type="text" name="username" placeholder="Tài khoản">
        </div>
        <div>
            <input type="password" name="password" placeholder="Mật khẩu">
        </div>
        <span>Bạn chưa có tài khoản!</span><span class="span-btn" onclick="loadForm('register')" >Đăng ký?</span>
        <div>
            <button type="submit">Đăng nhập</button>
        </div>
        </form>
        `
        pageEL.innerHTML = pageELString;
    }


    if(type == "register") {
        let pageEL = document.querySelector(".formUserBox");
        let pageELString = `
        <form class="userBox" onsubmit="register(event)">
        <div class="userTitle">
            <span>Đăng nhập và tạo tài khoản</span>
        </div>
        <div>
            <input type="text" name="username" placeholder="Tài khoản">
        </div>
        <div>
            <input type="password" name="password" placeholder="Mật khẩu">
        </div>
        <div>
            <input type="password" name="password_confirm" placeholder="Nhập lại mật khẩu">
        </div>
        <span>Bạn đã có tài khoản!</span><span class="span-btn" onclick="loadForm()">Đăng nhập?</span>
        <div>
            <button type="submit">Đăng ký</button>
        </div>
        </form>
        `
        pageEL.innerHTML = pageELString
    }

    
}   
loadForm()

// Đăng kí
  
function register(event){
    event.preventDefault();
    let newUser = {
      id : Date.now() * Math.random(),
      name : event.target.username.value,
      password : event.target.password.value,
      role : "admin",
    }
    console.log(newUser)
    if (newUser.password != event.target.password_confirm.value){
      alert("Mật khẩu không trùng khớp")
      return
    }
    if(newUser.password.length < 3) {
      alert("Mật khẩu cần ít nhất 3 ký tự")
      return
    }
    if(newUser.name.length < 3) {
      alert("Tên đăng nhập cần ít nhất 3 ký tự")
      return
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.name == newUser.name )){
      alert("Tên đăng nhập bị trùng")
      return
    }
    localStorage.setItem("users",JSON.stringify([...users,newUser]))
    alert("Đăng kí thành công!")
    loadForm()
}
  
  // Đăng nhập
  
  function login(event){
    event.preventDefault()
    let user = {
      name : event.target.username.value,
      password : event.target.password.value,
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let userInfor = users.find(item => item.name == user.name);
      if(!userInfor) {
          alert("Không tìm thấy người dùng!")
          return
      }
      if(userInfor.password != user.password) {
          alert("Sai mật khẩu!")
          return
      }
    localStorage.setItem("userLogin", JSON.stringify(userInfor));
    alert("Đăng nhập thành công!")
    window.location.href="/"
  }