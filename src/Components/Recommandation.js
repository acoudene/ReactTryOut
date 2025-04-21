function Recommandation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    
    if (!isSpring)
        return <div>Ne faites rien !</div>;
    
    return <div>Rempotez</div>;
}

export default Recommandation;