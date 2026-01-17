import './style.css'
import Metrics from '../../components/Metrics/Metrics'
import NormIcon from '../../assets/bun-information/normative-icon.svg'
import SecIcon from '../../assets/bun-information/security-icon.svg'
import CIcon from '../../assets/bun-information/c-icon.svg'
import AboutIMG from '../../assets/aboutImage.svg'
const About = () =>{
    return(
        <>  
            <div className='center-all-About' id='about'>
                <Metrics MetricD={[{Name: "Proyectos realizados", Number: 100},{Name: "Años de experiencia", Number: 20}, {Name: "Profesionales capacitados", Number: 50}]}></Metrics>
                <div className='about'>
                    <img data-aos="fade-right" className='img-about aos-init' src={AboutIMG} alt="" />
                    <div className='left-zone'>
                        <div data-aos="fade-left" className='Text-about'>
                            <h2>Quienes Somos</h2>
                            <p>Housing Design S.A. es una empresa fundada en 2015 en la Ciudad Autónoma de Buenos Aires, dedicada a la construcción, instalaciones termomecánicas, climatización y soluciones integrales de seguridad electrónica. Nuestro trabajo se basa en la calidad técnica, la seguridad operativa y el acompañamiento integral en cada obra.</p>
                            <p>Contamos con un equipo de profesionales especializados en obra civil, HVAC, ventilación, eficiencia energética y sistemas de seguridad electrónica. Atendemos a desarrolladoras, industrias, comercios, administraciones y pymes, otorgando a cada cliente la misma importancia sin importar el tamaño de su operación.</p>
                            <p>Nuestro compromiso es ofrecer soluciones confiables, eficientes y alineadas a la normativa vigente, con resultados duraderos y un servicio postventa sólido.</p>
                        </div>
                        <div data-aos="fade-up" className='Vision-mision'>
                            <div className='mision'>
                                <h2>MISIÓN</h2>
                                <p>Brindar soluciones integrales en construcción, instalaciones termomecánicas y
                                    climatización, garantizando calidad, eficiencia y seguridad en cada proyecto. Nos
                                    enfocamos en acompañar a nuestros clientes con servicios confiables, innovadores y
                                    adaptados a sus necesidades, cumpliendo con la normativa vigente y promoviendo
                                    prácticas de trabajo seguras y sostenibles.</p>
                            </div>  
                            <div className='vision'>
                                <h2>VISIÓN</h2>
                                <p>Ser una empresa líder y referente en Argentina en construcción y soluciones
                                    termomecánicas, reconocida por la excelencia técnica de nuestros servicios, la
                                    innovación aplicada a cada proyecto y el compromiso permanente con la seguridad, la
                                    eficiencia energética y la satisfacción del cliente.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Information-bun'>
                    <div data-aos="fade-up" data-aos-duration="800" className='info info-s'>
                        <img src={SecIcon} alt="" />
                        <h2>COMPROMISO CON LA SEGURIDAD</h2>
                        <p>Planificación preventiva, gestión documental y cumplimiento de protocolos.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1400" className='info info-n'>
                        <img src={NormIcon} alt="" />
                        <h2>CUMPLIMIENTO NORMATIVO TOTAL</h2>
                        <p>CABA, IRAM, RITE, SRT, Código de Edificación.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className='info info-c'>
                        <img src={CIcon} alt="" />
                        <h2>CALIDAD GARANTIZADA</h2>
                        <p>Con técnicos matriculados y profesionales especializados.</p>
                    </div>                  
                </div>
            </div>
        </>
    )
}

export default About