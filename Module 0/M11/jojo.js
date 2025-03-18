const products = [
    { id: 1, name: "T-shirt", price: 15, quantity: 2 },
    { id: 2, name: "Jeans", price: 45, quantity: 1 },
    { id: 3, name: "Sokken", price: 5, quantity: 3 }
];

const calculateTotal = (items) => {
    let total = 0;

    for (const item of items) {
        console.log(`Product: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
        total += item.price * item.quantity; // Hier wordt de bug opgelost
    }

    return total;
};

document.getElementById("calculateButton").addEventListener("click", () => {
    const totalAmount = calculateTotal(products);
    document.getElementById("total").textContent = totalAmount;
});
