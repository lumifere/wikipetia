import './style.css';
import Puppy from '../../assets/puppy.jpg';
import Kitten from '../../assets/kitten.jpg';
import { useState } from 'react';

type OptionsInfo = {
    puppyOnClick: any;
    kittenOnClick: any;
}

function Options({puppyOnClick, kittenOnClick}: OptionsInfo) {

    const [shadowDog, setShadowDog] = useState(false);
    const [shadowCat, setShadowCat] = useState(false);

    return (
        <div className="options">
            <p>Clique numa das opções abaixo:</p>
            <img src={Puppy} onClick={() => {
                setShadowDog(true);
                setShadowCat(false);
                puppyOnClick();
                }} alt="Foto de um Cachorrinho" className={shadowDog ? "dogclick" : "dog"} />
            <img src={Kitten} onClick={() => {
                setShadowDog(false);
                setShadowCat(true);
                kittenOnClick();
                }} alt="Foto de um Gatinho" className={shadowCat ? "catclick" : "cat"} />
        </div>
    );
}

export default Options;