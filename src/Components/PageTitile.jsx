import PropTypes from 'prop-types';
const PageTitile = ({pageTitle}) => {
    return (
        <div className='h-[200px] relative flex items-center bg-[rgba(126,_144,_254,_0.05)]'>
            <div className="c_container">
                <h2 className='text-3xl text-center font-semibold'>{pageTitle}</h2>
            </div>
            <img className='absolute left-0 bottom-0 h-[150px]' src="/images/bg1.png" alt="" />
            <img className='absolute right-0 top-0 h-[150px]' src="/images/bg2.png" alt="" />
        </div>
    );
};

PageTitile.propTypes = {
    pageTitle: PropTypes.string,
}

export default PageTitile;