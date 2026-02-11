export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* TITLE */}
        <div className="services-intro">
          <h2>Our Services</h2>
        </div>

        {/* TOP THREE WITH IMAGES */}
        <div className="services-primary">

          <div className="primary-item">
            <h3>Residential</h3>
            <h4>Private Residences</h4>
            <img 
    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070" 
    alt="Residential Architecture" 
  />
            <p>
              Bespoke homes crafted with architectural precision, refined
              detailing, and lifestyle-driven design — creating timeless,
              deeply personal living environments that balance elegance,
              comfort, and long-term functionality.
            </p>
          </div>

          <div className="primary-item">
            <h3>Commercial</h3>
            <h4>Corporate Environments</h4>
             <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          alt="Commercial Projects"
            />
            <p>
              Performance-driven commercial spaces engineered for operational
              efficiency, adaptability, and long-term business value —
              seamlessly integrating architectural expression with functional
              workplace design.
            </p>
          </div>

          <div className="primary-item">
            <h3>Interiors</h3>
            <h4>Interior Architecture</h4>
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop"
              alt="Interior Projects"
            />
            <p>
              Integrated interior solutions where spatial planning, material
              selection, and refined detailing converge to create immersive,
              elegant, and enduring interior environments.
            </p>
          </div>

        </div>

        {/* SMALL DIVIDER LINE (NEW) */}
        <div
          style={{
            width: "80px",
            height: "1px",
            backgroundColor: "#999",
            margin: "50px auto 30px",
            opacity: 0.6
          }}
        />

        {/* DESCRIPTION LINE */}
        <div className="services-description">
          <p>
            We offer a comprehensive suite of construction and infrastructure
            services, executed with precision, integrity, and uncompromising
            attention to detail.
          </p>
        </div>

        {/* SIX SERVICE CARDS (FINAL) */}
        <div className="services-grid">

          <div className="service-card">
            <h5>Residential Construction</h5>
            <p>
              End-to-end execution of private residences, encompassing
              structural engineering, architectural coordination, premium
              finishes, and quality-controlled site execution.
            </p>
          </div>

          <div className="service-card">
            <h5>Commercial Buildings</h5>
            <p>
              Construction of commercial and mixed-use developments with
              emphasis on structural integrity, compliance, and long-term
              asset performance.
            </p>
          </div>

          <div className="service-card">
            <h5>Infrastructure Development</h5>
            <p>
              Comprehensive infrastructure solutions executed with strict
              adherence to engineering standards, safety protocols, and
              sustainability practices.
            </p>
          </div>

          <div className="service-card">
            <h5>Renovation & Remodeling</h5>
            <p>
              Thoughtful renovation and transformation of existing spaces,
              blending modern engineering techniques with refined detailing.
            </p>
          </div>

          <div className="service-card">
            <h5>Project Management</h5>
            <p>
              Complete project stewardship including planning, scheduling,
              quality assurance, contractor coordination, and transparent
              communication.
            </p>
          </div>

          <div className="service-card">
            <h5>Design Coordination</h5>
            <p>
              Seamless coordination between architects, consultants,
              engineers, and clients to translate design intent into
              technically sound outcomes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
