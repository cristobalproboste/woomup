import { useState, useEffect } from 'react'
import Head from 'next/head'
import Icon from './Icon'
import MatchList from './MatchList'
const UsersList = () => {
    const [users, setUsers] = useState([])
    const [fetched, setFetched] = useState(false)
    const [user, setMatch] = useState([])
    const [userExist, setExist] = useState(false)

    useEffect(() => {
        fetchHandler()
    }, [])
    const fetchHandler = async () => {
        const res = await fetch('http://localhost:8080/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json()
        setUsers(data)
        setFetched(true)
        setExist(false)
    }

    async function matchHandler(id) {
        const user = {
            id: id
        }
        const res = await fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()
        setMatch(data)
        setExist(true)
        setFetched(false)
    }
    if (userExist) {
        return (
            <>
                <Head>
                    <title>Match for {user.name}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className='p-2 w-full'>
                    <h1 className='font-semibold text-gray-800 text-center my-4 text-4xl'>Matchs for <span className='text-purple-700'>{user.name}</span></h1>
                    <MatchList user={user} handler={fetchHandler} />
                </div>
            </>)
    }
    if (fetched) {
        return (
            <>
                <Head>
                    <title>Users</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className='p-2 w-full'>
                    <h1 className='font-semibold text-gray-800 text-center mb-4 text-3xl'>Users </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                        {users.map((user) => (
                            <button key={user.id} className='hover:cursor-pointer ' onClick={() => { matchHandler(user.id) }}>
                                <div className='flex flex-col  bg-white bg-opacity-80 hover:bg-opacity-100 shadow-sm rounded-md capitalize p-4  font-semibold mx-auto w-7/12 sm:w-full text-purple-700' >
                                    <Icon user={user.id} icon={'/id.svg'} />
                                    <Icon user={user.name} icon={'/nametag.svg'} />
                                    <Icon user={user.role} icon={'/circle.svg'} />
                                    {user.enterprise ? <Icon user={user.enterprise} icon={'/enterprise.svg'} /> : <Icon user='No' icon={'/enterprise.svg'} />}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </>)
    } else {
        return (<>
        </>)
    }
}

//UTILS 





export default UsersList
