import React from "react";
import "./CTASection.css";

const CTASection = () => {
  const whatsappLink = "https://wa.me/917275747545";
  const phoneNumber = "+91-7275747545";
  const googleMapsLink = "https://maps.app.goo.gl/M55QXGgHGv27X6NW9";

  return (
    <section id="cta" className="cta">
      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-main">
            <p className="cta-tagline">Take the first step</p>
            <h2 className="cta-title">Ready to change your career?</h2>
            <p className="cta-subtitle">
              If you&apos;re willing to show up, code seriously and stay
              consistent for 6 months, Lucentico will give you the skills,
              projects and internship experience to chase a real developer job.
            </p>

            <ul className="cta-points">
              <li>No prior coding experience required.</li>
              <li>We keep the batch small so you get real attention.</li>
              <li>Everything happens offline at our office in Rajajipuram.</li>
            </ul>

            <div className="cta-actions">
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = whatsappLink)}
              >
                Book a Free Demo on WhatsApp
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
              >
                Call us: {phoneNumber}
              </button>
            </div>
          </div>

          <div className="cta-contact">
            <h3>Contact & Location</h3>
            <div className="cta-contact-row">
              <span className="cta-label">Phone</span>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </div>
            <div className="cta-contact-row">
              <span className="cta-label">WhatsApp</span>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
            <div className="cta-contact-row">
              <span className="cta-label">Location</span>
              <p>E-2600, Rajajipuram, Lucknow, Uttar Pradesh</p>
            </div>
            <button
              className="btn btn-primary cta-contact-row"
              onClick={() => (window.location.href = googleMapsLink)}
            >
              View on Google Maps
            </button>
            <p className="cta-small">
              Prefer talking instead of filling forms? Just call or message.
              We&apos;ll help you understand if the program is right for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
