
/* eslint-disable array-callback-return */
import React, { Component} from "react"
import { Link } from "react-router-dom"
import { Card, CardTitle, Form} from 'reactstrap'
import {FormGroup, Input,} from 'reactstrap'
import MyLoader from "../components/Loader";
import citiesActions from '../redux/actions/citiesActions'
import { connect } from 'react-redux'

class Cities extends Component {
  //metodo que inicia inmediatamente despues de llamar al componente y llena el estado con los datos
  componentDidMount = () => {
    window.scroll(0, 0)
    this.props.allCities()
  }
  //funcion para filtrar los datos retornando un item para comparar con el estado filter
    render() {
      if (this.props.loader) return <MyLoader />
      else 
      return (
        <>
          <div>
            <h2 className="bg-primary m-3 rounded-pill text-center">Cities</h2>
            <div className="d-flex justify-content-center">
              <Form>
                <FormGroup>
                  <div className="d-flex-inline text-center">
                    <Link className="text-center backcities mb-5" to="/"><i className="fas fa-arrow-circle-left d-flex justify-content-center"></i>Go Back to Home</Link>
                    <Input className="text-center m-2" onChange={(e)=> this.props.search(e.target.value)} placeholder="Search City"/>
                  </div>
                  {
                  //creando imagenes con los datos que salen de la funcion filterElement
                  this.props.filter !== 0 ?
                    this.props.filter.map((item, index) => (
                      <Link className="cities" to={`/cities/${item._id}`} key={item._id}>
                        {console.log(item)}
                          <Card inverse className={index % 2 === 0 ? 'image-r':'image-l'} style={{backgroundImage: `url(${item.cityPic})`}}>
                            <CardTitle tag="h3" className={index % 2 === 0 ? 'titulo-card':'titulo-card-l'}>{item.cityName}</CardTitle>
                          </Card>
                      </Link>
                      )) : 
                      <div className="not-found bg-primary m-5">
                        <h2>Not Cities Found</h2>
                      </div>}
                  
                </FormGroup>
              </Form>
            </div>
          </div>
        </>)
    }
}
const mapStateToProps = state => {
  return {
      cities: state.cityR.cities,
      filter: state.cityR.filter,
      loader: state.cityR.loader
  }
}

const mapDispatchToProps = {
  allCities: citiesActions.getCities,
  search: citiesActions.searchCities,
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Cities)