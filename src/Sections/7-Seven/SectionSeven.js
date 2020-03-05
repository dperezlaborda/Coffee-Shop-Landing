import React from 'react';
import './SectionSeven.scss';
import BlogCard from '../../Components/Card/BlogCard';
import People from './one.jpeg';
import Cup from './two.jpeg';
import Coffee from './three.jpeg';

const SectionSeven = () =>{
    const cards = [
        {
            img:People,
            title:"THE GREAT OUTDOORS",
            date:"Sep 27, 2017",
            text:"Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            img:Cup,
            title:"SHARED MEMORIES",
            date:"Oct 10, 2018",
            text:"Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas."
        },
        {
            img:Coffee,
            title:"THE LOOKOUT",
            date:"Nov 11, 2018",
            text:"Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas."
        }
    ];
    return(
        <section>
            <div className="all-container">
                <div className="text-container">
                    <h2>LATEST FROM BLOG</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
                <div className="container-blog-card">
                    {cards.map ( card =>{
                        return(
                            <BlogCard
                            img={card.img}
                            title={card.title}
                            date={card.date}
                            text={card.text}>
                            </BlogCard>
                        );
                    })}
                </div>
                <div className="menu">
                    <h3>BROWSE MENU</h3>
                </div>
            </div>
        </section>
    );
}

export default SectionSeven;