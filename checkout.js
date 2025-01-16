function Checkout() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState([]);

    React.useEffect(() => {
        const itemString = localStorage.getItem('selectedItems');
        if (itemString) {
            setSelectedItems(JSON.parse(itemString));
        }
    }, []);

    const handleEmailSubmit = () => {
        const orderDetails = {
            name,
            address,
            contact,
            items: selectedItems,
        };

        const message = `Order Details: \nName: ${name}\nAddress: ${address}\nContact: ${contact}\nItems: ${selectedItems.map(item => `${item.name} (Rs. ${item.price})`).join(', ')}\nTotal: Rs. ${selectedItems.reduce((total, item) => total + item.price, 0)}`;
        const email = 'validsmehmood@hotmail.com';
        const subject = 'Order Details';
        const body = encodeURIComponent(message);

        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    const handleWhatsAppSubmit = () => {
        const orderDetails = {
            name,
            address,
            contact,
            items: selectedItems,
        };

        const message = `Order Details: \nName: ${name}\nAddress: ${address}\nContact: ${contact}\nItems: ${selectedItems.map(item => `${item.name} (Rs. ${item.price})`).join(', ')}\nTotal: Rs. ${selectedItems.reduce((total, item) => total + item.price, 0)}`;
        const encodedMessage = encodeURIComponent(message);
        const phone = '+923343153853';

        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
    };

    const handleDownloadOrder = () => {
        const orderDetails = `Order Details: \nName: ${name}\nAddress: ${address}\nContact: ${contact}\nItems: ${selectedItems.map(item => `${item.name} (Rs. ${item.price})`).join(', ')}\nTotal: Rs. ${selectedItems.reduce((total, item) => total + item.price, 0)}`;
        const blob = new Blob([orderDetails], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'order-details.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleConfirmOrder = (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const contact = document.getElementById("contact").value;

        if (name === "" || address === "" || contact === "") {
            alert("Please fill in all fields.");
            return;
        }

        const modal = document.getElementById("legalModal");
        modal.style.display = "block";
    };

    const handleCloseAndDownload = () => {
        const modal = document.getElementById("legalModal");
        modal.style.display = "none";
        handleDownloadOrder();
    };

    return (
        <div>
            <h1>Checkout</h1>

            <h2>Selected Items</h2>
            <ul>
                {selectedItems.map(item => (
                    <li key={item.name}>{item.name} - Rs. {item.price}</li>
                ))}
            </ul>
            <h3>Total: Rs. {selectedItems.reduce((total, item) => total + item.price, 0)}</h3>

            <h3>Your Details</h3>
            <div>
                <label>
                    Name:
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Address:
                    <input 
                        type="text"
                        id="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <label>
                    Contact Number:
                    <input 
                        type="text"
                        id="contact"
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                    />
                </label>
            </div>

            <h3>Submit Order</h3>
            <p>Press Confirm and then select the Email or Whats App order</p>
            <button onClick={handleConfirmOrder}>Confirm Order</button>
            <button onClick={handleEmailSubmit}>Email to Order</button>
            <button onClick={handleWhatsAppSubmit}>WhatsApp to Order</button>

            {/* The Modal */}
            <div id="legalModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => document.getElementById("legalModal").style.display = "none"}>&times;</span>
                    <h2>LEGAL AGREEMENT</h2>
                    <p>This Legal Agreement ("Agreement") is entered into by and between Karachi Trading Co. ("KTC"), a company incorporated under the laws of Pakistan, and the user ("User") accessing or using the services provided by KTC.</p>
                    <h3>1. DEFINITIONS</h3>
                    <p>1.1 "KTC" refers to Karachi Trading Co., including its affiliates, employees, and representatives.</p>
                    <p>1.2 "User" refers to any individual or entity that accesses or uses KTC's services.</p>
                    <p>1.3 "Services" refers to the sale of home appliances and electronics conducted by KTC.</p>
                    <h3>2. ACCEPTANCE OF TERMS</h3>
                    <p>By accessing or using the services provided by KTC, the User agrees to abide by all the terms and conditions set forth in this Agreement. If the User does not agree to these terms, they must refrain from using the services.</p>
                    <h3>3. SERVICES PROVIDED</h3>
                    <p>KTC is primarily engaged in the sale of home appliances and electronics. Our range of products includes, but is not limited to, refrigerators, washing machines, air conditioners, televisions, and other household electronic devices.</p>
                    <h3>4. CONTACT INFORMATION</h3>
                    <p>For any inquiries or assistance, Users can contact KTC using the following contact details:</p>
                    <p>Phone: +92 123 436 4645</p>
                    <p>Email: karachitradingco@hotmail.com</p>
                    <h3>5. USER RESPONSIBILITIES</h3>
                    <p>5.1 The User agrees to use KTC's services in a manner that complies with all applicable laws and regulations.</p>
                    <p>5.2 The User must not engage in any activities that may harm or disrupt KTC’s services, networks, or systems.</p>
                    <p>5.3 The User is responsible for maintaining the confidentiality of their account and any personal information.</p>
                    <h3>6. LIMITATION OF LIABILITY</h3>
                    <p>KTC will not be held liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use its services. The User agrees to use KTC's services at their own risk.</p>
                    <h3>7. MODIFICATIONS TO TERMS</h3>
                    <p>KTC reserves the right to modify, update, or amend the terms and conditions of this Agreement at any time. Users will be notified of any changes through the contact details provided or via public notice on KTC's official website.</p>
                    <h3>8. GOVERNING LAW</h3>
                    <p>This Agreement shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts located in Karachi, Pakistan.</p>
                    <h3>9. TERMINATION</h3>
                    <p>KTC reserves the right to terminate or suspend access to its services at any time, with or without cause, without prior notice, if the User violates any part of this Agreement.</p>
                    <h3>10. ENTIRE AGREEMENT</h3>
                    <p>This Agreement constitutes the entire understanding between KTC and the User regarding the use of KTC's services and supersedes any prior agreements, understandings, or representations made by either party.</p>
                    <p>By using KTC's services, the User acknowledges that they have read, understood, and agreed to the terms and conditions outlined in this Agreement.</p>
                    <p>Signed on behalf of Karachi Trading Co.</p>
                    <p>Authorized Representative</p>
                    <p>Date: ___________________________</p>
                    <button onClick={handleCloseAndDownload}>Close and Download Order</button>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Checkout />, document.getElementById('root'));