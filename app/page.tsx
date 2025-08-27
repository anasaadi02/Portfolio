"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaBrain, FaCode, FaCloud } from "react-icons/fa";
import ProfileCard from "./components/ProfileCard";
import Lanyard from "./components/Lanyard";
import CardSwap, { Card } from "./components/CardSwap";

// Client-side only wrapper to prevent hydration issues
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    console.log("Initializing EmailJS with public key:", publicKey);
    
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS public key not found in environment variables");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    // Debug: Check if environment variables are loaded
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log("Environment variables:", { serviceId, templateId, publicKey });

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("error");
      setStatusMessage("Email service not configured. Please contact me directly.");
      setIsSubmitting(false);
      return;
    }

    try {
              // EmailJS configuration using environment variables
        const result = await emailjs.send(
          serviceId,
          templateId,
          {
            // Standard EmailJS template variables
            user_name: `${formData.firstName} ${formData.lastName}`,
            user_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            // Alternative variable names that might be expected
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            to_name: "Anas Saadi"
          },
          publicKey
        );

      if (result.status === 200) {
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a href="#contact" className="hover:text-blue-400 transition-colors font-medium">Contact</a>
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
           <div id="about" className="flex flex-wrap justify-center gap-8 mb-12">
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800/80 rounded-2xl p-10 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex gap-8">
                {/* Badge Section */}
                <div className="flex-shrink-0 flex justify-center items-start pt-2">
                  <ClientOnly>
                    <Lanyard size="large" position={[0, 0, 20]} model="/easytruck.glb" />
                  </ClientOnly>
                </div>
                
                {/* Content Section */}
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                      <h3 className="text-2xl font-semibold text-gray-100">Software Engineer (Intern)</h3>
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
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-10 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex gap-8">
                {/* Badge Section */}
                <div className="flex-shrink-0 flex justify-center items-start pt-2">
                  <ClientOnly>
                    <Lanyard size="large" position={[0, 0, 20]} model="/douane.glb" />
                  </ClientOnly>
                </div>
                
                {/* Content Section */}
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                      <h3 className="text-2xl font-semibold text-gray-100">AI Engineer (Intern)</h3>
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
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-10 border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex gap-8">
                                {/* Badge Section */}
                <div className="flex-shrink-0 flex justify-center items-start pt-2">
                  <ClientOnly>
                    <Lanyard size="large" position={[0, 0, 20]} model="/MTDS.glb" />
                  </ClientOnly>
                </div>
                
                {/* Content Section */}
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                      <h3 className="text-2xl font-semibold text-gray-100">Full-Stack Developer (Intern)</h3>
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            Key Projects
          </h2>
          
          {/* Window-like Container */}
          <div className="relative bg-slate-800/80 rounded-2xl border border-blue-600/30 shadow-2xl overflow-hidden">
            {/* Window Frame */}
            <div className="bg-slate-700/90 px-6 py-4 border-b border-blue-600/30">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm font-medium ml-4">Projects Portfolio</span>
              </div>
            </div>
            
            {/* Window Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Content and Button */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-semibold text-gray-100">
                      Showcasing Innovation & Technical Excellence
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      From AI-powered applications to full-stack solutions, each project demonstrates my passion for creating impactful technology solutions. Explore my work and see how I tackle complex challenges with modern development approaches.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30">
                        <span className="text-blue-400 text-xl">🚀</span>
                        <span className="text-gray-200 font-medium">AI & Machine Learning Solutions</span>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30">
                        <span className="text-blue-400 text-xl">💻</span>
                        <span className="text-gray-200 font-medium">Full-Stack Development</span>
                      </div>
                      <div className="flex items-center space-x-3 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30">
                        <span className="text-blue-400 text-xl">🔧</span>
                        <span className="text-gray-200 font-medium">Modern Tech Stack</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* View All Projects Button */}
                  <Link 
                    href="/projects"
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500/30"
                  >
                    <span>View All Projects</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Right Side - CardSwap positioned like a window */}
                <div className="relative h-[500px] bg-gradient-to-br from-slate-900/50 to-blue-900/20 rounded-xl border border-blue-600/30 overflow-hidden">
                  <ClientOnly>
                    <CardSwap
                      cardDistance={50}
                      verticalDistance={60}
                      delay={3000}
                      pauseOnHover={true}
                      onCardClick={(idx: number) => {
                        console.log(`Card ${idx} clicked`);
                      }}
                    >
                      <Card className="overflow-hidden">
                        {/* Browser Header */}
                        <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center space-x-2">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="ml-3 flex-1 bg-white border border-gray-300 rounded-md px-3 py-1">
                            <span className="text-xs text-gray-600">CineRec.app</span>
                          </div>
                        </div>
                        {/* Website Screenshot */}
                        <div className="bg-white flex-1">
                          <img 
                            src="/cinescreen.png" 
                            alt="CineRec App Screenshot"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Card>
                      <Card className="overflow-hidden">
                        {/* Browser Header */}
                        <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center space-x-2">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="ml-3 flex-1 bg-white border border-gray-300 rounded-md px-3 py-1">
                            <span className="text-xs text-gray-600">diabot.health</span>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                        {/* Page Content */}
                        <div className="p-4 bg-white">
                          <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">DiaBot</h4>
                            <p className="text-blue-600 text-sm mb-2">AI Health Assistant</p>
                            <p className="text-gray-500 text-xs">Python • Gemini • ChromaDB</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="overflow-hidden">
                        {/* Browser Header */}
                        <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex items-center space-x-2">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="ml-3 flex-1 bg-white border border-gray-300 rounded-md px-3 py-1">
                            <span className="text-xs text-gray-600">athleteiq.plus</span>
                          </div>
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        </div>
                        {/* Page Content */}
                        <div className="p-4 bg-white">
                          <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">AthleteIQ+</h4>
                            <p className="text-blue-600 text-sm mb-2">Sports Performance</p>
                            <p className="text-gray-500 text-xs">Spring Boot • Kafka • Next.js</p>
                          </div>
                        </div>
                      </Card>
                    </CardSwap>
                  </ClientOnly>
                </div>
              </div>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-blue-400">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-200 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/60 border border-blue-600/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-200 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/60 border border-blue-600/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-200 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/60 border border-blue-600/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-200 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/60 border border-blue-600/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-200 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/60 border border-blue-600/30 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-center mt-4">{statusMessage}</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-center mt-4">{statusMessage}</p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                                  <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-6">Let&apos;s Connect</h3>
                                  <p className="text-gray-200 text-lg leading-relaxed mb-8">
                    I&apos;m always interested in hearing about new opportunities, exciting projects, or just connecting with fellow developers and tech enthusiasts. Feel free to reach out!
                  </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30">
                    <FaEnvelope className="text-blue-400 text-xl" />
                    <div>
                      <p className="text-gray-200 font-medium">Email</p>
                      <p className="text-blue-300">anas2002saadi@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30">
                    <FaPhone className="text-blue-400 text-xl" />
                    <div>
                      <p className="text-gray-200 font-medium">Phone</p>
                      <p className="text-blue-300">+212-678851747</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30">
                    <FaMapMarkerAlt className="text-blue-400 text-xl" />
                    <div>
                      <p className="text-gray-200 font-medium">Location</p>
                      <p className="text-blue-300">Rabat, Morocco</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-8 border border-blue-600/30 shadow-lg">
                <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-6">Professional Profiles</h3>
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/anas-saadi-25008120a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30 hover:bg-blue-900/30 transition-all duration-300 group"
                  >
                    <FaLinkedin className="text-blue-400 text-xl group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-gray-200 font-medium">LinkedIn</p>
                      <p className="text-blue-300">Connect professionally</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/anasaadi02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-700/60 rounded-lg border border-blue-600/30 hover:bg-blue-900/30 transition-all duration-300 group"
                  >
                    <FaGithub className="text-blue-400 text-xl group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-gray-200 font-medium">GitHub</p>
                      <p className="text-blue-300">View my projects</p>
                    </div>
                  </a>
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

        </div>
      </footer>
    </div>
  );
}
