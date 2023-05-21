import React from 'react'
import bg_pencil from '../img/bg_pencil.jpeg'
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    let navigate = useNavigate();
    const home_click = () => {
        navigate('/theory');
    }
    return (
        <div style={{ backgroundImage: `url(${bg_pencil})`, width: '100%', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className='home'>
                <Zoom left>
                    <h2 className="home3">Let's Learn </h2>
                </Zoom>
                <br />
                <Zoom left>
                    <h2 className="home2" data-text=" Probability. . ."> Probability. . .</h2>
                </Zoom>
                {/* <div className="button10">
      <button ><span></span>Let's Start</button>
      </div> */}
            </div>
            <br />
            <Zoom left>
                <div className="button10">
                    <button onClick={home_click}><span className='span'></span>Let's Start</button>
                </div>
            </Zoom>
        </div>
    )
}

export default Home