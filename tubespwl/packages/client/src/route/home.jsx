import Style from "./home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const nav = useNavigate()
    return (
        <>
        <div style={{height:"90vh", display:"grid",placeItems:"center"}}>
            <img style={{objectFit:"contain", width:"90%", height:"75%"}} src="pana.png" alt="" />
        </div>
        <div style={{display:"flex", justifyContent:"center", gap : "5rem"}}>
            <button className={Style.btn} onClick={() => {
                nav('/register')
            }}>
                Register
            </button>
            <button className={Style.btn} onClick={() => {
                nav('/list')
            }}>
                List Student
            </button>
        </div>  
        </>
    
    )
}   

