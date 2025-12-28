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

    useEffect(() => {
        const handleScrollChange = () => {
            if (window.scrollY >= 46) {
                const btn = document.getElementById('ContactBTN')
                if (btn) {
                    btn.style.display = 'flex'
                }

                const socialContainer = document.getElementById('SocialContainer')
                if (socialContainer){
                    socialContainer.style.bottom = '10px'
                }
            }else{
                const btn = document.getElementById('ContactBTN')
                if (btn) {
                    btn.style.display = 'none'
                }   
                if (btn && window.getComputedStyle(btn).display === 'none') {
                    document
                    .querySelector('.All-Container-Circles')
                    ?.classList.remove('NoContact-Circle')
                }

                const socialContainer = document.getElementById('SocialContainer')
                if (socialContainer){
                    socialContainer.style.bottom = 'auto'
                }
            }
        }

        handleScrollChange() 

        window.addEventListener('scroll', handleScrollChange)
        return () => window.removeEventListener('scroll', handleScrollChange)
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