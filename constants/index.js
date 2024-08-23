export const categories =[
    {
        id:1,
        name:'Burger',
        image:require('../assets/images/categories/icons8-pizza-96')
    },
    {
        id:2,
        name:'Italian',
        image:require('../assets/images/categories/icons8-pizza-96')
    },
    {
        id:3,
        name:'Chinese',
        image:require('../assets/images/categories/icons8-pizza-96')
    },
    {
        id:4,
        name:'Noodles',
        image:require('../assets/images/categories/icons8-pizza-96')
    },
    {
        id:5,
        name:'Pizza',
        image:require('../assets/images/categories/icons8-pizza-96')
    }
]

export const featured = {
    id:1,
    title:'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurant:[
        {
            id:1,
            name:'Chicken BBQ',
            image:require('../assets/images/restaurants/chickenbbq.jpg'),
            description:'Hot and Spicy pizzas',
            lng: 38.2145602,
            lat: -97.1375247,
            address:'123 Main St, City, State, 12345',
            distance:1.2,
            reviews:'4.4k',
            category: 'Fast Food',
            stars:4,
            dishes: [
                {
                    id:1,
                    name:'pizza',
                    description:'cheezy garlic pizza',
                    price:10,
                    image:require('../assets/images/restaurants'),               
                },
                {
                    id:2,
                    name:'pizza',
                    description:'cheezy garlic pizza',
                    price:10,
                    image:require('../assets/images/restaurants'),               
                },
                {
                    id:3,
                    name:'pizza',
                    description:'cheezy garlic pizza',
                    price:10,
                    image:require('../assets/images/restaurants'),               
                }
            ]
        }
    ]
}