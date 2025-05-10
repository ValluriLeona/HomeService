import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function Admin() {
    const [role, setRole] = useState(null);
    const [plumbing, setPlumbing] = useState(null);
    const [cleaning, setCleaning] = useState(null);
    const [carpenter, setCarpenter] = useState(null);

    useEffect(() => {
        const userRole = localStorage.getItem('role');
        setRole(userRole);
    }, []);

    useEffect(() => {
        if (role === '1') {
            if (plumbing === null) {
                axios.get("http://localhost:8082/svc/plumbing").then((res) => {
                    setPlumbing(res.data);
                });
            }
            if (cleaning === null) {
                axios.get("http://localhost:8082/svc/cleaning").then((res) => {
                    setCleaning(res.data);
                });
            }
            if (carpenter === null) {
                axios.get("http://localhost:8082/svc/carpenter").then((res) => {
                    setCarpenter(res.data);
                });
            }
        }
    }, [role, plumbing, cleaning, carpenter]);

    function insertData() {
        const pid = parseInt(document.getElementsByName("pid")[0].value);
        const pcost = parseInt(document.getElementsByName("pcost")[0].value);
        const pimage = document.getElementsByName("pimage")[0].value;
        const pname = document.getElementsByName("pname")[0].value;
        const pqty = parseInt(document.getElementsByName("pqty")[0].value);
        const pcat = document.getElementsByName("pcat")[0].value;

        axios.post(`http://localhost:8082/svc/product/${pcat}`, {
            pid, pcost, pimage, pname, pqty
        }).then((res) => {
            alert(res.data);
            if (res.data === "Inserted Suuessfully") {
                setPlumbing(null);
                setCleaning(null);
                setCarpenter(null);
            }
        });
    }

    function editData(element) {
        document.getElementsByName("pid")[0].value = element.pid;
        document.getElementsByName("pcost")[0].value = element.pcost;
        document.getElementsByName("pimage")[0].value = element.pimage;
        document.getElementsByName("pname")[0].value = element.pname;
        document.getElementsByName("pqty")[0].value = element.pqty;
    }

    function updateData() {
        const pid = parseInt(document.getElementsByName("pid")[0].value);
        const pcost = parseInt(document.getElementsByName("pcost")[0].value);
        const pimage = document.getElementsByName("pimage")[0].value;
        const pname = document.getElementsByName("pname")[0].value;
        const pqty = parseInt(document.getElementsByName("pqty")[0].value);
        const pcat = document.getElementsByName("pcat")[0].value;

        axios.put(`http://localhost:8082/svc/product/${pcat}`, {
            pid, pcost, pimage, pname, pqty
        }).then((res) => {
            alert(res.data);
            if (res.data === "Updated") {
                setPlumbing(null);
                setCleaning(null);
                setCarpenter(null);
            }
        });
    }

    function deleteData(element, pcat) {
        if (window.confirm(`Do you want to delete ${element.pid}`)) {
            axios.delete(`http://localhost:8082/svc/product/${pcat}`, {
                params: { pid: parseInt(element.pid) }
            }).then((res) => {
                alert(res.data);
                if (res.data === "Deleted") {
                    setPlumbing(null);
                    setCleaning(null);
                    setCarpenter(null);
                }
            });
        }
    }

    if (role === null) {
        return <p style={{ textAlign: 'center', marginTop: '50px' }}>Checking Authorization...</p>;
    }

    if (role !== '1') {
        return <h2 style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>You are not authorized</h2>;
    }

    return (
        <>
            <div className='login-form'>
                <table>
                    <tr style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
                        <td colSpan={2}>Insert Data</td>
                    </tr>
                    <tr><td>PID</td><td><input type='text' name='pid' className="form-control" /></td></tr>
                    <tr><td>PCOST</td><td><input type='text' name='pcost' className="form-control" /></td></tr>
                    <tr><td>PIMAGE</td><td><input type='text' name='pimage' className="form-control" /></td></tr>
                    <tr><td>PNAME</td><td><input type='text' name='pname' className="form-control" /></td></tr>
                    <tr><td>PQUANTITY</td><td><input type='text' name='pqty' className="form-control" /></td></tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            <select name='pcat' className="form-select">
                                <option value="p">Plumbing</option>
                                <option value="c">Carpenter</option>
                                <option value="l">Cleaning</option>
                            </select>
                        </td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <td><button onClick={insertData} style={{ backgroundColor: "yellowgreen" }}>Insert Data</button></td>
                        <td><button onClick={updateData} style={{ backgroundColor: "yellowgreen" }}>Update Data</button></td>
                    </tr>
                </table>
            </div>

            <br /><br />

            <div className='login-form' style={{ width: "auto" }}>
                {plumbing === null ? <p>Plumbing Data Fetching</p> :
                    <table>
                        <tr style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
                            <td colSpan={7}>Plumbing Product</td>
                        </tr>
                        <tr>
                            <th>PID</th><th>PNAME</th><th>PCOST</th><th>PQUANTITY</th><th>PIMAGE</th><th>EDIT</th><th>DELETE</th>
                        </tr>
                        {plumbing.map((element) => (
                            <tr key={element.pid}>
                                <td>{element.pid}</td>
                                <td>{element.pname}</td>
                                <td>{element.pcost}</td>
                                <td>{element.pqty}</td>
                                <td>{element.pimage}</td>
                                <td><button onClick={() => editData(element)} style={{ backgroundColor: "yellowgreen" }}>EDIT</button></td>
                                <td><button onClick={() => deleteData(element, "p")} style={{ backgroundColor: "yellowgreen" }}>DELETE</button></td>
                            </tr>
                        ))}
                    </table>
                }

                <br /><br />

                {cleaning === null ? <p>Cleaning Data Fetching</p> :
                    <table>
                        <tr style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
                            <td colSpan={7}>Cleaning Product</td>
                        </tr>
                        <tr>
                            <th>PID</th><th>PNAME</th><th>PCOST</th><th>PQUANTITY</th><th>PIMAGE</th><th>EDIT</th><th>DELETE</th>
                        </tr>
                        {cleaning.map((element) => (
                            <tr key={element.pid}>
                                <td>{element.pid}</td>
                                <td>{element.pname}</td>
                                <td>{element.pcost}</td>
                                <td>{element.pqty}</td>
                                <td>{element.pimage}</td>
                                <td><button onClick={() => editData(element)} style={{ backgroundColor: "yellowgreen" }}>EDIT</button></td>
                                <td><button onClick={() => deleteData(element, "l")} style={{ backgroundColor: "yellowgreen" }}>DELETE</button></td>
                            </tr>
                        ))}
                    </table>
                }

                <br /><br />

                {carpenter === null ? <p>Carpenter Data Fetching</p> :
                    <table>
                        <tr style={{ textAlign: 'center', backgroundColor: 'skyblue' }}>
                            <td colSpan={7}>Carpenter Product</td>
                        </tr>
                        <tr>
                            <th>PID</th><th>PNAME</th><th>PCOST</th><th>PQUANTITY</th><th>PIMAGE</th><th>EDIT</th><th>DELETE</th>
                        </tr>
                        {carpenter.map((element) => (
                            <tr key={element.pid}>
                                <td>{element.pid}</td>
                                <td>{element.pname}</td>
                                <td>{element.pcost}</td>
                                <td>{element.pqty}</td>
                                <td>{element.pimage}</td>
                                <td><button onClick={() => editData(element)} style={{ backgroundColor: "yellowgreen" }}>EDIT</button></td>
                                <td><button onClick={() => deleteData(element, "c")} style={{ backgroundColor: "yellowgreen" }}>DELETE</button></td>
                            </tr>
                        ))}
                    </table>
                }
            </div>
        </>
    );
}
