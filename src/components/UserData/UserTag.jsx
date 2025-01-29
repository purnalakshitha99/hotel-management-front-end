


function UserTag(props){


    // console.log(props)
    const name = props.imageLink;
    console.log(name)
    return(
        <div className="absolute right-0 mr-5 flex bg-red-500">
        
         <a href="#" >
         <img className="w-[50px] h-[50px] rounded-full" src={props.imageLink} />
            </a> 
            <span className="mt-2.5 ml-2">Purna lakshitha</span>
        </div>

        
    )
}

export default UserTag;
