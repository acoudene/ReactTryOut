
import '../Styles/ShoppingList.css';
import { plantList } from '../Datas/plantList';
import PlantItem from './PlantItem';

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
				{plantList.map(({id, name, cover, water, light}) => (
					// <li key={plant.id} className='lmj-plant-item'>
                    //     {plant.isBestSale && <span>🔥</span>}
                    //     {plant.name}
                    //     <CareScale careType='water' scaleValue={plant.water} />
                    //     <CareScale careType='light' scaleValue={plant.light} />
                    // </li>
                    <PlantItem id={id} name={name} cover={cover} water={water} light={light} />
                    
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;