
export default function Contacts() {
    const Icons = {
        GitHub: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.593 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"></path>
          </svg>
        ),
        LinkedIn: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
        ),
        Mail: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        ),
        LeetCode: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm1.5-15h-3v3h3v-3zm0 4.5h-3v3h3v-3zm1.5-.75h3v3h-3v-3zm0-4.5h3v3h-3v-3z"></path>
          </svg>
        ),
        Mobile: () => (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 0h12c1.104 0 2 .896 2 2v20c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2zm0 4h12v16H6V4zm3 14h6v2H9v-2z"></path>
          </svg>
        ),
      };

  return (
    <div>
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3 text-pink-400">
                    <Icons.Mail />
                  </span>
                  <a
                    href="mailto:sandipnandy9@gmail.com"
                    className="hover:underline"
                  >
                    sandipnandy9@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-pink-400">
                    <Icons.LeetCode />
                  </span>
                  <a
                    href="https://leetcode.com/sandipnandy1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://leetcode.com/sandipnandy1
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-pink-400">
                    <Icons.GitHub />
                  </span>
                  <a
                    href="https://github.com/sandipnandy1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/sandipnandy1
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-pink-400">
                    <Icons.LinkedIn />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sandipnandy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    www.linkedin.com/in/sandipnandy
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-pink-400">
                    <Icons.Mobile />
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    8420294443
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="mb-6 text-gray-300">
                  I'm currently available for freelance work and full-time
                  positions. Feel free to reach out if you have a project in
                  mind or just want to connect!
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      window.open("https://github.com/sandipnandy1", "_blank")
                    }
                    className="p-3 bg-white text-purple-900 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300"
                  >
                    <Icons.GitHub />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/sandipnandy",
                        "_blank"
                      )
                    }
                    className="p-3 bg-white text-purple-900 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300"
                  >
                    <Icons.LinkedIn />
                  </button>
                  <button
                    onClick={() =>
                      window.open("mailto:sandipnandy9@gmail.com", "_self")
                    }
                    className="p-3 bg-white text-purple-900 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300"
                  >
                    <Icons.Mail />
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://leetcode.com/sandipnandy1", "_blank")
                    }
                    className="p-3 bg-white text-purple-900 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300"
                  >
                    <Icons.LeetCode />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={async () => {
                    const name = (
                      document.getElementById("name") as HTMLInputElement
                    ).value;
                    const email = (
                      document.getElementById("email") as HTMLInputElement
                    ).value;
                    const message = (
                      document.getElementById("message") as HTMLTextAreaElement
                    ).value;

                    if (!name || !email || !message) {
                      alert("Please fill out all fields.");
                      return;
                    }

                    try {
                      const response = await fetch(
                        "https://api.example.com/send-email",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            to: "sandipnandy9@gmail.com",
                            subject: `New Contact Form Submission from ${name}`,
                            message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                          }),
                        }
                      );

                      if (response.ok) {
                        alert("Your message has been sent successfully!");
                      } else {
                        alert(
                          "Failed to send your message. Please try again later."
                        );
                      }
                    } catch (error) {
                      console.error("Error sending email:", error);
                      alert("An error occurred. Please try again later.");
                    }
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

