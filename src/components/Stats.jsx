import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import statsBackground from "../assets/stats.png";

export default function Stats() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    cities: 0,
    years: 0,
  });
  const sectionRef = useRef(null);

  const finalCounts = {
    projects: 75,
    clients: 150,
    cities: 5,
    years: 15,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(finalCounts.projects * progress),
        clients: Math.floor(finalCounts.clients * progress),
        cities: Math.floor(finalCounts.cities * progress),
        years: Math.floor(finalCounts.years * progress),
      });

      if (currentStep >= steps) {
        setCounts(finalCounts);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const goToAbout = () => {
    navigate("/about");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div 
        className="stats-background" 
        style={{ backgroundImage: `url(${statsBackground})` }}
      ></div>
      
      <div className="stats-overlay"></div>

      <div className="stats-container">
        <div className="stats-content">
          <h2 className="stats-title">
            Building Excellence Since 2005
          </h2>
          <p className="stats-description">
            For nearly two decades, Shri Harsha Associates has established itself as 
            Chennai's trusted partner in construction and infrastructure excellence. Our 
            journey began with a clear vision: to deliver projects that stand as testaments 
            to quality, precision, and architectural integrity. From elegant residential 
            estates to landmark commercial developments, every structure we create reflects 
            our commitment to superior craftsmanship and engineering excellence. We don't 
            just construct buildings — we craft enduring spaces where families build memories 
            and businesses achieve their ambitions, all delivered with unwavering transparency 
            and dedication to perfection.
          </p>

          {/* Static Mini Cards */}
          <div className="mini-stats-grid">
            <div className="mini-stat-card">
              <div className="mini-stat-number">10,000+</div>
              <div className="mini-stat-label">Sq. Ft. Constructed</div>
            </div>
            <div className="mini-stat-card">
              <div className="mini-stat-number">95%</div>
              <div className="mini-stat-label">On-Time Delivery</div>
            </div>
            <div className="mini-stat-card">
              <div className="mini-stat-number">70%</div>
              <div className="mini-stat-label">Repeat Clients</div>
            </div>
            <div className="mini-stat-card">
              <div className="mini-stat-number">100+</div>
              <div className="mini-stat-label">Safe Man-Hours</div>
            </div>
          </div>

          <button onClick={goToAbout} className="stats-know-more">
            Know More
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fas fa-building"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counts.projects)}+
            </div>
            <div className="stat-label">Projects Delivered</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counts.clients)}+
            </div>
            <div className="stat-label">Trusted Clients</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fas fa-city"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counts.cities)}
            </div>
            <div className="stat-label">Cities</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-number">
              {formatNumber(counts.years)}+
            </div>
            <div className="stat-label">Successful Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}