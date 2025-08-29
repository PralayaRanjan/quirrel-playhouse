// LearnLift Curriculum Data
// This file contains the structured learning content for all grades and subjects

export interface Question {
  id: string;
  type: 'multiple-choice' | 'drag-drop' | 'type-in' | 'true-false';
  prompt: string;
  options?: string[];
  correctAnswer: string | number;
  hint?: string;
  explanation?: string;
  media?: string; // URL to image/audio/video
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  estimatedTime: number; // minutes
  xpReward: number;
  acornsReward: number;
  questions: Question[];
  prerequisites?: string[]; // lesson IDs
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  badge?: string;
}

export interface Grade {
  id: string;
  name: string;
  ageRange: string;
  subjects: {
    math: Skill[];
    science: Skill[];
    language: Skill[];
  };
}

// Sample curriculum data
export const curriculum: Record<string, Grade> = {
  'pre-k': {
    id: 'pre-k',
    name: 'Pre-K',
    ageRange: '3-4 years',
    subjects: {
      math: [
        {
          id: 'counting-1-10',
          title: 'Counting 1-10',
          description: 'Learn to count from 1 to 10 with fun activities',
          icon: '🔢',
          lessons: [
            {
              id: 'count-to-5',
              title: 'Counting to 5',
              description: 'Practice counting objects from 1 to 5',
              difficulty: 1,
              estimatedTime: 5,
              xpReward: 50,
              acornsReward: 10,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'How many apples do you see? 🍎🍎🍎',
                  options: ['1', '2', '3', '4'],
                  correctAnswer: 2,
                  hint: 'Count each apple one by one!'
                },
                {
                  id: 'q2',
                  type: 'multiple-choice',
                  prompt: 'Count the stars! ⭐⭐',
                  options: ['1', '2', '3', '4'],
                  correctAnswer: 1,
                  hint: 'Point to each star as you count!'
                }
              ]
            }
          ]
        },
        {
          id: 'shapes-basic',
          title: 'Basic Shapes',
          description: 'Recognize circles, squares, and triangles',
          icon: '🔺',
          lessons: [
            {
              id: 'circle-square',
              title: 'Circles and Squares',
              description: 'Learn the difference between circles and squares',
              difficulty: 1,
              estimatedTime: 8,
              xpReward: 75,
              acornsReward: 15,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'Which shape is a circle?',
                  options: ['🔲', '🔵', '🔺', '⭐'],
                  correctAnswer: 1,
                  hint: 'A circle is round with no corners!'
                }
              ]
            }
          ]
        }
      ],
      science: [
        {
          id: 'living-nonliving',
          title: 'Living vs Non-living',
          description: 'Discover what makes something alive',
          icon: '🌱',
          lessons: [
            {
              id: 'what-is-alive',
              title: 'What is Alive?',
              description: 'Learn the characteristics of living things',
              difficulty: 1,
              estimatedTime: 10,
              xpReward: 60,
              acornsReward: 12,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'Which one is living?',
                  options: ['🪨 Rock', '🐶 Dog', '🚗 Car', '📚 Book'],
                  correctAnswer: 1,
                  hint: 'Living things can grow, eat, and breathe!'
                }
              ]
            }
          ]
        }
      ],
      language: [
        {
          id: 'alphabet-sounds',
          title: 'Alphabet Sounds',
          description: 'Learn the sounds each letter makes',
          icon: '🔤',
          lessons: [
            {
              id: 'sounds-a-e',
              title: 'Letter Sounds A-E',
              description: 'Practice the sounds of A, B, C, D, E',
              difficulty: 1,
              estimatedTime: 12,
              xpReward: 80,
              acornsReward: 16,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'What sound does the letter A make?',
                  options: ['/ah/', '/bee/', '/see/', '/dee/'],
                  correctAnswer: 0,
                  hint: 'Think of the word "apple"!'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  'kg': {
    id: 'kg',
    name: 'Kindergarten',
    ageRange: '4-5 years',
    subjects: {
      math: [
        {
          id: 'numbers-0-20',
          title: 'Numbers 0-20',
          description: 'Master numbers from 0 to 20',
          icon: '🔢',
          lessons: [
            {
              id: 'teen-numbers',
              title: 'Teen Numbers',
              description: 'Learn numbers 11-19',
              difficulty: 2,
              estimatedTime: 15,
              xpReward: 100,
              acornsReward: 20,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'What comes after 15?',
                  options: ['14', '16', '17', '18'],
                  correctAnswer: 1,
                  hint: 'Count up from 15!'
                }
              ]
            }
          ]
        }
      ],
      science: [
        {
          id: 'weather-seasons',
          title: 'Weather & Seasons',
          description: 'Explore different types of weather and seasons',
          icon: '🌤️',
          lessons: [
            {
              id: 'four-seasons',
              title: 'Four Seasons',
              description: 'Learn about spring, summer, fall, and winter',
              difficulty: 2,
              estimatedTime: 18,
              xpReward: 90,
              acornsReward: 18,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'Which season comes after winter?',
                  options: ['Summer', 'Fall', 'Spring', 'Winter'],
                  correctAnswer: 2,
                  hint: 'This is when flowers start to bloom!'
                }
              ]
            }
          ]
        }
      ],
      language: [
        {
          id: 'phonics-cvc',
          title: 'Phonics (CVC Words)',
          description: 'Sound out consonant-vowel-consonant words',
          icon: '🔤',
          lessons: [
            {
              id: 'cat-bat-hat',
              title: 'CAT, BAT, HAT',
              description: 'Practice reading simple three-letter words',
              difficulty: 2,
              estimatedTime: 20,
              xpReward: 120,
              acornsReward: 24,
              questions: [
                {
                  id: 'q1',
                  type: 'multiple-choice',
                  prompt: 'Which word rhymes with CAT?',
                  options: ['DOG', 'BAT', 'SUN', 'FISH'],
                  correctAnswer: 1,
                  hint: 'They both end with the same sound!'
                }
              ]
            }
          ]
        }
      ]
    }
  }
};

// Achievement badges
export const badges = [
  { id: 'first-steps', name: 'First Steps', icon: '👣', description: 'Complete your first lesson' },
  { id: 'streak-7', name: 'Week Warrior', icon: '🔥', description: '7 day learning streak' },
  { id: 'math-master-1', name: 'Math Master I', icon: '🏆', description: 'Complete 10 math lessons' },
  { id: 'science-scout', name: 'Science Scout', icon: '🔬', description: 'Explore 5 science topics' },
  { id: 'word-wizard', name: 'Word Wizard', icon: '✨', description: 'Master 20 vocabulary words' },
  { id: 'perfect-lesson', name: 'Perfect!', icon: '💎', description: 'Get 100% on any lesson' },
  { id: 'helper', name: 'Independent Learner', icon: '💪', description: 'Complete lesson without hints' },
  { id: 'resilient', name: 'Never Give Up', icon: '🌟', description: 'Retry and complete difficult lesson' }
];

// Daily quests
export const questTypes = [
  { id: 'daily-lesson', title: 'Daily Learning', description: 'Complete 1 lesson', reward: { xp: 100, acorns: 25 } },
  { id: 'perfect-score', title: 'Ace It!', description: 'Get 100% on a lesson', reward: { xp: 200, acorns: 50 } },
  { id: 'streak-maintain', title: 'Keep It Going', description: 'Maintain your learning streak', reward: { xp: 150, acorns: 30 } },
  { id: 'help-free', title: 'Go Solo', description: 'Complete lesson without hints', reward: { xp: 250, acorns: 60 } }
];