import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => {
  const src = 'https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <li className='card'>
      <h2 className='card__name'>Rose</h2>
      <img className='card__img' src={src} />
      <Link className='card__view' to='/detail'>Подробнее</Link>
    </li>
  )
}

export default Card