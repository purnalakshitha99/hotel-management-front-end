

function UserTag(props){


    // console.log(props)
    const name = props.imageLink;
    console.log(name)
    return(
        <div className="absolute right-20 bg-red-100 flex">
        
         <a href="#" >
         <img className="w-[50px] h-[50px]" src={props.imageLink} />
            </a> 
            <span>Purna lakshitha</span>
        </div>

        
    )
}

export default UserTag;
