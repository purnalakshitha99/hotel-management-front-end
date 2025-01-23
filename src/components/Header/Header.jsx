import UserTag from '../UserData/UserTag.jsx'
import DivTest from './DivTest.jsx';
import "./header.css"

function Header(){
     return(
        <header>
            <h1>Hotel Management System</h1>
            <UserTag  imageLink="https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0" name="testing"/>
            <DivTest/>
        </header>
     )
}

export default Header;