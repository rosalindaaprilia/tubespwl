import Style from "./register.module.css";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import Swal from "sweetalert2"
const inputan = [
    ["Nama", "text", "nama"],
    ["No HP", "text", "no_hp"],
    ["Email", "text", "email"],
    ["Jenjang Pendidikan", "select", "jenjang_pendidikan", [
        "TK", "SD", "SMP", "SMA", "SMK", "S1", "S2", "S3"
    ]],
    ["Program Bimbel", "text", "program_bimbel"],

]

export default function Register() {
    const nav = useNavigate()
    const [data, setData] = useState({
        nama: "",
        no_hp: "",
        email: "",
        jenjang_pendidikan: "TK",
        program_bimbel: "",
    })
    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const res = await fetch("/api", {
                method : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if(!res.ok) return Swal.fire("Gagal", "" , "error")
            Swal.fire("Berhasil", "", "success")
        }catch(err) {
            console.error(err)
        }
    }
    function handleChange(ev) {
        setData(prev => ({
            ...prev,
            [ev.target.name] : ev.target.value
        }))
    }
    return(
        <div style={{height:"100vh", backgroundColor:"#E8D5C4", display:"flex", alignItems:"center"}}>
            <div onClick={() => {
                nav("/")
            }} style={{position:"absolute", top : "10px", left : "10px", width:"50px", height:"50px", cursor:"pointer"}}  >
                <img src="back-button.png" alt="" style={{width:'100%', height:"100%"}} />
            </div>
            <div style={{minWidth:"40%", height:"90%"}}>
                <img style={{width:"100%", height:"100%"}} src="amico.png" alt="" />
            </div>
            <div style={{minWidth:"50%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <form className={Style.form} onSubmit={handleSubmit} >
                    {
                        inputan.map(el => (
                            <>
                            {
                                el[1] == "select" ? 
                                <select key={el[0]+el[1]} placeholder={el[0]} name={el[2]} type={el[1]}> 
                                    {
                                        el[3].map(el => (
                                            <option key={el} value={el}>{el}</option>
                                        ))
                                    }
                                </select> :
                            <input key={el[0]+el[1]} placeholder={el[0]} name={el[2]} type={el[1]} onChange={handleChange} />
                            }
                            </>
                        ))
                    }
                <div style={{display:"flex", justifyContent:"center", width:'100%'}}>
                    <button className={Style.btn}>Register</button>
                </div>
                </form>
            </div>
        </div>
    )
}