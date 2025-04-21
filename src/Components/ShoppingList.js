import '../Styles/ShoppingList.css';
import { plantList } from '../Datas/plantList';
import Sales from './Sales';

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li className='lmj-plant-item' key={plant.id}>
                        {plant.name}{plant.isBestSale && <span>🔥</span>}
                        <Sales value={plant.isSpecialOffer}/>                        
                    </li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;