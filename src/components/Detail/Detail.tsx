import { useNavigate } from 'react-router-dom';
import './Detail.css';
import { CardInterface } from '../../models/Card';

const Detail = ({ title, src, detail }: CardInterface) => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="content">
        <div className='detail'>
          <h1 className='detail__heading'>{title}</h1>
          <div className='detail__content'>
            <img className='detail__img' src={src} alt="" />
            <p className='detail__text'>{detail}</p>
          </div>
          <button className='detail__link' onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
    </div>
  )
}

export default Detail