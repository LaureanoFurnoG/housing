import './style.css'
import Termo from '../../assets/serviceIcons/termo.svg'
import Build from '../../assets/serviceIcons/build.svg'
import Secutiry from '../../assets/serviceIcons/security.svg'
import servicesC from '../../assets/serviceIcons/compl.svg'
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
                            <img data-aos="fade-right" src={Termo} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Instalaciones termomecánicas</h2>
                                <p>Ofrecemos aire acondicionado central y VRV/VRF, chillers, calderas y bombas, ventilación industrial y comercial, así como balanceo, puesta en marcha y mantenimiento de sistemas HVAC.</p>
                            </div>
                        </div>
                        <div className='service'>
                            <img data-aos="fade-right" data-aos-duration="1000" src={Build} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Construcción y obra civil</h2>
                                <p>Realizamos estructuras, pisos y terminaciones con precisión y compromiso, garantizando obras sólidas, duraderas y adaptadas a las necesidades de cada cliente.</p>
                            </div>
                        </div>
                        <div className='service'>
                            <img data-aos="fade-right" data-aos-duration="1500" src={Secutiry} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Seguridad electrónicas</h2>
                                <p>Brindamos instalación, actualización y mantenimiento de sistemas de CCTV, video vigilancia IP, controles de acceso, alarmas y sistemas antiintrusión, sensores perimetrales e integración de sistemas de seguridad, junto con asesoramiento técnico, auditoría de instalaciones existentes y actualización de sistemas analógicos a tecnología digital.</p>
                            </div>
                        </div>
                        <div className='service'>
                            <img data-aos="fade-right" data-aos-duration="2000" src={servicesC} className='service-icon' alt="" />
                            <div className='text-service'>
                                <h2 className='title-service'>Servicios complementarios</h2>
                                <p>Ofrecemos mantenimiento preventivo y correctivo, estudios de eficiencia energética, elaboración de documentación técnica como planos, memorias y certificaciones, y evaluaciones de parámetros ambientales.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services