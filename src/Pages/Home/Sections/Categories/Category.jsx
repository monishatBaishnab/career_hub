import PropTypes from 'prop-types';
const Category = ({category}) => {
    return (
        <div className='bg-[rgba(152,_115,_255,_0.05)] p-10 rounded-md'>
            <div className='h-[70px] w-[70px] bg-[rgba(152,_115,_255,_0.1)] mb-8 flex items-center justify-center rounded-md'>
                <img src={category.logo} alt={category.category_name} />
            </div>
            <div>
                <h4 className='text-xl text-[#474747] font-bold mb-2'>{category.category_name}</h4>
                <h5 className='text-[#A3A3A3] font-medium'>{category.availability}</h5>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object,
}

export default Category;