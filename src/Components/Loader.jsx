import { Bars } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-white/70 flex items-center justify-center'>
            <Bars
                height="80"
                width="80"
                color="#7E90FE"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;