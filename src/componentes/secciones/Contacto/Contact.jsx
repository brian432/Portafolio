import { useForm, ValidationError } from '@formspree/react';
const Contacto = ({ active }) => {
  const [state, handleSubmit] = useForm("xayarnjr");
  return (
    <section id="Contacto" className={!active ? 'section-active padding' : 'center padding'}>
      <div className='div-izquierdo'>
        <h1>Contacto</h1>
        <div className='info' style={{ display: `${!active ? '' : 'none'}` }}>
          <p>
            Si deseas contactarme para ayudarte,
            colaborar o solamente solicitar información sobre mí o sobre cualquiera de los trabajos expuestos en mi portafolio,
            por favor, contacta conmigo, estaré encantado de atenderte.
          </p>
          <div >
            <h3>LinkedIn</h3>
            <a href='https://www.linkedin.com/in/brian-cabrera1/'>https://www.linkedin.com/in/brian-cabrera1/</a>
          </div>
          <div>
            <h3>Github</h3>
            <a href='https://github.com/brian432'>https://github.com/brian432</a>
          </div>
        </div>
      </div>
      <div className='div-derecho' style={{ display: `${!active ? '' : 'none'}` }}>
        <form onSubmit={handleSubmit}>
          <input id="name" type="text" name="name" placeholder="Nombre" required />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
          <input id="email" type="email" name="email" placeholder="Email" required />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea id="message" name="message" placeholder="Mensaje..." required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="btn-form hover">Enviar</button>
        </form>
      </div>
      <div id="iconos-contacto" style={{ display: `${!active ? '' : 'none'}` }}>
        <a href="https://www.linkedin.com/in/brian-cabrera1" target="_blank" rel="noopener noreferrer" ><i id="linkedin" className="fab fa-linkedin"></i></a>
        <a href="https://github.com/brian432" target="_blank" rel="noopener noreferrer" ><i id="github" className="fab fa-github-square"></i></a>
      </div>
    </section>
  )
}

export default Contacto;