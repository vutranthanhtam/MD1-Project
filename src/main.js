function logOut() {
    localStorage.removeItem('userLogin')
    window.location.reload();
}
function renderHeader() {
    let loginData = null;
    if (localStorage.getItem("userLogin")){
        loginData = JSON.parse(localStorage.getItem("userLogin"))
    }
    
    let headerEl = document.querySelector(".mainHeader");
    let userBoxString = `
      ${loginData 
          ? `
              <span style="color: black; font-size: 25px;font-weight: 500">${loginData.name}</span>
              <button style="width: 60px;height:50px;background-color:#5FE762;color:red;font-size: 18px;margin-left: 10px;text-decoration: underline;  " onclick="logOut()">Thoát</button>
          ` 
          : ` <div>
                <button type="button" onclick="window.location.href='/page/authentication.html'">Đăng nhập</button>
              </div>`
      }
    `
    
    headerElTring = `
        <div class="logo">
            <img onclick="window.location.href='/'" src="/assets/img/channels4_profile.jpg">
        </div>
        <div class="nav">
            <input type="text" placeholder="Tìm kiếm" name="input-search">
            <i id="btn-search" style="color: rgba(0, 0, 0, 0.696);" class="fa-solid fa-magnifying-glass"></i>
            <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
        </div>
        <div class="user">
            ${userBoxString}
        </div>
      `
      headerEl.innerHTML = headerElTring
}
renderHeader()  


function renderCaterory(){
    let categoryEl = document.querySelector(".category")
    categoryElString = `
    <div class="form_category">
                        <button onclick="window.location.href='/'">Trang chủ</button>
                        <button onclick="window.location.href='/page/category.html'">Tất cả sản phẩm</button>
                        <button>Mới ra mắt</button>
                        <button>Bán chạy</button>
                        <button>Giỏ hàng</button>
                    </div>
    `
    categoryEl.innerHTML = categoryElString
}

renderCaterory()

function renderFooter() {
    let footerEl = document.querySelector(".mainFooter")
    footerElString = `
    <div class="footer-left">
    <div class="logo-footer">
        <img src="./assets/img/channels4_profile.jpg">
        <h1>MiaFood</h1>
    </div>
    <div class="info-footer">
        <h3 style="font-size: 25px;">HotLine: 1900.191919</h3>
        <h3 style="font-size: 25px;">Địa chỉ: .........</h3>
    </div>
</div>
<div class="footer-mid">
    <div>
        <ul>Thông tin
            <li>Sản phẩm mới ra mắt</li>
            <li>Sản phẩm bán chạy</li>
            <li>Sản phẩm đang khuyến mãi</li>
        </ul>
    </div>
</div>
<div class="footer-right">
    <footer class="text-center text-white">
        <!-- Grid container -->
        <div style="color: white;" class="text-center text-dark p-3">
            <h3>Kết nối với chúng tôi</h3>
        </div>
        <div class="container pt-4">
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><i class="fab fa-facebook-f"></i></a>

                <!-- Twitter -->
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><i class="fab fa-twitter"></i></a>

                <!-- Google -->
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><i class="fab fa-google"></i></a>

                <!-- Instagram -->
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->

        <!-- Copyright -->
    </footer>
      `
      footerEl.innerHTML = footerElString
  }
  renderFooter()


  function renderCarouse() {
    let carouseEl = document.querySelector(".slide")
    carouseEl.innerHTML = `
        <div class="img">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./assets/img/anh 1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./assets/img/anh 2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./assets/img/anh 3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
  
      `
  }
  renderCarouse()


  // form đăng nhập

// function formLogin() {
    
//     let formUserEl = document.querySelector(".formLogin")
//     formUserEl.innerHTML = `
//         <form onsubmit="login(event)" class="userBox">
//             <span class="spanHeadBox"><span style="color: red;font-weight: 900;margin-right:5px;"> Đăng nhập </span>  và tạo tài khoản</span>
//             <div>
//                 <input type="text" name="username" placeholder="Tài khoản">
//             </div>
//             <div>
//                 <input type="password" name="password" placeholder="Mật khẩu">
//             </div>   
//             <span class="spanFooterBox">Bạn chưa có tài khoản? <span style="color: red;font-weight: 800;" onclick="formRegister()">Đăng ký!</span></span>
//             <button type="submit">Đăng nhập</button>
//         </form>
//     `
//   }
  
  
  // form đăng kí
  
//   function formRegister() {
//     let formUserEl = document.querySelector(".formLogin")
//     formUserEl.innerHTML = `
//     <form onsubmit="register(event)" class="userBox">
//         <span class="spanHeadBox">Đăng nhập và <span style="color: red;font-weight: 900;margin-left: 5px;">tạo tài khoản</span></span><br>
//         <div>
//             <input type="text" name="username" placeholder="Tài khoản">
//         </div>
//         <div>
//             <input type="password" name="password" placeholder="Mật khẩu">
//         </div>
//         <div>
//             <input type="password" name="password_confirm" placeholder="Nhập lại mật khẩu">
//         </div>
//         <span class="spanFooterBox">Bạn đã có tài khoản? <span style="color: red;font-weight: 800;" onclick="formLogin()">Đăng nhập!</span></span>
//         <button type="submit">Đăng ký</button>
//     </form>
//     `
//   }
  
  
  // Đăng kí
  
//   function register(event){
//     event.preventDefault();
//     let newUser = {
//       id : Date.now() * Math.random(),
//       name : event.target.username.value,
//       password : event.target.password.value,
//       role : "admin",
//     }
//     console.log(newUser)
//     if (newUser.password != event.target.password_confirm.value){
//       alert("Mật khẩu không trùng khớp")
//       return
//     }
//     if(newUser.password.length < 3) {
//       alert("Mật khẩu cần ít nhất 3 ký tự")
//       return
//     }
//     if(newUser.name.length < 3) {
//       alert("Tên đăng nhập cần ít nhất 3 ký tự")
//       return
//     }
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     if (users.find((user) => user.name == newUser.name )){
//       alert("Tên đăng nhập bị trùng")
//       return
//     }
//     localStorage.setItem("users",JSON.stringify([...users,newUser]))
//     alert("Đăng kí thành công!")
//     formLogin()
//   }
  
  // Đăng nhập
  
//   function login(event){
//     event.preventDefault()
//     let user = {
//       name : event.target.username.value,
//       password : event.target.password.value,
//     }
//     let users = JSON.parse(localStorage.getItem("users")) || [];
    
//     let userInfor = users.find(item => item.name == user.name);
//       if(!userInfor) {
//           alert("Không tìm thấy người dùng!")
//           return
//       }
//       if(userInfor.password != user.password) {
//           alert("Sai mật khẩu!")
//           return
//       }
//     localStorage.setItem("userLogin", JSON.stringify(userInfor));
//     alert("Đăng nhập thành công!")
//     window.location.href = "/"
//   }