const ProductClient = require("./product_client")

class ProdcutService {
    constructor() {
        this.ProductClient = new ProductClient();
    }

    fetchAvailableItems() {
        return this.ProductClient.fetchItems().then((items) => items.available)
    }
}

module.exports = ProdcutService