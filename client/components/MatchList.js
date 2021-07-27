import Section from "./Section"
const MatchList = ({ user, handler }) => {
    return (
        <>
            <div className='flex flex-row-reverse'>
                <button onClick={handler} className='p-2 px-4 text-xl font-semibold text-white bg-purple-700 rounded-full'>Back</button>
            </div>
            {user.networking.length > 0 ? <Section array={user.networking} text='Networking' /> : <></>}
            {user.mentoring.length > 0 ? <Section array={user.mentoring} text='Mentoring' /> : <></>}
            {user.matchInterno.length > 0 ? <Section array={user.matchInterno} text='Match Interno' /> : <></>}
            {user.mentoringInterno.length > 0 ? <Section array={user.mentoringInterno} text='Mentoring Interno' /> : <></>}
        </>
    )
}

export default MatchList
