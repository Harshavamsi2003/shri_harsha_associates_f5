


import { useState } from "react";
import logo from "../assets/logo.png";
import founder from "../assets/founder3.png";
import EnquiryPanel from "../components/EnquiryPanel";
import EnquiryTab from "../components/EnquiryTab";
import FloatingSocials from "../components/FloatingSocials";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "../styles/about-page.css";

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <main className="about-page">

        {/* BRAND INTRO */}
        <section className="about-intro">
          <img src={logo} alt="Shri Harsha Associates Logo" />
          <h1>About Shri Harsha Associates</h1>
          <p className="about-tagline">
            Built on precision. Defined by integrity. Delivered with care.
          </p>
        </section>

        {/* COMPANY STORY */}
        <section className="about-story">
          <div className="story-header">
            <h2>Company Overview</h2>
            <div className="header-accent"></div>
          </div>

          <div className="story-content">
            <div className="story-quote">
              <p>"True quality permits no compromise"</p>
            </div>

            <p>
              At Shri Harsha Associates, we operate at the intersection of robust
              engineering and exquisite craftsmanship. We are not merely contractors;
              we are custodians of your most significant investments. Our reputation
              is forged by an unyielding tenet: that true quality permits no compromise.
              From complex commercial frameworks to bespoke private estates, we curate
              environments that stand as timeless testaments to our clients' visions,
              executed with surgical precision and unwavering transparency.
            </p>

            <p>
              To achieve this, we construct a seamless fusion of masterful,
              time-honored craftsmanship and avant-garde engineering solutions. We do
              not merely execute blueprints; we meticulously curate environments.
              Every facet of our work—from the unseen precision of the structural
              framework to the exquisite touch of the final finishes—is thoughtfully
              orchestrated to reflect your unique persona and lifestyle. We dedicate
              ourselves to crafting not just functional buildings, but immersive,
              bespoke living spaces that stand as timeless testaments to your vision.
            </p>

            <p>
              Our operational ethos is defined by a relentless pursuit of perfection.
              We believe that superior construction requires a seamless fusion of
              skilled human artistry and innovative technological solutions. We do
              not aim to meet industry benchmarks; we aim to set them. Every project
              is approached with a holistic methodology, ensuring that every
              detail—from the foundational concrete to the final architectural
              finish—is thoughtfully orchestrated to exceed the most demanding
              expectations.
            </p>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="founder-section">
          <div className="founder-image">
            <img src={founder} alt="Suresh Kumar - Founder" />
            <div className="image-frame"></div>
          </div>

          <div className="founder-content">
            <div className="founder-header">
              <h2>Founder Details</h2>
              <div className="header-accent"></div>
            </div>

            <h3>Suresh Kumar</h3>
            <span>Founder & Managing Director</span>

            <div className="founder-quote">
              <p>"Building dreams requires trust, earned through dedicated action"</p>
            </div>

            <p>
              Suresh Kumar is the nexus of focus and execution at Shri Harsha
              Associates. His approach to construction management is intensely
              focused and personal. He understands that constructing a dream
              project requires significant trust, and he earns that trust through
              visible, dedicated action.
            </p>

            <p>
              His approach to construction management is characterized by an
              intensely personalized and immersive methodology. Understanding that
              bringing a visionary project to fruition demands profound trust,
              Suresh cultivates that confidence through high-visibility, dedicated
              stewardship.
            </p>

            <p>
              Far from a distant executive, Suresh is deeply integrated into the
              lifecycle of every project. He personally has a highly specialized
              workforce of over 70 artisans, an elite collective meticulously
              selected for their keen workmanship and unwavering dedication to
              their trade.
            </p>

            <p>
              He prioritizes daily on-site quality reconnaissance to proactively
              mitigate risks and ensure project timelines are adhered to without
              compromise. Furthermore, he champions a culture of radical
              transparency, mandating daily progress briefings to ensure clients
              remain intimately connected to their project's development. Under
              Suresh's vigilant direction, clients are assured that their vision is
              being executed with surgical precision, meticulous care, and
              dedication.
            </p>
          </div>
        </section>

        {/* STATS - AT THE END */}
        <section className="about-stats">
          <div>
            <strong>15+</strong>
            <span>Years of Excellence</span>
          </div>
          <div>
            <strong>75+</strong>
            <span>Projects Delivered</span>
          </div>
          <div>
            <strong>150+</strong>
            <span>Satisfied Clients</span>
          </div>
          <div>
            <strong>70+</strong>
            <span>Specialized Artisans</span>
          </div>
        </section>

      </main>

      {/* FLOATING UI ELEMENTS */}
      <FloatingSocials />
      <EnquiryTab onOpen={() => setEnquiryOpen(true)} />
      <EnquiryPanel open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <WhatsAppFloat />
    </>
  );
}
