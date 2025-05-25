import React from "react";
import "./style/AdditionalSection.css";

const AdditionalSection: React.FC = () => {
  // Function to handle button clicks
  const handleServiceButtonClick = (serviceName: string) => {
    if (serviceName === "CADproffi") {
      window.open("https://cadprofi.ee/", "_blank");
    } else if (serviceName === "CYPE - BIM Tarkvara Kõigile") {
      window.open("https://cype.ee/", "_blank");
    } else if (serviceName === "Tehniline Tugi") {
      alert("On tulekul!");
    }
  };

  return (
    <div className="additional-section">
      <div className="services-container">
        <div className="custom-content-title">
          <h2>Erinevad Pakkujad</h2>
        </div>
        <div className="custom-content">
          <div className="service">
            <h3>CADproffi</h3>
            <p>
              Aitab kiiremini projekteerida arhitektuurseid ja
              mehaanikaprojekte, samuti toru- ja elektripaigaldisi. Projektide
              koostamiseks ja muutmiseks saate kasutada suurt kogumit sümboleid
              ja objekte ning käsklusi.
            </p>
            <button
              className="service-button"
              onClick={() => handleServiceButtonClick("CADproffi")}
            >
              Loe Rohkem
            </button>
          </div>
          <div className="service">
            <h3>CYPE - BIM Tarkvara Kõigile</h3>
            <p>
              CYPE valik sisaldab tööriistu, mis muudavad BIM-i spetsialisti
              jaoks igapäevase töö lihtsamaks. Valige rakenduste rühm, mis sobib
              teie vajadustele kõige paremini ja uurige lähemalt allpool:
            </p>
            <button
              className="service-button"
              onClick={() =>
                handleServiceButtonClick("CYPE - BIM Tarkvara Kõigile")
              }
            >
              Loe Rohkem
            </button>
          </div>
          <div className="service">
            <h3>Tehniline Tugi</h3>
            <p>
              Pakume tehnilist tuge ja koolitusi, et aidata teil maksimaalselt
              ära kasutada meie tarkvara võimalusi.
            </p>
            <button
              className="service-button"
              onClick={() => handleServiceButtonClick("Tehniline Tugi")}
            >
              Loe Rohkem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSection;
