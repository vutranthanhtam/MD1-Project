function logOut() {
  localStorage.removeItem('userLogin')
  window.location.reload();
}

function renderHeader() {
  let loginData = null;
  if (localStorage.getItem("userLogin")){
      loginData = JSON.parse(localStorage.getItem("userLogin"))
  }
  
  let headerEl = document.querySelector(".div_header");
  let userBoxString = `
    ${loginData 
        ? `
            <span style="color: black; font-size: 20px;font-weight: 900">${loginData.name}</span>
            <button style="width: 60px;height:50px;background-color:rgb(194, 191, 191);border-radius: 0;border: 0;font-weight: 900;color:red;font-size: 18px;text-decoration: underline;  " onclick="logOut()">Thoát</button>
        ` 
        : ` <div>
              <button type="button" onclick ="formUserRegister(event)">Đăng ký / Đăng nhập</button>
            </div>`
    }
  `
  headerEl.innerHTML = `
    <div class="div_header_title">
        <img onclick="logOut()" src="/img/channels4_profile.jpg">
        <h1 onclick="logOut()">Mia-Food</h1>
    </div>
    <div class="div_header_nav">
        <a href="">Bánh tráng</a>
        <a href="">Cơm cháy</a>
        <a href="">Khô tẩm vị</a>
        <a href="">Khác</a>
    </div>
    <div class="div_header_user">
        <h3>Xin chào!</h2>
        ${userBoxString}
    </div>
    `
}
renderHeader()  


function renderFooter() {
  let footerEl = document.querySelector(".div_footer")
  footerEl.innerHTML = `
    <footer class="text-center text-white" style="background-color: #C2BFBF;">
    <!-- Grid container -->
    <div class="container pt-4">
      <!-- Section: Social media -->
      
        <!-- Facebook -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          ><i class="fab fa-facebook-f"></i
        ></a>
  
        <!-- Twitter -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          ><i class="fab fa-twitter"></i
        ></a>
  
        <!-- Google -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          ><i class="fab fa-google"></i
        ></a>
  
        <!-- Instagram -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          ><i class="fab fa-instagram"></i
        ></a>
  
        <!-- Linkedin -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          ><i class="fab fa-linkedin"></i
        ></a>
        <!-- Github -->
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          ><i class="fab fa-github"></i
        ></a>
      
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  
    <!-- Copyright -->
    <div  class="text-center text-dark p-3" style="background-color: #C2BFBF;height: 50px;">
      <span style="font-size: 20px;">© 2020 Copyright</span>
    </div>
    <!-- Copyright -->
  </footer>
    `
}
renderFooter()


function renderCarouse() {
  let carouseEl = document.querySelector(".div_slide")
  carouseEl.innerHTML = `
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">

       
        <div class="carousel-item active">
            <img  src="/img/anh 1.jpg" class="d-block w-80 " alt="...">
        </div>
        <div class="carousel-item">
            <img src="/img/anh 2.jpg" class="d-block w-80" alt="...">
        </div>
        <div class="carousel-item">
            <img  src="/img/anh 4.jpg" class="d-block w-80" alt="...">
        </div>
        

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>

    `
}
renderCarouse()


// form đăng nhập

function formUserRegister(event) {
  event.preventDefault()
  let formUserEl = document.querySelector(".div_user")
  formUserEl.innerHTML = `
  <form action="" class="formUser" onsubmit="register(event)">
    <div class="login">
       <h2>Đăng kí</h2>
       <div>
           <input type="text" placeholder="Tên đăng nhập" name="username">
       </div>
       <div>
           <input type="password" placeholder="Mật khẩu" name="password">
       </div>
       <div>
           <input type="password" placeholder=" Nhập lại mật khẩu" name="password_confirm">
       </div>
       <div>
           <span>Bạn đã có tài khoản!</span>
           <a onclick ="formUserLogin(event)" href="">Đăng nhập</a>
           <button type="submit">Đăng kí</button>
       </div>
    </div>
  </form>
  `
}


// form đăng kí

function formUserLogin(event) {
  event.preventDefault()
  let formUserEl = document.querySelector(".div_user")
  formUserEl.innerHTML = `
  <form action="" class="formUser" onsubmit="login(event)">
    <div class="login">
       <h2>Đăng nhập</h2>
       <div>
           <input type="text" placeholder="Tên đăng nhập" name="username">
       </div>
       <div>
           <input type="password" placeholder="Mật khẩu" name="password">
       </div>
       
       <div>
           <button  type="submit">Đăng nhập</button>
       </div>
    </div>
  </form>
  `
}


// Đăng kí

function register(event) {
  event.preventDefault();
  let newUser = {
    id : Date.now() * Math.random(),
    name : event.target.username.value,
    password : event.target.password.value,
    role : "admin",
  }
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
  formUserLogin(event)
}

// Đăng nhập

function login(event) {
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
  window.location.href = "/"
}




