import { TestimonialsData } from "@/lib/data";

export default function TestimonialsSections() {
    return (
        <div className="mx-auto px-4 py-16 bg-slate-800">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">{TestimonialsData.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TestimonialsData.testimonials.map((testimonial, index) => (
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
