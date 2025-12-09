import { Brain, Home } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Brain Tumor Detector",
    subtitle: "Deep Learning Project",
    date: "June 2025",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    description:
      "Deep learning system to automatically classify brain MRI images into four categories: No Tumor, Glioma, Meningioma, and Pituitary.",
    highlights: [
      "Used VGG16 architecture for feature extraction",
      "Achieved 96% accuracy on tumor detection",
      "Built complete training pipeline and prediction UI",
    ],
    gradient: "from-purple-500/20 to-cyan-500/20",
    github: "https://github.com/sanskarjadhav015/brain-tumor-detector",
    live: "https://braintumardetector.vercel.app/",
  },

  {
    icon: Home,
    title: "Estate Hub",
    subtitle: "Real Estate Web Application",
    date: "Nov 2024",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "Responsive real estate platform for users to browse, search, and save properties with secure authentication.",
    highlights: [
      "Implemented secure user authentication",
      "Developed backend modules for property storage",
      "Built clean, interactive UI components",
    ],
    gradient: "from-cyan-500/20 to-teal-500/20",
    github: "https://github.com/sanskarjadhav015/estate-hub",
  },

  {
    icon: Brain,
    title: "News Article Recommendation System",
    subtitle: "Machine Learning Recommendation System",
    date: "2025",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas", "Streamlit"],
    description:
      "Personalized news recommendation system using content-based filtering and natural language processing techniques.",
    highlights: [
      "Used TF-IDF and cosine similarity for recommendations",
      "Built interactive UI using Streamlit",
      "Processed and cleaned large text datasets",
    ],
    gradient: "from-orange-500/20 to-pink-500/20",
    github: "https://github.com/sanskarjadhav015/news-recommendation-system",
  },

  {
    icon: Brain,
    title: "Customer Segmentation System",
    subtitle: "Unsupervised Machine Learning",
    date: "2025",
    tech: ["Python", "K-Means", "Pandas", "Matplotlib", "Seaborn"],
    description:
      "Customer segmentation system using K-Means clustering to group customers based on spending behavior and demographics.",
    highlights: [
      "Performed data visualization and feature scaling",
      "Applied K-Means with optimal cluster selection",
      "Derived marketing insights from clustered data",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com/sanskarjadhav015/customer-segmentation-system",
  },

  {
    icon: Brain,
    title: "Chronic Kidney Disease Prediction System",
    subtitle: "Healthcare ML App",
    date: "2025",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy"],
    description:
      "Machine learning-based web application to predict chronic kidney disease using patient health parameters.",
    highlights: [
      "Trained multiple ML models for accuracy comparison",
      "Deployed prediction system using Flask",
      "Built user-friendly medical input interface",
    ],
    gradient: "from-red-500/20 to-rose-500/20",
    github:
      "https://github.com/sanskarjadhav015/chronic-kidney-disease-prediction",
  },

  {
    icon: Brain,
    title: "Car Price Prediction System",
    subtitle: "Regression-Based ML System",
    date: "2025",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy"],
    description:
      "Car price prediction system that estimates resale value using regression algorithms and vehicle features.",
    highlights: [
      "Used Linear Regression & Random Forest models",
      "Built Flask-based prediction web app",
      "Achieved high R² score on test dataset",
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    github:
      "https://github.com/sanskarjadhav015/car-price-prediction-system",
  },

  {
    icon: Brain,
    title: "Crop Recommendation System",
    subtitle: "Agriculture Machine Learning System",
    date: "2025",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy"],
    description:
      "Smart crop recommendation system that suggests the best crop based on soil nutrients, temperature, humidity, and rainfall.",
    highlights: [
      "Used classification algorithms for crop prediction",
      "Integrated system with Flask web interface",
      "Helpful for farmers and agricultural planning",
    ],
    gradient: "from-lime-500/20 to-green-500/20",
    github: "https://github.com/sanskarjadhav015/crop-recommendation-system",
  },

  {
    icon: Brain,
    title: "Crop Yield Prediction System",
    subtitle: "Agriculture Production Forecasting",
    date: "2025",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    description:
      "A machine learning system that predicts crop yield based on environmental factors and agricultural parameters.",
    highlights: [
      "Built regression model to estimate crop yield",
      "Preprocessed agricultural datasets for accurate predictions",
      "Interactive Streamlit web app for user-friendly predictions",
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
    github: "https://github.com/sanskarjadhav015/crop-yield-prediction",
  },

  {
    icon: Brain,
    title: "Movie Recommendation System",
    subtitle: "Content-Based Recommendation Engine",
    date: "2025",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy"],
    description:
      "A movie recommendation system that suggests similar movies using TF-IDF vectorization and cosine similarity.",
    highlights: [
      "Uses TF-IDF and cosine similarity for recommendations",
      "Built with Flask backend and responsive UI",
      "Provides instant similar movie suggestions based on user input",
    ],
    gradient: "from-purple-500/20 to-indigo-500/20",
    github: "https://github.com/sanskarjadhav015/movie-recommendation-system",
  },
];

/* ------------------------------------
   UI SECTION COMPONENT
------------------------------------ */
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-gradient">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <div
              key={index}
              className={`p-6 rounded-xl bg-black/20 border border-white/10 shadow-lg hover:shadow-xl transition-all gradient-border`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {project.description}
              </p>

              <h4 className="text-sm font-semibold mb-2">Highlights:</h4>
              <ul className="list-disc ml-5 mb-4 text-sm">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-primary text-black font-semibold hover:opacity-80 transition"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
