import { Experience } from "../Experience/Experience";
export const Skills = () => {
  return <section id="about">
    <div className="container">
      <div className="row habilidades">
        <div className="col-lg-12 text-center">
          <h2>HABILIDADES</h2>
          <hr className="star-primary" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>
              <h3>Backend .Net</h3>
            </header>
            <span>
              <h4>C#, POO, Api Rest, ORM Entity Framework, DAO.Net, arquitectura de microservicios y monolítica, patrones de diseño,
                inyección de dependencias,  estructuras de datos, Windows Forms, WCF</h4>
            </span>
          </article>
        </div>

        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>
              <h3>Frontend React</h3>
            </header>
            <span><h4>Html, Css, Javascript, Manejo de jsons, api fetch,
              carga dinámica de datos, Node.js, Express.js,
              Electron.js, React, Bootstrap
            </h4>
            </span>
          </article>
        </div>

        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>
              <h3>Databases Sql y NoSql</h3>
            </header>
            <span>
              <h4>Diagrama entidad-relacion, SQL (MySql, MariaDB y
                SQLServer, utilizando procedimientos almacenados e índices), NoSql (MongoDb, Cassandra, Redis)
              </h4>
            </span>
          </article>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>

              <h3>Metodologias agiles</h3>
            </header>
            <span>
              <h4>
                Scrum, Kanban, Scrumban, Xp
              </h4>
            </span>
          </article>
        </div>

        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>
              <h3>Diseño - Adobe</h3>
            </header>
            <span><h4>Adobe XD, Adobe Illustrator y Adobe photoshop.
              Sony Vegas para edición de video. Blender para modelado y animado 3D</h4>

            </span>
          </article>
        </div>

        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>
              <h3>En proceso de aprendizaje</h3>
            </header>
            <span>
              <h4>Azure Cloud y Angular</h4>
            </span>
          </article>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-4 center-block about-item'></div>
        <div className="col-sm-4 center-block about-item">
          <article className="about-item-One">
            <header>
              <h3>Otros</h3>
            </header>
            <span>
              <h4>
                Docker, Azure, Git, Jira, Bitbucket, Postman, Swagger, VS Code, VS Community,
                HeidiSql, SQL Server Managment Studio, Heroku, MongoDb Compass,
                MongoDb Atlas<br />Lenguajes: Python, Smalltalk, Java
              </h4>
            </span>
          </article>
        </div>
      </div>
      <div className='col-sm-4 center-block about-item'></div>
      <Experience />
    </div>

  </section>
}