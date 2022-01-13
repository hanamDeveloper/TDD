class StubProductClient {
    async fetchItems() {
        return [
            { item: "milk", available: true },
            { item: "choco", available: false },
          ]
    }
}

module.exports = StubProductClient