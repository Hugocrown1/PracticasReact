import PropTypes from 'prop-types';

const Portada = ({titulo='Desarrollo Web 1',fecha='1999'}) => {
  return (
    <div>
        
            <h1>{titulo}</h1>
        <h2>{fecha}</h2>
        <h2>Hola</h2>
    
    
    </div>
  )
}

Portada.propTypes = {
    titulo: PropTypes.string,
    fecha: PropTypes.number
}

export default Portada