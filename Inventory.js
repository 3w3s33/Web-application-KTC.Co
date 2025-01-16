const { useState } = React;

function Inventory() {
    const [electronics, setElectronics] = useState([
        { name: 'Laptop', quantity: 0 },
        { name: 'Smartphone', quantity: 0 },
        { name: 'Tablet', quantity: 0 },
        { name: 'Smartwatch', quantity: 0 },
        { name: 'Camera', quantity: 0 },
        { name: 'Headphones', quantity: 0 },
        { name: 'Speaker', quantity: 0 }
    ]);

    const [homeAppliances, setHomeAppliances] = useState([
        { name: 'Refrigerator', quantity: 0 },
        { name: 'Microwave', quantity: 0 },
        { name: 'Coffee Machine', quantity: 0 },
        { name: 'Washing Machine', quantity: 0 },
        { name: 'Air Conditioner', quantity: 0 },
        { name: 'Vacuum Cleaner', quantity: 0 },
        { name: 'Dishwasher', quantity: 0 }
    ]);

    const handleQuantityChange = (category, index, delta) => {
        const updateCategory = category === 'electronics' ? [...electronics] : [...homeAppliances];
        updateCategory[index].quantity += delta;
        if (updateCategory[index].quantity < 0) updateCategory[index].quantity = 0;

        category === 'electronics' ? setElectronics(updateCategory) : setHomeAppliances(updateCategory);
    };

    const handleSubmit = () => {
        alert('Inventory updated successfully!');
    };

    return (
        <div>
            <h3>Electronics</h3>
            {electronics.map((product, index) => (
                <div key={product.name}>
                    <label htmlFor={product.name}>{product.name}</label>
                    <button onClick={() => handleQuantityChange('electronics', index, -1)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleQuantityChange('electronics', index, 1)}>+</button>
                </div>
            ))}
            <h3>Home Appliances</h3>
            {homeAppliances.map((appliance, index) => (
                <div key={appliance.name}>
                    <label htmlFor={appliance.name}>{appliance.name}</label>
                    <button onClick={() => handleQuantityChange('homeAppliances', index, -1)}>-</button>
                    <span>{appliance.quantity}</span>
                    <button onClick={() => handleQuantityChange('homeAppliances', index, 1)}>+</button>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Welcome to Karachi Trading Co.</h1>
            <h1>Please select desired product</h1>
            <Inventory />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));