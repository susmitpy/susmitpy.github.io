export default function TestimonialsSections() {
    const testimonials = [
        {
            name: "Josiah James",
            designation: "Ex-Intern, Zeza Tech",
            review:
                "I entered in knowing absolutely nothing but you never treated me like a novice, you shared your intellect with me just as any other developer, and I won't ever forget that. You also brought the fun memories in Zeza, and I have never seen anyone else with this much knowledge and experience be so down to earth and funny. All in all, you have inspired me, and I won't ever forget what I learned through you.",
        },
        {
            name: "Nikhil Gupta",
            designation: "Partner, Xcellen",
            review:
                "Susmit would be an excellent addition to any team and would bring a great deal of value. He consistently demonstrated a strong work ethic, attention to detail, and a commitment to achieving the highest level of quality in his work. I believe that he would be an asset to any organization that is looking for a dedicated, hard-working, and highly skilled individual. I highly recommend him for any position that he may be applying for.",
        },
        {
            name: "Principal",
            designation: "KC College",
            review:
                "Thank you for the software enabling SYJC student's information to be uploaded on the HSC Board website. It is a fairly useful program.",
        }
    ];

    return (
        <div className="mx-auto px-4 py-16 bg-slate-800">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                    >
                        <div className="flex flex-col h-full">
                            <p className="text-gray-300 mb-4 flex-grow italic">
                                "{testimonial.review}"
                            </p>
                            <div>
                                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                <p className="text-gray-400 text-sm">
                                    {testimonial.designation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
