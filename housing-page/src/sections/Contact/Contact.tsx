import './style.css';
import Logo from '../../assets/Logo.svg'
import axios from "axios";
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';



const Contact = () =>{
    const onFinish: FormProps['onFinish'] = async (values) => {
        try{
            console.log(values)
            values.emailClient = 'laureanofurno@gmail.com'
            const response = await axios.post("https://send-emails-three.vercel.app/api/sendEmail", values)
            console.log(response)
        }catch(error){
            console.log(error)
        }
    };
   
    return(
        <>
            <section id='Contact'>
                <div className='ContentForm-Map'>
                    <div data-aos="fade-right" className='formCont'>
                        <h2>¡CONSTRUYAMOS TUS IDEAS!</h2>
                        <Form
                        className="contact-form"
                        name="contact"
                        onFinish={onFinish}
                        autoComplete="on"
                        >

                        <Form.Item
                            name="inputForm1"
                            rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
                        >
                            <Input className="Name" placeholder="Nombre y apellido" />
                        </Form.Item>

                        <Form.Item
                            name="inputForm2"
                            rules={[
                            { required: true, message: 'Por favor ingrese su email' },
                            { type: 'email', message: 'Email inválido' }
                            ]}
                        >
                            <Input className="Email" placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="inputForm3"
                            rules={[{ required: true, message: 'Por favor ingrese su teléfono' }]}
                        >
                            <Input className="Phone" placeholder="Teléfono" />
                        </Form.Item>

                        <Form.Item
                            name="inputForm4"
                            rules={[{ required: true, message: 'Por favor escriba su mensaje' }]}
                        >
                            <Input.TextArea
                            className="Description"
                            placeholder="Escriba su mensaje..."
                            rows={4}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button className="sendBtn" type="primary" htmlType="submit">
                            Enviar
                            </Button>
                        </Form.Item>

                        </Form>

                    </div>
                    <div data-aos="fade-left" className='map'>
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
                                    <li><a href="#Clients">Nuestras valoraciones</a></li>
                                    <li><a href="#Contact">Contactar</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2>CONTACTOS</h2>
                            <ul className='contacts'>
                                <li>EMAIL: contactar@housing.com</li>
                                <li>TLF: +54 0 11 5555-5555</li>
                            </ul>
                            <div className='icons-socialmedias'>
                                <a href="" className='icons-footer'><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="" className='icons-footer'><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="" className='icons-footer'><i className="fa-brands fa-instagram"></i></a>
                                <a href="" className='icons-footer'><i className="fa-regular fa-envelope"></i></a>
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