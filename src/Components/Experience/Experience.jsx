import './Experience.css';

export const Experience = () => {
    return <section id="portfolio" >
        <div className="container">
            <div className="row cv">
                <div className="col-lg-12 text-center">
                    <h2>Experiencia</h2>
                    <hr className="star-primary" />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-4 center-block about-item">
                <article className="about-item-One">
                    <header>
                        <h3 className="experience-title">Desarrollador .Net en ALT Consultores</h3>
                        <h4 className="experience-time">2022-Actualidad</h4>
                    </header>
                    <span>
                        <h4>Formo parte del equipo de desarrolladores .NET en ALT Consultores. 
                            Actualmente me encuentro asignado al cliente Naldo, colaborando en 
                            el área de desarrollos evolutivos como desarrollador Full Stack (.NET + React).
                            Mis responsabilidades incluyen la planificación, desarrollo y presentación de proyectos, 
                            en su mayoría nuevos. Varios de estos proyectos fueron presentados y entregados exitosamente, 
                            cumpliendo con los plazos y objetivos establecidos. Trabajo con tecnologías como .NET 8 / .NET Framework, 
                            React, Docker, Windows Forms, WCF, SQL Server, PostgreSQL, Jira, Bitbucket, Git, entre otras herramientas.
                        </h4>
                    </span>
                </article>
            </div>

            <div className="col-sm-4 center-block about-item">
                <article className="about-item-One">
                    <header>
                        <h3 className="experience-title">Desarrollador Freelance Fullstack</h3>
                        <h4 className="experience-time">2018-2023</h4>
                    </header>
                    <span>
                        <h4>
                            Diseñé y desarrollé sistemas a medida para emprendedores. 
                            Algunos de estos proyectos fueron mencionados anteriormente como casos reales para clientes.
                            He trabajado desde aplicaciones de escritorio en Windows Forms, hasta sistemas distribuidos 
                            en la nube con arquitecturas de microservicios.
                        </h4>
                    </span>
                </article>
            </div>

            <div className="col-sm-4 center-block about-item">
                <article className="about-item-One">
                    <header>
                        <h3 className="experience-title">Profesor particular</h3>
                        <h4 className="experience-time">2019-2023</h4>
                    </header>
                    <span>
                        <h4>
                            Brindé clases personalizadas de matemáticas y programación, desde niveles iniciales hasta universitarios avanzados.
                            La docencia me permitió afianzar conocimientos y generar vínculos basados en el acompañamiento y la satisfacción de los estudiantes.
                        </h4>
                    </span>
                </article>
            </div>
        </div>
    </section>
}