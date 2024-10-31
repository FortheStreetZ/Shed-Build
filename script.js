function calculatePrice() {
    // Base prices for materials and dimensions
    const basePricePerSqFt = 10;  // Example base rate per square foot
    const length = parseInt(document.getElementById('length').value);
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);

    // Material multipliers
    const roofMaterialMultiplier = {
        standard: 1,
        metal: 1.2,
        tile: 1.5
    };
    const sidingMaterialMultiplier = {
        wood: 1,
        vinyl: 1.3,
        metal: 1.6
    };

    const roofMaterial = document.getElementById('roofMaterial').value;
    const sidingMaterial = document.getElementById('sidingMaterial').value;

    // Calculate area and base price
    const area = length * width;
    let basePrice = area * basePricePerSqFt;

    // Adjust price by materials
    basePrice *= roofMaterialMultiplier[roofMaterial];
    basePrice *= sidingMaterialMultiplier[sidingMaterial];

    // Add prices for accessories if selected
    const windows = document.getElementById('windows').checked ? parseInt(document.getElementById('windows').value) : 0;
    const doors = document.getElementById('doors').checked ? parseInt(document.getElementById('doors').value) : 0;
    const skylights = document.getElementById('skylights').checked ? parseInt(document.getElementById('skylights').value) : 0;

    const totalPrice = basePrice + windows + doors + skylights;

    // Display total price
    document.getElementById('priceEstimate').innerText = `$${totalPrice.toFixed(2)}`;
}
