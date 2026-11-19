// Product data
const products = [
    {
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        name: "Mobile Phone",
        price: 25000,
        category: "Electronics"
    },
    {
        name: "T-Shirt",
        price: 799,
        category: "Clothing"
    },
    {
        name: "Jeans",
        price: 1499,
        category: "Clothing"
    },
    {
        name: "JavaScript Book",
        price: 599,
        category: "Books"
    },
    {
        name: "Python Book",
        price: 699,
        category: "Books"
    }
];

// Get HTML elements
const search = document.getElementById("search");
const category = document.getElementById("category");
const productList = document.getElementById("productList");

// Function to display products
function displayProducts() {

    // Get search value
    const searchText = search.value.toLowerCase();

    // Get selected category
    const selectedCategory = category.value;

    // Filter products
    const filteredProducts = products.filter(function(product) {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Clear previous results
    productList.innerHTML = "";

    // Display filtered products
    filteredProducts.forEach(function(product) {

        const div = document.createElement("div");

        div.className = "product";

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productList.appendChild(div);
    });

    // If no product found
    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
    }
}

// Event listeners
search.addEventListener("input", displayProducts);
category.addEventListener("change", displayProducts);

// Display all products initially
displayProducts();