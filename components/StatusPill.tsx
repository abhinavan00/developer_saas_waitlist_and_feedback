export default function StatusPill({children, status}:{
    children:string,
    status:string
}) {
    let color
    if(status === 'under-review') {
        color='#849584'
    } else if(status === 'planned') {
        color='#4CD7F6'
    } else if(status === 'in-progress') {
        color='#10F07A'
    } else if(status === 'shipped') {
        color='#A78BFA'
    }

    return (
        <div 
            className={`
                font-mono bg-[#1B1C1E] py-1 px-4 rounded-4xl flex justify-center items-center gap-2
                cursor-pointer
            `}
        >
            <span style={{backgroundColor: color}} className={`w-2.5 h-2.5 rounded-4xl`}></span>
            <span className={`truncate`}>{children}</span>
            <span style={{color: color}} className={`bg-[#343537] px-3 rounded-2xl`}>0</span>
        </div>
    )
}