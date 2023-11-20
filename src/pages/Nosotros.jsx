import './Nosotros.scss'

const Nosotros = () => {
  return (
    <main>
    <div className="nosotros-header">
      <div className="nosotros-header__img">
        <img src="/img/nosotros.jpg" alt="Comunidad" />
      </div>
      <h2 className="nosotros-header__title">Jacaranda, tu destino definitivo para la moda unisex con estilo y actitud.</h2>
    </div>

    <section className="nosotros-section">
      <p className="nosotros-section__text">Desde nuestra fundación, nos hemos comprometido a ofrecer una experiencia de compra única que trasciende los límites tradicionales de género en la moda.</p>
      <p className="nosotros-section__text">En Jacaranda, creemos en la expresión individual y la autenticidad. Nuestra pasión por la moda sin género nació de la idea de que la ropa no debería estar restringida por convenciones preestablecidas. Nos esforzamos por romper barreras y desafiar las normas de género, brindándote una selección diversa de prendas y accesorios que te permiten expresar tu estilo personal sin restricciones.</p>
      <p className="nosotros-section__text">Nuestro equipo está compuesto por apasionados diseñadores y amantes de la moda que están constantemente explorando las últimas tendencias y estilos. Nos enorgullece ofrecer una amplia gama de opciones, desde prendas clásicas y atemporales hasta piezas vanguardistas y audaces. Cada artículo en nuestra tienda ha sido cuidadosamente seleccionado para garantizar la máxima calidad y estilo.</p>
      <p className="nosotros-section__text">Además de nuestra dedicación a la moda, también nos comprometemos con la sostenibilidad y la responsabilidad social. Trabajamos con proveedores y fabricantes que comparten nuestros valores y están comprometidos con prácticas éticas y respetuosas con el medio ambiente.</p>
      <p className="nosotros-section__text">En Jacaranda, no solo estamos aquí para venderte ropa, sino también para inspirarte a ser tú mismo(a) sin restricciones. Te invitamos a explorar nuestra colección y descubrir el poder de la moda sin género. Únete a nosotros en esta emocionante aventura y ayúdanos a redefinir la forma en que experimentamos la moda.</p>
      <p className="nosotros-section__text">Gracias por ser parte de nuestra comunidad.</p>

      <div className="nosotros-section__valores-container">
        <h2 className="nosotros-section__title">Nuestros Valores</h2>
        <h3 className="nosotros-section__valores">Diversidad</h3>
        <h3 className="nosotros-section__valores">Igualdad</h3>
        <h3 className="nosotros-section__valores">Ética</h3>
      </div>
      
    </section>
  </main>
  )
}

export default Nosotros