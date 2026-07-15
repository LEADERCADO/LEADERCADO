import React, { useState } from 'react';

const products = [
  {
    id: 1,
    title: 'E-book: Marketing Digital',
    description: 'Apprenez les stratégies modernes du marketing digital pour booster votre business en ligne.',
    price: 25,
    icon: '📚'
  },
  {
    id: 2,
    title: 'Formation: Développement Web',
    description: 'Cours complet pour apprendre le développement web moderne (HTML, CSS, JavaScript, React).',
    price: 50,
    icon: '💻'
  },
  {
    id: 3,
    title: 'Guide: Entrepreneuriat',
    description: 'Les clés pour réussir votre projet entrepreneurial et lancer votre startup.',
    price: 30,
    icon: '🚀'
  },
  {
    id: 4,
    title: 'Pack: Templates Design',
    description: 'Collection de templates professionnels pour vos projets design et présentations.',
    price: 35,
    icon: '🎨'
  },
  {
    id: 5,
    title: 'Audio: Méditation Guidée',
    description: 'Séances de méditation guidée pour réduire le stress et améliorer votre bien-être.',
    price: 15,
    icon: '🧘'
  },
  {
    id: 6,
    title: 'Pack: Photos HD',
    description: 'Banque d\'images haute résolution pour vos projets personnels et professionnels.',
    price: 40,
    icon: '📷'
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '' });
  const [orderComplete, setOrderComplete] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Votre panier est vide!');
      return;
    }
    if (!checkoutForm.name || !checkoutForm.email) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    // Simuler un achat réussi
    setOrderComplete(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutForm({ name: '', email: '' });
      setOrderComplete(false);
      setShowCart(false);
    }, 5000);
  };

  const whatsappNumber = '+50941310565';
  const email = 'leadercado@gmail.com';

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">KDOH STORE</div>
        <div className="contact-info">
          <span className="email">📧 {email}</span>
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <div className="cart-icon-container" onClick={() => setShowCart(true)}>
            <svg className="cart-icon" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Bienvenue sur KDOH STORE</h1>
        <p>Votre boutique de produits digitaux premium. Achetez, téléchargez instantanément et profitez de vos achats!</p>
      </section>

      {/* Products Grid */}
      <h2 className="products-title">Nos Produits Digitaux</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.icon}</div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price}</div>
              <button className="buy-btn" onClick={() => addToCart(product)}>
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>🛒 Votre Panier</h2>
            
            {orderComplete ? (
              <div className="success-message">
                <h3>✅ Commande Réussie!</h3>
                <p>Merci pour votre achat. Vous pouvez maintenant télécharger vos produits.</p>
                <a href="#" className="download-link">📥 Télécharger les produits</a>
              </div>
            ) : cart.length === 0 ? (
              <p>Votre panier est vide</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <div className="cart-item-title">{item.title}</div>
                        <div className="cart-item-price">${item.price}</div>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                        Supprimer
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="cart-total">
                  Total: ${getTotal()}
                </div>

                <form className="checkout-form" onSubmit={handleCheckout}>
                  <div className="form-group">
                    <label>Nom complet</label>
                    <input
                      type="text"
                      value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <button type="submit" className="checkout-btn">
                    ✅ Finaliser l'achat
                  </button>
                </form>
              </>
            )}

            <button className="close-modal" onClick={() => setShowCart(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Contactez-nous sur WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 KDOH STORE - Tous droits réservés</p>
        <p>Contact: {email} | WhatsApp: +509 4131-0565</p>
      </footer>
    </div>
  );
}

export default App;
