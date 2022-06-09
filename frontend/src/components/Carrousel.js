import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import Cards from './Cards';


// Aca hay un array estatico desde el 1er sprint y al usar 3 array sobre el mismo por el carrusel 
const items = [[
  {titulo: 'Emirates', imagen: 'imagen1.jpg'},
  {titulo: 'Budapest', imagen: 'imagen2.jpg'},
  {titulo: 'Washington DC', imagen: 'imagen3.jpg'},
  {titulo: 'London', imagen: 'imagen4.jpg'}
],[
  {titulo: 'Rio de Janerio', imagen: 'imagen5.jpg'},
  {titulo: 'Chicago', imagen: 'imagen6.jpg'},
  {titulo: 'Emirates', imagen: 'imagen1.jpg'},
  {titulo: 'Budapest', imagen: 'imagen2.jpg'}
],[
  {titulo: 'Washington DC', imagen: 'imagen3.jpg'},
  {titulo: 'London', imagen: 'imagen4.jpg'},
  {titulo: 'Rio de Janerio', imagen: 'imagen5.jpg'},
  {titulo: 'Chicago', imagen: 'imagen6.jpg'}
]
]

//Componente funcional para corrusel hecho con reactstraps
const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //animacion para siguiente pag
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  //animacion para lag anterior
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  // creando paginas de carrusel
  const slides = items.map((item, index) => {
      
    return (
      <CarouselItem
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(true)}
        key={index}
      >
        <Cards items={item} key={index}/>
      </CarouselItem>
    );
  });

  return (
  //retorna el carrusel con las paginas ya creadas
  <>
  <h3 className="text-center p-2">Popular MYtineraries</h3>
    <Carousel className="bg-l"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </>
  );
}
export default Carrousel;