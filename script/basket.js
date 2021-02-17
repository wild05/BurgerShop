const allproduct = {
    Mini:{
        name: "Mini Burger",
        price: 11000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Chicken:{
        name: "Chicken Burger",
        price: 13000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Cheese:{
        name: "Cheese Burger",
        price: 12500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Middle:{
        name: "Middle Burger",
        price: 6500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Street:{
        name: "Street Burger",
        price: 18500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    StreetCh:{
        name: "Street Cheese",
        price: 20500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Royal:{
        name: "Hotdog Royal",
        price: 13500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Classical:{
        name: "Classical Hotdog",
        price: 7000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Hotdog:{
        name: "Hotdog",
        price: 9000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Big:{
        name: "Big HotDog",
        price: 8500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    CheeseH:{
        name: "Cheese Hotdog",
        price: 10000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MiddleH:{
        name: "Middle HotDog",
        price: 6500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },    
    Pepperoni:{
        name: "Pepperoni",
        price: 60000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Combined:{
        name: "Combined Pizza",
        price: 61000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Caesar:{
        name: "Caesar Pizza",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Four:{
        name: "Four Seasons",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    FourCh:{
        name: "Foue Cheese",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Mushroom:{
        name: "Mushroom Pizza",
        price: 54000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Coca:{
        name: "Coca-Cola",
        price: 7000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Vater:{
        name: "Vater With Gas",
        price: 2500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Mojito:{
        name: "Mojito Classic",
        price: 15900,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Juice:{
        name: "Juice Valley",
        price: 10000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Pepsi:{
        name: "Pepsi 1.5 L",
        price: 9500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Dark:{
        name: "Dark Coffe",
        price: 5000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    CHERRY:{
        name: "DENA CHERRY 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    APPLE:{
        name: "DENA APPLE  1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    ORANGE:{
        name: "DENA ORANGE 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MULTIFRUIT:{
        name: "DENA MULTIFRUIT 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    EXOTIC:{
        name: "DENA EXOTIC 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MOJITO:{
        name: "DENA MOJITO 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    }
}



let btn = document.querySelectorAll('.card_content_add');
let allSum = 0;
let sss =0;
const out = document.querySelector('.ThisPrice span');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function button(e) {
        e.preventDefault(); 
        const parent = this.closest('.card');
        const parentId = parent.getAttribute('id');
        
        //   console.log(out);
        //   out.innerHTML = 100
        allproduct[parentId].amount++;
        // console.log(allproduct[parentId].Summ());
        sss += allproduct[parentId].price;
        out.innerHTML = sss
        
    })
}
document.querySelector('.Global_buy_bottom').addEventListener('click',function (e) {
    e.preventDefault();
    Products()
    for (const key in allproduct) {
        allproduct[key].amount = 0;
        allSum = 0;
    }
    sss = 0;
    out.innerHTML = 0;
    // console.log(allproduct);
})
function Products() {
    for (const key in allproduct) {
        if(allproduct[key].amount > 0){
            allSum = allSum + allproduct[key].Summ();
        }
    }
    console.log(allSum);
}

let my_admin = document.getElementsByClassName('createElement')