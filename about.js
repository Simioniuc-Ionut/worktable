import React, { useState, useEffect } from 'react';
import { 
  User, Code, Globe, Award, Briefcase, BookOpen, 
  Brain, GraduationCap, Library, Terminal, Coffee 
} from 'lucide-react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Câmpuri pentru secțiunea Personal Skills
  const personalSkills = [
    'Teaming',
    'Disciplined',
    'Goal-Oriented',
    'Eager to Learn',
    'Adaptable',
    'Quick Learner'
  ];

  const relevantCourses = [
    { name: 'React Native Development', platform: 'Udemy', duration: '40 hours' },
    { name: 'Advanced Data Structures', platform: 'Coursera', duration: '30 hours' },
    { name: 'OOP Principles', platform: 'edX', duration: '25 hours' },
    { name: 'System Design', platform: 'Udemy', duration: '35 hours' }
  ];

  const certifications = [
    { title: 'JavaScript Essentials', issuer: 'CodeCademy' },
    { title: 'Python Programming', issuer: 'Coursera' },
    { title: 'Web Development Bootcamp', issuer: 'Udemy' }
  ];

  const colors = {
    primary: '#1a73e8',
    secondary: '#121212',
    accent: '#4285f4',
    background: '#f8f9fa',
    card: '#ffffff',
    text: '#202124',
    textLight: '#5f6368'
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero" className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] to-[#4285f4] opacity-10 rounded-3xl" />
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1a73e8]/10 to-[#4285f4]/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
            
            {/* Poza de profil */}
            <div className="flex items-center flex-col text-center space-y-4">
              <img 
                src="/path_to_profile_image.jpg" // înlocuiește cu link-ul la poza ta
                alt="Profile Picture" 
                className="w-32 h-32 rounded-full border-4 border-[#1a73e8]"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-[#1a73e8] mb-2">
                Simioniuc Ionut
              </h1>
              <p className="text-xl text-[#5f6368] leading-relaxed">
                A third-year Computer Science student with a passion for creating innovative and scalable solutions.
                Driven by learning and adaptability.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto space-x-4 mb-12 p-2 -mx-2">
          {['About', 'Skills', 'Personal Skills', 'Education', 'Courses', 'Certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab.toLowerCase().replace(' ', '-'))}
              className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap
                ${activeSection === tab.toLowerCase().replace(' ', '-') 
                  ? 'bg-[#1a73e8] text-white shadow-lg' 
                  : 'bg-white text-[#5f6368] hover:bg-[#1a73e8]/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <section id="skills" className={`transform transition-all duration-500 ${
              isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Code className="w-6 h-6 text-[#1a73e8] mr-2" />
                  <h2 className="text-2xl font-bold text-[#202124]">Technical Skills</h2>
                </div>
                <ul className="list-disc pl-5 text-[#5f6368] space-y-2">
                  <li>Proficient in Java, Python, and JavaScript</li>
                  <li>Strong foundation in web technologies (HTML, CSS, React)</li>
                  <li>Knowledge of server-side development (Node.js, Express)</li>
                  <li>Database management basics (SQL, MongoDB)</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section id="education" className={`transform transition-all duration-500 ${
              isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-6 h-6 text-[#1a73e8] mr-2" />
                  <h2 className="text-2xl font-bold text-[#202124]">Education</h2>
                </div>
                <p className="text-[#5f6368]">Bachelor's in Computer Science, 2020-2024</p>
                <p className="text-[#5f6368] mt-2">Focus on Software Engineering and Data Structures</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Personal Skills */}
            <section id="personal-skills" className={`transform transition-all duration-500 ${
              isVisible['personal-skills'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Brain className="w-6 h-6 text-[#1a73e8] mr-2" />
                  <h2 className="text-2xl font-bold text-[#202124]">Personal Skills</h2>
                </div>
                <ul className="list-disc pl-5 text-[#5f6368] space-y-2">
                  {personalSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Relevant Courses */}
            <section id="courses" className={`transform transition-all duration-500 ${
              isVisible.courses ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Library className="w-6 h-6 text-[#1a73e8] mr-2" />
                  <h2 className="text-2xl font-bold text-[#202124]">Relevant Courses</h2>
                </div>
                <ul className="list-disc pl-5 text-[#5f6368] space-y-2">
                  {relevantCourses.map((course, index) => (
                    <li key={index}>{course.name} - {course.platform} ({course.duration})</li>
                  ))}
                </ul>
              </div>
            </section>
            
            {/* Certifications */}
            <section id="certifications" className={`transform transition-all duration-500 ${
              isVisible.certifications ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-[#1a73e8] mr-2" />
                  <h2 className="text-2xl font-bold text-[#202124]">Certifications</h2>
                </div>
                <ul className="list-disc pl-5 text-[#5f6368] space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index}>{cert.title} - {cert.issuer}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
