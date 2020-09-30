let Product = function (name, age, add, birthday, mission, height, weight, image) {
    this.name = name;
    this.age = age;
    this.add = add;
    this.birthday = birthday;
    this.mission = mission;
    this.height = height;
    this.weight = weight;
    this.image = image;

    this.getHtml = function () {
        let str = '<td>' + this.name + '</td>' +
            '<td>' + this.age + '</td>' +
            '<td>' + this.add + '</td>' +
            '<td>' + this.birthday + '</td>' +
            '<td>' + this.mission + '</td>' +
            '<td>' + this.height + '</td>' +
            '<td>' + this.weight + '</td>' +
            '<td><img height="100px" width="100px" src="' + this.image + '"></td>'
        return str;
    }
    this.edit = function (name, age, add, birthday, mission, height, weight, image) {
        this.name = name;
        this.age = age;
        this.add = add;
        this.birthday = birthday;
        this.mission = mission;
        this.height = height;
        this.weight = weight;
        this.image = image;
    }
}


let productManager = function () {
    this.productList = [];


    this.addProduct = function (product) {
        this.productList.push(product);
        display();
    }

    this.deleteProduct = function (id) {
        this.productList.splice(id, 1);
        display();
    }

    this.editProduct = function (product, name, age, add, birthday, mission, height, weight, image) {
        this.product.edit(name, age, add, birthday, mission, height, weight, image);
    }

    this.getHtml = function () {
        let str = '<table class="table">' +
            '<tr>' +
            '<th>Name</th>' +
            '<th>Age</th>' +
            '<th>Address</th>' +
            '<th>Dob</th>' +
            '<th>Mission</th>' +
            '<th>Height</th>' +
            '<th>Weight</th>' +
            '<th>Image</th>' +
            '<th colspan="2">Action</th>' +
            '</tr>'

        for (let i = 0; i < this.productList.length; i++) {
            let product = this.productList[i].getHtml();
            str += '<tr>' + product + this.getButton(i) + '</tr>';
        }
        console.log(str);
        return str + '</table>';
    }


    this.getProductById = function (id) {
        return this.productList[id];
    }

    this.getButton = function (id) {
        return '<td>' + '<button type="button" onclick="editProduct(id)">' + 'Edit' + '</button>' + '</td>' +
            '<td>' + '<button ONCLICK="deleteProduct(id)">' + 'delete' +'</button>' + '</td>';
    }
}


function display() {
    document.getElementById('result').innerHTML = manager.getHtml();
    // cái này là cái hiện ra ở dưới đây, làm kiểu này mới đúng nè
}

function addIdol() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let add = document.getElementById('add').value;
    let birthday = document.getElementById('birthday').value;
    let mission = document.getElementById('mission').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let image = document.getElementById('img').value;

    if (name == '' || age == '' || img == '') {
        alert('khong the hien thi');
    } else {
        let product = new Product(name, age, add, birthday, mission, height, weight, image);
        manager.addProduct(product);
        display();
        clear();
    }
}

let productId = 0;

function editProduct(id) {
    let product = manager.getProductById(id);
    let str = '<form action=="">' +
        '<input type="text" id="name2" placeholder="Name" value="product.name">' +
        '<input type="number" id="age2" placeholder="Age" value="product.age">' +
        '<input type="text" id="add2" placeholder="Add" value="product.add">' +
        '<input type="text" id="birthday2" placeholder="Birthday" value="product.birthday">' +
        '<input type="text" id="mission2" placeholder="Mission" value="product.mission">' +
        '<input type="text" id="height2" placeholder="Height" value="product.height">' +
        '<input type="text" id="weight2" placeholder="Weight" value="product.weight">' +
        '<input type="text" id="img2" placeholder="Image" value="product.image">' +
        '</form>';
    document.getElementById('edit').innerHTML = str;
    productId = id;

}

function update() {
    let Name = document.getElementById('name2').value;
    let Age = document.getElementById('age2').value;
    let Add = document.getElementById('add2').value;
    let Birthday = document.getElementById('birthday2').value;
    let Mission = document.getElementById('mission2').value;
    let Height = document.getElementById('height2').value;
    let Weight = document.getElementById('weight2').value;
    let Image = document.getElementById('img2').value;
    let product = new Product(Name, Age, Add, Birthday, Mission, Height, Weight, Image);
    manager.productList[productId] = product;
    display();
    document.getElementById('edit').innerHTML = '';
}

function deleteProduct(id) {
    manager.deleteProduct(id);
    display();
}

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('add').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('mission').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('img').value = '';
}