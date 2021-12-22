import Card from '../global/Card';
import Tag from '../global/Tag';

function Restaurant() {
    return (
        <Card className='w-[70%] mx-auto text-center -translate-y-2/3'>
            <h1 className='text-3xl pt-4'>Italian Street Food</h1>
            <div className='py-4 flex justify-center gap-2'>
                <Tag>Italian</Tag>
                <Tag>Healthy</Tag>
            </div>
            <div className='pb-4'>6 Gracechurch Street, London, EC3V 0AT</div>
        </Card>
    );
}

export default Restaurant;
