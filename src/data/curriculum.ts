// LearnLift Curriculum Data
// This file contains the structured learning content for all grades and subjects

import { mathSkills } from './math-content';
import { scienceSkills } from './science-content';
import { languageSkills } from './language-content';

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

// Comprehensive curriculum data with full content
export const curriculum: Record<string, Grade> = {
  'pre-k': {
    id: 'pre-k',
    name: 'Pre-K',
    ageRange: '3-4 years',
    subjects: {
      math: mathSkills['pre-k'] || [],
      science: scienceSkills['pre-k'] || [],
      language: languageSkills['pre-k'] || []
    }
  },
  'kg': {
    id: 'kg',
    name: 'Kindergarten',
    ageRange: '4-5 years',
    subjects: {
      math: mathSkills['kg'] || [],
      science: scienceSkills['kg'] || [],
      language: languageSkills['kg'] || []
    }
  },
  'class-1': {
    id: 'class-1',
    name: 'Class 1',
    ageRange: '5-6 years',
    subjects: {
      math: [], // TODO: Add Class 1 content
      science: [],
      language: []
    }
  },
  'class-2': {
    id: 'class-2',
    name: 'Class 2',
    ageRange: '6-7 years',
    subjects: {
      math: [],
      science: [],
      language: []
    }
  },
  'class-3': {
    id: 'class-3',
    name: 'Class 3',
    ageRange: '7-8 years',
    subjects: {
      math: [],
      science: [],
      language: []
    }
  },
  'class-4': {
    id: 'class-4',
    name: 'Class 4',
    ageRange: '8-9 years',
    subjects: {
      math: [],
      science: [],
      language: []
    }
  },
  'class-5': {
    id: 'class-5',
    name: 'Class 5',
    ageRange: '9-10 years',
    subjects: {
      math: [],
      science: [],
      language: []
    }
  },
  'class-6': {
    id: 'class-6',
    name: 'Class 6',
    ageRange: '10-11 years',
    subjects: {
      math: [],
      science: [],
      language: []
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