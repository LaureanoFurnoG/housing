import './style.css'
import ClientOp from '../../components/ClientOp/ClientOp'
import Juan from '../../assets/ClientsImage/Juan.png'
import { Carousel } from 'antd';

const Clients = () =>{
    return(
        <>
            <section id='Clients'>
                <h1>NUESTROS CLIENTES</h1>
                <div className='carouselWrapper'>
                    <Carousel autoplay arrows className='Normal'>
                        <div className='dupl-commets'>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                        </div>
                        <div className='dupl-commets'>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                        </div>
                    </Carousel>
                    <Carousel autoplay arrows className='responsive'>
                        <div className='dupl-commets'>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                        </div>
                        <div className='dupl-commets'>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                        </div>
                        <div className='dupl-commets'>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                        </div>
                        <div className='dupl-commets'>
                            <ClientOp ClientImage={Juan} Name={'Juan Jose'} Text={'La empresa demostró un alto nivel de profesionalismo en cada etapa del proyecto. Cumplieron con los plazos establecidos, brindaron un acompañamiento constante y supieron adaptar cada detalle a nuestras necesidades. El resultado final superó nuestras expectativas, reflejando calidad, compromiso y seriedad en su trabajo.'} RateNumber={5}></ClientOp>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Clients