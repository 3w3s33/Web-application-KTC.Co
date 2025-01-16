function Loginform() {
    const [Id, setId] = React.useState(''); 
    const [password, setpassword] = React.useState(''); 
    const [error, seterror] = React.useState(''); 

    function handlesubmit(e) {
        e.preventDefault();
        if (Id === '3w3s3' && password === '123456') {
            window.location.href = 'purchase.html'; 
        } 
        else if (Id === 'admin' && password === '123456789'){
            window.location.href = 'Inventory.html'; 
        }
        else{
            seterror('Invalid ID or Password');
        }
    }

    return (
        <div>
            <img src="karachi logo.gif" alt="Karachi Trading Co Logo" />
            <h1>Login to Karachi Trading Co.</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="Id">ID:</label>
                    <input
                        type="text" // Changed from "type" to "text"
                        id="ID"
                        value={Id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password" // Changed from "type" to "password"
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required 
                    />
                </div>
                {error && <p>{error}</p>} {/* Error message */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

ReactDOM.render(<Loginform />, document.getElementById('root'));