import './style.css'
import Termo from '../../assets/serviceIcons/termo.svg'
const Services = () =>{

    return(
        <>
            <section id='Services'>
                <div className='center-service'>
                    <div className='orange-line'>
                        <h1>SERVICES</h1>
                    </div>
                    <div className='containerTexts'>
                        <h1>SERVICES</h1>
                        <div className='service'>
                            <img src={Termo} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Instalaciones termomecánicas</h2>
                                <p>Ofrecemos aire acondicionado central y VRV/VRF, chillers, calderas y bombas, ventilación industrial y comercial, así como balanceo, puesta en marcha y mantenimiento de sistemas HVAC.</p>
                            </div>
                        </div>
                        <div className='service'>
                            <img src={Termo} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Instalaciones termomecánicas</h2>
                                <p>Ofrecemos aire acondicionado central y VRV/VRF, chillers, calderas y bombas, ventilación industrial y comercial, así como balanceo, puesta en marcha y mantenimiento de sistemas HVAC.</p>
                            </div>
                        </div>
                        <div className='service'>
                            <img src={Termo} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Instalaciones termomecánicas</h2>
                                <p>Ofrecemos aire acondicionado central y VRV/VRF, chillers, calderas y bombas, ventilación industrial y comercial, así como balanceo, puesta en marcha y mantenimiento de sistemas HVAC.</p>
                            </div>
                        </div>
                        <div className='service'>
                            <img src={Termo} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Instalaciones termomecánicas</h2>
                                <p>Ofrecemos aire acondicionado central y VRV/VRF, chillers, calderas y bombas, ventilación industrial y comercial, así como balanceo, puesta en marcha y mantenimiento de sistemas HVAC.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services