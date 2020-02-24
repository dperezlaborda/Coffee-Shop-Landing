import React from 'react';
import './SectionTwo.scss';
import CoffeeCard from '../../Components/Card/CoffeeCard';
import Coffee from './coffee_1.png';
import Coffee2 from './coffee_2.png';
import Coffee3 from './coffee_3.png';

const SectionTwo = () =>{
    const cards = [
      {
        img:Coffee,
        title:"MOCHA LATTE",
        text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      },
      {
        img:Coffee2,
        title:"POUR OVER",
        text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      },
      {
        img:Coffee3,
        title:"ESPRESSO",
        text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
      }
    ];
    return(
      <section className="image-background">
        <div className="container-section">
          <div className="container-texto">
            <h1 className="title">WE BELIEVE IN COFFEE THAT<br/>TASTES INCREDIBLE</h1>
            <h2 className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium<br/> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</h2>
          </div>
          {cards.map ( card => {
            return (
              <CoffeeCard
                img={card.img}
                title={card.title}
                text={card.text}>
              </CoffeeCard>
            );
          })}
          <span className="menu-text">
            <h3>FULL MENU</h3>
          </span>
        </div>
      </section>
    )
};

export default SectionTwo;