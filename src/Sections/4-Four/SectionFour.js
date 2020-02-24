import React from 'react';
import CoffeeBox from '../../Components/Box/CoffeeBox';
import granos from './imagenA.jpg';
import Background from '../../Components/Background/Background';
import fondo from './imagenB.jpg';

const SectionFour = () =>{
    const box =
        {
            img:granos,
            tit:"FRESH BEANS",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            link: "LEARN MORE"
        };
    const background = {
            img: fondo,
            title:"GREAT COFFEE",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            link:"LEARN MORE"
        };
    return(
        <section>
            <CoffeeBox
                img={box.img}
                tit={box.tit}
                description={box.description}
                link={box.link}>
            </CoffeeBox>
            <Background
                img={background.img}
                title={background.title}
                text={background.text}
                link={background.link}
            ></Background>
        </section>
    )
};

export default SectionFour;