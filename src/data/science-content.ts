// Science Curriculum Content
// This file contains comprehensive science questions for all grades

import { Question, Lesson, Skill } from './curriculum';

// Pre-K Science Content (30+ questions)
const preKScienceQuestions: Question[] = [
  {
    id: 'pk-sci-1',
    type: 'multiple-choice',
    prompt: 'Which one is living?',
    options: ['🪨 Rock', '🐶 Dog', '🚗 Car', '📚 Book'],
    correctAnswer: 1,
    hint: 'Living things can grow, eat, and breathe!',
    explanation: 'Great! Dogs are living because they grow, eat, and breathe.'
  },
  {
    id: 'pk-sci-2',
    type: 'multiple-choice',
    prompt: 'What do plants need to grow?',
    options: ['💧 Water', '🍕 Pizza', '📱 Phone', '🎮 Games'],
    correctAnswer: 0,
    hint: 'Think about what you give to plants!',
    explanation: 'Perfect! Plants need water to grow big and strong.'
  },
  {
    id: 'pk-sci-3',
    type: 'multiple-choice',
    prompt: 'Which animal says "Moo"?',
    options: ['🐱 Cat', '🐶 Dog', '🐄 Cow', '🐦 Bird'],
    correctAnswer: 2,
    hint: 'This animal gives us milk!',
    explanation: 'Excellent! Cows say "Moo" and give us milk.'
  },
  {
    id: 'pk-sci-4',
    type: 'multiple-choice',
    prompt: 'What do we use our eyes for?',
    options: ['Hearing', 'Seeing', 'Smelling', 'Tasting'],
    correctAnswer: 1,
    hint: 'Think about what your eyes help you do!',
    explanation: 'Great! We use our eyes for seeing things around us.'
  },
  {
    id: 'pk-sci-5',
    type: 'multiple-choice',
    prompt: 'Which weather is good for flying a kite?',
    options: ['☀️ Sunny', '💨 Windy', '🌧️ Rainy', '❄️ Snowy'],
    correctAnswer: 1,
    hint: 'Kites need air to move them!',
    explanation: 'Perfect! Wind helps kites fly high in the sky.'
  },
  {
    id: 'pk-sci-6',
    type: 'multiple-choice',
    prompt: 'What do fish need to live?',
    options: ['🌊 Water', '🌳 Trees', '🍎 Apples', '🏠 Houses'],
    correctAnswer: 0,
    hint: 'Where do fish swim?',
    explanation: 'Excellent! Fish need water to swim and breathe.'
  },
  {
    id: 'pk-sci-7',
    type: 'multiple-choice',
    prompt: 'Which part of your body helps you smell?',
    options: ['👁️ Eyes', '👂 Ears', '👃 Nose', '👄 Mouth'],
    correctAnswer: 2,
    hint: 'What do you use to smell flowers?',
    explanation: 'Great! Your nose helps you smell different things.'
  },
  {
    id: 'pk-sci-8',
    type: 'multiple-choice',
    prompt: 'What happens when it rains?',
    options: ['Everything gets dry', 'Everything gets wet', 'Everything gets hot', 'Everything gets cold'],
    correctAnswer: 1,
    hint: 'Think about what rain does to things outside!',
    explanation: 'Perfect! When it rains, everything gets wet.'
  },
  {
    id: 'pk-sci-9',
    type: 'multiple-choice',
    prompt: 'Which animal can fly?',
    options: ['🐱 Cat', '🐦 Bird', '🐟 Fish', '🐶 Dog'],
    correctAnswer: 1,
    hint: 'Which animal has wings?',
    explanation: 'Excellent! Birds have wings and can fly in the sky.'
  },
  {
    id: 'pk-sci-10',
    type: 'multiple-choice',
    prompt: 'What do we breathe?',
    options: ['Water', 'Food', 'Air', 'Juice'],
    correctAnswer: 2,
    hint: 'What goes in and out of your lungs?',
    explanation: 'Great! We breathe air to stay alive.'
  },
  {
    id: 'pk-sci-11',
    type: 'multiple-choice',
    prompt: 'Where do bees make honey?',
    options: ['🏠 House', '🌳 Tree', '🍯 Hive', '🌊 Ocean'],
    correctAnswer: 2,
    hint: 'Bees work together in a special home!',
    explanation: 'Perfect! Bees make honey in their hive.'
  },
  {
    id: 'pk-sci-12',
    type: 'multiple-choice',
    prompt: 'What do you use to hear sounds?',
    options: ['👁️ Eyes', '👂 Ears', '👃 Nose', '👄 Mouth'],
    correctAnswer: 1,
    hint: 'What do you use to listen to music?',
    explanation: 'Excellent! You use your ears to hear sounds.'
  },
  {
    id: 'pk-sci-13',
    type: 'multiple-choice',
    prompt: 'Which season is the hottest?',
    options: ['🌸 Spring', '☀️ Summer', '🍂 Fall', '❄️ Winter'],
    correctAnswer: 1,
    hint: 'When do you go swimming outside?',
    explanation: 'Great! Summer is the hottest season of the year.'
  },
  {
    id: 'pk-sci-14',
    type: 'multiple-choice',
    prompt: 'What do plants grow from?',
    options: ['🌰 Seeds', '🍎 Apples', '🍕 Pizza', '🎾 Balls'],
    correctAnswer: 0,
    hint: 'What do you plant in the ground to grow flowers?',
    explanation: 'Perfect! Plants grow from tiny seeds in the soil.'
  },
  {
    id: 'pk-sci-15',
    type: 'multiple-choice',
    prompt: 'Which animal lives in water?',
    options: ['🐱 Cat', '🐦 Bird', '🐠 Fish', '🐶 Dog'],
    correctAnswer: 2,
    hint: 'Which animal swims all the time?',
    explanation: 'Excellent! Fish live and swim in water.'
  },
  {
    id: 'pk-sci-16',
    type: 'multiple-choice',
    prompt: 'What gives us light during the day?',
    options: ['🌙 Moon', '⭐ Stars', '☀️ Sun', '💡 Lamp'],
    correctAnswer: 2,
    hint: 'What makes the day bright and warm?',
    explanation: 'Great! The sun gives us light and warmth during the day.'
  },
  {
    id: 'pk-sci-17',
    type: 'multiple-choice',
    prompt: 'What do you use to taste food?',
    options: ['👁️ Eyes', '👂 Ears', '👃 Nose', '👅 Tongue'],
    correctAnswer: 3,
    hint: 'What helps you know if food is sweet or sour?',
    explanation: 'Perfect! Your tongue helps you taste different flavors.'
  },
  {
    id: 'pk-sci-18',
    type: 'multiple-choice',
    prompt: 'Which weather makes you want to wear a coat?',
    options: ['☀️ Hot', '❄️ Cold', '🌧️ Wet', '💨 Windy'],
    correctAnswer: 1,
    hint: 'When do you need to stay warm?',
    explanation: 'Excellent! You wear a coat when it\'s cold outside.'
  },
  {
    id: 'pk-sci-19',
    type: 'multiple-choice',
    prompt: 'What do baby animals need from their moms?',
    options: ['🥛 Milk', '📚 Books', '🎮 Games', '🚗 Cars'],
    correctAnswer: 0,
    hint: 'What do baby humans drink to grow?',
    explanation: 'Great! Baby animals need milk from their moms to grow.'
  },
  {
    id: 'pk-sci-20',
    type: 'multiple-choice',
    prompt: 'Where do birds build their homes?',
    options: ['🏠 Houses', '🌳 Trees', '🌊 Ocean', '🚗 Cars'],
    correctAnswer: 1,
    hint: 'Where do you see bird nests?',
    explanation: 'Perfect! Birds build their nests high up in trees.'
  },
  {
    id: 'pk-sci-21',
    type: 'multiple-choice',
    prompt: 'What do flowers need besides water?',
    options: ['☀️ Sunlight', '📱 Phones', '🎮 Games', '🚗 Cars'],
    correctAnswer: 0,
    hint: 'What else comes from the sky to help plants?',
    explanation: 'Excellent! Flowers need both water and sunlight to grow.'
  },
  {
    id: 'pk-sci-22',
    type: 'multiple-choice',
    prompt: 'Which animal hops?',
    options: ['🐱 Cat', '🐰 Rabbit', '🐟 Fish', '🐦 Bird'],
    correctAnswer: 1,
    hint: 'Which animal has long ears and jumps?',
    explanation: 'Great! Rabbits hop around with their strong legs.'
  },
  {
    id: 'pk-sci-23',
    type: 'multiple-choice',
    prompt: 'What do you see in the sky at night?',
    options: ['☀️ Sun', '⭐ Stars', '🌈 Rainbow', '☁️ Clouds'],
    correctAnswer: 1,
    hint: 'What twinkles in the dark sky?',
    explanation: 'Perfect! You can see twinkling stars in the night sky.'
  },
  {
    id: 'pk-sci-24',
    type: 'multiple-choice',
    prompt: 'What helps you walk?',
    options: ['👁️ Eyes', '👂 Ears', '🦵 Legs', '👃 Nose'],
    correctAnswer: 2,
    hint: 'What part of your body moves when you walk?',
    explanation: 'Excellent! Your legs help you walk and run around.'
  },
  {
    id: 'pk-sci-25',
    type: 'multiple-choice',
    prompt: 'What season do leaves fall from trees?',
    options: ['🌸 Spring', '☀️ Summer', '🍂 Fall', '❄️ Winter'],
    correctAnswer: 2,
    hint: 'When do leaves change colors and drop?',
    explanation: 'Great! Leaves fall from trees in the fall season.'
  },
  {
    id: 'pk-sci-26',
    type: 'multiple-choice',
    prompt: 'Which animal gives us eggs?',
    options: ['🐱 Cat', '🐶 Dog', '🐔 Chicken', '🐟 Fish'],
    correctAnswer: 2,
    hint: 'Which animal clucks and lives on a farm?',
    explanation: 'Perfect! Chickens lay eggs that we can eat.'
  },
  {
    id: 'pk-sci-27',
    type: 'multiple-choice',
    prompt: 'What do you need to do to stay healthy?',
    options: ['🍎 Eat good food', '📺 Watch TV', '🎮 Play games', '😴 Sleep all day'],
    correctAnswer: 0,
    hint: 'What kind of food helps your body grow strong?',
    explanation: 'Excellent! Eating good food helps you stay healthy and strong.'
  },
  {
    id: 'pk-sci-28',
    type: 'multiple-choice',
    prompt: 'Where does rain come from?',
    options: ['🌳 Trees', '☁️ Clouds', '🌊 Ocean', '🏠 Houses'],
    correctAnswer: 1,
    hint: 'What do you see in the sky before it rains?',
    explanation: 'Great! Rain falls from clouds in the sky.'
  },
  {
    id: 'pk-sci-29',
    type: 'multiple-choice',
    prompt: 'What do you use your hands for?',
    options: ['Seeing', 'Hearing', 'Touching', 'Smelling'],
    correctAnswer: 2,
    hint: 'What do you do when you pet a soft cat?',
    explanation: 'Perfect! You use your hands for touching and feeling things.'
  },
  {
    id: 'pk-sci-30',
    type: 'multiple-choice',
    prompt: 'Which animal makes wool for warm clothes?',
    options: ['🐱 Cat', '🐶 Dog', '🐑 Sheep', '🐟 Fish'],
    correctAnswer: 2,
    hint: 'This fluffy animal says "Baa" and lives on a farm!',
    explanation: 'Excellent! Sheep give us wool to make warm sweaters and blankets.'
  }
];

// Kindergarten Science Content (30+ questions)
const kgScienceQuestions: Question[] = [
  {
    id: 'kg-sci-1',
    type: 'multiple-choice',
    prompt: 'Which season comes after winter?',
    options: ['Summer', 'Fall', 'Spring', 'Winter'],
    correctAnswer: 2,
    hint: 'This is when flowers start to bloom!',
    explanation: 'Perfect! Spring comes after winter, bringing new flowers and warmer weather.'
  },
  {
    id: 'kg-sci-2',
    type: 'multiple-choice',
    prompt: 'What do all living things need?',
    options: ['Toys', 'Food and water', 'Cars', 'Money'],
    correctAnswer: 1,
    hint: 'Think about what you need every day to stay alive!',
    explanation: 'Great! All living things need food and water to survive and grow.'
  },
  {
    id: 'kg-sci-3',
    type: 'multiple-choice',
    prompt: 'Where do most animals find shelter?',
    options: ['In stores', 'In their habitats', 'In schools', 'In cars'],
    correctAnswer: 1,
    hint: 'Animals live in places that give them what they need!',
    explanation: 'Excellent! Animals find shelter in their natural habitats.'
  },
  {
    id: 'kg-sci-4',
    type: 'multiple-choice',
    prompt: 'What happens to water when it gets very cold?',
    options: ['It disappears', 'It turns to ice', 'It gets warmer', 'It changes color'],
    correctAnswer: 1,
    hint: 'Think about what you find in the freezer!',
    explanation: 'Perfect! When water gets very cold, it freezes and becomes ice.'
  },
  {
    id: 'kg-sci-5',
    type: 'multiple-choice',
    prompt: 'Which animal is a mammal?',
    options: ['🐦 Bird', '🐟 Fish', '🐱 Cat', '🐛 Bug'],
    correctAnswer: 2,
    hint: 'Mammals have fur and feed milk to their babies!',
    explanation: 'Great! Cats are mammals - they have fur and feed milk to their kittens.'
  },
  {
    id: 'kg-sci-6',
    type: 'multiple-choice',
    prompt: 'What do plants make that we breathe?',
    options: ['Water', 'Oxygen', 'Dirt', 'Rocks'],
    correctAnswer: 1,
    hint: 'Plants help clean the air for us!',
    explanation: 'Excellent! Plants make oxygen, which is what we need to breathe.'
  },
  {
    id: 'kg-sci-7',
    type: 'multiple-choice',
    prompt: 'How many legs does an insect have?',
    options: ['4', '6', '8', '10'],
    correctAnswer: 1,
    hint: 'Count the legs on an ant or a bee!',
    explanation: 'Perfect! All insects have exactly 6 legs.'
  },
  {
    id: 'kg-sci-8',
    type: 'multiple-choice',
    prompt: 'What makes the wind?',
    options: ['Trees dancing', 'Air moving', 'Birds flying', 'Cars driving'],
    correctAnswer: 1,
    hint: 'Wind is something you can feel but not see!',
    explanation: 'Great! Wind is made when air moves from place to place.'
  },
  {
    id: 'kg-sci-9',
    type: 'multiple-choice',
    prompt: 'Which part of a plant takes in water?',
    options: ['Leaves', 'Flowers', 'Roots', 'Stem'],
    correctAnswer: 2,
    hint: 'This part grows underground!',
    explanation: 'Excellent! Roots grow underground and take in water for the plant.'
  },
  {
    id: 'kg-sci-10',
    type: 'multiple-choice',
    prompt: 'What do we call baby cats?',
    options: ['Puppies', 'Kittens', 'Chicks', 'Calves'],
    correctAnswer: 1,
    hint: 'These baby animals say "meow" like their moms!',
    explanation: 'Perfect! Baby cats are called kittens.'
  },
  {
    id: 'kg-sci-11',
    type: 'multiple-choice',
    prompt: 'Which weather tool tells us how hot or cold it is?',
    options: ['Ruler', 'Thermometer', 'Clock', 'Scale'],
    correctAnswer: 1,
    hint: 'This tool measures temperature!',
    explanation: 'Great! A thermometer tells us the temperature.'
  },
  {
    id: 'kg-sci-12',
    type: 'multiple-choice',
    prompt: 'What do we call the path Earth takes around the Sun?',
    options: ['Circle', 'Orbit', 'Line', 'Square'],
    correctAnswer: 1,
    hint: 'Earth travels in a path around the Sun all year!',
    explanation: 'Excellent! Earth\'s path around the Sun is called an orbit.'
  },
  {
    id: 'kg-sci-13',
    type: 'multiple-choice',
    prompt: 'Which sense helps you know if something is smooth or rough?',
    options: ['Sight', 'Hearing', 'Touch', 'Taste'],
    correctAnswer: 2,
    hint: 'You use your hands for this sense!',
    explanation: 'Perfect! Touch helps you feel if things are smooth or rough.'
  },
  {
    id: 'kg-sci-14',
    type: 'multiple-choice',
    prompt: 'What do we call animals that eat only plants?',
    options: ['Carnivores', 'Herbivores', 'Omnivores', 'Insectivores'],
    correctAnswer: 1,
    hint: 'These animals love to eat grass, leaves, and fruits!',
    explanation: 'Great! Animals that eat only plants are called herbivores.'
  },
  {
    id: 'kg-sci-15',
    type: 'multiple-choice',
    prompt: 'What happens to a puddle on a sunny day?',
    options: ['It gets bigger', 'It evaporates', 'It changes color', 'It gets colder'],
    correctAnswer: 1,
    hint: 'The water seems to disappear into the air!',
    explanation: 'Excellent! The water evaporates - it turns into water vapor and goes into the air.'
  },
  {
    id: 'kg-sci-16',
    type: 'multiple-choice',
    prompt: 'Which animal changes from a caterpillar?',
    options: ['🐸 Frog', '🦋 Butterfly', '🐦 Bird', '🐟 Fish'],
    correctAnswer: 1,
    hint: 'This beautiful flying insect has colorful wings!',
    explanation: 'Perfect! A caterpillar changes into a butterfly.'
  },
  {
    id: 'kg-sci-17',
    type: 'multiple-choice',
    prompt: 'What do we call the hard outer shell of an egg?',
    options: ['Skin', 'Shell', 'Cover', 'Coat'],
    correctAnswer: 1,
    hint: 'This protects the baby animal inside the egg!',
    explanation: 'Great! The hard outer part of an egg is called the shell.'
  },
  {
    id: 'kg-sci-18',
    type: 'multiple-choice',
    prompt: 'Which type of animal can live both in water and on land?',
    options: ['Fish', 'Birds', 'Amphibians', 'Mammals'],
    correctAnswer: 2,
    hint: 'Think about frogs and toads!',
    explanation: 'Excellent! Amphibians like frogs can live both in water and on land.'
  },
  {
    id: 'kg-sci-19',
    type: 'multiple-choice',
    prompt: 'What do we need to see our reflection?',
    options: ['Window', 'Mirror', 'Paper', 'Book'],
    correctAnswer: 1,
    hint: 'You look in this to see yourself!',
    explanation: 'Perfect! You need a mirror to see your reflection.'
  },
  {
    id: 'kg-sci-20',
    type: 'multiple-choice',
    prompt: 'Which part of your body pumps blood?',
    options: ['Brain', 'Heart', 'Lungs', 'Stomach'],
    correctAnswer: 1,
    hint: 'This organ beats inside your chest!',
    explanation: 'Great! Your heart pumps blood throughout your body.'
  },
  {
    id: 'kg-sci-21',
    type: 'multiple-choice',
    prompt: 'What do we call the force that pulls things down?',
    options: ['Push', 'Pull', 'Gravity', 'Wind'],
    correctAnswer: 2,
    hint: 'This force makes things fall to the ground!',
    explanation: 'Excellent! Gravity is the force that pulls things toward Earth.'
  },
  {
    id: 'kg-sci-22',
    type: 'multiple-choice',
    prompt: 'Which material can water pass through?',
    options: ['Glass', 'Paper towel', 'Plastic', 'Metal'],
    correctAnswer: 1,
    hint: 'This material soaks up water!',
    explanation: 'Perfect! Water can pass through paper towel because it\'s porous.'
  },
  {
    id: 'kg-sci-23',
    type: 'multiple-choice',
    prompt: 'What do we call baby dogs?',
    options: ['Kittens', 'Puppies', 'Chicks', 'Calves'],
    correctAnswer: 1,
    hint: 'These baby animals love to play and bark!',
    explanation: 'Great! Baby dogs are called puppies.'
  },
  {
    id: 'kg-sci-24',
    type: 'multiple-choice',
    prompt: 'Which season has the shortest days?',
    options: ['Spring', 'Summer', 'Fall', 'Winter'],
    correctAnswer: 3,
    hint: 'This is the coldest season with the least sunlight!',
    explanation: 'Excellent! Winter has the shortest days and longest nights.'
  },
  {
    id: 'kg-sci-25',
    type: 'multiple-choice',
    prompt: 'What do plants need from soil?',
    options: ['Toys', 'Nutrients', 'Music', 'Colors'],
    correctAnswer: 1,
    hint: 'Plants get food from the soil to help them grow!',
    explanation: 'Perfect! Plants get nutrients from soil to help them grow healthy and strong.'
  },
  {
    id: 'kg-sci-26',
    type: 'multiple-choice',
    prompt: 'Which sense helps you enjoy music?',
    options: ['Sight', 'Hearing', 'Touch', 'Smell'],
    correctAnswer: 1,
    hint: 'You use your ears for this!',
    explanation: 'Great! Hearing helps you enjoy music and sounds.'
  },
  {
    id: 'kg-sci-27',
    type: 'multiple-choice',
    prompt: 'What happens when you mix red and yellow paint?',
    options: ['Blue', 'Green', 'Orange', 'Purple'],
    correctAnswer: 2,
    hint: 'Think about the color of a pumpkin!',
    explanation: 'Excellent! Red and yellow make orange when mixed together.'
  },
  {
    id: 'kg-sci-28',
    type: 'multiple-choice',
    prompt: 'Where do fish get the oxygen they need?',
    options: ['From air', 'From water', 'From food', 'From plants'],
    correctAnswer: 1,
    hint: 'Fish don\'t come up for air like whales do!',
    explanation: 'Perfect! Fish get oxygen from the water through their gills.'
  },
  {
    id: 'kg-sci-29',
    type: 'multiple-choice',
    prompt: 'What do we call animals that are active at night?',
    options: ['Diurnal', 'Nocturnal', 'Hibernating', 'Migrating'],
    correctAnswer: 1,
    hint: 'Think about owls and bats!',
    explanation: 'Great! Animals that are active at night are called nocturnal.'
  },
  {
    id: 'kg-sci-30',
    type: 'multiple-choice',
    prompt: 'Which tool helps us see things that are far away?',
    options: ['Magnifying glass', 'Telescope', 'Microscope', 'Mirror'],
    correctAnswer: 1,
    hint: 'Astroners use this to look at stars and planets!',
    explanation: 'Excellent! A telescope helps us see things that are very far away, like stars!'
  }
];

// Export science skills for Pre-K and KG
export const scienceSkills: Record<string, Skill[]> = {
  'pre-k': [
    {
      id: 'living-nonliving',
      title: 'Living vs Non-living',
      description: 'Discover what makes something alive and learn about our senses',
      icon: '🌱',
      lessons: [
        {
          id: 'what-is-alive',
          title: 'What is Alive?',
          description: 'Learn about living things and what they need',
          difficulty: 1,
          estimatedTime: 12,
          xpReward: 120,
          acornsReward: 25,
          questions: preKScienceQuestions.slice(0, 15)
        },
        {
          id: 'senses-and-nature',
          title: 'Our Senses & Nature',
          description: 'Explore your senses and the natural world',
          difficulty: 2,
          estimatedTime: 15,
          xpReward: 150,
          acornsReward: 30,
          questions: preKScienceQuestions.slice(15, 30)
        }
      ]
    }
  ],
  'kg': [
    {
      id: 'weather-seasons',
      title: 'Weather & Seasons',
      description: 'Explore different types of weather, seasons, and how animals live',
      icon: '🌤️',
      lessons: [
        {
          id: 'four-seasons',
          title: 'Four Seasons & Weather',
          description: 'Learn about spring, summer, fall, winter and weather patterns',
          difficulty: 2,
          estimatedTime: 18,
          xpReward: 180,
          acornsReward: 35,
          questions: kgScienceQuestions.slice(0, 15)
        },
        {
          id: 'animals-habitats',
          title: 'Animals & Their Habitats',
          description: 'Discover how animals live and adapt to their environments',
          difficulty: 2,
          estimatedTime: 18,
          xpReward: 180,
          acornsReward: 35,
          questions: kgScienceQuestions.slice(15, 30)
        }
      ]
    }
  ]
};