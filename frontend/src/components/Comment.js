import { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'reactstrap'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Comment = (props) => {
    const [value, setValue] = useState('')
    const [input, setInput] = useState(false)
    console.log(props.loggedUser)

    const deleteC = async (e) => {
        e.preventDefault()
        console.log(props)
        await props.deleteComments(props.id, props.comment._id, props.loggedUser.token)
        props.getItineraries(props.cityId)
    }
    const comment = e => {
        setValue(e.target.value)
      }
    const modiComment = async (e) => {
        await props.modComment(value, props.comment._id, props.id, props.loggedUser.token)
    }
    
  const keyPress = e => {
    if (e.key === 'Enter') {
        modiComment()
    }
  }
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center w-50">
                <img src={props.comment.userPic} className="rounded" width="15%" alt="..."/>
                {!input ? 
                <div>
                    <h6 className="index">{props.comment.userName}</h6>
                    <p className="bg-light rounded">{props.comment.content}</p>
                </div>
                : 
                <div className="d-flex">
                    <Input className="comment" id="comment" type="text" placeholder="Edit comment" onChange={comment} onKeyPress={keyPress}/>
                    <Button onClick={modiComment}><i className="fas fa-paper-plane"></i></Button>
                </div>}
                {props.loggedUser ?
                <>
                <div className="">
                    {props.loggedUser.userName === props.comment.userName && 
                    <Button onClick={deleteC} className="bg-danger"><i className="far fa-trash-alt"></i></Button>}
                    <Button onClick={() => {setInput(!input)}} className="bg-info"><i className="fas fa-edit"></i></Button>
                </div>
                </>
                :
                ""
            }
            </div>
        </div>
        
    )
}


const mapStateToProps = state => {
    return {
      loggedUser: state.authR.loggedUser
    }
  }
const mapDispatchToProps = {
    deleteComments: itinerariesActions.deleteComment,
    getItineraries: itinerariesActions.getItineraries,
    modComment: itinerariesActions.modComment
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)