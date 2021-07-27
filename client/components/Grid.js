import Icon from "./Icon"
const Grid = ({ users, handler }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {users.map((user) => (
                <button key={user.id} className='hover:cursor-pointer ' onClick={() => { handler(user.id) }}>
                    <div className='flex flex-col  bg-white bg-opacity-80 hover:bg-opacity-100 shadow-sm rounded-md capitalize p-4  font-semibold mx-auto w-7/12 sm:w-full text-purple-700' >
                        <Icon user={user.id} icon={'/id.svg'} />
                        <Icon user={user.name} icon={'/nametag.svg'} />
                        <Icon user={user.role} icon={'/circle.svg'} />
                        {user.enterprise ? <Icon user={user.enterprise} icon={'/enterprise.svg'} /> : <Icon user='No' icon={'/enterprise.svg'} />}
                    </div>
                </button>
            ))}
        </div>
    )
}

export default Grid
