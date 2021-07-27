import Icon from "./Icon"
const Section = ({ array, text }) => {
    return (
        <>
            <p className='font-semibold text-gray-800 text-center my-4 text-3xl '>{text} </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8'>
                {array.map((user) => (
                    <div key={user.id} className='flex flex-col  bg-white shadow-sm rounded-md capitalize p-4  font-semibold mx-auto w-1/2 sm:w-full text-purple-700' >
                        <Icon user={user.id} icon={'/id.svg'} />
                        <Icon user={user.name} icon={'/nametag.svg'} />
                        <Icon user={user.role} icon={'/circle.svg'} />
                        {user.enterprise ? <Icon user={user.enterprise} icon={'/enterprise.svg'} /> : <Icon user='No' icon={'/enterprise.svg'} />}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Section
