import './style.css'
import Metrics from '../../components/Metrics/Metrics'
const About = () =>{
    return(
        <>  
            <div className='center-all-About'>
                <Metrics MetricD={[{Name: "Proyectos realizados", Number: 100},{Name: "Años de experiencia", Number: 20}, {Name: "Profesionales capacitados", Number: 50}]}></Metrics>
                <div className='about'>
                    <img className='img-about' src="" alt="" />
                    <div className='Text-about'>
                        <h2>Quienes Somos</h2>
                        <p>Housing Design S.A. es una empresa fundada en 2015 en la Ciudad Autónoma de Buenos Aires, dedicada a la construcción, instalaciones termomecánicas, climatización y soluciones integrales de seguridad electrónica. Nuestro trabajo se basa en la calidad técnica, la seguridad operativa y el acompañamiento integral en cada obra.</p>
                        <p>Contamos con un equipo de profesionales especializados en obra civil, HVAC, ventilación, eficiencia energética y sistemas de seguridad electrónica. Atendemos a desarrolladoras, industrias, comercios, administraciones y pymes, otorgando a cada cliente la misma importancia sin importar el tamaño de su operación.</p>
                        <p>Nuestro compromiso es ofrecer soluciones confiables, eficientes y alineadas a la normativa vigente, con resultados duraderos y un servicio postventa sólido.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About