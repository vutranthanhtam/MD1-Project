function renderData(arr) {
    let tableBodyEL = document.querySelector(".table_body")
    let tableBodyString = '';
    for(let i in arr) {
        tableBodyString += `
        <tr>
            <th scope="row">${Number(i) + 1}</th>
            <td>${arr[i].name}</td>
            <td>${arr[i].price}</td>
            <td>
                <img src="${arr[i].avatar}" style="width: 50px; height: 50px; border-radius: 50%;">
            </td>
            <td>${arr[i].category}</td>
            <td>
                ${arr[i].status}
            </td>
            <td>
                <button onclick="editProduct(${arr[i].id})" class="btn btn-primary">Edit</button>
                <button onclick="deleteProduct(${arr[i].id})" class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `
    }
    tableBodyEL.innerHTML = tableBodyString;
}

renderData(JSON.parse(localStorage.getItem("products") ?? "[]"))

function addNewProduct() {
    let products = JSON.parse(localStorage.getItem("products") ?? "[]")
    products.push({
        id: Date.now() * Math.random(),
        name: window.prompt("Nhập tên"),
        price: Number(window.prompt("Nhập giá")),
        avatar: window.prompt("Nhập avatar 'url'"),
        category: window.prompt("Nhập category"),
        status: window.prompt("Nhập status") == "1" ? true : false
    })
    localStorage.setItem("products", JSON.stringify(products))
    renderData(products)
}

function editProduct(productId) {
    let products = JSON.parse(localStorage.getItem("products") ?? "[]")
    for (let i in products) {
        if(products[i].id == productId) {
            products[i] = {
                ...products[i],
                name : prompt("Nhập tên mới",products[i].name),
                price : prompt("Nhập giá mới",products[i].price),
                avatar : prompt("Nhập avatar mới 'url' ",products[i].avatar),
                category : prompt("Nhập category mới",products[i].category),
                status : prompt("Nhập status mới",products[i].status ? "1" : "") == "1" ? true : false
            }
            break
        }
    }
    localStorage.setItem("products", JSON.stringify(products))
    renderData(products)
}

function deleteProduct(productId) {
    let products = JSON.parse(localStorage.getItem("products") ?? "[]")
    for (let i in products) {
        if(products[i].id == productId) {
            products.splice(i, 1)
            break
        }
    }
    localStorage.setItem("products", JSON.stringify(products))
    renderData(products)
}