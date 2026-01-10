import { Rate } from 'antd';

import './style.css'

type Props = {
    ClientImage: string
    Name: string
    Text: string
    RateNumber: number
}

const ClientOp = ({ClientImage, Name, Text, RateNumber}:Props) =>{
    
    return(
        <>
        <div className='Cont-Op-C'>
            <div className='Op-Client-Data'>
                <img src={ClientImage} alt={Name} />
                <h2>{Name}</h2>
                <Rate disabled defaultValue={RateNumber} />;
            </div>
            <div className='Text-Op-client'>
                <p>{Text}</p>
            </div>
        </div>
        </>
    )
}

export default ClientOp