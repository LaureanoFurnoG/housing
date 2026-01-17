import './style.css'
import { useState } from 'react';
import { Button, Carousel, Drawer} from 'antd';
import ImageBackroundPileta from '../../assets/Works/PilProject.jpg'
import ImageBackroundPiletaLater from '../../assets/Works/PilProject-later.jpeg'
import ImageS from '../../assets/Works/suelo.svg'
import ImageSF from '../../assets/Works/sueloF.svg'

const Project = () =>{
    const [open, setOpen] = useState(false);

    const [Projects,] = useState([
        {
            id: 0,
            imagen: ImageBackroundPileta,
            imagen2: ImageBackroundPiletaLater,
            title: 'Remodelación pileta completa', 
            text: 'Transformamos una pileta en desuso en un espacio moderno y funcional. Realizamos la renovación integral del revestimiento, mejoras estructurales y puesta a punto de la iluminación, logrando un acabado prolijo, duradero y visualmente atractivo. Un antes y después que devuelve vida, confort y valor al espacio.'
        },
        {
            id: 1,
            imagen: ImageS,
            imagen2: ImageSF,
            title: 'Renovación Profesional de Pisos de Madera', 
            text: 'Reparación, colocación, pulido y embellecimiento de pisos de madera. Devolvemos vida y elegancia a tu suelo con terminaciones prolijas, duraderas y de alta calidad.'
        },
    ])
    const [selectedProject, setSelectedProject] = useState(Projects[0])

    const selectProject = (id: number) =>{
        setSelectedProject(Projects[id])
    }
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    return(
        <>
            <section id='Projects'>
                <div className="Center-projects">  
                    <div className="carousel-bg">
                        <Carousel autoplay effect="fade">
                            <div>
                                <div 
                                    className="bg-slide"
                                    style={{ background: `url(${selectedProject.imagen})` }}
                                />
                            </div>
                            <div>
                                <div 
                                    className="bg-slide"
                                    style={{ background: `url(${selectedProject.imagen2})` }}
                                />                            
                            </div>
                        </Carousel>
                    </div>
                    <div className='Sup-content-projects'>
                        <h1>NUESTROS PROYECTOS</h1>
                        <Button type="primary" onClick={showDrawer}>
                            VER MAS PROYECTOS
                        </Button>
                        <Drawer className='drawer-custom'
                            title="Nuestros proyectos"
                            closable={{ 'aria-label': 'Close Button' }}
                            onClose={onClose}
                            open={open}
                        >
                            <div className='ScrollProjects'>
                                {Projects.map(n =>
                                    <img onClick={() => selectProject(n.id)} className='image-project' src={n.imagen} alt="" />
                                )}
                            </div>
                        </Drawer>
                    </div>
                    <div data-aos="fade-right" className='inf-content-projects'>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.text}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project