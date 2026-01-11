import './style.css';
import Logo from '../../assets/Logo.svg'
const Contact = () =>{
    return(
        <>
            <section id='Contact'>
                <div className='ContentForm-Map'>
                    <div className='formCont'>
                        <h2>¡CONSTRUYAMOS TUS IDEAS!</h2>
                        <form className='contact-form' action="">
                            <input className='Name' type="text" placeholder='NOMBRE'/>
                            <input className='Email' type="email" placeholder='EMAIL'/>
                            <input className='Phone' type="tel" placeholder='TELEFONO'/>
                            <input className='Description' type="text" placeholder='DESCRIPCIÓN DEL PROYECTO O PEDIDO'/>
                            <input className='sendBtn' type="submit" value="ENVIAR" />
                        </form>
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.564211811666!2d-58.44224921069098!3d-34.58989178703464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58b0ab877ed%3A0xb618ba6455ab9d45!2sGodoy%20Cruz%201371%2C%20C1414%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1768085919176!5m2!1ses-419!2sar" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <footer>
                    <div className='contact-data'>
                        <div  className='sectionsgroup'>
                            <img src={Logo} alt="" />
                            <div>
                                <h2>SECCIONES</h2>
                                <ul className='Sections'>
                                    <li><a href="#About">Sobre Nosotros</a></li>
                                    <li><a href="#Projects">Proyectos</a></li>
                                    <li><a href="#Services">Servicios</a></li>
                                    <li><a href="#">Nuestras valoraciones</a></li>
                                    <li><a href="">Contactar</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2>CONTACTOS</h2>
                            <ul className='contacts'>
                                <li>EMAIL: contactar@housing.com</li>
                                <li>TLF: +54 0 11 5555-5555</li>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p>Housing Design ©® 2025 Copyright All Rights Reserved.</p>
                </footer>
            </section>
        </>
    )
}

export default Contact