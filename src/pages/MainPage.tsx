import ProductCard from "../components/ProductCard";
import MovingBackground from "../components/MovingBackground";
import WhatWeDo from "../components/WhatWeDo";
import AdditionalSection from "../components/AdditionalSection";
import Navbar from "../components/Navbar";
import "../style/index.css";
import "../style/ProductCard.css";
import "../style/CompanyInfo.css";
import "../style/AdditionalSection.css";
import { motion } from "framer-motion";
import CompanyInfo from "../components/CompanyInfo";
import logo4mCAD from "../assets/pictures/4mCADlogo.png";
import logoFineELEC from "../assets/pictures/FineELEClogo.png";
import logoFineFIRE from "../assets/pictures/FineFIRElogo.png";
import logoFineHVAC from "../assets/pictures/FineHVAClogo.png";
import logoFineSANI from "../assets/pictures/FineSANIlogo.png";
import logoIDEA from "../assets/pictures/IDEAlogo.png";


function MainPage() {
  return (
    <>
      {/* Moving Background */}
      <Navbar />
      <MovingBackground />
      <WhatWeDo />

      {/* Animated Product Cards */}
      <motion.div className="product-container">
        <ProductCard
          name="4M CAD PRO"
          details="4M CAD on tark alternatiiv AUTO CAD-ile. 100% DWG ühilduvus. Saab avada ja importida kõiki DWG faile. Sarnane tunnetus ja disain AUTO CADile, aga odavama hinna eest."
          externalLink="https://cad.ee/toode/4m-cad-pro/?"
         // imageUrl="https://4msa.com/images/4MCAD-LOGO-s-5.png"
          imageUrl={logo4mCAD}
        />
        <ProductCard
          name="IDEA Architecture"
          details="IDEA Architecture on võimas 64-bitine BIM tarkvara 3D ja 2D arhitektuurseks disainiks, renderdamiseks, animatsiooniks, plaanimiseks ja ehitusdokumentatsiooniks."
          externalLink="https://cad.ee/toode/idea-architecture/"
         // imageUrl="https://www.4msa.com/images/IDEA/IDEAlogo.png"
          imageUrl={logoIDEA}
        />
        <ProductCard
          name="FINE Elec"
          details="Fine ELEC on 4BIM arhitektuuri- ja inseneeritarkvara. AutoCAD-iga sarnasel platvormil baseeruv tarkvara, DWG failiformaat tagab võrreldatu ühilduvuse AutoCADiga."
          externalLink="https://cad.ee/toode/fineelec-30-paeva-tasuta-prooviversioon/"
         // imageUrl="https://www.4msa.com/images/FINE/FineELEClogo.png"
          imageUrl={logoFineELEC}
        />
        <ProductCard
          name="FINE Fire"
          details="FineFIRE on 4M BIM tarkvara, mis pakub kõige lihtsamat üleminekut CAD-kasutajatele ja suure tootlikkusega funktsioone vaid murdosa hinnaga võrreldes nende peamiste konkurentidega."
          externalLink="https://cad.ee/"
         // imageUrl="https://www.4msa.com/images/FINE/FineFIRElogo.png"
          imageUrl={logoFineFIRE}
        />
        <ProductCard
          name="FINE HVAC"
          details="FINE-HVAC ühendab disaini ja arvutused täielikult integreeritud keskkonnas, mis tahes HVAC paigalduse jaoks otse joonistelt, genereerides kõik uuringu tulemused: arvutuslehed, tehnilised aruanded, materjalide nimekirjad ja kuluarvestused, plaanivaated, paneelidiagrammid ja muud detailid."
          externalLink="https://cad.ee/toode/fine-hvac/"
         // imageUrl="https://www.4msa.com/images/FINE/FineHVAClogo.png"
          imageUrl={logoFineHVAC}
        />
        <ProductCard
          name="FINE Sani"
          details="FineSANI on integreeritud tarkvaratööjaam sanitaardisaini jaoks, mis genereerib vajalikud arvutused otse joonistelt ning seejärel loob automaatselt lõplikud lõplikud joonised."
          externalLink="https://cad.ee/toode/fine-sani/"
         // imageUrl="https://www.4msa.com/images/FINE/FineSANIlogo.png"
          imageUrl={logoFineSANI}
        />
      </motion.div>

      {/* Custom Section */}
      <AdditionalSection />

      {/* Company Info Section */}
      <CompanyInfo />
    </>
  );
}

export default MainPage;
