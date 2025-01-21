import { TestimonialsData } from "@/lib/data";

export default function TestimonialsSections() {
    return (
        <section id="testimonials" className="mx-auto py-10 bg-[#2f2f2f] min-h-[600px]">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#40E0D0]">{TestimonialsData.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TestimonialsData.testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-[#3a3a3a] backdrop-blur-sm rounded-lg p-6 hover:bg-[#40E0D0] hover:bg-opacity-10 transition-all duration-300 border border-[#40E0D0] border-opacity-30"
                    >
                        <div className="flex flex-col h-full">
                            <p className="text-gray-300 mb-4 flex-grow font-normal italic font-montserrat">
                                "{testimonial.review}"
                            </p>
                            <div>
                                <h3 className="font-semibold text-gray-100 font-montserrat">{testimonial.name}</h3>
                                <p className="text-gray-500 text-sm font-montserrat">
                                    {testimonial.designation}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
