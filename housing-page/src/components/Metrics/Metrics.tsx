import './style.css'
import CountUp from 'react-countup';

interface Metric{
    Name: string;
    Number: number;
}
interface Data{
    MetricD: Metric[];
}


const Metrics = ({MetricD}:Data) =>{
    return(
        <>
            <div className='box-container-metrics'>
                <div className="case">
                    <h2>+<CountUp end={MetricD[0].Number} /></h2>
                    <p>{MetricD[0].Name}</p>
                </div>
                <div className="case case-middle">
                    <h2>+<CountUp end={MetricD[1].Number} /></h2>
                    <p>{MetricD[1].Name}</p>
                </div>
                <div className="case">
                    <h2>+<CountUp end={MetricD[2].Number} /></h2>
                    <p>{MetricD[2].Name}</p>
                </div>
            </div>     
        </>
    )

}

export default Metrics