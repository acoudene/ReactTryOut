import Banner from './Banner'
import logo from '../Assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import QuestionFormU from './QuestionFormU';
import QuestionForm from './QuestionForm';


// Regarder CSS-IN-JS

function App() {
  return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<QuestionFormU />
			<QuestionForm />
			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App;
