import '../Styles/Banner.css'
import logo from '../Assets/logo.png'
import Recommandation from './Recommandation';

function Banner() {
    const title = 'La maison jungle';
    
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
            <Recommandation />
        </div>
    );
}

export default Banner;