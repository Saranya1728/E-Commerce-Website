function renderNavbar() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    let navLinks = "";

    if (user && user.role === "EMPLOYEE") {
        navLinks = `
            <a href="employee.html#products" style="color:white; margin-right:20px; text-decoration:none;">View Products</a>
            <a href="employee.html#orders" style="color:white; margin-right:20px; text-decoration:none;">Orders</a>
            <a href="employee.html#add-product" style="color:white; margin-right:20px; text-decoration:none;">Add Product</a>
            <span style="margin-right:20px;">Hi, ${user.name}</span>
            <a href="#" onclick="logout()" style="color:white; text-decoration:none;">Logout</a>
        `;
    }
    else if (user && user.role === "ADMIN") {
        navLinks = `
            <a href="admin.html#products" style="color:white; margin-right:20px; text-decoration:none;">View Products</a>
            <a href="admin.html#orders" style="color:white; margin-right:20px; text-decoration:none;">Orders</a>
            <span style="margin-right:20px;">Hi, ${user.name}</span>
            <a href="#" onclick="logout()" style="color:white; text-decoration:none;">Logout</a>
        `;
    }
    else if (user) {
        navLinks = `
            <a href="index.html" style="color:white; margin-right:20px; text-decoration:none;">Shop</a>
            <a href="cart.html" style="color:white; margin-right:20px; text-decoration:none;">Cart</a>
            <a href="orders.html" style="color:white; margin-right:20px; text-decoration:none;">My Orders</a>
            <span style="margin-right:20px;">Hi, ${user.name}</span>
            <a href="#" onclick="logout()" style="color:white; text-decoration:none;">Logout</a>
        `;
    }
    else {
        navLinks = `
            <a href="index.html" style="color:white; margin-right:20px; text-decoration:none;">Shop</a>
            <a href="login.html" style="color:white; text-decoration:none;">Login</a>
        `;
    }

    const navHTML = `
        <header style="display:flex; justify-content:space-between; align-items:center; padding:15px 40px; background:#222; color:white;">
            <h1 style="margin:0; color:white;">My Shop</h1>
            <nav style="display:flex; align-items:center;">${navLinks}</nav>
        </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", navHTML);
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

function getLoggedInUserId() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    return user ? user.id : null;
}

renderNavbar();