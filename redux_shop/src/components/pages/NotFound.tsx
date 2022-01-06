import BackToStore from '../ItemDetails/BackToStore';

const NotFound = () => {
    return (
        <>
            <header className='bg-gray-700'>
                <div className='max-w-4xl mx-auto py-6 px-8 flex justify-between'>
                    <h1 className='text-3xl text-white'>Redux Store</h1>
                    <BackToStore />
                </div>
            </header>

            <main className='space-y-4'>
                <div className='mt-12'></div>
                <section className='max-w-4xl mx-auto text-center'>404: The tem could not be found.</section>
            </main>
        </>
    );
};

export default NotFound;
