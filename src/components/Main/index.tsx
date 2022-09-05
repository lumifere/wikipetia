import { useState } from 'react';
import Exibithion from '../Exibithion';
import Options from '../Options';
import './style.css';

function Main(){
    const [puppy, setPuppy] = useState<boolean>(false);
    const [kitten, setKitten] = useState<boolean>(false);

    const [puppyController, setPuppyController] = useState<number>(0);
    const [kittenController, setKittenController] = useState<number>(0);

    const showPuppy = function() {
        setPuppy(true);
        setKitten(false);
        setPuppyController(puppyController+1)
        
    };

    const showKitten = function() {
        setKitten(true);
        setPuppy(false);
        setKittenController(kittenController+1)
    };

    return (
        <section className="main">
            <Options puppyOnClick={showPuppy} kittenOnClick={showKitten} />
            <Exibithion puppyClick={{bol: puppy, click: puppyController}} kittenClick={{bol: kitten, click: kittenController}} />
        </section>
    );
}

export default Main;
