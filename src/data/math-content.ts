// Math Curriculum Content
// This file contains comprehensive math questions for all grades

import { Question, Lesson, Skill } from './curriculum';

// Pre-K Math Content (30+ questions)
const preKMathQuestions: Question[] = [
  // Counting 1-5
  {
    id: 'pk-math-1',
    type: 'multiple-choice',
    prompt: 'How many apples do you see? 🍎🍎🍎',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    hint: 'Count each apple one by one!',
    explanation: 'There are 3 apples. Great counting!'
  },
  {
    id: 'pk-math-2',
    type: 'multiple-choice',
    prompt: 'Count the stars! ⭐⭐',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    hint: 'Point to each star as you count!',
    explanation: 'Perfect! There are 2 stars.'
  },
  {
    id: 'pk-math-3',
    type: 'multiple-choice',
    prompt: 'How many hearts? ❤️❤️❤️❤️❤️',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    hint: 'Count slowly, one at a time!',
    explanation: 'Excellent! You counted 5 hearts.'
  },
  {
    id: 'pk-math-4',
    type: 'multiple-choice',
    prompt: 'Which number comes after 2?',
    options: ['1', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Think: 1, 2... what comes next?',
    explanation: 'That\'s right! After 2 comes 3.'
  },
  {
    id: 'pk-math-5',
    type: 'multiple-choice',
    prompt: 'Count the balloons! 🎈🎈🎈🎈',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Touch each balloon as you count!',
    explanation: 'Great job! There are 4 balloons.'
  },
  // Shapes
  {
    id: 'pk-math-6',
    type: 'multiple-choice',
    prompt: 'Which shape is a circle?',
    options: ['🔲', '🔵', '🔺', '⭐'],
    correctAnswer: 1,
    hint: 'A circle is round with no corners!',
    explanation: 'Perfect! A circle is round and smooth.'
  },
  {
    id: 'pk-math-7',
    type: 'multiple-choice',
    prompt: 'Which shape is a square?',
    options: ['🔵', '🔲', '🔺', '❤️'],
    correctAnswer: 1,
    hint: 'A square has 4 equal sides!',
    explanation: 'Great! A square has 4 equal sides and corners.'
  },
  {
    id: 'pk-math-8',
    type: 'multiple-choice',
    prompt: 'Which shape is a triangle?',
    options: ['🔲', '🔵', '🔺', '⭐'],
    correctAnswer: 2,
    hint: 'A triangle has 3 sides!',
    explanation: 'Awesome! A triangle has 3 sides and 3 corners.'
  },
  // Size comparison
  {
    id: 'pk-math-9',
    type: 'multiple-choice',
    prompt: 'Which elephant is bigger? 🐘 vs 🐘',
    options: ['Left elephant', 'Right elephant', 'They are the same', 'I don\'t know'],
    correctAnswer: 0,
    hint: 'Look carefully at the size!',
    explanation: 'Good eye! The left elephant is bigger.'
  },
  {
    id: 'pk-math-10',
    type: 'multiple-choice',
    prompt: 'Which group has MORE toys? Group A: 🧸🧸 Group B: 🧸🧸🧸',
    options: ['Group A', 'Group B', 'They are the same'],
    correctAnswer: 1,
    hint: 'Count the toys in each group!',
    explanation: 'Correct! Group B has more toys (3 vs 2).'
  },
  // More counting practice
  {
    id: 'pk-math-11',
    type: 'multiple-choice',
    prompt: 'How many fingers on one hand? ✋',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    hint: 'Count the fingers on your hand!',
    explanation: 'Perfect! One hand has 5 fingers.'
  },
  {
    id: 'pk-math-12',
    type: 'multiple-choice',
    prompt: 'Count the dots: • • •',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Point to each dot as you count!',
    explanation: 'Great counting! There are 3 dots.'
  },
  {
    id: 'pk-math-13',
    type: 'true-false',
    prompt: 'This is the number 4: 4',
    correctAnswer: 'true',
    hint: 'Look at the shape of the number!',
    explanation: 'Correct! This is the number 4.'
  },
  {
    id: 'pk-math-14',
    type: 'multiple-choice',
    prompt: 'Which comes first when counting?',
    options: ['2', '1', '3', '4'],
    correctAnswer: 1,
    hint: 'What number do we start counting with?',
    explanation: 'Yes! We start counting with 1.'
  },
  {
    id: 'pk-math-15',
    type: 'multiple-choice',
    prompt: 'How many wheels does a car have? 🚗',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Think about the wheels you can see on a car!',
    explanation: 'Excellent! A car has 4 wheels.'
  },
  // Pattern recognition
  {
    id: 'pk-math-16',
    type: 'multiple-choice',
    prompt: 'What comes next? 🔴🔵🔴🔵🔴_',
    options: ['🔴', '🔵', '🟡', '🟢'],
    correctAnswer: 1,
    hint: 'Look at the pattern: red, blue, red, blue...',
    explanation: 'Great pattern recognition! Blue comes next.'
  },
  {
    id: 'pk-math-17',
    type: 'multiple-choice',
    prompt: 'What comes next? ⭐🌙⭐🌙_',
    options: ['⭐', '🌙', '☀️', '🔥'],
    correctAnswer: 0,
    hint: 'The pattern is star, moon, star, moon...',
    explanation: 'Perfect! Star comes next in the pattern.'
  },
  // More shapes
  {
    id: 'pk-math-18',
    type: 'multiple-choice',
    prompt: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Count the sides of a triangle!',
    explanation: 'Correct! A triangle has 3 sides.'
  },
  {
    id: 'pk-math-19',
    type: 'multiple-choice',
    prompt: 'How many sides does a square have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Count the sides of a square!',
    explanation: 'Great! A square has 4 sides.'
  },
  {
    id: 'pk-math-20',
    type: 'multiple-choice',
    prompt: 'Which is taller? 🏠 vs 🏢',
    options: ['House', 'Building', 'They are the same'],
    correctAnswer: 1,
    hint: 'Which one reaches higher up?',
    explanation: 'Right! The building is taller than the house.'
  },
  // Final counting challenges
  {
    id: 'pk-math-21',
    type: 'multiple-choice',
    prompt: 'If you have 2 cookies and eat 1, how many are left?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 1,
    hint: 'Start with 2, take away 1...',
    explanation: 'Perfect! 2 - 1 = 1 cookie left.'
  },
  {
    id: 'pk-math-22',
    type: 'multiple-choice',
    prompt: 'Count all the animals: 🐶🐱🐰',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Count each animal one by one!',
    explanation: 'Excellent counting! There are 3 animals.'
  },
  {
    id: 'pk-math-23',
    type: 'multiple-choice',
    prompt: 'Which number is the biggest?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 3,
    hint: 'Which number comes last when counting?',
    explanation: 'Great! 4 is the biggest number here.'
  },
  {
    id: 'pk-math-24',
    type: 'multiple-choice',
    prompt: 'Which number is the smallest?',
    options: ['4', '3', '2', '1'],
    correctAnswer: 3,
    hint: 'Which number comes first when counting?',
    explanation: 'Perfect! 1 is the smallest number.'
  },
  {
    id: 'pk-math-25',
    type: 'multiple-choice',
    prompt: 'How many eyes do you have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    hint: 'Touch your eyes and count them!',
    explanation: 'Correct! You have 2 eyes.'
  },
  {
    id: 'pk-math-26',
    type: 'multiple-choice',
    prompt: 'What shape is a ball?',
    options: ['Square', 'Triangle', 'Circle', 'Star'],
    correctAnswer: 2,
    hint: 'A ball is round like a...',
    explanation: 'Yes! A ball is round like a circle.'
  },
  {
    id: 'pk-math-27',
    type: 'multiple-choice',
    prompt: 'Count the flowers: 🌸🌸🌸🌸🌸',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    hint: 'Count each flower carefully!',
    explanation: 'Wonderful! There are 5 beautiful flowers.'
  },
  {
    id: 'pk-math-28',
    type: 'multiple-choice',
    prompt: 'If you have 1 toy and get 1 more, how many toys do you have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    hint: '1 toy plus 1 more toy equals...',
    explanation: 'Great addition! 1 + 1 = 2 toys.'
  },
  {
    id: 'pk-math-29',
    type: 'multiple-choice',
    prompt: 'Which line is longer? — vs ———',
    options: ['First line', 'Second line', 'They are the same'],
    correctAnswer: 1,
    hint: 'Compare the length of both lines!',
    explanation: 'Good observation! The second line is longer.'
  },
  {
    id: 'pk-math-30',
    type: 'multiple-choice',
    prompt: 'How many legs does a dog have? 🐕',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Count the legs on a dog!',
    explanation: 'Perfect! A dog has 4 legs.'
  }
];

// Kindergarten Math Content (30+ questions)
const kgMathQuestions: Question[] = [
  {
    id: 'kg-math-1',
    type: 'multiple-choice',
    prompt: 'What comes after 15?',
    options: ['14', '16', '17', '18'],
    correctAnswer: 1,
    hint: 'Count up from 15!',
    explanation: 'Excellent! 16 comes after 15.'
  },
  {
    id: 'kg-math-2',
    type: 'multiple-choice',
    prompt: 'What is 5 + 3?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 2,
    hint: 'Count 5 fingers, then count 3 more!',
    explanation: 'Great job! 5 + 3 = 8.'
  },
  {
    id: 'kg-math-3',
    type: 'multiple-choice',
    prompt: 'What is 10 - 4?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    hint: 'Start with 10 and take away 4!',
    explanation: 'Perfect! 10 - 4 = 6.'
  },
  {
    id: 'kg-math-4',
    type: 'multiple-choice',
    prompt: 'Which number comes between 7 and 9?',
    options: ['6', '7', '8', '10'],
    correctAnswer: 2,
    hint: 'Count: 7, ?, 9',
    explanation: 'Correct! 8 comes between 7 and 9.'
  },
  {
    id: 'kg-math-5',
    type: 'multiple-choice',
    prompt: 'How many tens are in 20?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    hint: 'Think: 10 + 10 = 20',
    explanation: 'Great! There are 2 tens in 20.'
  },
  // Continue with more KG questions...
  {
    id: 'kg-math-6',
    type: 'multiple-choice',
    prompt: 'What is 2 + 2 + 2?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 2,
    hint: 'Add them one by one: 2 + 2 = 4, then add 2 more!',
    explanation: 'Excellent! 2 + 2 + 2 = 6.'
  },
  {
    id: 'kg-math-7',
    type: 'multiple-choice',
    prompt: 'Which is heavier? 🐘 vs 🐁',
    options: ['Elephant', 'Mouse', 'They are the same'],
    correctAnswer: 0,
    hint: 'Think about the size of each animal!',
    explanation: 'Correct! An elephant is much heavier than a mouse.'
  },
  {
    id: 'kg-math-8',
    type: 'multiple-choice',
    prompt: 'What comes next in the pattern? 2, 4, 6, 8, _',
    options: ['9', '10', '11', '12'],
    correctAnswer: 1,
    hint: 'The pattern goes up by 2 each time!',
    explanation: 'Perfect! The pattern continues with 10.'
  },
  {
    id: 'kg-math-9',
    type: 'multiple-choice',
    prompt: 'How many sides does a rectangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Count the sides of a rectangle!',
    explanation: 'Great! A rectangle has 4 sides.'
  },
  {
    id: 'kg-math-10',
    type: 'multiple-choice',
    prompt: 'What is 9 - 5?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    hint: 'Start with 9 and count back 5!',
    explanation: 'Excellent! 9 - 5 = 4.'
  },
  // Add more questions to reach 30+
  {
    id: 'kg-math-11',
    type: 'multiple-choice',
    prompt: 'Which number is greater: 12 or 8?',
    options: ['12', '8', 'They are equal'],
    correctAnswer: 0,
    hint: 'Which number comes later when counting?',
    explanation: 'Correct! 12 is greater than 8.'
  },
  {
    id: 'kg-math-12',
    type: 'multiple-choice',
    prompt: 'What is 6 + 4?',
    options: ['9', '10', '11', '12'],
    correctAnswer: 1,
    hint: 'Count up from 6: 7, 8, 9, 10!',
    explanation: 'Perfect! 6 + 4 = 10.'
  },
  {
    id: 'kg-math-13',
    type: 'multiple-choice',
    prompt: 'How many corners does a triangle have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Count the pointy parts of a triangle!',
    explanation: 'Great! A triangle has 3 corners.'
  },
  {
    id: 'kg-math-14',
    type: 'multiple-choice',
    prompt: 'What comes before 11?',
    options: ['9', '10', '12', '13'],
    correctAnswer: 1,
    hint: 'Count backwards from 11!',
    explanation: 'Excellent! 10 comes before 11.'
  },
  {
    id: 'kg-math-15',
    type: 'multiple-choice',
    prompt: 'What is 8 - 3?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    hint: 'Start with 8 and take away 3!',
    explanation: 'Perfect! 8 - 3 = 5.'
  },
  {
    id: 'kg-math-16',
    type: 'multiple-choice',
    prompt: 'If you have 7 stickers and give away 2, how many do you have left?',
    options: ['4', '5', '6', '7'],
    correctAnswer: 1,
    hint: '7 take away 2 equals...',
    explanation: 'Great! 7 - 2 = 5 stickers left.'
  },
  {
    id: 'kg-math-17',
    type: 'multiple-choice',
    prompt: 'What is 3 + 7?',
    options: ['9', '10', '11', '12'],
    correctAnswer: 1,
    hint: 'Count up from 3 seven times!',
    explanation: 'Excellent! 3 + 7 = 10.'
  },
  {
    id: 'kg-math-18',
    type: 'multiple-choice',
    prompt: 'Which is longer? A pencil 📏 or a crayon 🖍️?',
    options: ['Pencil', 'Crayon', 'They are the same'],
    correctAnswer: 0,
    hint: 'Think about the length of each item!',
    explanation: 'Correct! A pencil is usually longer than a crayon.'
  },
  {
    id: 'kg-math-19',
    type: 'multiple-choice',
    prompt: 'How many wheels do 2 bicycles have?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Each bicycle has 2 wheels, so 2 bicycles have...',
    explanation: 'Perfect! 2 bicycles have 4 wheels total.'
  },
  {
    id: 'kg-math-20',
    type: 'multiple-choice',
    prompt: 'What is 1 + 1 + 1 + 1?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    hint: 'Count each 1: 1, 2, 3, 4!',
    explanation: 'Great! 1 + 1 + 1 + 1 = 4.'
  },
  {
    id: 'kg-math-21',
    type: 'multiple-choice',
    prompt: 'Which shape has no corners?',
    options: ['Square', 'Triangle', 'Circle', 'Rectangle'],
    correctAnswer: 2,
    hint: 'Which shape is perfectly round?',
    explanation: 'Correct! A circle has no corners.'
  },
  {
    id: 'kg-math-22',
    type: 'multiple-choice',
    prompt: 'What is 10 - 7?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Start with 10 and count back 7!',
    explanation: 'Excellent! 10 - 7 = 3.'
  },
  {
    id: 'kg-math-23',
    type: 'multiple-choice',
    prompt: 'How many fingers on two hands?',
    options: ['8', '9', '10', '11'],
    correctAnswer: 2,
    hint: 'Count all your fingers on both hands!',
    explanation: 'Perfect! Two hands have 10 fingers total.'
  },
  {
    id: 'kg-math-24',
    type: 'multiple-choice',
    prompt: 'What comes next? 1, 3, 5, 7, _',
    options: ['8', '9', '10', '11'],
    correctAnswer: 1,
    hint: 'The pattern skips one number each time!',
    explanation: 'Great! The pattern continues with 9.'
  },
  {
    id: 'kg-math-25',
    type: 'multiple-choice',
    prompt: 'What is 4 + 5?',
    options: ['8', '9', '10', '11'],
    correctAnswer: 1,
    hint: 'Count up from 4: 5, 6, 7, 8, 9!',
    explanation: 'Excellent! 4 + 5 = 9.'
  },
  {
    id: 'kg-math-26',
    type: 'multiple-choice',
    prompt: 'If you have 3 red balls and 4 blue balls, how many balls in total?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    hint: 'Add the red balls and blue balls together!',
    explanation: 'Perfect! 3 + 4 = 7 balls total.'
  },
  {
    id: 'kg-math-27',
    type: 'multiple-choice',
    prompt: 'Which number is smaller: 5 or 9?',
    options: ['5', '9', 'They are equal'],
    correctAnswer: 0,
    hint: 'Which number comes first when counting?',
    explanation: 'Correct! 5 is smaller than 9.'
  },
  {
    id: 'kg-math-28',
    type: 'multiple-choice',
    prompt: 'What is 6 - 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    hint: 'Start with 6 and take away 2!',
    explanation: 'Great! 6 - 2 = 4.'
  },
  {
    id: 'kg-math-29',
    type: 'multiple-choice',
    prompt: 'How many days are in a week?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    hint: 'Count: Monday, Tuesday, Wednesday...',
    explanation: 'Excellent! There are 7 days in a week.'
  },
  {
    id: 'kg-math-30',
    type: 'multiple-choice',
    prompt: 'What is 2 + 6?',
    options: ['7', '8', '9', '10'],
    correctAnswer: 1,
    hint: 'Count up from 2 six times!',
    explanation: 'Perfect! 2 + 6 = 8.'
  }
];

// Export math skills for Pre-K and KG
export const mathSkills: Record<string, Skill[]> = {
  'pre-k': [
    {
      id: 'counting-1-5',
      title: 'Counting 1-5',
      description: 'Learn to count objects from 1 to 5',
      icon: '🔢',
      lessons: [
        {
          id: 'basic-counting',
          title: 'Basic Counting',
          description: 'Count objects and numbers 1-5',
          difficulty: 1,
          estimatedTime: 10,
          xpReward: 100,
          acornsReward: 20,
          questions: preKMathQuestions.slice(0, 15)
        },
        {
          id: 'shapes-and-patterns',
          title: 'Shapes and Patterns',
          description: 'Recognize basic shapes and simple patterns',
          difficulty: 2,
          estimatedTime: 12,
          xpReward: 120,
          acornsReward: 25,
          questions: preKMathQuestions.slice(15, 30)
        }
      ]
    }
  ],
  'kg': [
    {
      id: 'numbers-0-20',
      title: 'Numbers 0-20',
      description: 'Master numbers from 0 to 20 with addition and subtraction',
      icon: '🔢',
      lessons: [
        {
          id: 'teen-numbers',
          title: 'Teen Numbers & Addition',
          description: 'Learn numbers 11-20 and basic addition',
          difficulty: 2,
          estimatedTime: 15,
          xpReward: 150,
          acornsReward: 30,
          questions: kgMathQuestions.slice(0, 15)
        },
        {
          id: 'subtraction-patterns',
          title: 'Subtraction & Patterns',
          description: 'Practice subtraction and number patterns',
          difficulty: 2,
          estimatedTime: 15,
          xpReward: 150,
          acornsReward: 30,
          questions: kgMathQuestions.slice(15, 30)
        }
      ]
    }
  ]
};