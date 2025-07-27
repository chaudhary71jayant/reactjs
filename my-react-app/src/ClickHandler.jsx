function ClickHandler() {
    const handleClick = () => {
        alert("Button was Clicked");
    };

    return(
        <button onClick={handleClick}> 
         Click me </button>
    );
}

export default ClickHandler;