import React from 'react';

interface Badge {
    title: string;
    category: string;
    html_code?: string;
    url?: string;
    can_embed?: boolean;
}

interface BadgeCardProps {
    badge: Badge;
    index: number;
}

export const BadgeCard: React.FC<BadgeCardProps> = ({ badge, index }) => {
    const handleViewCertificate = () => {
        if (badge.url) {
            window.open(badge.url, '_blank');
        }
    };

    // If html_code exists, render it
    if (badge.html_code) {
        return (
            <div className="bg-gray-800 rounded-lg p-6 h-80 flex flex-col items-center justify-center border border-gray-700 hover:border-[#40E0D0] transition-colors">
                <div 
                    className="flex-1 flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: badge.html_code }}
                />
                <div className="text-center mt-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{badge.title}</h3>
                    <p className="text-[#40E0D0] text-xs">{badge.category}</p>
                </div>
            </div>
        );
    }

    // If can_embed is true and url exists, show iframe
    if (badge.can_embed && badge.url) {
        return (
            <div className="bg-gray-800 rounded-lg p-6 h-80 flex flex-col border border-gray-700 hover:border-[#40E0D0] transition-colors">
                <iframe 
                    src={badge.url}
                    className="flex-1 w-full rounded"
                    frameBorder="0"
                    title={badge.title}
                />
                <div className="text-center mt-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{badge.title}</h3>
                    <p className="text-[#40E0D0] text-xs">{badge.category}</p>
                </div>
            </div>
        );
    }

    // Default case: just display title with button
    return (
        <div className="bg-gray-800 rounded-lg p-6 h-80 flex flex-col items-center justify-center border border-gray-700 hover:border-[#40E0D0] transition-colors">
            <div className="text-center flex-1 flex flex-col justify-center">
                <h3 className="text-white font-semibold text-lg mb-2">{badge.title}</h3>
                <p className="text-[#40E0D0] text-sm mb-6">{badge.category}</p>
                <button
                    onClick={handleViewCertificate}
                    className="px-4 py-2 bg-[#40E0D0] text-black font-semibold rounded hover:bg-[#38C0B0] transition-colors"
                >
                    View Certificate
                </button>
            </div>
        </div>
    );
};
