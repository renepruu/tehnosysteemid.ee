import CompanyInfo from "../components/CompanyInfo";
import ContactInfo from "../components/ContactInfo";
import MovingBackground from "../components/MovingBackground"
import Navbar from "../components/Navbar"
import "../style/AdditionalSection.css";
import "../style/index.css"

function ContactPage() {
  return (
    <>
    <Navbar />


    <MovingBackground/>
    <ContactInfo />
    <CompanyInfo />
    </>
  )
}

export default ContactPage
