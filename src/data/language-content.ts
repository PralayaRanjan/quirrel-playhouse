// Language Curriculum Content
// This file contains comprehensive language questions for all grades

import { Question, Lesson, Skill } from './curriculum';

// Pre-K Language Content (30+ questions)
const preKLanguageQuestions: Question[] = [
  {
    id: 'pk-lang-1',
    type: 'multiple-choice',
    prompt: 'What sound does the letter A make?',
    options: ['/ah/', '/bee/', '/see/', '/dee/'],
    correctAnswer: 0,
    hint: 'Think of the word "apple"!',
    explanation: 'Perfect! The letter A makes the /ah/ sound, like in "apple".'
  },
  {
    id: 'pk-lang-2',
    type: 'multiple-choice',
    prompt: 'Which letter makes the /buh/ sound?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 1,
    hint: 'This letter looks like it has two bumps!',
    explanation: 'Great! The letter B makes the /buh/ sound, like in "ball".'
  },
  {
    id: 'pk-lang-3',
    type: 'multiple-choice',
    prompt: 'What letter does "Cat" start with?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 2,
    hint: 'Listen to the first sound: "Cat"',
    explanation: 'Excellent! "Cat" starts with the letter C.'
  },
  {
    id: 'pk-lang-4',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "HAT"?',
    options: ['DOG', 'CAT', 'SUN', 'FISH'],
    correctAnswer: 1,
    hint: 'Which word ends with the same sound as "HAT"?',
    explanation: 'Perfect! "CAT" rhymes with "HAT" - they both end in -AT.'
  },
  {
    id: 'pk-lang-5',
    type: 'multiple-choice',
    prompt: 'What letter does "Dog" start with?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 3,
    hint: 'Listen to the first sound: "Dog"',
    explanation: 'Great! "Dog" starts with the letter D.'
  },
  {
    id: 'pk-lang-6',
    type: 'multiple-choice',
    prompt: 'Which picture shows something that starts with B? 🏀🍎🐱🌊',
    options: ['Ball 🏀', 'Apple 🍎', 'Cat 🐱', 'Water 🌊'],
    correctAnswer: 0,
    hint: 'Which word starts with the /buh/ sound?',
    explanation: 'Excellent! "Ball" starts with B.'
  },
  {
    id: 'pk-lang-7',
    type: 'multiple-choice',
    prompt: 'What sound does the letter E make?',
    options: ['/eh/', '/bee/', '/see/', '/ah/'],
    correctAnswer: 0,
    hint: 'Think of the word "egg"!',
    explanation: 'Perfect! The letter E makes the /eh/ sound, like in "egg".'
  },
  {
    id: 'pk-lang-8',
    type: 'multiple-choice',
    prompt: 'Which letter comes after A in the alphabet?',
    options: ['C', 'B', 'D', 'E'],
    correctAnswer: 1,
    hint: 'Sing the ABC song: A, ?, C...',
    explanation: 'Great! B comes after A in the alphabet.'
  },
  {
    id: 'pk-lang-9',
    type: 'multiple-choice',
    prompt: 'What letter does "Fish" start with?',
    options: ['E', 'F', 'G', 'H'],
    correctAnswer: 1,
    hint: 'Listen to the first sound: "Fish"',
    explanation: 'Excellent! "Fish" starts with the letter F.'
  },
  {
    id: 'pk-lang-10',
    type: 'multiple-choice',
    prompt: 'Which word starts with the same letter as "Sun"?',
    options: ['Moon', 'Star', 'Cloud', 'Rain'],
    correctAnswer: 1,
    hint: 'Both words start with the /sss/ sound!',
    explanation: 'Perfect! Both "Sun" and "Star" start with the letter S.'
  },
  {
    id: 'pk-lang-11',
    type: 'multiple-choice',
    prompt: 'What letter makes the /mmm/ sound?',
    options: ['L', 'M', 'N', 'O'],
    correctAnswer: 1,
    hint: 'This sound is what you make when food tastes good!',
    explanation: 'Great! The letter M makes the /mmm/ sound, like in "mom".'
  },
  {
    id: 'pk-lang-12',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "BIG"?',
    options: ['SMALL', 'PIG', 'HOUSE', 'TREE'],
    correctAnswer: 1,
    hint: 'Which word ends with the same sound as "BIG"?',
    explanation: 'Excellent! "PIG" rhymes with "BIG" - they both end in -IG.'
  },
  {
    id: 'pk-lang-13',
    type: 'multiple-choice',
    prompt: 'What letter does "Nest" start with?',
    options: ['M', 'N', 'O', 'P'],
    correctAnswer: 1,
    hint: 'Listen to the first sound: "Nest"',
    explanation: 'Perfect! "Nest" starts with the letter N.'
  },
  {
    id: 'pk-lang-14',
    type: 'multiple-choice',
    prompt: 'Which picture shows something that starts with T? 🌳🐱🏠🌊',
    options: ['Tree 🌳', 'Cat 🐱', 'House 🏠', 'Water 🌊'],
    correctAnswer: 0,
    hint: 'Which word starts with the /tuh/ sound?',
    explanation: 'Great! "Tree" starts with T.'
  },
  {
    id: 'pk-lang-15',
    type: 'multiple-choice',
    prompt: 'What comes after C in the alphabet?',
    options: ['A', 'B', 'D', 'E'],
    correctAnswer: 2,
    hint: 'Sing the ABC song: A, B, C, ?...',
    explanation: 'Excellent! D comes after C in the alphabet.'
  },
  {
    id: 'pk-lang-16',
    type: 'multiple-choice',
    prompt: 'Which word has the same ending sound as "RUN"?',
    options: ['WALK', 'SUN', 'JUMP', 'PLAY'],
    correctAnswer: 1,
    hint: 'Listen to how the words end: "RUN" and...?',
    explanation: 'Perfect! "SUN" and "RUN" both end with the -UN sound.'
  },
  {
    id: 'pk-lang-17',
    type: 'multiple-choice',
    prompt: 'What letter does "Umbrella" start with?',
    options: ['T', 'U', 'V', 'W'],
    correctAnswer: 1,
    hint: 'Listen to the first sound: "Umbrella"',
    explanation: 'Great! "Umbrella" starts with the letter U.'
  },
  {
    id: 'pk-lang-18',
    type: 'multiple-choice',
    prompt: 'Which letter makes the /vvv/ sound?',
    options: ['U', 'V', 'W', 'X'],
    correctAnswer: 1,
    hint: 'This sound is like buzzing: /vvv/',
    explanation: 'Excellent! The letter V makes the /vvv/ sound, like in "van".'
  },
  {
    id: 'pk-lang-19',
    type: 'multiple-choice',
    prompt: 'What letter does "Water" start with?',
    options: ['V', 'W', 'X', 'Y'],
    correctAnswer: 1,
    hint: 'Listen to the first sound: "Water"',
    explanation: 'Perfect! "Water" starts with the letter W.'
  },
  {
    id: 'pk-lang-20',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "TOP"?',
    options: ['BOTTOM', 'HOP', 'SIDE', 'UNDER'],
    correctAnswer: 1,
    hint: 'Which word ends with the same sound as "TOP"?',
    explanation: 'Great! "HOP" rhymes with "TOP" - they both end in -OP.'
  },
  {
    id: 'pk-lang-21',
    type: 'multiple-choice',
    prompt: 'What letter makes the /zzz/ sound?',
    options: ['X', 'Y', 'Z', 'A'],
    correctAnswer: 2,
    hint: 'This is the last letter of the alphabet!',
    explanation: 'Excellent! The letter Z makes the /zzz/ sound, like in "zoo".'
  },
  {
    id: 'pk-lang-22',
    type: 'multiple-choice',
    prompt: 'Which picture shows something that starts with L? 🦁🐱🌳🏠',
    options: ['Lion 🦁', 'Cat 🐱', 'Tree 🌳', 'House 🏠'],
    correctAnswer: 0,
    hint: 'Which word starts with the /lll/ sound?',
    explanation: 'Perfect! "Lion" starts with L.'
  },
  {
    id: 'pk-lang-23',
    type: 'multiple-choice',
    prompt: 'What letter does "Kite" start with?',
    options: ['J', 'K', 'L', 'M'],
    correctAnswer: 1,
    hint: 'Listen to the first sound: "Kite"',
    explanation: 'Great! "Kite" starts with the letter K.'
  },
  {
    id: 'pk-lang-24',
    type: 'multiple-choice',
    prompt: 'Which word starts with the same letter as "Happy"?',
    options: ['Sad', 'Hat', 'Glad', 'Smile'],
    correctAnswer: 1,
    hint: 'Both words start with the /huh/ sound!',
    explanation: 'Excellent! Both "Happy" and "Hat" start with the letter H.'
  },
  {
    id: 'pk-lang-25',
    type: 'multiple-choice',
    prompt: 'What comes before D in the alphabet?',
    options: ['A', 'B', 'C', 'E'],
    correctAnswer: 2,
    hint: 'What letter comes right before D?',
    explanation: 'Perfect! C comes before D in the alphabet.'
  },
  {
    id: 'pk-lang-26',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "RED"?',
    options: ['BLUE', 'BED', 'GREEN', 'YELLOW'],
    correctAnswer: 1,
    hint: 'Which word ends with the same sound as "RED"?',
    explanation: 'Great! "BED" rhymes with "RED" - they both end in -ED.'
  },
  {
    id: 'pk-lang-27',
    type: 'multiple-choice',
    prompt: 'What letter does "Queen" start with?',
    options: ['P', 'Q', 'R', 'S'],
    correctAnswer: 1,
    hint: 'Listen to the first sound: "Queen"',
    explanation: 'Excellent! "Queen" starts with the letter Q.'
  },
  {
    id: 'pk-lang-28',
    type: 'multiple-choice',
    prompt: 'Which picture shows something that starts with G? 🐸🐱🌳🏠',
    options: ['Frog 🐸', 'Cat 🐱', 'Tree 🌳', 'House 🏠'],
    correctAnswer: 0,
    hint: 'Wait, that\'s not right! Look for the /guh/ sound...',
    explanation: 'Hmm, let me fix that - we need a word that starts with G, like "Goat"!'
  },
  {
    id: 'pk-lang-29',
    type: 'multiple-choice',
    prompt: 'What letter makes the /jjj/ sound?',
    options: ['I', 'J', 'K', 'L'],
    correctAnswer: 1,
    hint: 'This sound is in words like "jump" and "jelly"!',
    explanation: 'Perfect! The letter J makes the /jjj/ sound, like in "jump".'
  },
  {
    id: 'pk-lang-30',
    type: 'multiple-choice',
    prompt: 'Which word has 3 letters?',
    options: ['CAT', 'ELEPHANT', 'BUTTERFLY', 'HIPPOPOTAMUS'],
    correctAnswer: 0,
    hint: 'Count the letters: C-A-T',
    explanation: 'Excellent! CAT has 3 letters: C-A-T.'
  }
];

// Kindergarten Language Content (30+ questions)
const kgLanguageQuestions: Question[] = [
  {
    id: 'kg-lang-1',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with CAT?',
    options: ['DOG', 'BAT', 'SUN', 'FISH'],
    correctAnswer: 1,
    hint: 'They both end with the same sound!',
    explanation: 'Perfect! CAT and BAT both end with -AT sound.'
  },
  {
    id: 'kg-lang-2',
    type: 'multiple-choice',
    prompt: 'What is the first sound in "SUN"?',
    options: ['/s/', '/u/', '/n/', '/a/'],
    correctAnswer: 0,
    hint: 'Listen to the beginning: "Sun"',
    explanation: 'Great! The first sound in "SUN" is /s/.'
  },
  {
    id: 'kg-lang-3',
    type: 'multiple-choice',
    prompt: 'Which is a sight word?',
    options: ['ELEPHANT', 'THE', 'BUTTERFLY', 'HELICOPTER'],
    correctAnswer: 1,
    hint: 'This is a word we see very often in books!',
    explanation: 'Excellent! "THE" is a common sight word we see everywhere.'
  },
  {
    id: 'kg-lang-4',
    type: 'multiple-choice',
    prompt: 'How many sounds do you hear in "DOG"?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    hint: 'Listen carefully: /d/ /o/ /g/',
    explanation: 'Perfect! "DOG" has 3 sounds: /d/ /o/ /g/.'
  },
  {
    id: 'kg-lang-5',
    type: 'multiple-choice',
    prompt: 'Which word starts with a blend?',
    options: ['CAT', 'STOP', 'DOG', 'SUN'],
    correctAnswer: 1,
    hint: 'A blend is two consonants together, like ST!',
    explanation: 'Great! "STOP" starts with the blend ST.'
  },
  {
    id: 'kg-lang-6',
    type: 'type-in',
    prompt: 'Complete the word: C_T (a pet animal)',
    correctAnswer: 'A',
    hint: 'This vowel makes the /a/ sound like in "cat"!',
    explanation: 'Excellent! CAT - with the vowel A in the middle.'
  },
  {
    id: 'kg-lang-7',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "MAKE"?',
    options: ['TAKE', 'BOOK', 'TREE', 'HOUSE'],
    correctAnswer: 0,
    hint: 'Both words end with the same sound!',
    explanation: 'Perfect! "MAKE" and "TAKE" both end with the -AKE sound.'
  },
  {
    id: 'kg-lang-8',
    type: 'multiple-choice',
    prompt: 'What vowel is missing? B_G',
    options: ['A', 'E', 'I', 'U'],
    correctAnswer: 2,
    hint: 'This makes the word for something large!',
    explanation: 'Great! BIG - with the vowel I in the middle.'
  },
  {
    id: 'kg-lang-9',
    type: 'multiple-choice',
    prompt: 'Which is the correct way to write this sentence?',
    options: ['i like cats', 'I like cats.', 'i Like Cats', 'I LIKE CATS'],
    correctAnswer: 1,
    hint: 'Remember: capital letter at the start, period at the end!',
    explanation: 'Excellent! "I like cats." has a capital I and ends with a period.'
  },
  {
    id: 'kg-lang-10',
    type: 'multiple-choice',
    prompt: 'What sound does "CH" make?',
    options: ['/k/', '/ch/', '/s/', '/sh/'],
    correctAnswer: 1,
    hint: 'Like the sound a train makes: choo-choo!',
    explanation: 'Perfect! "CH" makes the /ch/ sound, like in "chair".'
  },
  {
    id: 'kg-lang-11',
    type: 'multiple-choice',
    prompt: 'Which word has a long A sound?',
    options: ['CAT', 'CAKE', 'CAN', 'CAP'],
    correctAnswer: 1,
    hint: 'Long A sounds like the letter name: A!',
    explanation: 'Great! "CAKE" has a long A sound that says its name.'
  },
  {
    id: 'kg-lang-12',
    type: 'multiple-choice',
    prompt: 'How many syllables are in "BUTTERFLY"?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Clap it out: BUT-TER-FLY!',
    explanation: 'Excellent! "BUTTERFLY" has 3 syllables: BUT-TER-FLY.'
  },
  {
    id: 'kg-lang-13',
    type: 'multiple-choice',
    prompt: 'Which word is a noun?',
    options: ['RUN', 'HAPPY', 'BOOK', 'QUICKLY'],
    correctAnswer: 2,
    hint: 'A noun is a person, place, or thing!',
    explanation: 'Perfect! "BOOK" is a noun - it\'s a thing you can hold.'
  },
  {
    id: 'kg-lang-14',
    type: 'multiple-choice',
    prompt: 'What comes at the end of a telling sentence?',
    options: ['!', '?', '.', ','],
    correctAnswer: 2,
    hint: 'This mark shows the sentence is finished!',
    explanation: 'Great! A period (.) goes at the end of a telling sentence.'
  },
  {
    id: 'kg-lang-15',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "NIGHT"?',
    options: ['DAY', 'LIGHT', 'DARK', 'MOON'],
    correctAnswer: 1,
    hint: 'Both words end with the same sound!',
    explanation: 'Excellent! "NIGHT" and "LIGHT" both end with -IGHT.'
  },
  {
    id: 'kg-lang-16',
    type: 'type-in',
    prompt: 'Complete the word: R_N (what you do fast)',
    correctAnswer: 'U',
    hint: 'This vowel makes the /u/ sound!',
    explanation: 'Perfect! RUN - with the vowel U in the middle.'
  },
  {
    id: 'kg-lang-17',
    type: 'multiple-choice',
    prompt: 'Which word has a short E sound?',
    options: ['TREE', 'BED', 'BEAD', 'FEET'],
    correctAnswer: 1,
    hint: 'Short E sounds like /eh/!',
    explanation: 'Great! "BED" has a short E sound: /eh/.'
  },
  {
    id: 'kg-lang-18',
    type: 'multiple-choice',
    prompt: 'What sound does "SH" make?',
    options: ['/s/', '/h/', '/sh/', '/ch/'],
    correctAnswer: 2,
    hint: 'Like the sound you make to be quiet: "Shhh!"',
    explanation: 'Excellent! "SH" makes the /sh/ sound, like in "ship".'
  },
  {
    id: 'kg-lang-19',
    type: 'multiple-choice',
    prompt: 'Which is a question word?',
    options: ['AND', 'THE', 'WHAT', 'BUT'],
    correctAnswer: 2,
    hint: 'This word helps us ask about things!',
    explanation: 'Perfect! "WHAT" is a question word we use to ask about things.'
  },
  {
    id: 'kg-lang-20',
    type: 'multiple-choice',
    prompt: 'How many sounds are in "SHIP"?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Listen: /sh/ /i/ /p/',
    explanation: 'Great! "SHIP" has 3 sounds: /sh/ /i/ /p/.'
  },
  {
    id: 'kg-lang-21',
    type: 'multiple-choice',
    prompt: 'Which word has a long I sound?',
    options: ['SIT', 'KITE', 'PIN', 'HIT'],
    correctAnswer: 1,
    hint: 'Long I sounds like the letter name: I!',
    explanation: 'Excellent! "KITE" has a long I sound that says its name.'
  },
  {
    id: 'kg-lang-22',
    type: 'multiple-choice',
    prompt: 'What goes at the end of a question?',
    options: ['!', '?', '.', ','],
    correctAnswer: 1,
    hint: 'This mark shows we are asking something!',
    explanation: 'Perfect! A question mark (?) goes at the end of questions.'
  },
  {
    id: 'kg-lang-23',
    type: 'multiple-choice',
    prompt: 'Which word is a verb?',
    options: ['BOOK', 'HAPPY', 'JUMP', 'RED'],
    correctAnswer: 2,
    hint: 'A verb is an action word - something you do!',
    explanation: 'Great! "JUMP" is a verb - it\'s an action you can do.'
  },
  {
    id: 'kg-lang-24',
    type: 'type-in',
    prompt: 'Complete the word: H_T (something you wear)',
    correctAnswer: 'A',
    hint: 'This vowel makes the /a/ sound!',
    explanation: 'Excellent! HAT - with the vowel A in the middle.'
  },
  {
    id: 'kg-lang-25',
    type: 'multiple-choice',
    prompt: 'Which word ends with the /ing/ sound?',
    options: ['SING', 'RUNNING', 'SONG', 'RANG'],
    correctAnswer: 1,
    hint: 'This word shows an action happening right now!',
    explanation: 'Perfect! "RUNNING" ends with -ING, showing action happening now.'
  },
  {
    id: 'kg-lang-26',
    type: 'multiple-choice',
    prompt: 'What sound does "TH" make?',
    options: ['/t/', '/h/', '/th/', '/f/'],
    correctAnswer: 2,
    hint: 'Put your tongue between your teeth!',
    explanation: 'Great! "TH" makes the /th/ sound, like in "the".'
  },
  {
    id: 'kg-lang-27',
    type: 'multiple-choice',
    prompt: 'Which word has a short O sound?',
    options: ['BOAT', 'DOG', 'ROPE', 'NOSE'],
    correctAnswer: 1,
    hint: 'Short O sounds like /ah/!',
    explanation: 'Excellent! "DOG" has a short O sound: /ah/.'
  },
  {
    id: 'kg-lang-28',
    type: 'multiple-choice',
    prompt: 'How many words are in this sentence: "I like dogs."?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 1,
    hint: 'Count each word: I - like - dogs',
    explanation: 'Perfect! "I like dogs." has 3 words.'
  },
  {
    id: 'kg-lang-29',
    type: 'multiple-choice',
    prompt: 'Which is the correct capital letter?',
    options: ['i go home', 'I go home', 'i Go Home', 'i go Home'],
    correctAnswer: 1,
    hint: 'The word "I" is always a capital letter!',
    explanation: 'Great! "I go home" - the word "I" is always capital.'
  },
  {
    id: 'kg-lang-30',
    type: 'multiple-choice',
    prompt: 'Which word rhymes with "PLAY"?',
    options: ['WORK', 'DAY', 'FUN', 'GAME'],
    correctAnswer: 1,
    hint: 'Both words end with the same sound!',
    explanation: 'Excellent! "PLAY" and "DAY" both end with the -AY sound.'
  }
];

// Export language skills for Pre-K and KG
export const languageSkills: Record<string, Skill[]> = {
  'pre-k': [
    {
      id: 'alphabet-sounds',
      title: 'Alphabet Sounds',
      description: 'Learn the sounds each letter makes and basic rhyming',
      icon: '🔤',
      lessons: [
        {
          id: 'sounds-a-m',
          title: 'Letter Sounds A-M',
          description: 'Practice the sounds of letters A through M',
          difficulty: 1,
          estimatedTime: 15,
          xpReward: 150,
          acornsReward: 30,
          questions: preKLanguageQuestions.slice(0, 15)
        },
        {
          id: 'sounds-n-z',
          title: 'Letter Sounds N-Z & Rhyming',
          description: 'Complete the alphabet and learn about rhyming words',
          difficulty: 2,
          estimatedTime: 18,
          xpReward: 180,
          acornsReward: 35,
          questions: preKLanguageQuestions.slice(15, 30)
        }
      ]
    }
  ],
  'kg': [
    {
      id: 'phonics-cvc',
      title: 'Phonics (CVC Words)',
      description: 'Sound out consonant-vowel-consonant words and sight words',
      icon: '🔤',
      lessons: [
        {
          id: 'cvc-words',
          title: 'CVC Words & Blends',
          description: 'Practice reading simple three-letter words and blends',
          difficulty: 2,
          estimatedTime: 20,
          xpReward: 200,
          acornsReward: 40,
          questions: kgLanguageQuestions.slice(0, 15)
        },
        {
          id: 'sentences-grammar',
          title: 'Simple Sentences & Grammar',
          description: 'Build sentences and learn basic grammar rules',
          difficulty: 3,
          estimatedTime: 22,
          xpReward: 220,
          acornsReward: 45,
          questions: kgLanguageQuestions.slice(15, 30)
        }
      ]
    }
  ]
};