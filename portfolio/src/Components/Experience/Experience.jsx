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
                        <h4>Soy parte del equipo de desarrolladores .Net de ALT Consultores.
                            Actualmente estoy trabajando para el cliente Naldo, en el área de soporte
                            dando mantenimiento al sistema. En el mismo, trabajo con .Net Framework, Windows Forms,
                            WCF, SQL Server, Jira, Bitbucket, Git, entre otras herramientas
                        </h4>
                    </span>
                </article>
            </div>

            <div className="col-sm-4 center-block about-item">
                <article className="about-item-One">
                    <header>
                        <h3 className="experience-title">Desarrollador Freelance Fullstack</h3>
                        <h4 className="experience-time">2018-Actualidad</h4>
                    </header>
                    <span><h4>Cotizo y realizo sistemas a medida para pequeños y medianos emprendedores. Algunos proyectos
                        mencionados previamente fueron destinados a clientes. He realizado desde pequeños sistemas desktop
                        con Windows Forms hasta grandes sistemas en cloud con arquitecturas de microservicios
                    </h4>
                    </span>
                </article>
            </div>

            <div className="col-sm-4 center-block about-item">
                <article className="about-item-One">
                    <header>
                        <h3 className="experience-title">Profesor particular</h3>
                        <h4 className="experience-time">2019-Actualidad</h4>
                    </header>
                    <span>
                        <h4>
                            Doy clases personalizadas de matemáticas y programación, desde niveles iniciales hasta universitarios.
                            Encontré la docencia como una herramienta de satisfacción personal y afiance de conocimientos
                        </h4>
                    </span>
                </article>
            </div>
        </div>
    </section>
}