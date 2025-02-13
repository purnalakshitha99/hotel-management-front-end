import UserTag from '../UserData/UserTag.jsx'
import DivTest from './DivTest.jsx';


function Header(){
     return(
        <header className='w-full bg-blue-500 flex h-[150px] relative  p-[20px] mr-2'>
            <h1 className='text-white text-[30px]' >Hotel Management System</h1>
            <UserTag  imageLink="https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0" name="purnalakshitha"/>
           
        </header>
     )
}

export default Header;