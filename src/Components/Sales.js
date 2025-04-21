import '../Styles/Sales.css';

function Sales(sale) {
    if (! sale.isSpecialOffer)
        return;
    return <div className="lmj-sales">Soldes</div>;
}

export default Sales;