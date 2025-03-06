import ProductCard from "./ProductCard";
import MovingBackground from "./MovingBackground";
import WhatWeDo from "./WhatWeDo"; // Import the updated WhatWeDo component
import "./index.css";
import { motion } from "framer-motion";
import "./ProductCard.css";

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
          imageUrl="data:image/jpeg;base64,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" // Add image URL
        />
        <ProductCard
          name="IDEA Architecture"
          details="DWG & IFC ühilduv, IDEA Architecture on võimas 64-bitine BIM tarkvara 3D ja 2D arhitektuurseks disainiks, renderdamiseks, animatsiooniks, plaanimiseks, kuluarvestuseks ja ehitusdokumentatsiooniks.

IDEA on madala hinna alternatiiv Revit® või ArchiCAD® tarkvarale, samas kui see on lihtsam ja kiirem kasutada ning oluliselt odavam."
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
