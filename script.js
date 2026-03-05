async function initWishlist() {
    const grid = document.getElementById('product-grid');
    
    try {
        const response = await fetch('products.json');
        if (!response.ok) throw new Error('Data fetch failed');
        
        const products = await response.json();
        renderProducts(products, grid);
    } catch (err) {
        grid.innerHTML = `<p class="error">Unable to load items: ${err.message}</p>`;
    }
}

function renderProducts(products, container) {
    container.innerHTML = products.map(item => `
        <article class="product-card">
            <div class="img-container">
                <img src="${item.photo}" alt="${item.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-content">
                <h2 class="product-name">${item.name}</h2>
                <p class="product-desc">${item.description}</p>
                <a href="${item.link}" target="_blank" class="buy-btn">Mais detalhes</a>
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', initWishlist);