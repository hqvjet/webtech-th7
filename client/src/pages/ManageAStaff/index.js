import React, {useEffect, useState} from "react"
import styles from './ManageAStaff.module.css'
import Container from "../../components/container";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function ManageAStaff() {

    const uid = useParams()
    const [data, setData] = useState([{
        name: ''
    }])

    useEffect(() => {
        axios
            .get(`/staff/${uid.id}`)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [])

    const deleteStaff = () => {
        axios
            .post(`/staff/${uid.id}/fired`, {
                id: uid.id
            })
            .then(() => {
                window.location.href = '/'
            })
    }

    const updateStaff = () => {
        const name = document.getElementById('staff-name')
        axios
            .post(`/staff/${uid.id}/update`, {
                id: uid.id,
                newName: name.value
            })
            .then(() => {
                window.location.reload()
            })
    }

    return (
        <>
            <Container>
                <div className={styles.main}>
                    <h1>Name:
                        <input type='text' defaultValue={data[0].name} className={styles.updateField} id='staff-name'/></h1>
                    <p>{`Index: ${uid.id}`}</p>
                    <button onClick={updateStaff} className={styles.button}>Confirm</button>
                    <button onClick={deleteStaff} className={styles.button}>Fired</button>
                </div>
            </Container>
        </>
    )

}