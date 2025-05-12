import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-800">
      {/* Hero Section with Image */}
      <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left px-6  ">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-700">
            Welcome to <span className="text-blue-500">FriendChat</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
            Connect instantly. Chat freely. Experience premium messaging with privacy and style.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link href="/chat">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition">
                Start Chatting
              </button>
            </Link>
            <Link href="/about">
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-2xl text-lg font-medium transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src="/chat.webp"
            alt="Chat Illustration"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </section>
      {/* Hero Section */}
      


      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Real-Time Messaging',
              description: 'Instant, seamless conversations with friends.',
            },
            {
              title: 'End-to-End Encryption',
              description: 'Your privacy is our priority — always secure.',
            },
            {
              title: 'Modern UI',
              description: 'Clean, elegant interface that feels premium.',
            },
            {
              title: 'Media Sharing',
              description: 'Share images, videos, and files without limits.',
            },
            {
              title: 'Voice & Video Calls',
              description: 'Talk face-to-face anytime, anywhere.',
            },
            {
              title: 'Custom Themes',
              description: 'Personalize your chat experience with ease.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50"
            >
              <h3 className="text-xl font-semibold text-blue-600">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Flexible Payment Options</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that works best for you and enjoy premium features.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Free Plan',
              price: '$0',
              features: ['Basic Messaging', 'Limited Media Sharing', 'Standard Support'],
              buttonText: 'Get Started',
              buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
            },
            {
              title: 'Pro Plan',
              price: '$9.99/mo',
              features: ['Unlimited Messaging', 'HD Media Sharing', 'Priority Support'],
              buttonText: 'Upgrade Now',
              buttonStyle: 'bg-blue-500 text-white hover:bg-blue-600',
            },
            {
              title: 'Enterprise Plan',
              price: 'Custom',
              features: ['Team Collaboration', 'Advanced Security', 'Dedicated Support'],
              buttonText: 'Contact Us',
              buttonStyle: 'bg-blue-400 text-white hover:bg-blue-500',
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-50"
            >
              <h3 className="text-xl font-semibold text-blue-600">{plan.title}</h3>
              <p className="mt-2 text-2xl font-bold text-gray-800">{plan.price}</p>
              <ul className="mt-4 text-gray-500 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to connect?</h2>
        <p className="mt-4 text-lg">Join FriendChat today and experience messaging like never before.</p>
        <div className="mt-6">
          <Link href="/signup">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}



export const metadata = {
  title: 'Home - FriendChat',
  description: 'FriendChat - chat with your friends',
}
