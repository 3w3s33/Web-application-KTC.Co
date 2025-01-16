const MapPage = () => {
    return (
        <div>
            <h1>Map of Karachi</h1>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37200.86309184018!2d67.07080593261064!3d24.921131304740975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b808bfd6b1%3A0x997b1a02c2570822!2sGulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1734710407510!5m2!1sen!2s" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

// Render the MapPage component
ReactDOM.render(<MapPage />, document.getElementById('root'));