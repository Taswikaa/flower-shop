import { Link } from 'react-router-dom';
import './Card.css';
import { useAppDispatch } from '../../hooks/redux';

interface card {
  src: string;
  title: string;
  detail: string;
}

const Card = ({ src, title, detail }: card) => {
  const dispatch = useAppDispatch();

  const setData = () => {
    dispatch({
      type: 'getData',
      payload: {
        src,
        title,
        detail,
      }
    })
  }

  return (
    <li className='card'>
      <h2 className='card__name'>{title}</h2>
      <img className='card__img' src={src} alt={title} />
      <Link className='card__view' to='/detail' onClick={() => setData()}>Подробнее</Link>
    </li>
  )
}

export default Card