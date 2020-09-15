let app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        altText: "A pair of socks",
        inStock: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        inventory:11,
        variants: [
            {
                variantId: 2234, 
                vaiantColor: "green"
            },
            {
                variantId: 2235, 
                vaiantColor: "blue"
            },
        ],
        cart: 0,
        
    }
})