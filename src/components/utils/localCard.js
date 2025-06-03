export const getLocalCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

export const saveLocalCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToLocalCart = (product, quantity, format) => {
    const cart = getLocalCart();

    // Vérifier si produit + unit existe déjà dans le panier
    const existingIndex = cart.findIndex(item =>
        item.product.id === product.id && item.format.id === format.id
    );

    if (existingIndex !== -1) {
        // Incrémente la quantité
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: `local-${Date.now()}`,  // id local unique
            quantity,
            product: {
                id: product.id,
                title: product.title,
                picture: product.picture,
            },
            format: {
                id: format.id,
                title: format.title,
                price: format.price
            }
        });
    }

    saveLocalCart(cart);
};

export function updateLocalCartQuantity(productId, formatId, quantity) {
    let cart = getLocalCart();
    cart = cart.map(item => {
        if (item.product.id === productId && item.format.id === formatId) {
            return { ...item, quantity };
        }
        return item;
    }).filter(item => item.quantity > 0);
    saveLocalCart(cart);
    return cart;
}


export function removeFromLocalCart(productId, formatId) {
    let cart = getLocalCart();
    cart = cart.filter(item => !(item.product.id === productId && item.format.id === formatId));
    saveLocalCart(cart);
    return cart;
}

export function calculateLocalCartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.format.price * item.quantity, 0);
}