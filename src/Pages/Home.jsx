import React from 'react'
import './Home.css'
import im from "../assets/download1.png"
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='spotify'>
      <div className='image'><img src={im} alt="" /></div>
      <div className='A'>Spotify</div>
      <div className='B'>Premium</div>
      <div className='C'>Help</div>
      <div className='D'>Download</div>
      <div className='G'>|</div>
      <div className='E'>Sign up</div>
      <Link to={"/Login"} id='log'>
        <div className="F">Log in</div>
      </Link>
  </div>
    <div className='main'>
      <div className='H'><b>Music for everyone.</b></div><br />
      <div className='I'>Millions of songs. No credit card needed.</div><br />
      <button>GET SPOTIFY FREE</button>
    </div>
    </>
  )
}
export default Home