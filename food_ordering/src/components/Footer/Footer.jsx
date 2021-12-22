/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer(props) {
    const currYear = new Date().getFullYear();
    return (
        <footer className={`bg-rose-900 text-white text-sm ${props.className}`}>
            <div className='cstm-container min-h-[3.5rem] px-8 flex justify-between items-center shadow-md shadow-black/10'>
                <span>Order Food © {currYear}</span>
                <nav>
                    <ul className='space-x-4'>
                        <a href='#'>Contact</a>
                        <a href='#'>Map</a>
                        <a href='#'>Call</a>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
