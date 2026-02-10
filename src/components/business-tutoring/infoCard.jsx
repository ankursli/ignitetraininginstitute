import InfoCardLeft from "./InfoCardLeft";
import InfoCardForm from "./InfoCardForm";

export default function InfoCard() {
  return (
    <div className="info-card-container">
      <div
        className="position-relative overflow-hidden"
        style={{
          height: "100%",
        }}
      >
        {/* Content container */}
        <div className="position-relative h-100" style={{ zIndex: 1 }}>
          <div className="row g-0 h-100">
            {/* Left Section (Static Text - LCP Optimized) */}
            <InfoCardLeft />

            {/* Right Section (Interactive Form) */}
            <InfoCardForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        .info-card-container {
          width: 100%;
          height: 100%;
        }

        /* iPad Mini (768px - 820px) */
        @media (min-width: 768px) and (max-width: 820px) {
          .position-relative.overflow-hidden {
            min-height: 650px !important;
          }
        }

        /* iPad Pro */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .position-relative.overflow-hidden {
            min-height: 600px !important;
          }
        }

        @media (max-width: 991.98px) {
          .position-relative.overflow-hidden {
            position: relative;
            background-image: none !important;
            background-size: cover !important;
            background-position: top !important;
            background-repeat: no-repeat;
          }

          .row.g-0.h-100 {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}