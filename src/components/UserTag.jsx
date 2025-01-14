function UserTag(props){

    // console.log(props)
    const name = props.imageLink;
    console.log(name)
    return(
        <div>
        
         <a href="#" >
         <img src={props.imageLink} style={{width:"50px"}}  />
            </a> 
            <h1>Purna lakshitha</h1>
        </div>
    )
}

export default UserTag;
