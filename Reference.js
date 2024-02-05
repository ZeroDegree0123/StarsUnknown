
const ReferencedOrder = {
    "orderID": 200,
    // "customer": "steve@gmail.com",
    "products":
        [
            {
                "itemCode": "RedTShirt",
                "quantityOrdered": 3
            },
            {
                "itemCode": "USB",
                "quantityOrder": 51
            }
        ],
    "status": "paid"
};


const EmbededOrder = {
    "orderID": 200,
    // "customer":
    // {
    //     "name": "Steve Rothery",
    //     "address": "11-21 Paul Street",
    //     "city": "London"
    // },
    "products":
        [
            {
                "itemCode": "RedTShirt",
                "itemName": "Red Couchbase t-shirt",
                "supplier": "Lovely t-shirt company",
                "location": "warehouse 1, aisle 3, location 4",
                "quantityOrdered": 3
            },
            {
                "itemCode": "USB",
                "supplier": "Memorysticks Foreva",
                "itemName": "Black 8GB USB stick with red Couchbase logo",
                "location": "warehouse 1, aisle 42, location 12",
                "quantityOrder": 51
            }
        ],
    "status": "paid"
}

