import './userData.css'

function UserTag(props){


    // console.log(props)
    const name = props.imageLink;
    console.log(name)
    return(
        <div className="div-user-data testing">
        
         <a href="#" >
         <img src={props.imageLink} />
            </a> 
            <span>Purna lakshitha</span>
        </div>

        
    )
}

export default UserTag;
