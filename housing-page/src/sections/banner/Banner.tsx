import './style.css'
import SocialMC from '../../components/Social_mediaCircle/SocialMC'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import facebook from '../../assets/socialIcons/facebook.svg'
import contact from '../../assets/contacts.svg'
import SocialOpen from '../../components/Social_OpenCirc/SocialOpen'
const Banner = () =>{
    return(
        <>
            <HeaderMenu></HeaderMenu>
            <div className='img-banner'>
                <div className='Container-g'>
                    <div className='container-text'>
                        <h1>CONSTRUYENDO SUEÑOS, CREANDO FUTUROS</h1>
                        <p>Housing Design transforma ideas en obras sólidas y funcionales, combinando calidad, innovación y cumplimiento de plazos para cada proyecto.</p>
                        <button className='btn' onClick={() => location.href = '#Contact'}>CONTACTAR</button>
                    </div>
                    
                    <div className='SocialContainer' id='SocialContainer'>
                        <div className='All-Container-Circles'>
                            <div className='LineHZ'></div>
                            <div className='Social-Circles'>
                                <SocialMC link={''} image={facebook} socialName={'facebook'} ></SocialMC>
                                <SocialMC link={''} image={facebook} socialName={'facebook'} ></SocialMC>
                                <SocialMC link={''} image={facebook} socialName={'facebook'} ></SocialMC>
                                <SocialMC link={''} image={facebook} socialName={'facebook'} ></SocialMC>
                            </div>
                            <div className='LineHZ'></div>
                        </div>
                        <div className='ContactBTN' id='ContactBTN'>
                            <SocialOpen image={contact} socialName={''}></SocialOpen>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner