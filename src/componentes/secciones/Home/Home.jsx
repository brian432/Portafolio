
const Home = ({active}) => {
  return (
    <div className={`padding home ${!active ? 'section-active padding' : 'center padding'}`}>
      <div className="titulo">
        <h1 className="div-izquierdo neon">Brian Cabrera</h1>
        <h2 className="div-derecho">Front-End Developer</h2>
      </div>
      <p style={{ display: `${!active ? '' : 'none'}` }}>Hola! Mi nombre es Brian Cabrera,
        soy desarrollador Front-End y futuro Full-Stack.
        Estoy en continuo aprendizaje. Las tecnologias que utilizo
      </p>
      <div id="div-iconos" className="cursor" style={{ display: `${!active ? '' : 'none'}` }}>
        <i title="HTML5" className="fab fa-html5"></i>
        <i title="CSS3" className="fab fa-css3-alt"></i>
        <i title="JavaScript" className="fab fa-js"></i>
        <i title="React" className="fab fa-react"></i>
        <i title="Bootstrap" className="fab fa-bootstrap"></i>
        <i title="Sass" className="fab fa-sass"></i>
      </div>
    </div>
  )
}

export default Home;