import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden py-24 md:py-28 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-white relative z-10"
      style={{ top: "10px", left: "10px", position: "relative" } }
    >
      <div className="container px-6 mx-auto">
        <div className="-mx-4 flex flex-wrap items-start">
          {/* Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-3xl bg-white px-8 py-11 shadow-2xl sm:p-[55px] border border-blue-100">
              <h2 className="mb-3 text-3xl font-extrabold text-blue-900 sm:text-4xl">
                Need Help? Reach Out to Us
              </h2>
              <p className="mb-12 text-lg text-gray-700">
                Got questions about our workshops or programs? Drop us a message and we’ll get back to you ASAP.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-2 block text-sm font-medium text-blue-900">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-xl bg-blue-50 px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="mb-2 block text-sm font-medium text-blue-900">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl bg-blue-50 px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label className="mb-2 block text-sm font-medium text-blue-900">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full rounded-xl bg-blue-50 px-5 py-3 text-base text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-xl bg-blue-600 px-9 py-4 text-base font-semibold text-white shadow-xl hover:bg-blue-700 transition duration-300">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>

      {/* Decorative Background SVGs */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="650" cy="200" r="180" fill="#e0f2fe" />
          <circle cx="20" cy="550" r="80" fill="#dbeafe" />
          <circle cx="410" cy="320" r="60" fill="#fcd34d" fillOpacity="0.4" />
          <circle cx="-80" cy="100" r="38" fill="#c4b5fd" fillOpacity="0.5" />
          <circle cx="500" cy="600" r="50" fill="#f9a8d4" fillOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
