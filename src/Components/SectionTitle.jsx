import PropTypes from 'prop-types';
const SectionTitle = ({title, description}) => {
    return (
        <div className="text-center mb-7">
            <h2 className="text-[#1A1919] text-5xl font-bold mb-3">{title}</h2>
            <p className="text-[#757575]">{description}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SectionTitle;