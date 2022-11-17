import PropTypes from 'prop-types';

// Functional Component
export const HelloWorldApp = ({ title, subTitle }) => {
    
    //console.log(props);

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
        </>
    );
}


// PropTypes
HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

// Default Props
HelloWorldApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo'
}