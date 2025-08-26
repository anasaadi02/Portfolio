"use client";

import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "MovieRec - AI Cinema Recommendation",
      subtitle: "Film Discovery Platform for Cinema Enthusiasts",
      period: "March 2025 – Present",
      description: "Personalized recommendation platform serving 200+ users with highly acclaimed user experience. Developed with React Native, TMDB API and collaborative filtering algorithms.",
      features: [
        "AI-powered movie recommendations using collaborative filtering",
        "React Native mobile app with 200+ active users",
        "Integration with TMDB API for comprehensive movie database",
        "Personalized user experience with rating system",
        "Cross-platform compatibility (iOS & Android)"
      ],
      technologies: ["React Native", "JavaScript", "TMDB API", "Collaborative Filtering", "Firebase"],
      github: "https://github.com/anasaadi02/movierec",
      live: "https://movierec.app",
      image: "/easytruckin.jpg"
    },
    {
      id: 2,
      title: "DiaBot - AI Health Assistant",
      subtitle: "Intelligent Health Monitoring Application",
      period: "October 2024 – January 2025",
      description: "Personalized health assistant serving 100+ users with 85% retention rate. RAG architecture using Google Gemini and ChromaDB on GCP infrastructure.",
      features: [
        "AI-powered health monitoring and recommendations",
        "RAG (Retrieval-Augmented Generation) architecture",
        "Integration with Google Gemini AI model",
        "ChromaDB vector database for health knowledge",
        "GCP cloud infrastructure deployment"
      ],
      technologies: ["Python", "Google Gemini", "ChromaDB", "GCP", "Streamlit", "RAG"],
      github: "https://github.com/anasaadi02/diabot",
      live: "https://diabot.health",
      image: "/MTDS.png"
    },
    {
      id: 3,
      title: "AthleteIQ+ - Sports Performance",
      subtitle: "Training Management Solution",
      period: "October 2024 – January 2025",
      description: "Performance analysis platform for 1,000+ athletes, increasing training efficiency by 45%. Spring Boot microservices architecture with Kafka messaging and Next.js interface.",
      features: [
        "Performance tracking and analytics for athletes",
        "Microservices architecture with Spring Boot",
        "Real-time messaging using Apache Kafka",
        "Modern Next.js frontend interface",
        "Scalable backend infrastructure"
      ],
      technologies: ["Java", "Spring Boot", "Apache Kafka", "Next.js", "PostgreSQL", "Docker"],
      github: "https://github.com/anasaadi02/athleteiq",
      live: "https://athleteiq.plus",
      image: "/easytruckin.jpg"
    },
    {
      id: 4,
      title: "AI Product Demand Forecasting",
      subtitle: "ML Prediction System",
      period: "May 2024",
      description: "Demand forecasting model for local market analysis with 87% accuracy. End-to-end pipeline using Python, Pandas, NumPy and Scikit-learn.",
      features: [
        "Machine learning demand forecasting model",
        "87% prediction accuracy rate",
        "End-to-end data pipeline",
        "Local market analysis capabilities",
        "Automated model training and evaluation"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
      github: "https://github.com/anasaadi02/demand-forecasting",
      live: null,
      image: "/MTDS.png"
    },
    {
      id: 5,
      title: "Easy Truck IN - Driver Management",
      subtitle: "Intelligent Driver Management System",
      period: "February 2025 – August 2025",
      description: "Developed an intelligent driver management system with AI functionalities for 500+ users, reducing support requests by 35%. Built using LangChain/HuggingFace, React and Node.JS.",
      features: [
        "AI-powered driver management system",
        "500+ active users with 35% reduced support requests",
        "LangChain and HuggingFace integration",
        "Full-stack React and Node.js application",
        "Intelligent automation and monitoring"
      ],
      technologies: ["React", "Node.js", "LangChain", "HuggingFace", "MongoDB", "Docker"],
      github: null,
      live: null,
      image: "/easytruckin.jpg"
    },
    {
      id: 6,
      title: "Morocco Customs - AI Chatbot",
      subtitle: "Intelligent Document Assistant",
      period: "July – August 2024",
      description: "Developed intelligent chatbot for 1,000+ PDF documents, improving operational efficiency by 60%. Implemented RAG solution with ChromaDB and Streamlit interface.",
      features: [
        "AI chatbot for document processing",
        "1,000+ PDF document support",
        "60% improved operational efficiency",
        "RAG solution with ChromaDB",
        "Streamlit-based user interface"
      ],
      technologies: ["Python", "Streamlit", "ChromaDB", "RAG", "PDF Processing", "AI/ML"],
      github: null,
      live: null,
      image: "/MTDS.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-600/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold text-blue-400 hover:text-blue-300 transition-colors">
              Anas Saadi
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors font-medium"
            >
              <FaArrowLeft className="text-sm" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold mb-6 text-blue-400">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my work showcasing full-stack development, AI/ML applications, and innovative solutions. Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-slate-800/80 rounded-2xl border border-blue-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-900/50 to-slate-700/50 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-300 font-medium mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {project.period}
                    </p>
                  </div>
                  
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs border border-blue-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-slate-700/60 hover:bg-blue-900/50 text-gray-200 hover:text-blue-300 rounded-lg border border-blue-600/30 transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="text-lg" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-700/80 text-white rounded-lg border border-blue-500/30 transition-all duration-300 hover:scale-105"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
