export const AboutMe = () => {
  
  const age = new Date().getFullYear() - 1998 - 
    (new Date() < new Date(new Date().getFullYear(), 3, 24) ? 1 : 0); //24 de marzo de 1998

  return <section id="myLikes">
    <div className="container">
      <div className="row aboutme">
        <div className="col-lg-12 text-center">
          <h2>¿Quien soy?</h2><br></br>
          <h4>Soy un chico argentino de {age} años de edad,
            estudiante avanzado de ingeniería en informática
            en la Universidad Nacional Arturo Jauretche.
            Programador y profesor particular de matemáticas y de programación.
          </h4>

          <hr className="star-primary" />

          <h2 id="space-1">Lo que me apasiona</h2><br></br>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 portfolio-item">
          <a
            className="portfolio-link text-center"
            data-toggle="modal"
          >
            <span

              className="fa fa-fw fa-keyboard-o"
              aria-hidden="true"
              title="Keyboard"
            />
          </a>
          <article className="portfolio-item-Two">
            <header>
              <h3>Desarrollo full stack</h3>
            </header>
            <span>
              <h4>
                Soy desarrollador Full Stack, con experiencia en todo el ciclo de desarrollo de una aplicación: desde el diseño hasta su implementación. 
                Trabajo tanto en el front-end como en el back-end, y cuento con conocimientos en diversas tecnologías que puedo aplicar en proyectos actuales o futuros.</h4>
            </span>
          </article>
        </div>
        <div className="col-lg-3 portfolio-item">
          <a
            className="portfolio-link text-center"
            data-toggle="modal"
          >
            <span
              className="fa fa-fw fa-headphones"
              aria-hidden="true"
              title="Musico"
            />
          </a>
          <article className="portfolio-item-One">
            <header>
              <h3>Musica</h3>
            </header>
            <span>
              <h4>
                La música es una de mis grandes pasiones. Toco guitarra, saxo y bajo, y me gusta explorar distintos estilos. Mis favoritos son el jazz, el heavy metal y la música instrumental</h4>
            </span>
          </article>
        </div>

        <div className="col-lg-3 portfolio-item">
          <a
            className="portfolio-link text-center"
            data-toggle="modal"
          >
            <span
  className="fa fa-fw fa-calculator"
  aria-hidden="true"
  title="Calculadora"
/>

          </a>
          <article className="portfolio-item-Three">
            <header>
              <h3>Matemáticas</h3>
            </header>
            <span>
              <h4>
                Me apasionan las matemáticas, especialmente los temas más avanzados como el análisis complejo, ecuaciones diferenciales parciales,
                álgebra abstracta y teoría de números. Disfruto de profundizar en los conceptos más desafiantes. </h4>
            </span>
          </article>
          
        </div>

        <div className="col-lg-3 portfolio-item">
          <a
            className="portfolio-link text-center"
            data-toggle="modal"
          >
            <span
              className="fa fa-fw fa-gamepad"
              aria-hidden="true"
              title="Gamepad"
            />
          </a>
          <article className="portfolio-item-Three">
            <header>
              <h3>Videojuegos</h3>
            </header>
            <span>
              <h4>
                En mis ratos libres me gusta jugar
                videojuegos competitivos como Quake,
                Counter-Strike, Rocket-League y Ajedrez,
                entre otros. </h4>
            </span>
          </article>
          
        </div>
      </div>
    </div>
  </section>
}