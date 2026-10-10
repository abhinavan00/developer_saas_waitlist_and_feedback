export default function FilterBtn({children}:{
    children:string
}) {
    return (
        <div 
            className={`
                bg-[#292A2C] font-mono text-[#BACBB9] px-4 py-3 rounded-lg flex justify-center
                cursor-pointer hover:bg-green-100 hover:text-green-950 hover:font-semibold
            `}
        >
            {children}
        </div>
    )
}