var app = new Vue({
    el:'#app', 
    data : {
        cart : 0,
        product :'socks',
        description : 'Les chaussettes peuvent être de couleur verte ou grise !',
        image : './assets/vmSocks-green.jpg',
        altText : 'Une paire de chaussette',
        links : 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
        inventory : 100,
        onSale : true,
        details : ["80% cotton", "20% polyester", "Gender-neutral"],
        variants :[
            {
                variantId : 1500,
                variantColor : "blue",
                variantImage : './assets/vmSocks-blue.jpg'
            },
            {
                variantId : 1501,
                variantColor : "green",
                variantImage : './assets/vmSocks-green.jpg'
            }
        ],
        sizes : ["36-39", "39-43", "43-46"]
    },
    methods : {
        addToCart : function() {
            this.cart += 1;
        },
        updateProduct : function (variantImage){
            this.image = variantImage;
        },
        removeToCart(){
            this.cart -=1;
        }
    }
})


