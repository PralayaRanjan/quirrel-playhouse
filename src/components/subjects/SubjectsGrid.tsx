import { useNavigate } from "react-router-dom";
import SubjectCard from "./SubjectCard";

const SubjectsGrid = () => {
  const navigate = useNavigate();

  const subjects = [
    {
      id: "math",
      title: "Mathematics",
      description: "Numbers, shapes, and problem solving",
      icon: "🔢",
      progress: 65,
      totalSkills: 120,
      completedSkills: 78,
      estimatedTime: "2-3 hours",
      gradient: "bg-primary-gradient"
    },
    {
      id: "science",
      title: "Science",
      description: "Discover how the world works",
      icon: "🔬",
      progress: 42,
      totalSkills: 85,
      completedSkills: 36,
      estimatedTime: "3-4 hours",
      gradient: "bg-success-gradient"
    },
    {
      id: "language",
      title: "Language Arts",
      description: "Reading, writing, and communication",
      icon: "📚",
      progress: 28,
      totalSkills: 95,
      completedSkills: 27,
      estimatedTime: "4-5 hours",
      gradient: "bg-gradient-to-r from-accent to-accent/80"
    }
  ];

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/learn/${subjectId}`);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Learning Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore subjects designed for curious minds. Quirrel is here to guide you every step of the way!
          </p>
        </div>

        {/* Mascot callout */}
        <div className="flex justify-center mb-8">
          <div className="bg-card border rounded-2xl p-4 shadow-card max-w-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center animate-float-gentle">
                <span className="text-xl">🐿️</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Quirrel says:</p>
                <p className="text-sm text-muted-foreground">"Pick a subject that excites you! I'll be right here to help."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description={subject.description}
              icon={subject.icon}
              progress={subject.progress}
              totalSkills={subject.totalSkills}
              completedSkills={subject.completedSkills}
              estimatedTime={subject.estimatedTime}
              gradient={subject.gradient}
              onClick={() => handleSubjectClick(subject.id)}
            />
          ))}
        </div>

        {/* Coming soon */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-muted/50 border rounded-full px-4 py-2">
            <span className="text-sm font-medium">Coming soon:</span>
            <span className="text-sm text-muted-foreground">Art, Music & Coding</span>
            <span className="text-lg">🎨🎵💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsGrid;