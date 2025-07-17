import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-start justify-between">
          {/* Left side with image and testimonial */}
          <div className="flex items-start space-x-10">
            {/* Profile image - 20% larger */}
            <div className="w-40 h-40 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src="/images/testimonial-photo.png"
                alt="Olivier Godemont"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            <div className="flex flex-col space-y-7">
              {/* Quote text - larger size */}
              <p className="text-[#111] text-3xl font-medium leading-snug">
                Cycle is a slick AI tool that enables teams to build better
                products by getting smarter on what their customers want.
              </p>

              {/* Attribution - slightly larger */}
              <div className="flex items-center space-x-3">
                <span className="font-medium text-lg text-gray-800">
                  Olivier Godemont
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <div className="flex items-center">
                  {/* OpenAI logo placeholder */}
                  <div className="w-6 h-6 rounded-full bg-black mr-1.5"></div>
                  <span className="font-medium text-lg text-gray-800">
                    OpenAI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote mark - larger */}
          <div className="text-[#4154F1] text-[96px] font-serif leading-none mt-[-24px]">
            &#8221;
          </div>
        </div>
      </div>
    </section>
  );
}
