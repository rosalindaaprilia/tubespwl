import { useEffect, useState } from "react"
import {Table} from "react-bootstrap"
export default function List() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch("/api").then(res => res.json()).then(data => setData(data))
    }, [])

    return (
        <div>
            <img src="pana2.png" style={{width:"100%",height:"100vh", position:"absolute", top : 0,left : 0}} alt="" />
            <h1 style={{fontWeight:"bolder", textAlign:"center"}}>Daftar Siswa</h1>
            <div style={{position:"relative", zIndex:"100",display:"flex", justifyContent:"center"}}>
                <Table style={{width:"75%"}}>
                    <thead>
                        <th>#</th>
                        <th>Nama</th>
                        <th>No HP</th>
                        <th>Email</th>
                        <th>Jenjang Pendidikan</th>
                        <th>Program Bimbel</th>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.no_hp}</td>
                                    <td>{item.email}</td>
                                    <td>{item.jenjang_pendidikan}</td>
                                    <td>{item.program_bimbel}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}