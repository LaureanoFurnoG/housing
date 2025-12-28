import { useEffect } from 'react'
import './style.css'

type Props = {
    image: string
    socialName: string
}

const SocialOpen = ({image}:Props) =>{
    
    function openSocialBTN(){
        if(document.querySelector('.All-Container-Circles')?.classList.contains('NoContact-Circle')){
            document.querySelector('.All-Container-Circles')?.classList.remove('NoContact-Circle')
        }else{
            document.querySelector('.All-Container-Circles')?.classList.add('NoContact-Circle')
        }
    }

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 846) {
        const btn = document.querySelector('.ContactBTN')

        if (btn && window.getComputedStyle(btn).display === 'none') {
            document
            .querySelector('.All-Container-Circles')
            ?.classList.remove('NoContact-Circle')
        }
        }
    }

    handleResize() 

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <div className='Circle' onClick={() => openSocialBTN()}>
                <img src={image} alt={'open Social Contact'} />
            </div>
        </>
    )
}

export default SocialOpen