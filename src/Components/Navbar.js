import imagen from "../img/FotoUs.png";
export default function Navbar(){
    return (<div className="header">
        <img className="img" src={imagen}></img>
        <h3>Andrea Boyano</h3>
        <p>Frontend developer</p>
        <div className="btn">
        <button className="btn-email">Email</button>
       
        </div>
    </div>)
}