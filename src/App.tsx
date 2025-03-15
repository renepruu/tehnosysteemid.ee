import ProductCard from "./ProductCard";
import MovingBackground from "./MovingBackground";
import WhatWeDo from "./WhatWeDo"; // Import the updated WhatWeDo component
import "./index.css";
import { motion } from "framer-motion";
import "./ProductCard.css";
import "./CompanyInfo.css";

function App() {
  return (
    <>
      {/* Moving Background */}
      <MovingBackground />
      <WhatWeDo />

      {/* Animated Product Cards */}
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="product-container"
      >
        <ProductCard
          name="4M CAD PRO"
          details="4M CAD on tark alternatiiv AUTO CAD-ile. 100% DWG ühilduvus. Saab avada ja importida kõiki DWG faile. Sarnane tunnetus ja disain AUTO CADile, aga odavama hinna eest.
          "
          externalLink="https://cad.ee/toode/4m-cad-pro/?"
          imageUrl="https://4msa.com/images/4MCAD-LOGO-s-5.png" // Add image URL
        />
        <ProductCard
          name="IDEA Architecture"
          details="DWG & IFC ühilduv, IDEA Architecture on võimas 64-bitine BIM tarkvara 3D ja 2D arhitektuurseks disainiks, renderdamiseks, animatsiooniks, plaanimiseks ja ehitusdokumentatsiooniks.
IDEA on madala hinna alternatiiv Revit® või ArchiCAD® tarkvarale."
          externalLink="https://cad.ee/toode/idea-architecture/"
          imageUrl="https://www.4msa.com/images/IDEA/IDEAlogo.png" // Add image URL
        />
        <ProductCard
          name="FINE Elec"
          details="Fine ELEC on 4BIM arhitektuuri- ja inseneeritarkvara. AutoCAD-iga sarnasel platvormil baseeruv tarkvara, DWG failiformaat tagab võrreldatu ühilduvuse AutoCADiga."
          externalLink="https://cad.ee/toode/fineelec-30-paeva-tasuta-prooviversioon/"
          imageUrl="https://www.4msa.com/images/FINE/FineELEClogo.png" // Add image URL
        />
        <ProductCard
          name="FINE Fire"
          details="FineFIRE kuulub arhitektuuri- ja inseneeritarkvara 4M BIM Suite'i hulka. Kasutades DWG failivormingut oma põhilise failivorminguna AutoCAD-iga sarnases keskkonnas, on 4M BIM tarkvara tuntud kui BIM tarkvara, mis pakub kõige lihtsamat üleminekut CAD-kasutajatele ja suure tootlikkusega funktsioone vaid murdosa hinnaga võrreldes nende peamiste konkurentidega."
          externalLink="https://cad.ee/"
          imageUrl="https://www.4msa.com/images/FINE/FineFIRElogo.png" // Add image URL
        />
        <ProductCard
          name="FINE HVAC"
          details="FINE-HVAC ühendab disaini ja arvutused täielikult integreeritud keskkonnas, teostades kõik vajalikud arvutused mis tahes HVAC paigalduse jaoks otse joonistelt, genereerides kõik uuringu tulemused: arvutuslehed, tehnilised aruanded, materjalide nimekirjad ja kuluarvestused, samuti kõik lõplikud joonised (plaanivaated, paneelidiagrammid, detailid) täielikult uuendatult."
          externalLink="https://cad.ee/toode/fine-hvac/"
          imageUrl="https://www.4msa.com/images/FINE/FineHVAClogo.png" // Add image URL
        />
        <ProductCard
          name="FINE Sani"
          details="FineSANI on integreeritud tarkvaratööjaam sanitaardisaini jaoks, mis genereerib vajalikud arvutused otse joonistelt ning seejärel loob automaatselt lõplikud joonised (plaanivaated, paneelidiagrammid, detailid) ja täieliku juhtumiuuringu dokumentatsiooni koos materjalide nimekirja ja kuluarvestusega.
"
          externalLink="https://cad.ee/toode/fine-sani/"
          imageUrl="https://www.4msa.com/images/FINE/FineSANIlogo.png" // Add image URL
        />
      </motion.div>

      {/* What We Do Section */}

      <h3 className="company-name">TEHNOSÜSTEEMIDE OÜ</h3>
      <p className="company-description">
        Soovime teile häid kasutuskogemusi 4MCAD programmidega!
      </p>
      <div className="info">
        <h4>
          info@tehnosysteemid.ee Reg.nr: 11402865 Tabasalu alevik, Harku vald,
          Harju maakond, 76901 KMKR nr: EE101301873 LHV a/a:
          EE387700771000378168 Telefon: +372 554 9926
        </h4>
      </div>
    </>
  );
}

export default App;
