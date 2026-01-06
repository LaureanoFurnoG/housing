import './style.css'
import logo from '../../assets/Logo.svg'
import { useEffect, useState } from 'react'
const HeaderMenu = () =>{
    const [stateMenu, setStateMenu] = useState<boolean>(true)
    useEffect(() => {
        const onScroll = () => {
        const menu = document.getElementById('Menu')
            if (window.scrollY > 30) {
                menu?.classList.add('colorBar')
            } else {
                menu?.classList.remove('colorBar')
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const activeMenu = (state: boolean) =>{
        const ulResponsive = document.getElementById('ul-resp')
        if(state == true){
            ulResponsive?.classList.add('left')
            document.getElementById('Menu')?.classList.add('colorBar')
        }else{
            ulResponsive?.classList.remove('left')
        }
        setStateMenu(!stateMenu)
    }
    
    return(
        <>
            <header className='Menu' id='Menu'>
                <div className='containerMenu'>
                    <img src={logo} alt="logo housing" />
                    <ul>
                        <li><a href="#about">SOBRE NOSOTROS</a></li>
                        <li><a href="#Projects">PROYECTOS</a></li>
                        <li><a href="#Services">SERVICIOS</a></li>
                        <li><a href="#Clients">NUESTRAS VALORACIONES</a></li>
                    </ul>
                    <button className='btn-responsive' onClick={() => activeMenu(stateMenu)}><p>≡</p></button>
                    <button className='btn' onClick={() => location.href = '#Contact'}>CONTACTAR</button>
                </div>
                <ul className='ul-responsive' id='ul-resp'>
                    <li><a href="#about">SOBRE NOSOTROS</a></li>
                    <li><a href="#Projects">PROYECTOS</a></li>
                    <li><a href="#Services">SERVICIOS</a></li>
                    <li><a href="#Clients">NUESTRAS VALORACIONES</a></li>
                    <li><a href="#Contact">CONTACTAR</a></li>
                </ul>
            </header>
        </>
    )
}

export default HeaderMenu