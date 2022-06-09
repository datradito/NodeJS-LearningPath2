import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

//creando tarjetas individuales para mostrar en el carrusel
const Cards = ({items}) => {
  return (
    <>
    <div className="tarjeta d-flex flex-wrap">
      {items.map((item, index) => {
        return (
          <Card inverse key={index}>
            <CardImg className=""  src={`./assets/carrousel/${item.imagen}`} alt={item.titulo} />
            <CardImgOverlay>
              <CardTitle tag="h5" className="titulo-card">{item.titulo}</CardTitle>
            </CardImgOverlay>
          </Card>
        )
      })}
    </div>
    </>
  )
  
}
export default Cards