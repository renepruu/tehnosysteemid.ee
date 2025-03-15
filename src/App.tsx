import ProductCard from "./ProductCard";
import MovingBackground from "./MovingBackground";
import WhatWeDo from "./WhatWeDo"; // Import the updated WhatWeDo component
import "./index.css";
import { motion } from "framer-motion";
import "./ProductCard.css";
import "./CompanyInfo.css";
import "./AdditionalSection.css";
import AdditionalSection from "./AdditionalSection";

function App() {
  return (
    <>
      {/* Moving Background */}
      <MovingBackground />
      <WhatWeDo />

      {/* Animated Product Cards */}
      <motion.div className="product-container">
        <ProductCard
          name="4M CAD PRO"
          details="4M CAD on tark alternatiiv AUTO CAD-ile. 100% DWG ühilduvus. Saab avada ja importida kõiki DWG faile. Sarnane tunnetus ja disain AUTO CADile, aga odavama hinna eest."
          externalLink="https://cad.ee/toode/4m-cad-pro/?"
          imageUrl="https://4msa.com/images/4MCAD-LOGO-s-5.png"
        />
        <ProductCard
          name="IDEA Architecture"
          details="IDEA Architecture on võimas 64-bitine BIM tarkvara 3D ja 2D arhitektuurseks disainiks, renderdamiseks, animatsiooniks, plaanimiseks ja ehitusdokumentatsiooniks."
          externalLink="https://cad.ee/toode/idea-architecture/"
          imageUrl="https://www.4msa.com/images/IDEA/IDEAlogo.png"
        />
        <ProductCard
          name="FINE Elec"
          details="Fine ELEC on 4BIM arhitektuuri- ja inseneeritarkvara. AutoCAD-iga sarnasel platvormil baseeruv tarkvara, DWG failiformaat tagab võrreldatu ühilduvuse AutoCADiga."
          externalLink="https://cad.ee/toode/fineelec-30-paeva-tasuta-prooviversioon/"
          imageUrl="https://www.4msa.com/images/FINE/FineELEClogo.png"
        />
        <ProductCard
          name="FINE Fire"
          details="FineFIRE on 4M BIM tarkvara, mis pakub kõige lihtsamat üleminekut CAD-kasutajatele ja suure tootlikkusega funktsioone vaid murdosa hinnaga võrreldes nende peamiste konkurentidega."
          externalLink="https://cad.ee/"
          imageUrl="https://www.4msa.com/images/FINE/FineFIRElogo.png"
        />
        <ProductCard
          name="FINE HVAC"
          details="FINE-HVAC ühendab disaini ja arvutused täielikult integreeritud keskkonnas, mis tahes HVAC paigalduse jaoks otse joonistelt, genereerides kõik uuringu tulemused: arvutuslehed, tehnilised aruanded, materjalide nimekirjad ja kuluarvestused, plaanivaated, paneelidiagrammid ja muud detailid."
          externalLink="https://cad.ee/toode/fine-hvac/"
          imageUrl="https://www.4msa.com/images/FINE/FineHVAClogo.png"
        />
        <ProductCard
          name="FINE Sani"
          details="FineSANI on integreeritud tarkvaratööjaam sanitaardisaini jaoks, mis genereerib vajalikud arvutused otse joonistelt ning seejärel loob automaatselt lõplikud joonised (plaanivaated, paneelidiagrammid, detailid) ja täieliku juhtumiuuringu dokumentatsiooni koos materjalide nimekirja ja kuluarvestusega."
          externalLink="https://cad.ee/toode/fine-sani/"
          imageUrl="https://www.4msa.com/images/FINE/FineSANIlogo.png"
        />
      </motion.div>
      {/* Custom Section */}
      <AdditionalSection />
      {/* Company Info Section */}
      <div className="company-info-section">
        <div className="company-info">
          <h3 className="company-name">Tehnosüsteemide OÜ</h3>
          <p className="company-description">
            Oleme 4M CAD & BIM projekteerimise tarkvara ametlik edasimüüja
            Eestis. Pakume 4M CAD tarkvara alternatiivina DWG
            joonestamisprogrammile Autocad®.
          </p>
          <div className="info">
            <h4>
              info@tehnosysteemid.ee Reg.nr: 11402865 Tabasalu alevik, Harku
              vald, Harju maakond, 76901 KMKR nr: EE101301873 LHV a/a:
              EE387700771000378168 Telefon: +372 554 9926
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
