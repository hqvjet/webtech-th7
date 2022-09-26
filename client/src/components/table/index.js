import React, {useEffect, useState} from "react"
import styles from './Table.module.css'
import axios from "axios";

export default function Table(props) {
    const [body, setBody] = useState((
        <>
            <p className={styles.notFound}>There's no information about staff, please hire more!</p>
        </>
    ))

    useEffect(() => {
        if (props.data.length !== 0 && props.data[0].id !== '') {
            setBody(getBody())
        }
    }, [props.data])

    useEffect(() => {
        if (props.data.length !== 0 && props.data[0].id !== '') {
            for (let i = 0; i < props.data.length; ++i) {
                if (sessionStorage.getItem('searchName') === ''
                    || sessionStorage.getItem('searchName') === null
                    || props.data[i].name === sessionStorage.getItem('searchName'))
                    createTableRow(props.data[i])
            }
        }
    }, [body])

    const createTableRow = dataTable => {
        const tr = document.createElement('tr')
        const tbody = document.getElementById('table-body')
        const id = document.createElement('td')
        const name = document.createElement('td')
        const a = document.createElement('a')

        tr.classList.add(styles.row)

        id.append(document.createTextNode(dataTable.id))
        name.append(document.createTextNode(dataTable.name))
        a.append(name)
        a.href = `/staff/${dataTable.id}`
        a.classList.add(styles.link)

        tr.append(id)
        tr.append(a)

        tbody.append(tr)
    }

    const searchingStaff = () => {
        sessionStorage.setItem('searchName',
            document.getElementById('search-staff-name').value)
        window.location.reload()
    }

    const getBody = () => {
        return (
            <>
                <form className={styles.searchBar}>
                    <input type='text' id='search-staff-name' defaultValue={sessionStorage.getItem('searchName')}/>
                    <button onClick={searchingStaff}>Search</button>
                </form>
                <table className={styles.table}>
                    <tbody id='table-body'>
                    <tr className={styles.row}>
                        <th className={styles.header}>ID</th>
                        <th className={styles.header}>Full Name</th>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }

    return (
        <>
            {body}
        </>
    )

}