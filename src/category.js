
renderHeader()


renderFooter()


renderCaterory()


function rederCategoryItem(){
    let categoryEL = document.querySelector(".formContent")
    categoryELString = `
    <div class="title">
                    <span>Bánh tráng</span>
                    <button>Xem thêm</button>
                </div>
                <div class="box">
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/6310u6mcfq087fvzptr2pl7yep4j.jpg"
                            alt="">
                        <span class="name">Bánh tráng mới ớt</span><br>
                        <span class="price">95000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/05jyomohljimvunckkwqmebdkqid.jpg"
                            alt="">
                        <span class="name">Bánh tráng rong biển</span><br>
                        <span class="price">100000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/guk1xeb2k4k11armuywkg5k3okcn.jpg"
                            alt="">
                        <span class="name">Bánh tráng dẻo me cay</span><br>
                        <span class="price">100000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/5s54dd1i8jww3ls0jqcpxcnye20k.jpg"
                            alt="">
                        <span class="name">Bánh tráng sate tôm</span><br>
                        <span class="price">40000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/r9h6r05r4nkbe32hs58vvw3kozkq.jpg"
                            alt="">
                        <span class="name">Set bánh tráng phơi sương sate muối tắc</span><br>
                        <span class="price">125000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/lxkdy83sl9un5me8zaaprug8gp8t.jpg"
                            alt="">
                        <span class="name">Bánh tráng tép giòn hành phi</span><br>
                        <span class="price">100000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
                <div class="title">
                    <span>Cơm cháy</span>
                    <button>Xem thêm</button>
                </div>
                <div class="box">
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/oztg3as2neuzfrkdq0qavize2hgz.jpg"
                            alt="">
                        <span class="name">Cơm cháy mắm tỏi</span><br>
                        <span class="price">55000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/cdzlx1slyhg2b4o5c0lhu3xzk2gm.jpg"
                            alt="">
                        <span class="name">Cơm cháy chà bông</span><br>
                        <span class="price">130000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/7mqnaac03ls9q9b706wwba29qoc2.jpg"
                            alt="">
                        <span class="name">Cơm cháy sốt nước mắm </span><br>
                        <span class="price">50000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/r334mvsmdh2owzs29r768556x4py.jpg"
                            alt="">
                        <span class="name">Cơm cháy trứng muối chà bông</span><br>
                        <span class="price">80000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/rw1ijw85ouvt2bz9527x5mkne9kf.jpg"
                            alt="">
                        <span class="name">Cơm cháy lắc phô mai</span><br>
                        <span class="price">70000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/dq7wf63ya0hpc00w4ggs64gzbiet.jpg"
                            alt="">
                        <span class="name">Cơm cháy tôm khô</span><br>
                        <span class="price">75000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
                <div class="title">
                    <span>Các loại khô</span>
                    <button>Xem thêm</button>
                </div>
                <div class="box">
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/1r4jj1m324btcf0l2fdlp7q69uy8.jpg"
                            alt="">
                        <span class="name">Khô mực rim mắm ớt</span><br>
                        <span class="price">155000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/w0deid5qyh6jy82y4pqctqiig5p2.jpg"
                            alt="">
                        <span class="name">Da heo tỏi ớt</span><br>
                        <span class="price">50000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/7t6x73baet9p2sa3x0cf4xc6pmju.jpg"
                            alt="">
                        <span class="name">Mực sợi tomyum</span><br>
                        <span class="price">125000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/stp0hv2vfa1v8igywf4aotjn6oc1.jpg"
                            alt="">
                        <span class="name">Chà bông gà</span><br>
                        <span class="price">120000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/ulkvd0gn8t2csrkr4d8b7yzqertr.jpg"
                            alt="">
                        <span class="name">Khô bò miếng bự</span><br>
                        <span class="price">300000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/fj1r7foaurdbyt7fma921dxry4vy.jpg"
                            alt="">
                        <span class="name">Khô heo cháy tỏi</span><br>
                        <span class="price">215000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
                <div class="title">
                    <span>Các loại khác</span>
                    <button>Xem thêm</button>
                </div>
                <div class="box">
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/kuh2rxv69gphylb1l5cn626dp7tx.jpg"
                            alt="">
                        <span class="name">Bánh sò</span><br>
                        <span class="price">85000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/966qykj8ykqpsfz2em8ecr5lcc3s.jpg"
                            alt="">
                        <span class="name">Xí muội muối thái</span><br>
                        <span class="price">100000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/axehe8zxzl0fyk9gnrip1hq5c1iv.jpg"
                            alt="">
                        <span class="name">Rong biển cháy tỏi ớt</span><br>
                        <span class="price">65000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/be7c9omkcav9mvrvl930tqfaie6q.jpg"
                            alt="">
                        <span class="name">Kẹo bông gòn</span><br>
                        <span class="price">50000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/1kxksqvxd7au4260jv5ffo9vb3a9.jpg"
                            alt="">
                        <span class="name">Kẹo chuối cuộn đậu phộng</span><br>
                        <span class="price">100000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                    <div class="item">
                        <img src="https://res.cloudinary.com/aloha-dao/image/upload/nfl7eq2deyasehpinzx27kb0dcnb.jpg"
                            alt="">
                        <span class="name">Tắc rim chanh muối</span><br>
                        <span class="price">55000 đ</span>
                        <div><i id="btn-catr" class="fa-solid fa-cart-shopping"></i></div>
                    </div>
                </div>
    `
    categoryEL.innerHTML= categoryELString
}
rederCategoryItem()