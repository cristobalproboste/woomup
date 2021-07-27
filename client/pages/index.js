import Head from 'next/head'
import UsersList from '../components/UsersList'
export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 min-h-screen  ">
      <Head>
        <title>Loading...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UsersList />
    </div>
  )
}
