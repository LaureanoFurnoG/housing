import './style.css'
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import ImageBackroundtest from '../../assets/image.png'
import ImageTest from '../../assets/banner.png'
const Project = () =>{
    const [open, setOpen] = useState(false);
    const [Projects,] = useState([
        {
            id: 0,
            imagen: ImageBackroundtest, 
            title: 'Remodelación cocina completa', 
            text: 'Muebles en tonos claros con tiradores dorados, mesadas amplias y un diseño funcional en “L” que combina estilo y practicidad.'
        },
        {
            id: 1,
            imagen: ImageTest, 
            title: 'Test', 
            text: 'testtttttttttttttttttttttt'
        },
        {
            id: 2,
            imagen: ImageBackroundtest, 
            title: 'Remodelación cocina completa', 
            text: 'Muebles en tonos claros con tiradores dorados, mesadas amplias y un diseño funcional en “L” que combina estilo y practicidad.'
        },
        {
            id: 3,
            imagen: ImageBackroundtest, 
            title: 'Remodelación cocina completa', 
            text: 'Muebles en tonos claros con tiradores dorados, mesadas amplias y un diseño funcional en “L” que combina estilo y practicidad.'
        },
        {
            id: 4,
            imagen: ImageBackroundtest, 
            title: 'Remodelación cocina completa', 
            text: 'Muebles en tonos claros con tiradores dorados, mesadas amplias y un diseño funcional en “L” que combina estilo y practicidad.'
        }
        
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
                <div
                className="Center-projects"
                style={{
                    backgroundImage: `linear-gradient(#2d3a40de, #2d3a4060), url(${selectedProject.imagen})`,
                }}
                >  
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
                    <div className='inf-content-projects'>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.text}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project