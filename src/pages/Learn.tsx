import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Lock, 
  CheckCircle, 
  Star, 
  Clock,
  Trophy,
  Target
} from "lucide-react";

const Learn = () => {
  const { subject } = useParams<{ subject: string }>();
  
  // Mock data for grades and skills
  const grades = [
    { id: "pre-k", name: "Pre-K", ageRange: "3-4 years" },
    { id: "kg", name: "Kindergarten", ageRange: "4-5 years" },
    { id: "class-1", name: "Class 1", ageRange: "5-6 years" },
    { id: "class-2", name: "Class 2", ageRange: "6-7 years" },
    { id: "class-3", name: "Class 3", ageRange: "7-8 years" },
    { id: "class-4", name: "Class 4", ageRange: "8-9 years" },
    { id: "class-5", name: "Class 5", ageRange: "9-10 years" },
    { id: "class-6", name: "Class 6", ageRange: "10-11 years" }
  ];

  const getSubjectData = () => {
    switch (subject) {
      case 'math':
        return {
          title: 'Mathematics',
          description: 'Build number sense, solve problems, and discover patterns',
          icon: '🔢',
          color: 'bg-primary-gradient',
          skills: [
            { id: 1, title: 'Counting 1-10', difficulty: 1, completed: true, locked: false },
            { id: 2, title: 'Basic Addition', difficulty: 2, completed: true, locked: false },
            { id: 3, title: 'Shape Recognition', difficulty: 1, completed: false, locked: false },
            { id: 4, title: 'Subtraction Basics', difficulty: 2, completed: false, locked: false },
            { id: 5, title: 'Number Patterns', difficulty: 3, completed: false, locked: true }
          ]
        };
      case 'science':
        return {
          title: 'Science',
          description: 'Explore the natural world and how things work',
          icon: '🔬',
          color: 'bg-success-gradient',
          skills: [
            { id: 1, title: 'Living vs Non-living', difficulty: 1, completed: true, locked: false },
            { id: 2, title: 'Animal Habitats', difficulty: 2, completed: false, locked: false },
            { id: 3, title: 'Weather Patterns', difficulty: 2, completed: false, locked: false },
            { id: 4, title: 'Plant Life Cycle', difficulty: 3, completed: false, locked: true }
          ]
        };
      case 'language':
        return {
          title: 'Language Arts',
          description: 'Master reading, writing, and communication',
          icon: '📚',
          color: 'bg-gradient-to-r from-accent to-accent/80',
          skills: [
            { id: 1, title: 'Letter Sounds A-F', difficulty: 1, completed: true, locked: false },
            { id: 2, title: 'Simple Words (CVC)', difficulty: 2, completed: false, locked: false },
            { id: 3, title: 'Sight Words', difficulty: 2, completed: false, locked: false },
            { id: 4, title: 'Reading Sentences', difficulty: 3, completed: false, locked: true }
          ]
        };
      default:
        return null;
    }
  };

  const subjectData = getSubjectData();

  if (!subjectData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Subject not found</h1>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: number) => {
    switch (difficulty) {
      case 1: return 'bg-success text-success-foreground';
      case 2: return 'bg-support text-support-foreground';
      case 3: return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyText = (difficulty: number) => {
    switch (difficulty) {
      case 1: return 'Easy';
      case 2: return 'Medium';
      case 3: return 'Hard';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${subjectData.color} py-12`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center text-3xl">
              {subjectData.icon}
            </div>
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{subjectData.title}</h1>
              <p className="text-lg opacity-90">{subjectData.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Grade Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Choose Your Grade</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {grades.map((grade) => (
              <Card key={grade.id} className="cursor-pointer hover:shadow-glow transition-all group">
                <CardContent className="p-4 text-center">
                  <div className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {grade.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {grade.ageRange}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills for selected grade (showing Pre-K as example) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Pre-K Skills</h2>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-support" />
              <span className="text-sm font-medium">2 of 5 completed</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectData.skills.map((skill) => (
              <Card key={skill.id} className={`cursor-pointer transition-all ${skill.locked ? 'opacity-50' : 'hover:shadow-glow hover:-translate-y-1'}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold mb-2 flex items-center space-x-2">
                        <span>{skill.title}</span>
                        {skill.completed && <CheckCircle className="h-4 w-4 text-success" />}
                        {skill.locked && <Lock className="h-4 w-4 text-muted-foreground" />}
                      </h3>
                      
                      <Badge className={getDifficultyColor(skill.difficulty)}>
                        {getDifficultyText(skill.difficulty)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {skill.completed ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-success">Completed!</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-support fill-current" />
                          <Star className="h-4 w-4 text-support fill-current" />
                          <Star className="h-4 w-4 text-support fill-current" />
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full" disabled={skill.locked}>
                        <Trophy className="mr-2 h-4 w-4" />
                        Review
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Progress value={skill.locked ? 0 : 25} className="h-2" />
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>5-10 min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>+50 XP</span>
                        </div>
                      </div>
                      
                      <Button 
                        className={`w-full ${subjectData.color}`} 
                        disabled={skill.locked}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {skill.locked ? 'Locked' : 'Start Learning'}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quirrel encouragement */}
        <div className="flex justify-center mt-12">
          <div className="bg-card border rounded-2xl p-6 shadow-card max-w-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center animate-float-gentle flex-shrink-0">
                <span className="text-2xl">🐿️</span>
              </div>
              <div>
                <p className="font-medium mb-1">Great progress!</p>
                <p className="text-sm text-muted-foreground">
                  You're doing amazing! Complete one more skill to unlock the next challenge and earn bonus XP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;