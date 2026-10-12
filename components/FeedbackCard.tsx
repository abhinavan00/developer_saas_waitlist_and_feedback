import Image from 'next/image';
import commentIcon from '@/public/comment-icon.svg';

export default function FeedbackCard(
    {title, description, userName, category, status, upvotes, createdAt}:{
        title: string, 
        description: string, 
        userName: string, 
        category: string, 
        status: string, 
        upvotes: number, 
        createdAt: string
    }
) {
    let statusText = ''
    let statusTextColor = ''
    let statusBgColor = ''
    let categoryText = ''
    let categoryBgColor = ''

    if(status === 'submitted') {
        statusText = 'Submitted'
        statusTextColor = '#BACBB9'
        statusBgColor = '#343537'
    } else if (status === 'under-review') {
        statusText = 'Under Review'
        statusTextColor = 'smoke'
        statusBgColor = '#343537'
    } else if (status === 'planned') {
        statusText = 'Planned'
        statusTextColor = '#4CD7F6'
        statusBgColor = 'rgba(76, 215, 246, 0.1)'
    } else if (status === 'in-progress') {
        statusText = 'In Progress'
        statusTextColor = '#10F07A'
        statusBgColor = 'rgba(180, 255, 192, 0.1)'
    } else if (status === 'shipped') {
        statusText = 'Shipped'
        statusTextColor = 'green'
        statusBgColor = '#343537'
    }

    return (
        <div className={`bg-[#1B1C1E] py-4 pl-24 pr-10 relative flex flex-col gap-3 rounded-lg`}>
            <div className={`bg-[#1F2022] font-mono font-semibold w-16 h-30 absolute left-3 flex flex-col justify-center items-center rounded-md shadow-2xl`}>
                <div className={`text-[#BACBB9]`}>˄</div>
                {upvotes}
            </div>
            <div className={`font-mono text-sm flex gap-2`}>
                <span className={`bg-[#343537] text-[#4CD7F6] px-2.5 py-1 rounded-md`}>
                    {category}
                </span>
                <span 
                    style={{backgroundColor: statusBgColor, color: statusTextColor}} 
                    className={`px-2.5 py-1 rounded-md`}>
                    {statusText}
                </span>
            </div>
            <div className={`flex flex-col gap-2`}>
                <p className={`font-semibold text-xl lg:text-2xl`}>{title}</p>
                <p className={`text-sm text-[#BACBB9] line-clamp-2 lg:text-base`}>
                    {description}
                </p>
            </div>
            <div className={`font-mono text-sm flex gap-2 lg:text-base`}>
                {userName}
                <span className={`text-[#849584]`}>· {createdAt} ·</span>
                <span className={`flex gap-1`}>
                    <Image src={commentIcon} alt='comment icon' />
                    0
                </span>
            </div>
        </div>
    )
}