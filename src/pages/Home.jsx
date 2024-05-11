import React from 'react'
import Department from '../components/Department'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <div>
  
<Hero  title= {"Welcome to People Care International Hospital, Where Every Patient is Family."} imageUrl = {"/hero.png"}  />
<Biography  imageUrl={"/about.png"}   />
<Department/>
<MessageForm/>


    </div>
  )
}

export default Home
