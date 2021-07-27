
import Image from 'next/image'
const Icon = ({ user, icon }) => {
    return (
        <div className='flex items-center space-x-4'>
            <div className='w-8 h-8 relative'>
                <Image
                    src={icon}
                    alt="user"
                    layout='fill'
                />
            </div>
            <p>{user}</p>
        </div>
    )
}
export default Icon
