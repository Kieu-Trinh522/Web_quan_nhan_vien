let Idol = function (name, age, address, birthday, mission, height, weight, image) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.birthday = birthday;
    this.mission = mission;
    this.height = height;
    this.weight = weight;
    this.image = image;

    this.getHtml = function () {
        let str = '<td>' + this.name + '</td>' +
            '<td>' + this.age + '</td>' +
            '<td>' + this.address + '</td>' +
            '<td>' + this.birthday + '</td>' +
            '<td>' + this.mission + '</td>' +
            '<td>' + this.height + '</td>' +
            '<td>' + this.weight + '</td>' +
            '<td><img height="100px" width="100px" src="' + this.image + '"></td>'
        return str;
    }
    this.edit = function (name, age, address, birthday, mission, height, weight, image) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.birthday = birthday;
        this.mission = mission;
        this.height = height;
        this.weight = weight;
        this.image = image;
    }
}
let idol1 = new Idol('Kim NamJoon',26,'Korea','04/09/1994','Rapper','181cm','65kg','https://pbs.twimg.com/media/Ef88FcJU4AAXCwG?format=jpg&name=large');
let idol2 = new Idol('Kim Seokjin',28,'Korea','09/12/1992','Vocal','178cm','65kg','https://pbs.twimg.com/media/Ef88PbxUMAA1GRH?format=jpg&name=large');
let idol3 = new Idol('Min Yoongi',27,'Korea','09/03/1993','Rapper','175cm','57kg','https://pbs.twimg.com/media/Ef88CQJUYAAnJJs?format=jpg&name=large');
let idol4 = new Idol('Jung Hoseok',26,'Korea','18/02/1994','Rapper','178cm','57kg','https://pbs.twimg.com/media/Ef88QjwUEAAkj7A?format=jpg&name=large');
let idol5 = new Idol('Park Jimin',25,'Korea','13/10/1995','Vocal','173cm','60kg','https://pbs.twimg.com/media/Ef88RsiUcAA2Roa?format=jpg&name=4096x4096');
let idol6 = new Idol('Kim Taehuynh',25,'Korea','30/12/1995','Vocal','179cm','65kg','https://pbs.twimg.com/media/Ef88A0oUwAAiCGr?format=jpg&name=4096x4096');
let idol7 = new Idol('Joen Jungkook',23,'Korea','01/09/1997','Vocal','179cm','65kg','https://pbs.twimg.com/media/Ef88DRkUYAACCJw?format=jpg&name=large');

let array = [idol1,idol2,idol3,idol4,idol5,idol6,idol7];



let idolManager = function () {
    this.idolList = array;


    this.addIdol = function (idol) {
        this.idolList.push(idol);
        display();
    }

    this.deleteIdol = function (id) {
        this.idolList.splice(id, 1);
        display();
    }

    this.editIdol = function (idol, name, age, address, birthday, mission, height, weight, image) {
        this.idol.edit(name, age, address, birthday, mission, height, weight, image);
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


        for (let i = 0; i < this.idolList.length; i++) {
            let idol = this.idolList[i].getHtml();
            str += '<tr>' + idol + this.getButton(i) + '</tr>';
        }
        console.log(str);
        return str + '</table>';
    }


    this.getIdolById = function (id) {
        return this.idolList[id];
    }

    this.getButton = function (id) {
        return '<td><button type="button" onclick="editIdol('+id+')"> Edit</button></td>' +
            '<td><button ONCLICK="deleteIdol('+id+')">delete</button></td>';
    }
}


function display() {
    document.getElementById('result').innerHTML = manager.getHtml();
}

function addIdol() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let birthday = document.getElementById('birthday').value;
    let mission = document.getElementById('mission').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let image = document.getElementById('img').value;

    if (name === '' || age === '' || image === '') {
        alert('khong the hien thi');
    } else {
        let idol = new Idol(name, age, address, birthday, mission, height, weight, image);
        manager.addIdol(idol);
        display();
        clear();
    }
}

let idolId = 0;

function editIdol(id) {
    let idol = manager.getIdolById(id);
    document.getElementById('name').value = idol.name;
    document.getElementById('age').value = idol.age;
    document.getElementById('address').value = idol.address;
    document.getElementById('birthday').value = idol.birthday;
    document.getElementById('mission').value = idol.mission;
    document.getElementById('height').value = idol.height;
    document.getElementById('weight').value = idol.weight;
    document.getElementById('img').value = idol.image;
    idolId = id;

}

function update() {
    let Name = document.getElementById('name2').value;
    let Age = document.getElementById('age2').value;
    let Add = document.getElementById('address2').value;
    let Birthday = document.getElementById('birthday2').value;
    let Mission = document.getElementById('mission2').value;
    let Height = document.getElementById('height2').value;
    let Weight = document.getElementById('weight2').value;
    let Image = document.getElementById('img2').value;
    let idol = new Idol(Name, Age, Add, Birthday, Mission, Height, Weight, Image);
    manager.idolList[idolId] = idol;
    display();
   clear();
}

function deleteIdol(id) {
    manager.deleteIdol(id);
    display();
}

function clear() {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('birthday').value = '';
    document.getElementById('mission').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('img').value = '';
}