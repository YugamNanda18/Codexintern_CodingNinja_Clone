import React, { useState } from 'react';
import { Menu, X, ChevronDown, Star, Users, Award, BookOpen, Code, Briefcase, PlayCircle, Check } from 'lucide-react';

export default function CodingNinjasClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const courses = [
    {
      title: "Data Structures & Algorithms",
      level: "Beginner to Advanced",
      duration: "6 months",
      students: "50,000+",
      rating: 4.8,
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop"
    },
    {
      title: "Full Stack Web Development",
      level: "Beginner to Advanced",
      duration: "9 months",
      students: "45,000+",
      rating: 4.9,
      price: "₹12,999",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      title: "Machine Learning",
      level: "Intermediate",
      duration: "5 months",
      students: "30,000+",
      rating: 4.7,
      price: "₹15,999",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      title: "Android Development",
      level: "Beginner to Advanced",
      duration: "7 months",
      students: "35,000+",
      rating: 4.8,
      price: "₹10,999",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=250&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Industry-Relevant Curriculum",
      description: "Learn from curriculum designed by industry experts"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Classes",
      description: "Interactive live classes with doubt support"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Placement Assistance",
      description: "100% placement assistance with top companies"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Practice Problems",
      description: "1000+ practice problems with editorial solutions"
    }
  ];

  const stats = [
    { number: "1M+", label: "Students Enrolled" },
    { number: "500+", label: "Hiring Partners" },
    { number: "95%", label: "Placement Rate" },
    { number: "20 LPA", label: "Highest Package" }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "SDE at Google",
      image: "https://i.pravatar.cc/100?img=12",
      text: "Coding Ninjas helped me crack my dream job at Google. The DSA course is exceptional!"
    },
    {
      name: "Priya Patel",
      role: "SDE at Microsoft",
      image: "https://i.pravatar.cc/100?img=45",
      text: "The mentorship and placement support is top-notch. Highly recommend!"
    },
    {
      name: "Amit Kumar",
      role: "SDE at Amazon",
      image: "https://i.pravatar.cc/100?img=33",
      text: "Best platform to learn coding from scratch. The structured approach really works!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-orange-600">
                Coding<span className="text-gray-800">Ninjas</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Courses</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Practice</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Resources</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">Career Camp</a>
              <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50">
                Sign In
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Enroll Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Courses</a>
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Practice</a>
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Resources</a>
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Career Camp</a>
              <button className="w-full px-4 py-2 text-orange-600 border border-orange-600 rounded-lg">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg">
                Enroll Now
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Master Coding Skills & Land Your Dream Job
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn from industry experts, build real projects, and get placed in top tech companies
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center gap-2">
                  Explore Courses
                  <ChevronDown className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/40?img=${i}`}
                      alt="Student"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Rated 4.9/5 by 100,000+ students</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students Learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Coding Ninjas?</h2>
            <p className="text-xl text-gray-600">Everything you need to become a successful developer</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-orange-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-xl text-gray-600">Choose from our most loved courses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-orange-600 font-semibold mb-2">{course.level}</div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">{course.duration}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 1 million+ students learning with Coding Ninjas
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 font-semibold text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Coding<span className="text-orange-600">Ninjas</span>
              </div>
              <p className="text-gray-400">
                Empowering students to achieve their career goals through quality education
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Data Structures</a></li>
                <li><a href="#" className="hover:text-white">Web Development</a></li>
                <li><a href="#" className="hover:text-white">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white">Android Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Coding Ninjas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
