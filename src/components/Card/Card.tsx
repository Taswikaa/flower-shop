import { Link } from 'react-router-dom';
import './Card.css';

interface card {
  src: string;
  title: string;
}

const Card = ({ src, title }: card) => {
  return (
    <li className='card'>
      <h2 className='card__name'>{title}</h2>
      <img className='card__img' src={src} />
      <Link className='card__view' to='/detail'>Подробнее</Link>
    </li>
  )
}

export default Card