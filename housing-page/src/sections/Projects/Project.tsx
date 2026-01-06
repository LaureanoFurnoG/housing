import './style.css'
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import ImageBackroundtest from '../../assets/image.png'
const Project = () =>{
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return(
        <>
            <section id='project'>
                <div className='Center-projects' style={{backgroundImage: `url(${ImageBackroundtest})`}}>
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
                        </Drawer>
                    </div>
                    <div className='inf-content-projects'>
                        <h2>Remodelación cocina completa</h2>
                        <p>Muebles en tonos claros con tiradores dorados, mesadas amplias y un diseño funcional en “L” que combina estilo y practicidad.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project