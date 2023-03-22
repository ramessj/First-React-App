import PropTypes from 'prop-types'

const mensaje = "Hola!";

const objeto = {
    name: 'Ramiro',
    lastname: 'Quesada',
    getName(){
        return  this.name + " " + this.lastname;
        
    },
    getFormalName(){
        return `${this.lastname}, ${this.name}`;
    },
};

const getSuma = (a, b) =>{
    return a+b;
};


export const FirstApp = ({title, subTitle, name}) => {
	
    //console.log(props)

    // if(!title){
    //     throw new Error('El titulo no existe');
    // };
    
    return (
    <>
    <div>First App</div>
    <p>{mensaje}</p>
    <p>Soy Ramiro</p>
    {/* <p>{objeto}</p>  RETORNA UN ERROR NO SE PUEDEN RENDERIZAR OBJETOS COMO TAL*/}
    <p>{objeto.getName()}</p>
    <p>{objeto.getFormalName()}</p>
    <p>{getSuma(2, 4)}</p>
    <h2>{title}</h2>
    <h3>{subTitle}</h3>
    <h4>{name}</h4>
    </>
)};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo",
    name: "Ramiro Quesada"
}