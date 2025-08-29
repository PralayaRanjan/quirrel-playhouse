import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from "lucide-react";

interface QuestionCardProps {
  question: string;
  options?: string[];
  correctAnswer: number | string;
  hint?: string;
  onAnswer: (correct: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
  type?: 'multiple-choice' | 'type-in' | 'true-false';
}

const QuestionCard = ({
  question,
  options,
  correctAnswer,
  hint,
  onAnswer,
  questionNumber,
  totalQuestions,
  type = 'multiple-choice'
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(optionIndex === correctAnswer);
    }, 2000);
  };

  const handleTypeSubmit = () => {
    if (showResult) return;
    
    setShowResult(true);
    const isCorrect = typedAnswer.toLowerCase().trim() === String(correctAnswer).toLowerCase().trim();
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 2000);
  };

  const isCorrect = type === 'type-in' 
    ? typedAnswer.toLowerCase().trim() === String(correctAnswer).toLowerCase().trim()
    : selectedAnswer === correctAnswer;
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Question {questionNumber} of {totalQuestions}</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="shadow-card">
        <CardContent className="p-8">
          {/* Question */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">{question}</h2>
            
            {/* Quirrel helper */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-3 bg-muted/50 rounded-2xl p-4">
                <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center animate-float-gentle">
                  <span className="text-xl">🐿️</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {showResult 
                    ? (isCorrect ? "Great job! 🎉" : "Don't worry, you'll get it next time! 💪")
                    : "Take your time and think carefully!"
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Options */}
          {type === 'type-in' ? (
            <div className="flex flex-col gap-4 mb-6">
              <Input
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="text-center text-lg"
                disabled={showResult}
                onKeyPress={(e) => e.key === 'Enter' && handleTypeSubmit()}
              />
              <Button
                onClick={handleTypeSubmit}
                disabled={showResult || !typedAnswer.trim()}
                className="mx-auto"
              >
                Submit Answer
              </Button>
            </div>
          ) : (
            <div className="grid gap-4 mb-6">
              {options?.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`p-4 h-auto text-left justify-start text-wrap ${
                  showResult
                    ? index === correctAnswer
                      ? 'border-success bg-success/10 text-success'
                      : index === selectedAnswer && index !== correctAnswer
                        ? 'border-destructive bg-destructive/10 text-destructive'
                        : ''
                    : selectedAnswer === index
                      ? 'border-primary bg-primary/10'
                      : 'hover:border-primary/50 hover:bg-primary/5'
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                    showResult && index === correctAnswer
                      ? 'border-success bg-success text-white'
                      : showResult && index === selectedAnswer && index !== correctAnswer
                        ? 'border-destructive bg-destructive text-white'
                        : 'border-current'
                  }`}>
                    {showResult && index === correctAnswer ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : showResult && index === selectedAnswer && index !== correctAnswer ? (
                      <XCircle className="h-5 w-5" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </Button>
              )) || []}
            </div>
          )}

          {/* Hint Section */}
          {hint && (
            <div className="text-center mb-4">
              {!showHint ? (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowHint(true)}
                  className="text-muted-foreground"
                >
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Need a hint?
                </Button>
              ) : (
                <div className="bg-support/10 border border-support/20 rounded-xl p-4">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="h-5 w-5 text-support mt-0.5" />
                    <p className="text-sm">{hint}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Result feedback */}
          {showResult && (
            <div className="text-center">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                isCorrect ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'
              }`}>
                {isCorrect ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Correct! +50 XP</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5" />
                    <span className="font-medium">Try again next time!</span>
                  </>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionCard;