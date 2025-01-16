const ReviewPage = () => {
    const [review, setReview] = React.useState("");

    const handleSubmit = () => {
        alert(`Review Submitted: ${review}`);
        setReview("");
    };

    return (
        <div>
            <h1>Customer Reviews</h1>
            <h2>Share your thoughts</h2>
            <textarea 
                value={review} 
                onChange={(e) => setReview(e.target.value)} 
                placeholder="Write your review here..." 
            />
            <button onClick={handleSubmit}>Submit Review</button>
        </div>
    );
};

ReactDOM.render(<ReviewPage />, document.getElementById('root'));