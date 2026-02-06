export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProjectCategory = (category) => {
    const element = document.getElementById(`projects-${category}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>Shri Harsha Associates</h3>
          <p>
            Precision-driven construction and infrastructure solutions,
            defined by integrity, transparency, and uncompromised execution.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <span>Navigation</span>
            <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>About</a>
            <a href="/#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>

          <div>
            <span>Projects</span>
            <a href="/#projects-residential" onClick={(e) => { e.preventDefault(); scrollToProjectCategory('residential'); }}>Residential</a>
            <a href="/#projects-commercial" onClick={(e) => { e.preventDefault(); scrollToProjectCategory('commercial'); }}>Commercial</a>
            <a href="/#projects-interiors" onClick={(e) => { e.preventDefault(); scrollToProjectCategory('interiors'); }}>Interiors</a>
          </div>

          <div>
            <span>Contact</span>
            <p>No.7, Vivekanandhar Street</p>
            <p>Anna Nagar West</p>
            <p>Chennai - 600040</p>
            <p>+91 98414 19288</p>
            <p>info@shriharshaassociates.com</p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Shri Harsha Associates. All rights reserved.
        </span>
        <span className="footer-tagline">
          Built once. Built right.
        </span>
      </div>
    </footer>
  );
}