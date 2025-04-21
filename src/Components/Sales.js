import '../Styles/Sales.css';

function Sales(isSpecialOffer) {
    if (! isSpecialOffer.value)
        return;
    return <div className="lmj-sales">Soldes</div>;
}

export default Sales;