import Image from 'next/image';
import commentIcon from '@/public/comment-icon.svg';

const STATUS_CONFIG = {
    'submitted': {
        label: 'Submitted',
        className: 'bg-[#343537] text-[#BACBB9]'
    }, 
    'under-review': {
        label: 'Under Review',
        className: 'bg-[#343537] text-gray-300'
    },
    'planned': {
        label: 'Planned',
        className: 'bg-[#4CD7F6]/10 text-[#4CD7F6]'
    },
    'in-progress': {
        label: 'In Progress',
        className: 'bg-[#B4FFC0]/10 text-[#10F07A]'
    },
    'shipped': {
        label: 'Shipped',
        className: 'bg-[#343537] text-green-500'
    }
} as const;

const CATEGORY_CONFIG = {
    'feature': {
        label: 'Feature',
        className: 'bg-[#343537] text-[#4CD7F6]'
    },
    'bug': {
        label: 'Bug',
        className: 'bg-[#93000A] text-[#FFB4AB]'
    },
    'enhancement': {
        label: 'Enhancement',
        className: 'bg-[#F2EAFF]/10 text-[#D8C9FF]'
    }
} as const;

type Status = keyof typeof STATUS_CONFIG;
type Category = keyof typeof CATEGORY_CONFIG;

export default function FeedbackCard(
    {title, description, userName, category, status, upvotes, createdAt}:{
        title: string, 
        description: string, 
        userName: string, 
        category: Category,
        status: Status, 
        upvotes: number, 
        createdAt: string
    }
) {
    const statusConfig = STATUS_CONFIG[status];
    const categoryConfig = CATEGORY_CONFIG[category];

    return (
        <div className={`bg-[#1B1C1E] py-4 pl-24 pr-10 relative flex flex-col gap-3 rounded-lg`}>
            <div className={`bg-[#1F2022] font-mono font-semibold w-16 h-30 absolute left-3 flex flex-col justify-center items-center rounded-md shadow-2xl`}>
                <div className={`text-[#BACBB9]`}>˄</div>
                {upvotes}
            </div>
            <div className={`font-mono text-sm flex gap-2`}>
                <span className={`px-2.5 py-1 rounded-md ${categoryConfig.className}`}>
                    {categoryConfig.label}
                </span>
                <span 
                    className={`px-2.5 py-1 rounded-md ${statusConfig.className}`}>
                    {statusConfig.label}
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