import { useState } from 'react';

const Socialmedia = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex space-x-4">
        {/* GitHub */}
        <a
          href="https://github.com/Shehal2"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300"
          aria-label="GitHub"
        >
          <img
            src="src/images/reshot-icon-github-NY46M9DGFU.svg" // Replace with the path to your GitHub icon
            alt="GitHub"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300"
          aria-label="WhatsApp"
        >
          <img
            src="src/images/icons8-whatsapp-480.svg" // Replace with the path to your WhatsApp icon
            alt="WhatsApp"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300"
          aria-label="LinkedIn"
        >
          <img
            src="src/images/icons8-linkedin-240.svg" // Replace with the path to your LinkedIn icon
            alt="LinkedIn"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>

                        {/* Email */}
                <a
                href="mailto:shehaltheekshana@gmail.com" // Opens the default email client with the provided email address
                className="transition duration-300"
                aria-label="Email"
                >
                <img
                    src="src/images/reshot-icon-email-YTPRCLQJVG.svg" // Replace with the path to your Email icon
                    alt="Email"
                    className="w-6 h-6 hover:opacity-80"
                />
                </a>


        {/* Phone */}
        <a
          href="tel:0760660295"
          className="transition duration-300"
          aria-label="Phone"
        >
          <img
            src="src/images/reshot-icon-phone-YUPNL5R2TW.svg" // Replace with the path to your Phone icon
            alt="Phone"
            className="w-6 h-6 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
};

export default Socialmedia;
