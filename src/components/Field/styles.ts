import fieldImage from '../../images/field.png';

export const styles = {
    fieldArea : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        background: '#FFFFFF',
        height: '100%',
        backgroundImage: `url(${fieldImage})`, // Using imported image
    backgroundSize: '70% auto', // Image height is 100% of the container, width adjusts automatically
    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
    backgroundPosition: 'center', // Optional: centers the image horizontally
    }
}