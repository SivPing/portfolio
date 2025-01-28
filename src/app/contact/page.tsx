import React from "react";

export default function Contact() {
  return (
    <div className=" mb-16  flex items-center justify-center px-5">
      <div className="bg-accent rounded-xl p-8  shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6  text-center underline">
          Les&apos;t work together
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block  font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 text-black rounded-xl py-2 border  focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block  font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full text-black rounded-xl px-4 py-2 border focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your Message"
              rows={4} // Use curly braces to pass a number
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary rounded-xl hover:text-black py-2 px-4  hover:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
