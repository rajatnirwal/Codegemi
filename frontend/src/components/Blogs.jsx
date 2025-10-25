// components/Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";

// Inline CSS styles
const styles = `
  .blogs-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }

  .blogs-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .blogs-title {
    font-size: 2.25rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .blogs-subtitle {
    font-size: 1.25rem;
    color: #6b7280;
    max-width: 48rem;
    margin: 0 auto;
  }

  .featured-blog {
    background: linear-gradient(to right, #eff6ff, #e0e7ff);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 4rem;
  }

  .featured-content {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .featured-content {
      flex-direction: row;
    }
  }

  .featured-image {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .featured-image {
      width: 50%;
      height: auto;
    }
  }

  .featured-text {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .featured-text {
      width: 50%;
    }
  }

  .category-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    background-color: #dbeafe;
    color: #1e40af;
  }

  .blog-date {
    margin-left: 1rem;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .featured-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
    margin: 0.75rem 0;
  }

  .featured-excerpt {
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  .read-more-link {
    display: inline-flex;
    align-items: center;
    color: #2563eb;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
  }

  .read-more-link:hover {
    color: #1e40af;
  }

  .read-more-icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 1.5rem;
  }

  .blogs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .blogs-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .blogs-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .blog-card {
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s;
  }

  .blog-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  .card-image-container {
    position: relative;
  }

  .card-image {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }

  .card-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    background-color: white;
    color: #374151;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-date {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.75rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #1f2937;
    margin-bottom: 0.75rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-description {
    color: #6b7280;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    color: #2563eb;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
  }

  .card-link:hover {
    color: #1e40af;
  }

  .card-link-icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    transition: transform 0.2s;
  }

  .card-link:hover .card-link-icon {
    transform: translateX(0.25rem);
  }

  .newsletter-cta {
    background: linear-gradient(to right, #3b82f6, #6366f1);
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    color: white;
  }

  .newsletter-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .newsletter-text {
    margin-bottom: 1.5rem;
    max-width: 28rem;
    margin-left: auto;
    margin-right: auto;
  }

  .newsletter-form {
    display: flex;
    max-width: 28rem;
    margin: 0 auto;
  }

  .newsletter-input {
    flex-grow: 1;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    color: #1f2937;
    outline: none;
  }

  .newsletter-input:focus {
    box-shadow: 0 0 0 2px #3b82f6;
  }

  .newsletter-button {
    background-color: #1f2937;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .newsletter-button:hover {
    background-color: #374151;
  }

  .meta-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

// Add styles to document head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Drone Technology",
    image: "https://assets.telegraphindia.com/telegraph/2021/Dec/1639480768_resized_11zon-1.jpg",
    description: "How Drones are Changing Our World",
    content: `
# The Future of Drone Technology: How Drones are Changing Our World

## Introduction
Once considered futuristic gadgets, drones are now an essential part of our daily lives. From capturing breathtaking aerial shots to delivering medicines in remote villages, drone technology has moved beyond just a hobby—it's shaping industries, economies, and even our lifestyles. With rapid advancements in artificial intelligence, 5G connectivity, and automation, drones are on the path to becoming as common as smartphones in the near future.

## 1. The Rise of Drone Technology
The journey of drones began in the defense sector, where they were primarily used for surveillance and military operations. Over the years, innovation and affordability have transformed drones into tools for civilians, startups, and large corporations. Today, industries across the globe are exploring drone applications to cut costs, save time, and enhance efficiency.

## 2. Industries Transformed by Drones
- **Agriculture** – Farmers use drones for crop monitoring, soil analysis, and precision spraying, helping increase productivity while reducing resource waste.  
- **Healthcare** – In remote areas, drones deliver medicines, vaccines, and blood samples where road access is limited. Companies like Zipline have already saved thousands of lives in Africa with drone delivery systems.  
- **E-Commerce & Logistics** – Amazon Prime Air and other startups are testing drone delivery systems that promise faster, eco-friendly, and contactless delivery.  
- **Filmmaking & Media** – From Hollywood movies to wedding ceremonies, drones have replaced expensive helicopters for aerial cinematography.  
- **Disaster Management** – Drones are deployed in flood, earthquake, and wildfire zones for rescue missions, offering quick situational awareness when human access is dangerous.  

## 3. The Role of AI & 5G in Drone Evolution
The next leap in drone technology is happening with AI and 5G. Artificial intelligence allows drones to make real-time decisions, avoid obstacles, and even operate in swarms for coordinated tasks. Meanwhile, 5G connectivity ensures faster data transmission, enabling remote pilots and businesses to control drones more effectively from anywhere in the world.

Imagine a fleet of drones planting trees after a forest fire or delivering relief packages autonomously during a flood—this is not science fiction anymore, it's the next step in innovation.

## 4. Challenges Ahead
Despite the benefits, drones face challenges that must be addressed:  
- **Regulations & Air Traffic Safety** – Governments are still drafting clear drone laws to avoid accidents in crowded airspaces.  
- **Battery Limitations** – Current battery technology restricts flight time, which affects delivery and large-scale operations.  
- **Privacy Concerns** – Drones with high-resolution cameras raise concerns about surveillance and data misuse.  

## 5. The Future of Drones
Looking ahead, drones will be more intelligent, safer, and versatile. We can expect:  
- **Smart Cities** with drones monitoring traffic, pollution, and infrastructure.  
- **Medical Emergencies** handled by drone ambulances delivering defibrillators before an ambulance arrives.  
- **Drone Taxis** for urban air mobility, cutting travel time drastically.  

## Conclusion
Drones are no longer just flying gadgets; they are powerful tools reshaping industries and saving lives. As technology evolves, drones will integrate into our daily routines just like smartphones and the internet did. The sky, quite literally, is no longer the limit.
`,
    date: "10 Sep",
    category: "Technology",
    excerpt: "How drones are shaping industries, economies, and our future.",
  },
  {
    id: 2,
    title: "The Power of RPA Workflow Automation",
    image: "https://itchronicles.com/wp-content/uploads/2019/10/bigstock-Rpa-Robotic-Process-Automation-300641923.jpg",
    description: "How RPA is Revolutionizing Business Processes",
    content: `
# The Power of RPA Workflow Automation: How Businesses are Transforming Operations

## Introduction
In today's fast-paced digital world, businesses are constantly searching for ways to improve efficiency, cut costs, and enhance customer experience. Robotic Process Automation (RPA) has emerged as a game-changer by automating repetitive, rule-based tasks that previously consumed valuable employee time. RPA is not about replacing humans—it's about empowering them to focus on strategic and creative work while software robots handle the mundane.

## 1. What is RPA Workflow Automation?
RPA workflow automation uses software "bots" to mimic human actions such as data entry, report generation, and email communication. These bots follow structured workflows, ensuring tasks are executed faster, more accurately, and without fatigue. From back-office operations to customer-facing services, RPA has become an essential tool in digital transformation.

## 2. Industries Leveraging RPA
- **Banking & Finance** – Automating loan processing, compliance checks, and fraud detection to save time and reduce errors.  
- **Healthcare** – Streamlining patient data entry, insurance claim processing, and appointment scheduling.  
- **Retail & E-Commerce** – Managing inventory, order tracking, and customer support workflows seamlessly.  
- **Human Resources** – Automating employee onboarding, payroll processing, and performance reporting.  
- **Manufacturing** – Enhancing supply chain operations, procurement, and quality assurance.  

## 3. The Role of AI in RPA
While RPA handles rule-based tasks, integrating Artificial Intelligence takes automation to the next level. Intelligent bots can analyze unstructured data, recognize patterns, and make decisions. For example, AI-powered RPA can process invoices with varying formats, analyze sentiment in customer queries, or even predict workflow bottlenecks.

## 4. Benefits of RPA Workflow Automation
- **Increased Efficiency** – Tasks that took hours can now be completed in minutes.  
- **Cost Savings** – Businesses save significantly on labor costs by reducing manual efforts.  
- **Error Reduction** – Bots follow rules consistently, minimizing human errors.  
- **Scalability** – RPA systems can quickly scale up or down based on demand.  
- **Employee Empowerment** – Workers spend less time on repetitive tasks and more on value-driven work.  

## 5. Challenges in RPA Implementation
Despite its advantages, RPA adoption comes with challenges:  
- **High Initial Investment** – Setting up RPA requires tools, training, and IT infrastructure.  
- **Process Complexity** – Not all tasks are suitable for automation; processes must be standardized first.  
- **Change Management** – Employees may fear job loss, so proper communication and training are crucial.  
- **Maintenance & Updates** – Bots require continuous monitoring and adjustments as business workflows evolve.  

## 6. The Future of RPA
The future of RPA lies in hyperautomation—a combination of RPA, AI, machine learning, and process mining. Businesses will increasingly adopt "digital workforces" where human and software bots collaborate seamlessly. Imagine an HR department where bots pre-screen candidates, AI ranks resumes, and managers focus only on interviews.  

## Conclusion
RPA workflow automation is more than a technology trend—it's a strategic enabler for modern businesses. By embracing automation, companies not only cut costs and improve accuracy but also unlock human potential for innovation. As RPA evolves with AI and hyperautomation, it will redefine the way organizations operate in the digital age.
`,
    date: "24 Sep",
    category: "Technology",
    excerpt: "How RPA automation is driving efficiency, reducing errors, and transforming industries.",
  },
  {
    id: 3,
    title: "The Rise of Artificial Intelligence",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLkec1247bjfz-dM3bKBw4jAhURpNQWKaZg&s",
    description: "How AI is Shaping the Future of Humanity",
    content: `
# The Rise of Artificial Intelligence: Transforming the World Around Us

## Introduction
Artificial Intelligence (AI) has moved from being a buzzword to becoming a core part of our everyday lives. From voice assistants like Siri and Alexa to advanced medical diagnosis and self-driving cars, AI is no longer science fiction—it is reality. By combining machine learning, deep learning, and natural language processing, AI is enabling breakthroughs across industries.

## 1. What is Artificial Intelligence?
AI refers to the ability of machines to perform tasks that usually require human intelligence. This includes problem-solving, decision-making, speech recognition, language translation, and even creativity. Unlike traditional software, AI systems learn and improve from data over time.

## 2. Applications of AI Across Industries
- **Healthcare** – AI helps doctors detect diseases earlier, analyze medical images, and even suggest treatment plans.  
- **Finance** – Fraud detection, algorithmic trading, and personalized financial planning are driven by AI.  
- **Retail & E-commerce** – AI powers product recommendations, chatbots, and inventory optimization.  
- **Transportation** – Self-driving cars and AI-powered traffic systems promise safer and faster journeys.  
- **Education** – Personalized learning platforms adapt lessons to each student's pace and style.  

## 3. The Role of Machine Learning and Deep Learning
Machine learning enables computers to "learn" from data without explicit programming. Deep learning, a subset of ML, uses neural networks to process vast amounts of unstructured data like images, audio, and video. These advancements allow AI to recognize faces, translate languages, and even generate human-like text.

## 4. Benefits of AI
- **Efficiency & Speed** – Automates repetitive tasks and processes large datasets quickly.  
- **Accuracy** – Outperforms humans in tasks like medical imaging analysis or fraud detection.  
- **24/7 Availability** – Unlike humans, AI systems never get tired.  
- **Innovation** – Enables new products and services that were previously impossible.  

## 5. Challenges and Risks of AI
Despite its advantages, AI comes with challenges:  
- **Job Displacement** – Automation could replace millions of low-skill jobs.  
- **Bias in AI** – If trained on biased data, AI systems can make unfair decisions.  
- **Ethical Concerns** – Use of AI in surveillance, military, and decision-making raises moral questions.  
- **Dependence on Data** – Without quality data, AI cannot function effectively.  

## 6. The Future of AI
The future of AI is promising yet complex. Expect to see:  
- **Smarter Healthcare Systems** with AI-driven early diagnosis and robotic surgeries.  
- **Human-AI Collaboration** where AI assists workers instead of replacing them.  
- **General AI** capable of reasoning and learning like humans, not just performing specific tasks.  
- **Ethical AI Frameworks** ensuring transparency, fairness, and accountability.  

## Conclusion
Artificial Intelligence is not just another technological advancement—it is a revolution that is reshaping our world. While challenges exist, the potential benefits of AI are enormous. By using AI responsibly, we can create a future where humans and intelligent machines work together to solve the world's biggest challenges.
`,
    date: "24 Sep",
    category: "Technology",
    excerpt: "AI is revolutionizing industries, reshaping daily life, and opening doors to the future.",
  },
  {
    id: 4,
    title: "The Evolution of Robotics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGsw20AyLGNXocyWHyIcm2xd-Lspdownlpg&s",
    description: "How Robotics is Reshaping Industries and Daily Life",
    content: `
# The Evolution of Robotics: Redefining the Future of Work and Society

## Introduction
Robotics has moved far beyond science fiction and factory floors. From robotic arms in manufacturing to humanoid robots providing customer service, the field of robotics is transforming how humans live and work. Combining mechanical engineering, artificial intelligence, and advanced sensors, robots today are smarter, more adaptable, and more human-like than ever before.

## 1. What is Robotics?
Robotics is an interdisciplinary field focused on designing, building, and operating machines that can perform tasks traditionally carried out by humans. These tasks range from industrial assembly lines to delicate surgeries in hospitals.

## 2. Applications of Robotics
- **Manufacturing** – Robotic arms streamline assembly lines, welding, and quality checks.  
- **Healthcare** – Surgical robots assist doctors with precision, while rehabilitation robots help patients recover mobility.  
- **Logistics** – Automated guided vehicles (AGVs) and warehouse robots speed up order fulfillment.  
- **Military & Defense** – Robots are deployed for bomb disposal, surveillance, and rescue missions.  
- **Service Industry** – Humanoid robots serve as receptionists, waiters, and even companions in elderly care.  

## 3. Role of AI and Machine Learning in Robotics
Modern robots are not just machines; they are intelligent systems. AI enables robots to learn from data, adapt to environments, and make decisions in real time. Machine learning helps robots recognize objects, navigate obstacles, and interact naturally with humans.

## 4. Benefits of Robotics
- **Increased Productivity** – Robots can work around the clock without breaks.  
- **Precision & Safety** – Reduces human errors and minimizes risks in hazardous environments.  
- **Cost Efficiency** – Saves long-term labor costs and increases output.  
- **Innovation** – Creates opportunities for new products, services, and solutions.  

## 5. Challenges in Robotics
Despite progress, robotics faces hurdles:  
- **High Costs** – Designing and maintaining robots can be expensive.  
- **Job Concerns** – Fear of robots replacing human workers persists.  
- **Complexity** – Programming and integrating robots into existing workflows is challenging.  
- **Ethical & Social Issues** – Human-robot relationships and autonomy raise important debates.  

## 6. The Future of Robotics
Looking ahead, robotics will become an even bigger part of society:  
- **Collaborative Robots (Cobots)** – Working safely alongside humans in factories and offices.  
- **Robotic Healthcare Assistants** – Providing elderly care and helping with daily tasks.  
- **Space Exploration Robots** – Assisting astronauts in building bases on the Moon and Mars.  
- **Autonomous Vehicles** – Self-driving cars and drones powered by robotics systems.  

## Conclusion
Robotics is no longer just about machines performing mechanical tasks—it's about creating intelligent companions and assistants that redefine industries and improve our lives. As robotics merges with AI, IoT, and 5G, we are stepping into an era where humans and robots will collaborate seamlessly to shape the future.
`,
    date: "24 Sep",
    category: "Technology",
    excerpt: "Robotics is transforming industries, healthcare, and even daily life through intelligent machines.",
  },
  {
    id: 5,
    title: "The Future of Web Development",
    image: "https://cdn.prod.website-files.com/670cbf146221ee06c3cdd761/670cbf146221ee06c3cde55b_Future%20Of%20Web%20Development.webp",
    description: "How Web Development is Powering the Digital World",
    content: `
# The Future of Web Development: Building the Digital Frontier

## Introduction
Web development has become the backbone of the digital world. From simple business websites to complex e-commerce platforms and interactive apps, web development powers how we communicate, shop, learn, and work online. With new frameworks, tools, and technologies emerging, the web continues to evolve at an unprecedented pace.

## 1. What is Web Development?
Web development refers to the creation and maintenance of websites and web applications. It includes front-end development (what users see), back-end development (servers, databases), and full-stack development (a mix of both).

## 2. Modern Trends in Web Development
- **Responsive Design** – Ensuring websites look great on all devices.  
- **Progressive Web Apps (PWAs)** – Apps that work offline and provide native-like experiences.  
- **Single Page Applications (SPAs)** – Faster, smoother navigation without full-page reloads.  
- **Web 3.0 & Blockchain** – Decentralized apps (dApps) and blockchain-powered platforms.  
- **AI & Chatbots** – Personalized user experiences and instant support.  

## 3. Benefits of Modern Web Development
- **Accessibility** – Reaches global users across devices and platforms.  
- **Scalability** – Websites can grow with business needs.  
- **Speed & Performance** – Optimized sites improve user engagement.  
- **Innovation** – Developers can create immersive and interactive experiences.  

## 4. Challenges in Web Development
- **Cybersecurity** – Rising threats require robust protection.  
- **Keeping Up with Trends** – New frameworks and tools evolve rapidly.  
- **User Expectations** – Faster, more interactive websites are now the norm.  
- **Cross-Browser Compatibility** – Ensuring websites work on all browsers is complex.  

## 5. The Future of Web Development
Web development is moving toward automation, AI integration, and immersive technologies like AR/VR. We can expect:  
- **No-Code/Low-Code Platforms** enabling anyone to build websites.  
- **AI-Driven Development** for faster, smarter coding.  
- **Metaverse Integration** where websites become 3D immersive experiences.  

## Conclusion
Web development is more than coding—it's about building digital experiences that connect the world. As technology advances, developers will continue shaping the internet into a smarter, more interactive, and immersive space.
`,
    date: "24 Sep",
    category: "Technology",
    excerpt: "Web development is shaping the digital world through innovation, speed, and interactivity.",
  },
  {
    id: 6,
    title: "The Importance of IT Management",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CnoI_hXxdwxWSukhb79QNRLkW0oO4KQ83w&s",
    description: "How IT Management Drives Business Success",
    content: `
# The Importance of IT Management: Driving Business Growth in the Digital Age

## Introduction
In today's digital-first economy, Information Technology (IT) is at the core of every business operation. IT management ensures that technology infrastructure, resources, and teams are aligned with organizational goals. It is not just about maintaining systems—it's about leveraging IT to gain a competitive advantage.

## 1. What is IT Management?
IT management involves planning, organizing, and controlling IT resources to meet business needs. It covers network management, cybersecurity, software development, cloud services, and IT support.

## 2. Key Areas of IT Management
- **Infrastructure Management** – Ensuring servers, networks, and systems run smoothly.  
- **Cybersecurity** – Protecting data and systems from threats and breaches.  
- **IT Service Management (ITSM)** – Delivering reliable IT support and services.  
- **Cloud Computing** – Managing scalable and cost-efficient IT resources.  
- **Project Management** – Overseeing technology-driven projects effectively.  

## 3. Benefits of Effective IT Management
- **Business Continuity** – Prevents downtime and ensures reliable operations.  
- **Cost Optimization** – Manages IT budgets effectively and reduces waste.  
- **Innovation Enablement** – Supports digital transformation and new initiatives.  
- **Data-Driven Decisions** – Provides insights through analytics and reporting.  

## 4. Challenges in IT Management
- **Rapid Technological Change** – IT managers must keep up with evolving tools.  
- **Cybersecurity Threats** – Increasing cyberattacks demand proactive defense.  
- **Talent Shortage** – Skilled IT professionals are in high demand.  
- **Integration Complexity** – Managing multiple systems and vendors is challenging.  

## 5. The Future of IT Management
The future of IT management will focus on automation, cloud-native operations, and AI-powered monitoring. Organizations will adopt:  
- **DevOps & Agile Practices** for faster delivery.  
- **AI-driven Security** for real-time threat detection.  
- **Remote IT Management** supporting hybrid work environments.  
- **Sustainable IT** focusing on eco-friendly practices.  

## Conclusion
IT management is no longer a back-office function—it is a strategic driver of success. Companies that invest in strong IT management can innovate faster, stay secure, and stay ahead in the competitive digital economy.
`,
    date: "24 Sep",
    category: "Technology",
    excerpt: "IT management ensures efficiency, security, and innovation in today's digital world.",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      {/* Header Section */}
      <div className="blogs-header">
        <h1 className="blogs-title">Our Blog</h1>
        <p className="blogs-subtitle">
          Discover insights, trends, and innovations in technology, AI, robotics, and more.
        </p>
      </div>
      
      {/* Featured Blog (first blog) */}
      <div className="featured-blog">
        <div className="featured-content">
          <div className="featured-image-container">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="featured-image"
            />
          </div>
          <div className="featured-text">
            <div className="meta-info">
              <span className="category-badge">{blogPosts[0].category}</span>
              <span className="blog-date">{blogPosts[0].date}</span>
            </div>
            <h2 className="featured-title">{blogPosts[0].title}</h2>
            <p className="featured-excerpt">{blogPosts[0].excerpt}</p>
            <Link
              to={`/blog/${blogPosts[0].id}`}
              state={{ blog: blogPosts[0] }}
              className="read-more-link"
            >
              Read Full Article
              <svg className="read-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Blog Grid */}
      <div>
        <h2 className="section-title">Latest Articles</h2>
        <div className="blogs-grid">
          {blogPosts.slice(1).map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="card-image-container">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-image"
                />
                <span className="card-badge">{blog.category}</span>
              </div>
              <div className="card-content">
                <div className="card-date">{blog.date}</div>
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-description">{blog.description}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  state={{ blog }}
                  className="card-link"
                >
                  Read More
                  <svg className="card-link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter CTA */}
      <div className="newsletter-cta">
        <h3 className="newsletter-title">Stay Updated</h3>
        <p className="newsletter-text">
          Subscribe to our newsletter to get the latest tech insights directly in your inbox.
        </p>
        <div className="newsletter-form">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="newsletter-input"
          />
          <button className="newsletter-button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;