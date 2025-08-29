import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Award, Clock } from "lucide-react";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: string;
  progress: number;
  totalSkills: number;
  completedSkills: number;
  estimatedTime: string;
  gradient: string;
  onClick: () => void;
}

const SubjectCard = ({
  title,
  description,
  icon,
  progress,
  totalSkills,
  completedSkills,
  estimatedTime,
  gradient,
  onClick
}: SubjectCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
      <div className={`h-2 ${gradient}`} />
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${gradient} rounded-2xl flex items-center justify-center text-white text-2xl group-hover:animate-bounce-in transition-all`}>
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onClick}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Progress</span>
            <span className="text-muted-foreground">{completedSkills}/{totalSkills} skills</span>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{totalSkills} Skills</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{estimatedTime}</span>
          </div>
        </div>

        {/* CTA */}
        <Button 
          onClick={onClick}
          className={`w-full ${gradient} hover:shadow-glow transition-all group`}
        >
          <span>Continue Learning</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Achievement hint */}
        {progress > 50 && (
          <div className="flex items-center justify-center space-x-2 mt-3 text-xs text-muted-foreground">
            <Award className="h-3 w-3 text-support" />
            <span>Achievement unlocked soon!</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubjectCard;