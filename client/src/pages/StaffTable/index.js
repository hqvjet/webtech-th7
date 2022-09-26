import React, {useEffect, useState} from "react"
import styles from './StaffTable.module.css'
import Container from "../../components/container"
import Table from "../../components/table";
import axios from "axios";

export default function StaffTable() {

    const [data, setData] = useState([
        {
            id: '',
            name: ''
        }
    ])

    useEffect(() => {
        axios
            .get('/staffs')
            .then(res => {
                setData(res.data)
            })
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    const getUserInput = () => {
        const input = document.getElementById('staff-input')
        return input.value
    }

    const submitted = e => {
        e.preventDefault()
        const inputData = getUserInput()
        axios
            .post('/staffs', {name: inputData})
            .then(() => window.location.reload())
    }

    return (
        <>
            <Container>
                <div className={styles.container}>
                    <h1>Staffs: </h1>
                    <div className={styles.linear}/>
                    <div className={styles.data}>
                        <Table data={data}/>
                        <form onSubmit={submitted} className={styles.updateField}>
                            <input type='text' id='staff-input'/>
                            <button type='submit'>Hire This Staff</button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )

}