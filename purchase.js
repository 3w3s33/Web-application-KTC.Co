function ProductList({ onSelectionChange }) {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const products = [
      { name: 'smartphones', price: 30000, icon: 'fas fa-mobile-alt' },
      { name: 'laptops', price: 50000, icon: 'fas fa-laptop' },
      { name: 'televisions', price: 40000, icon: 'fas fa-tv' },
      { name: 'gaming consoles', price: 35000, icon: 'fas fa-gamepad' },
      { name: 'printers', price: 15000, icon: 'fas fa-print' },
      { name: 'headphones', price: 5000, icon: 'fas fa-headphones' },
      { name: 'mouse', price: 1000, icon: 'fas fa-mouse' },
      { name: 'keyboard', price: 2000, icon: 'fas fa-keyboard' },
      { name: 'USB cables', price: 500, icon: 'fas fa-usb' },
      { name: 'tablet', price: 20000, icon: 'fas fa-tablet-alt' },
      { name: 'camera', price: 25000, icon: 'fas fa-camera' },
      { name: 'fridge', price: 60000, icon: 'fas fa-icicles' },
      { name: 'microwave', price: 15000, icon: 'fas fa-microwave' },
      { name: 'toaster', price: 3000, icon: 'fas fa-bread-slice' },
      { name: 'blender', price: 4000, icon: 'fas fa-blender' },
      { name: 'juicer machine', price: 7000, icon: 'fas fa-blender' },
      { name: 'coffee machine', price: 7000, icon: 'fas fa-coffee' }
  ];

  const handleCheckboxChange = (item) => {
      const existingItem = selectedItems.find(i => i.name === item.name);
      let newSelected;
      if (existingItem) {
          newSelected = selectedItems.map(i =>
              i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          );
      } else {
          newSelected = [...selectedItems, { ...item, quantity: 1 }];
      }
      setSelectedItems(newSelected);
      onSelectionChange(newSelected);
  };

  const handleSearchChange = (e) => {
      const query = e.target.value.toLowerCase();
      setSearchQuery(query);

      const match = products.filter(product => product.name.toLowerCase().includes(query));

      if (query && match.length === 0) {
          setErrorMessage('No products found. Please check your spelling.');
      } else {
          setErrorMessage('');
      }
  };

  const handleCheckout = () => {
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
      window.location.href = 'checkout.html';
  };

  return (
      <div>
          <input
              type="text"
              placeholder="Search for a product..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ padding: '10px', margin: '10px 0', width: '100%', fontSize: '1em' }}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <h3>Products</h3>
          <div className="product-container">
              {products.filter(product => product.name.toLowerCase().includes(searchQuery)).map(product => (
                  <div key={product.name} className="product">
                      <i className={product.icon}></i>
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">Rs. {product.price}</span>
                      <button onClick={() => handleCheckboxChange(product)}>Add to Cart</button>
                      {selectedItems.find(i => i.name === product.name) && (
                          <span className="product-quantity">Quantity: {selectedItems.find(i => i.name === product.name).quantity}</span>
                      )}
                  </div>
              ))}
          </div>
          <button onClick={handleCheckout}>Go to Checkout</button>
      </div>
  );
}

ReactDOM.render(<ProductList />, document.getElementById('root'));