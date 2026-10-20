import "./demo.css"
import {
 Upload,
} from "lucide-react";

function CertificateDass() {
  return (
    <div className="certificateDass">
      <div className="btnCards">
        <label htmlFor="">Law Degree Certificate <Upload/></label>
        <input type="file" id="degreeCftBtn" />
      </div>
      <div className="btnCards">
        <label htmlFor="">10 <sup>th</sup> Certificate <Upload/></label>
        <input type="file" id="tenthCftBtn" />
      </div>
      <div className="btnCards">
        <label htmlFor="">12 <sup>th</sup> Certificate <Upload/></label>
        <input type="file" id="twelthCftBtn" />
      </div>
      <div className="btnCards">
        <label htmlFor="">Enrollment Certificate <Upload/></label>
        <input type="file" id="enrollCftBtn" className="inputfile" />
      </div>      
      <div className="btnCards">
        <label htmlFor="">Aadhar Card <Upload/></label>
        <input type="file" id="aadharCftBtn" />
      </div>
    </div>
  );
}
export default CertificateDass;
