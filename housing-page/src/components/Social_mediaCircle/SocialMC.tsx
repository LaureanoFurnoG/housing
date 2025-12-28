import './style.css'

type Props = {
    link: string
    image: string
    socialName: string
}

const SocialMC = ({link, image, socialName}:Props) =>{
    return(
        <>
            <div className='Circle' onClick={() => location.href = link}>
                <img src={image} alt={socialName} />
            </div>
        </>
    )
}

export default SocialMC