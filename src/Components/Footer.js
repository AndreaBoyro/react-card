import Facebook from "../img/Facebook Icon.png";
import Instagram from "../img/Instagram Icon.png";
import GitHub from "../img/GitHub Icon.png";
import Twitter from "../img/Twitter Icon.png";
export default function Footer(){
    return(<div className="footer">
   <img src={Facebook}></img>
   <img src={GitHub}></img>
   <img src={Instagram}></img>
   <img src={Twitter}></img>
   </div>)
}