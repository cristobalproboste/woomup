import { useState, useEffect } from 'react'
import Head from 'next/head'
import Grid from './Grid'
import MatchList from './MatchList'
const UsersList = () => {
    const [users, setUsers] = useState([])
    const [fetched, setFetched] = useState(false)
    const [user, setMatch] = useState([])
    const [userExist, setExist] = useState(false)
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])

    useEffect(() => {
        fetchHandler()
    }, [])

    useEffect(() => {
        function filterUsers() {
            const searchArray = []
            users.filter((user) => {
                if (user.name.search(search) > -1) {
                    searchArray.push(user)
                }
            })
            return searchArray
        }
        const userFiltered = filterUsers()
        if (search != '') { setSearchList(userFiltered) }
        if (search == '') { setSearchList([]) }
    }, [search])

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
                <div className='p-2 w-full min-h-screen '>
                    <h1 className='font-semibold text-gray-800 text-center mb-4 text-3xl'>Users </h1>
                    <div className='flex items-center justify-center mb-4'>
                        <input type='text' className='w-1/2 p-2 rounded-md outline-none text-purple-700' placeholder='Name' onChange={(e) => { setSearch((e.target.value.toLowerCase())) }}></input>
                    </div>
                    {searchList.length == 0 ? <Grid users={users} handler={matchHandler} /> : <Grid users={searchList} handler={matchHandler} />}
                </div>
            </>)
    } else {
        return (<></>)
    }
}
export default UsersList
