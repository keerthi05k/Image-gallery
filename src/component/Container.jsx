import one from '../assets/images/Dog-1.jpg'
import two from '../assets/images/Dog-2.jpg'
import three from '../assets/images/Dog-3.jpg'
import four from '../assets/images/Dog-4.jpg'
import five from '../assets/images/Dog-5.jpg'
import six from '../assets/images/Dog-6.jpg'
import seven from '../assets/images/Dog-7.jpg'
import eight from '../assets/images/Dog-8.jpg'


//Container Component
function Container()
{
    return (
        
        
        <div className='Container'>
        
            <div className="Box">
            
                <img src={one} alt="Dog" />
                <p>Julie's Rabbit Ears</p>
            </div>

            <div className="Box">
                <img src={two} alt="Dog" />
                <p>The Innocent Look</p>
            </div>

            <div className="Box">
                <img src={three} alt="Dog" />
                <p>Big Eyed Buggy</p>
            </div>

            <div className="Box">
                <img src={four} alt="Dog" />
                <p>The Saint Doggo</p>
            </div>

            <div className="Box">
                <img src={five} alt="Dog" />
                <p>Julie's Rabbit Ears</p>
            </div>

            <div className="Box">
                <img src={six} alt="Dog" />
                <p>Big Eyed Buggy</p>
            </div>

            <div className="Box">
                <img src={seven} alt="Dog" />
                <p>The Saint Doggo</p>
            </div>

            <div className="Box">
                <img src={eight} alt="Dog" />
                <p>The Innocent Look</p>
            </div>
        </div>
    )
}

export default Container