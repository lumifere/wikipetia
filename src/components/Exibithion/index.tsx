import { useEffect, useState } from 'react';
import CatServices from '../../services/CatServices';
import DogServices from '../../services/DogServices';
import './style.css';

type ExibithionInfo = {
  puppyClick: { bol: boolean, click: number },
  kittenClick: { bol: boolean, click: number }
}

function Exibithion({ puppyClick, kittenClick }: ExibithionInfo) {

  const [dogPhoto, setDogPhoto] = useState<string>();
  const [catPhoto, setCatPhoto] = useState<string>();

  useEffect(() => {
    if (puppyClick.bol) {
      DogServices.getDogPhoto().then(response => {
        const photo = response?.data[0].url;
        setDogPhoto(photo);
      });
    }
  }, [puppyClick]);

  useEffect(() => {
    if (kittenClick.bol) {
      CatServices.getCatPhoto().then(response => {
        const photo = response?.data[0].url;
        setCatPhoto(photo);
      });
    }
  }, [kittenClick]);



  return (
    <div className="exibithion">
      {puppyClick.bol ? <img src={dogPhoto} alt="Imagem de um cão aleatório." /> : kittenClick.bol ? <img src={catPhoto} alt="Imagem de um gato aleatório." /> : <p>🐶 Clique em uma das opções ao lado! 🐱</p>}
    </div>
  );
}

export default Exibithion;