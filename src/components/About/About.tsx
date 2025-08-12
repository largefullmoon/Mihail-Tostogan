import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mihail Tostogan</h3>
              <p className="text-gray-600 text-lg mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                📍 Moldova, Europe
              </p>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              With 5+ years of experience in full-stack development, I specialize in creating complex web applications, 
              mobile apps, bots, and automation solutions—with a strong focus on AI-driven technologies.
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                My Expertise Includes:
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover-lift">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">AI Chatbots & Voicebots</p>
                    <p className="text-gray-600 text-sm">Designing and deploying intelligent conversational agents for customer support, sales, and automation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover-lift">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">Full-Stack Development</p>
                    <p className="text-gray-600 text-sm">Building end-to-end web & mobile applications with modern frameworks and scalable architectures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover-lift">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">Process Automation</p>
                    <p className="text-gray-600 text-sm">Developing bots and scripts to streamline workflows and reduce manual tasks by up to 80%.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover-lift">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <p className="text-gray-800 font-semibold mb-1">Natural Language Processing (NLP)</p>
                    <p className="text-gray-600 text-sm">Implementing AI models for text and voice interactions with high accuracy and natural flow.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I combine cutting-edge AI tools with robust engineering to deliver high-performance, scalable solutions. 
              Whether you need a smart chatbot, automated workflow, or a custom full-stack application, 
              I can turn your ideas into reality.
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 p-6 rounded-xl">
              <p className="text-blue-800 text-lg">
                <span className="font-bold text-xl">🚀 Let's Collaborate:</span><br />
                Ready to build something powerful and intelligent? Let's work together to create cutting-edge AI solutions that transform your business!
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 mx-auto relative z-10 overflow-hidden rounded-2xl shadow-2xl glitch-container hover-lift">
                <img 
                  src="/1.jpg" 
                  alt="Mihail Tostogan - Full-Stack Developer & AI Specialist" 
                  className="w-full h-full object-cover hover:scale-[150%] scale-[100%] transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6 lg:translate-x-6 lg:translate-y-6"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;