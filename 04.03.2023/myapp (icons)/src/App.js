import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmarkSquare, faBaseball, faSearch, faClock, faSyringe} from '@fortawesome/free-solid-svg-icons'
import {faApplePay, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './App.css'

// https://fontawesome.com/search?o=r&m=free&s=solid
// бесплатные solid иконки

function App() {
  return (
    <div>
      <FontAwesomeIcon className='xmark' icon={faXmarkSquare}/>
      <FontAwesomeIcon icon={faBaseball}/>
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faApplePay} />
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faClock} />
      <FontAwesomeIcon icon={faSyringe} />
    </div>
  );
}

export default App;
