import React from 'react';

function Contact() {
  return (
    <section id="contact" className="pb-10">
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-8">
        Contact Me
      </h2>
      <div className="bg-gray-100 p-8 rounded shadow-md">
        <div className="flex flex-wrap justify-center mb-8">
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">(555) 555-5555</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              linkedin.com/in/your-profile
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub</h3>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              github.com/your-username
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Twitter</h3>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              twitter.com/your-handle
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contact;