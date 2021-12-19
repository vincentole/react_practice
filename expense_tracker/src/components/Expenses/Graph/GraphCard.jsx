import Card from '../../global/Card';
import GraphItem from './GraphItem';

function GraphCard(props) {
    const maxValue = Math.max(...props.dataPoints.map(p => p.value));
    
    const graphListMonth = props.dataPoints.map((dataPoint, i) => {
        return <GraphItem key={i} label={dataPoint.label} value={dataPoint.value} maxValue={maxValue} />;
    });

    return (
        <Card className='bg-primary-grey flex justify-between items-center flex-wrap gap-y-2'>{graphListMonth}</Card>
    );
}

export default GraphCard;
