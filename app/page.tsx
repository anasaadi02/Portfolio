"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaBrain, FaCode, FaCloud } from "react-icons/fa";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-600/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-blue-400">
              Anas Saadi
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors font-medium">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors font-medium">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors font-medium">Skills</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
                     <div className="mb-12">
             {/* Advanced Profile Card */}
             <div className="flex justify-center">
                               <ProfileCard
                  name="Anas Saadi"
                  title="Junior Software Engineer - ENSIAS Alumni"
                  handle="anasaadi02"
                  status="Available for opportunities"
                  contactText="Contact Me"
                  avatarUrl="/profile-photo.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    // Scroll to contact section or open contact modal
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
             </div>
           </div>
          
                     {/* Contact Info */}
           <div id="contact" className="flex flex-wrap justify-center gap-8 mb-12">
             <div className="flex items-center space-x-3 text-gray-200 bg-slate-800/60 px-6 py-3 rounded-full border border-blue-600/30">
               <FaPhone className="text-blue-400" />
               <span className="font-medium">+212-678851747</span>
             </div>
             <div className="flex items-center space-x-3 text-gray-200 bg-slate-800/60 px-6 py-3 rounded-full border border-blue-600/30">
               <FaEnvelope className="text-blue-400" />
               <span className="font-medium">anas2002saadi@gmail.com</span>
             </div>
             <div className="flex items-center space-x-3 text-gray-200 bg-slate-800/60 px-6 py-3 rounded-full border border-blue-600/30">
               <FaMapMarkerAlt className="text-blue-400" />
               <span className="font-medium">Rabat, Morocco</span>
             </div>
           </div>

           {/* Social Links */}
           <div className="flex justify-center space-x-6">
             <a 
               href="https://www.linkedin.com/in/anas-saadi-25008120a/"
               target="_blank"
               rel="noopener noreferrer"
               className="p-4 rounded-full bg-slate-800/80 hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 shadow-md border border-blue-600/30"
             >
               <FaLinkedin className="text-2xl text-blue-400" />
             </a>
             <a 
               href="https://github.com/anasaadi02"
               target="_blank"
               rel="noopener noreferrer"
               className="p-4 rounded-full bg-slate-800/80 hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 shadow-md border border-blue-600/30"
             >
               <FaGithub className="text-2xl text-blue-400" />
             </a>
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-blue-300">Professional Summary</h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Software Engineer passionate about modern software development and AI. ENSIAS graduate with hands-on experience in building full-stack and AI-powered applications. Looking for a developer role to contribute to impactful and innovative tech projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/60 rounded-lg border border-blue-600/30">
                  <FaRocket className="text-blue-400 text-xl" />
                  <span className="text-gray-200 font-medium">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-800/60 rounded-lg border border-blue-600/30">
                  <FaBrain className="text-blue-400 text-xl" />
                  <span className="text-gray-200 font-medium">AI & Machine Learning</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-800/60 rounded-lg border border-blue-600/30">
                  <FaCode className="text-blue-400 text-xl" />
                  <span className="text-gray-200 font-medium">Modern Technologies</span>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold mb-8 text-blue-300">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-100">Software Engineering Degree</h4>
                  <p className="text-blue-300 font-medium">ENSIAS</p>
                  <p className="text-gray-300">Sept 2022 – July 2025 • Rabat</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-100">Mathematics & Physics</h4>
                  <p className="text-blue-300 font-medium">Preparatory Classes</p>
                  <p className="text-gray-300">September 2020 – June 2022 • Kenitra</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-100">Mathematical Sciences</h4>
                  <p className="text-blue-300 font-medium">High School Diploma</p>
                  <p className="text-gray-300">June 2020 • Kenitra (Highest Honors)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-100">Software Engineer (Intern)</h3>
                  <p className="text-blue-300 text-lg font-medium">Easy Truck IN</p>
                </div>
                <span className="text-gray-300 md:text-right font-medium">February 2025 – August 2025</span>
              </div>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed an intelligent driver management system with AI functionalities for 500+ users, reducing support requests by 35%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Built using LangChain/HuggingFace, React and Node.JS</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-100">AI Engineer (Intern)</h3>
                  <p className="text-blue-300 text-lg font-medium">Morocco Customs Administration</p>
                  <p className="text-gray-300">Rabat, Morocco</p>
                </div>
                <span className="text-gray-300 md:text-right font-medium">July – August 2024</span>
              </div>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed intelligent chatbot for 1,000+ PDF documents, improving operational efficiency by 60%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented RAG solution with ChromaDB and Streamlit interface, reducing search time to 30 seconds</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-gray-100">Full-Stack Developer (Intern)</h3>
                  <p className="text-blue-300 text-lg font-medium">Morocco Trade and Development Services</p>
                  <p className="text-gray-300">Rabat, Morocco</p>
                </div>
                <span className="text-gray-300 md:text-right font-medium">July – August 2023</span>
              </div>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed subscription management application handling 200+ subscriptions with 25% increased engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Built responsive interface with 100% mobile compatibility, delivered 2 weeks ahead of schedule</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            Key Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-3">MovieRec - AI Cinema Recommendation</h3>
              <p className="text-blue-300 mb-4 font-medium">Film Discovery Platform for Cinema Enthusiasts</p>
              <p className="text-gray-300 mb-6 font-medium">March 2025 – Present</p>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Personalized recommendation platform serving 200+ users with highly acclaimed user experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed with React Native, TMDB API and collaborative filtering algorithms</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-3">DiaBot - AI Health Assistant</h3>
              <p className="text-blue-300 mb-4 font-medium">Intelligent Health Monitoring Application</p>
              <p className="text-gray-300 mb-6 font-medium">October 2024 – January 2025</p>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Personalized health assistant serving 100+ users with 85% retention rate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>RAG architecture using Google Gemini and ChromaDB on GCP infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-3">AthleteIQ+ - Sports Performance</h3>
              <p className="text-blue-300 mb-4 font-medium">Training Management Solution</p>
              <p className="text-gray-300 mb-6 font-medium">October 2024 – January 2025</p>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Performance analysis platform for 1,000+ athletes, increasing training efficiency by 45%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Spring Boot microservices architecture with Kafka messaging and Next.js interface</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-3">AI Product Demand Forecasting</h3>
              <p className="text-blue-300 mb-4 font-medium">ML Prediction System</p>
              <p className="text-gray-300 mb-6 font-medium">May 2024</p>
              <ul className="text-gray-200 space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Demand forecasting model for local market analysis with 87% accuracy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>End-to-end pipeline using Python, Pandas, NumPy and Scikit-learn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <FaBrain className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-serif font-semibold text-gray-100">AI & Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'RASA', 'NLP'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-600/30 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <FaCode className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-serif font-semibold text-gray-100">Development</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript/TypeScript', 'React', 'Next.js', 'Node.js', 'Java', 'Spring Boot', 'Python', 'Django', 'FastAPI'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-600/30 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <FaCloud className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-serif font-semibold text-gray-100">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Docker', 'Google Cloud Platform', 'Firebase', 'Apache Kafka'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-600/30 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-6">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  {['PostgreSQL', 'MongoDB', 'MySQL', 'ChromaDB', 'SQLite'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-600/30 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-6">Languages</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-900/30 rounded-lg border border-blue-600/30">
                    <span className="text-gray-200 font-medium">Arabic</span>
                    <span className="text-blue-300 font-semibold">Native</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-900/30 rounded-lg border border-blue-600/30">
                    <span className="text-gray-200 font-medium">French</span>
                    <span className="text-blue-300 font-semibold">C2 (TCF)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-900/30 rounded-lg border border-blue-600/30">
                    <span className="text-gray-200 font-medium">English</span>
                    <span className="text-blue-300 font-semibold">Fluent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-blue-900/20 border-t border-blue-600/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 mb-4 font-medium">
            © 2025 Anas Saadi. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
