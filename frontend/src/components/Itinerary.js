import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Button, Card, CardTitle, Input} from 'reactstrap'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Comment from './Comment'

const Itinerary = (props) => {
  const [seeMore, setSeemore] = useState(false)
  const [value, setValue] = useState('')
  
  const comment = e => {
    setValue(e.target.value)
  }
  const enviar = async (e) => {
    console.log(props)
    await props.addComment(value, props.itinerary._id, props.loggedUser.token)
    props.getItineraries(props.itinerary.cityId)
    document.getElementById('comment').value= ""
  }

  const keyPress = e => {
    if (e.key === 'Enter') {
      enviar()
    }
  }

        return (   
          <div className="d-flex justify-content-center" key={props.itinerary._id}>
            <div className={props.index % 2 === 0 ? 'itinerary-r bg-primary':'itinerary-l bg-primary'}>
              <div>
                <div className="d-flex">
                  <div className="m-4 itinerary">
                    <img src={props.itinerary.pic} alt="..." className="w-25"/>
                    <h3 className="text-light m-1">{props.itinerary.name}</h3>
                  </div>
                  <div className="d-block">
                      <h2 className="">{props.itinerary.title}</h2>
                      <div className="d-flex">
                        <h4 className="m-4 text-light text-center">Likes {props.itinerary.like}</h4>
                        <h4 className="m-4 text-light text-center">{props.itinerary.hours} hours</h4>
                        <div style={{display:'flex', alignItems:'center',width:'50%'}}>Price:{[...Array(props.itinerary.price)].map((m,i)=>{
                            return ( <img src="https://image.flaticon.com/icons/png/512/2057/2057398.png" width="40" key={i} alt=""/>
                            )})}
                        </div>

                    </div>
                    <div className="d-flex flex-wrap">
                      {props.itinerary.hashtag.map((hashtag, index) => <h5 key={index} className="m-2 text-info"> {hashtag} </h5>)}
                    </div>
                  </div>
                </div>{seeMore ? (
                  <>
                  <div className="d-flex">
                    <div className={props.index % 2 === 0 ? 'activites-img-r ':'activites-img-l '} >
                      {props.itinerary.activities.map((activity, index) => {
                        return (
                          <>
                          <div className="d-flex justify-content-start">
                              <Card inverse className={props.index % 2 === 0 ? 'activities-r':'activities-l'} key={index} style={{backgroundImage: `url(${activity.actImage}`}}>
                                <div className="d-flex align-items-center">
                                  <CardTitle tag="h3" className="text-primary titulo-act">{activity.actTitle}</CardTitle>
                                </div>
                              </Card>
                          </div>
                          </>
                          )
                          })}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-center">Comments</h2>
                    <div className="">
                      {props.itinerary.comments.length !== 0 ?
                      (props.itinerary.comments.map(comment => {
                        return <Comment comment={comment} key={comment._id} id={props.itinerary._id} cityId={props.itinerary.cityId}/>
                      })) :
                      <h2 className="text-center bg-white w-100">No comments</h2>}
                      {props.loggedUser ? 
                      <div className="d-flex justify-content-center">
                          <div className="d-flex">
                            <Input className="comment" id="comment" type="text" placeholder="Comment" onChange={comment} onKeyPress={keyPress}/>
                            <Button onClick={enviar}>Enviar</Button>
                          </div>
                      </div>
                      :<div className="d-flex justify-content-center">
                        <Input className="comment w-50 text-center" disabled type="text" placeholder="Firts Logged plz" />

                      </div>}
                    </div>
                  </div>
                  </>):
                  " "
                  }
                <div className="text-center w-100">
                  <Link className="text-warning backcities" to="#" onClick={() => {setSeemore(!seeMore)}}><i className="fas fa-arrow-alt-circle-down d-flex justify-content-center"></i>View Activities</Link>
                </div>
              </div>
            </div>
          </div>
          )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.authR.loggedUser,
    listItineraries: state.itineraryR.itineraries

  }
}
const mapDispatchToProps = {
  addComment: itinerariesActions.addComment,
  getItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)