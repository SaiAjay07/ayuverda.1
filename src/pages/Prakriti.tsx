import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Star, Sparkles, Heart, Leaf, Brain, Hand, Eye, ArrowLeft } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { text: string; dosha: string; points: number }[];
}

interface MiniGameQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const prakritiquestions: Question[] = [
  {
    id: 1,
    question: "What is your natural body build?",
    options: [
      { text: "Thin, light frame with prominent joints", dosha: "vata", points: 3 },
      { text: "Medium build with good muscle definition", dosha: "pitta", points: 3 },
      { text: "Large frame with broad shoulders/hips", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 2,
    question: "How is your appetite typically?",
    options: [
      { text: "Variable - sometimes hungry, sometimes not", dosha: "vata", points: 3 },
      { text: "Strong and regular - I get irritable when hungry", dosha: "pitta", points: 3 },
      { text: "Steady but can skip meals without discomfort", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 3,
    question: "What describes your sleep pattern?",
    options: [
      { text: "Light sleeper, tend to wake up frequently", dosha: "vata", points: 3 },
      { text: "Sound sleeper but need less sleep", dosha: "pitta", points: 3 },
      { text: "Deep, long sleeper - love my 8+ hours", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 4,
    question: "How do you handle stress?",
    options: [
      { text: "Get anxious and worried easily", dosha: "vata", points: 3 },
      { text: "Become irritated and angry", dosha: "pitta", points: 3 },
      { text: "Withdraw and become sluggish", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 5,
    question: "What's your skin type?",
    options: [
      { text: "Dry, rough, and cool to touch", dosha: "vata", points: 3 },
      { text: "Warm, oily, and prone to rashes", dosha: "pitta", points: 3 },
      { text: "Thick, moist, and cool", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 6,
    question: "How do you learn best?",
    options: [
      { text: "Quickly but forget easily", dosha: "vata", points: 3 },
      { text: "Moderate pace with good retention", dosha: "pitta", points: 3 },
      { text: "Slowly but remember for long time", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 7,
    question: "What's your energy level like?",
    options: [
      { text: "Bursts of energy followed by fatigue", dosha: "vata", points: 3 },
      { text: "Consistent, moderate energy", dosha: "pitta", points: 3 },
      { text: "Steady, enduring energy", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 8,
    question: "How do you make decisions?",
    options: [
      { text: "Quickly but often change my mind", dosha: "vata", points: 3 },
      { text: "Decisively after analyzing facts", dosha: "pitta", points: 3 },
      { text: "Slowly and deliberately", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 9,
    question: "What weather do you prefer?",
    options: [
      { text: "Warm and humid weather", dosha: "vata", points: 3 },
      { text: "Cool and dry weather", dosha: "pitta", points: 3 },
      { text: "Warm and dry weather", dosha: "kapha", points: 3 }
    ]
  },
  {
    id: 10,
    question: "How do you express emotions?",
    options: [
      { text: "Enthusiastically but changeably", dosha: "vata", points: 3 },
      { text: "Intensely and directly", dosha: "pitta", points: 3 },
      { text: "Calmly and steadily", dosha: "kapha", points: 3 }
    ]
  }
];

const herbQuestions: MiniGameQuestion[] = [
  {
    id: 1,
    question: "Which herb is known as the 'King of Herbs' in Ayurveda?",
    options: ["Turmeric", "Ashwagandha", "Tulsi", "Neem"],
    correct: 2,
    explanation: "Tulsi (Holy Basil) is revered as the 'King of Herbs' for its numerous healing properties."
  },
  {
    id: 2,
    question: "What is the primary benefit of Ashwagandha?",
    options: ["Digestion", "Stress relief", "Skin health", "Weight loss"],
    correct: 1,
    explanation: "Ashwagandha is primarily known for its adaptogenic properties that help manage stress."
  },
  {
    id: 3,
    question: "Which herb is best for improving digestion?",
    options: ["Brahmi", "Ginger", "Amla", "Shatavari"],
    correct: 1,
    explanation: "Ginger is excellent for improving digestion and reducing nausea."
  },
  {
    id: 4,
    question: "Turmeric is primarily beneficial for:",
    options: ["Memory", "Inflammation", "Sleep", "Hair growth"],
    correct: 1,
    explanation: "Turmeric contains curcumin, which has powerful anti-inflammatory properties."
  },
  {
    id: 5,
    question: "Which herb is known as 'Indian Gooseberry'?",
    options: ["Amla", "Haritaki", "Bibhitaki", "Arjuna"],
    correct: 0,
    explanation: "Amla, also known as Indian Gooseberry, is rich in Vitamin C and antioxidants."
  },
  {
    id: 6,
    question: "Brahmi is primarily used for:",
    options: ["Joint pain", "Brain health", "Heart health", "Liver detox"],
    correct: 1,
    explanation: "Brahmi is renowned for enhancing memory, concentration, and overall brain function."
  },
  {
    id: 7,
    question: "Which herb is specifically beneficial for women's health?",
    options: ["Guduchi", "Shatavari", "Punarnava", "Manjistha"],
    correct: 1,
    explanation: "Shatavari is known as the 'Queen of Herbs' for women's reproductive health."
  }
];

const chakraQuestions: MiniGameQuestion[] = [
  {
    id: 1,
    question: "How many main chakras are there in the human body?",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "There are 7 main chakras running from the base of the spine to the crown of the head."
  },
  {
    id: 2,
    question: "What color is associated with the Heart Chakra?",
    options: ["Blue", "Green", "Yellow", "Purple"],
    correct: 1,
    explanation: "The Heart Chakra (Anahata) is associated with the color green."
  },
  {
    id: 3,
    question: "Which chakra is located at the base of the spine?",
    options: ["Sacral", "Root", "Solar Plexus", "Crown"],
    correct: 1,
    explanation: "The Root Chakra (Muladhara) is located at the base of the spine."
  },
  {
    id: 4,
    question: "The Third Eye Chakra is associated with:",
    options: ["Love", "Intuition", "Communication", "Grounding"],
    correct: 1,
    explanation: "The Third Eye Chakra (Ajna) is associated with intuition and inner wisdom."
  },
  {
    id: 5,
    question: "What is the Sanskrit name for the Throat Chakra?",
    options: ["Manipura", "Vishuddha", "Anahata", "Svadhisthana"],
    correct: 1,
    explanation: "Vishuddha is the Sanskrit name for the Throat Chakra, governing communication."
  },
  {
    id: 6,
    question: "Which chakra is associated with personal power?",
    options: ["Heart", "Solar Plexus", "Crown", "Sacral"],
    correct: 1,
    explanation: "The Solar Plexus Chakra (Manipura) is associated with personal power and confidence."
  },
  {
    id: 7,
    question: "The Crown Chakra connects us to:",
    options: ["Earth energy", "Emotional balance", "Divine consciousness", "Physical strength"],
    correct: 2,
    explanation: "The Crown Chakra (Sahasrara) connects us to divine consciousness and spiritual awareness."
  }
];

const yogaQuestions: MiniGameQuestion[] = [
  {
    id: 1,
    question: "What does 'Surya Namaskara' mean?",
    options: ["Moon Salutation", "Sun Salutation", "Earth Greeting", "Sky Worship"],
    correct: 1,
    explanation: "Surya Namaskara means Sun Salutation, a sequence of poses to honor the sun."
  },
  {
    id: 2,
    question: "Which pose is known as the 'King of Asanas'?",
    options: ["Headstand", "Lotus", "Warrior", "Tree"],
    correct: 0,
    explanation: "Headstand (Sirsasana) is called the 'King of Asanas' for its numerous benefits."
  },
  {
    id: 3,
    question: "What is the Sanskrit name for Tree Pose?",
    options: ["Vrikshasana", "Tadasana", "Balasana", "Shavasana"],
    correct: 0,
    explanation: "Vrikshasana is the Sanskrit name for Tree Pose, promoting balance and focus."
  },
  {
    id: 4,
    question: "Child's Pose is known in Sanskrit as:",
    options: ["Bhujangasana", "Balasana", "Ustrasana", "Matsyasana"],
    correct: 1,
    explanation: "Balasana (Child's Pose) is a resting pose that calms the mind and body."
  },
  {
    id: 5,
    question: "Which pose is called the 'Corpse Pose'?",
    options: ["Savasana", "Sukhasana", "Padmasana", "Vajrasana"],
    correct: 0,
    explanation: "Savasana (Corpse Pose) is the final relaxation pose in yoga practice."
  },
  {
    id: 6,
    question: "Warrior I pose is known as:",
    options: ["Virabhadrasana I", "Utthita Trikonasana", "Parsva Bakasana", "Eka Pada Rajakapotasana"],
    correct: 0,
    explanation: "Virabhadrasana I (Warrior I) builds strength and improves focus."
  },
  {
    id: 7,
    question: "What is the primary benefit of Cobra Pose?",
    options: ["Leg strength", "Spine flexibility", "Arm balance", "Hip opening"],
    correct: 1,
    explanation: "Cobra Pose (Bhujangasana) primarily improves spine flexibility and strengthens the back."
  }
];

const mudraQuestions: MiniGameQuestion[] = [
  {
    id: 1,
    question: "What does 'Mudra' mean in Sanskrit?",
    options: ["Hand position", "Seal or gesture", "Breathing technique", "Meditation pose"],
    correct: 1,
    explanation: "Mudra means 'seal' or 'gesture' in Sanskrit, channeling energy through hand positions."
  },
  {
    id: 2,
    question: "Which mudra is formed by touching thumb and index finger?",
    options: ["Chin Mudra", "Gyan Mudra", "Vayu Mudra", "Prithvi Mudra"],
    correct: 1,
    explanation: "Gyan Mudra (touching thumb and index finger) enhances concentration and knowledge."
  },
  {
    id: 3,
    question: "Anjali Mudra is commonly known as:",
    options: ["Peace gesture", "Prayer position", "Blessing mudra", "Wisdom seal"],
    correct: 1,
    explanation: "Anjali Mudra is the prayer position, bringing palms together at the heart center."
  },
  {
    id: 4,
    question: "Which mudra is beneficial for heart health?",
    options: ["Apana Mudra", "Hridaya Mudra", "Surya Mudra", "Varun Mudra"],
    correct: 1,
    explanation: "Hridaya Mudra is specifically beneficial for heart health and emotional balance."
  },
  {
    id: 5,
    question: "Prithvi Mudra is associated with which element?",
    options: ["Fire", "Water", "Earth", "Air"],
    correct: 2,
    explanation: "Prithvi Mudra is associated with the Earth element, promoting stability and grounding."
  },
  {
    id: 6,
    question: "Which mudra helps with digestive issues?",
    options: ["Apana Mudra", "Vayu Mudra", "Akash Mudra", "Surya Mudra"],
    correct: 0,
    explanation: "Apana Mudra helps with digestive issues and elimination processes."
  },
  {
    id: 7,
    question: "How long should mudras typically be practiced?",
    options: ["1-2 minutes", "5-10 minutes", "15-45 minutes", "1-2 hours"],
    correct: 2,
    explanation: "Mudras are typically practiced for 15-45 minutes for optimal benefits."
  }
];

const Prakriti = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
  const [karmaPoints, setKarmaPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  // Mini-game states
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [gameCurrentQuestion, setGameCurrentQuestion] = useState(0);
  const [gameAnswers, setGameAnswers] = useState<number[]>([]);
  const [gameShowResult, setGameShowResult] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  const feedbackMessages = [
    "🌟 Wonderful choice! Your inner wisdom shines!",
    "✨ Excellent! You're in tune with your nature!",
    "🔥 Great answer! Your energy is balanced!",
    "🌊 Perfect! You flow with natural harmony!",
    "🌿 Beautiful! Your connection to nature is strong!",
    "💫 Amazing! Your intuition guides you well!",
    "🧘‍♀️ Fantastic! Your mindfulness is evident!",
    "🌺 Lovely! Your spirit is in alignment!"
  ];

  const handleAnswer = (option: { text: string; dosha: string; points: number }) => {
    const newAnswers = { ...answers, [currentQuestion]: option.dosha };
    setAnswers(newAnswers);
    
    const newScores = { ...scores };
    newScores[option.dosha as keyof typeof scores] += option.points;
    setScores(newScores);
    
    setKarmaPoints(prev => prev + 10);
    setStreak(prev => prev + 1);
    
    // Show feedback
    const randomMessage = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
    setFeedbackMessage(randomMessage);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < prakritiquestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const getDominantDosha = () => {
    const maxScore = Math.max(scores.vata, scores.pitta, scores.kapha);
    if (scores.vata === maxScore) return 'vata';
    if (scores.pitta === maxScore) return 'pitta';
    return 'kapha';
  };

  const getDoshaInfo = (dosha: string) => {
    const info = {
      vata: {
        name: 'Vata',
        element: 'Air & Space',
        description: 'You are creative, energetic, and love movement and change!',
        color: 'from-purple-400 to-blue-500',
        icon: '💨',
        traits: ['Creative', 'Energetic', 'Quick-thinking', 'Adaptable']
      },
      pitta: {
        name: 'Pitta',
        element: 'Fire & Water',
        description: 'You are focused, determined, and have natural leadership qualities!',
        color: 'from-red-400 to-orange-500',
        icon: '🔥',
        traits: ['Focused', 'Determined', 'Intelligent', 'Goal-oriented']
      },
      kapha: {
        name: 'Kapha',
        element: 'Earth & Water',
        description: 'You are calm, stable, and have a nurturing, peaceful nature!',
        color: 'from-green-400 to-teal-500',
        icon: '🌍',
        traits: ['Calm', 'Stable', 'Nurturing', 'Patient']
      }
    };
    return info[dosha as keyof typeof info];
  };

  const startMiniGame = (gameType: string) => {
    setActiveGame(gameType);
    setGameCurrentQuestion(0);
    setGameAnswers([]);
    setGameShowResult(false);
    setGameScore(0);
  };

  const handleGameAnswer = (answerIndex: number) => {
    const newAnswers = [...gameAnswers, answerIndex];
    setGameAnswers(newAnswers);
    
    const currentQuestions = getCurrentGameQuestions();
    const isCorrect = answerIndex === currentQuestions[gameCurrentQuestion].correct;
    if (isCorrect) {
      setGameScore(prev => prev + 1);
    }
    
    if (gameCurrentQuestion < currentQuestions.length - 1) {
      setTimeout(() => {
        setGameCurrentQuestion(prev => prev + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setGameShowResult(true);
      }, 1000);
    }
  };

  const getCurrentGameQuestions = () => {
    switch (activeGame) {
      case 'herb': return herbQuestions;
      case 'chakra': return chakraQuestions;
      case 'yoga': return yogaQuestions;
      case 'mudra': return mudraQuestions;
      default: return [];
    }
  };

  const resetMiniGame = () => {
    setActiveGame(null);
    setGameCurrentQuestion(0);
    setGameAnswers([]);
    setGameShowResult(false);
    setGameScore(0);
  };

  const FloatingElement = ({ children, delay = 0, duration = 3 }: { children: React.ReactNode; delay?: number; duration?: number }) => (
    <div 
      className="absolute animate-bounce opacity-20"
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`
      }}
    >
      {children}
    </div>
  );

  // Mini-game result screen
  if (activeGame && gameShowResult) {
    const currentQuestions = getCurrentGameQuestions();
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ 
        backgroundImage: 'url("/new commit chnages/welcome page.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-900/70"></div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-4xl w-full shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">🏆</div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Quiz Complete!</h2>
              <div className="text-2xl font-bold text-amber-600 mb-6">
                Score: {gameScore}/{currentQuestions.length} ({Math.round((gameScore/currentQuestions.length)*100)}%)
              </div>
            </div>
            
            <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
              {currentQuestions.map((q, index) => {
                const userAnswer = gameAnswers[index];
                const isCorrect = userAnswer === q.correct;
                return (
                  <div key={q.id} className="text-left p-4 rounded-lg bg-gray-50 border">
                    <p className="font-medium mb-3 text-gray-800">{index + 1}. {q.question}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {q.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            optIndex === q.correct
                              ? 'bg-green-200 text-green-800 border-2 border-green-400'
                              : optIndex === userAnswer && !isCorrect
                              ? 'bg-red-200 text-red-800 border-2 border-red-400'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {optIndex === q.correct && <span className="text-green-600 font-bold">✓</span>}
                            {optIndex === userAnswer && !isCorrect && <span className="text-red-600 font-bold">✗</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <p className="text-sm text-blue-800 italic">💡 {q.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center">
              <button
                onClick={resetMiniGame}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mini-game quiz screen
  if (activeGame) {
    const currentQuestions = getCurrentGameQuestions();
    const currentQ = currentQuestions[gameCurrentQuestion];
    
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ 
        backgroundImage: 'url("/new commit chnages/welcome page.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-900/70"></div>
        
        {/* Floating Kerala elements */}
        <FloatingElement delay={0} duration={4}>🌴</FloatingElement>
        <FloatingElement delay={1} duration={5}>🥥</FloatingElement>
        <FloatingElement delay={2} duration={3}>🌺</FloatingElement>
        <FloatingElement delay={3} duration={6}>🦋</FloatingElement>
        <FloatingElement delay={4} duration={4}>🐘</FloatingElement>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-2xl w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={resetMiniGame}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <div className="text-sm font-medium text-gray-600">
                Question {gameCurrentQuestion + 1} of {currentQuestions.length}
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
              <div 
                className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                style={{ width: `${((gameCurrentQuestion + 1) / currentQuestions.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-green-800 mb-8 text-center animate-fade-in">
              {currentQ.question}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {currentQ.options.map((option, index) => {
                const isAnswered = gameAnswers.length > gameCurrentQuestion;
                const isCorrect = index === currentQ.correct;
                const isUserAnswer = gameAnswers[gameCurrentQuestion] === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => !isAnswered && handleGameAnswer(index)}
                    disabled={isAnswered}
                    className={`p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                      isAnswered
                        ? isCorrect
                          ? 'bg-green-200 text-green-800 border-2 border-green-400 animate-pulse'
                          : isUserAnswer
                          ? 'bg-red-200 text-red-800 border-2 border-red-400'
                          : 'bg-gray-100 text-gray-600'
                        : 'bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-200 hover:border-amber-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {isAnswered && isCorrect && <span className="text-green-600 text-xl">✓</span>}
                      {isAnswered && isUserAnswer && !isCorrect && <span className="text-red-600 text-xl">✗</span>}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {gameAnswers.length > gameCurrentQuestion && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 animate-fade-in">
                <p className="text-blue-800 italic">💡 {currentQ.explanation}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main Prakriti quiz result screen
  if (showResult) {
    const dominantDosha = getDominantDosha();
    const doshaInfo = getDoshaInfo(dominantDosha);
    
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ 
        backgroundImage: 'url("/new commit chnages/welcome page.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-900/70"></div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-4xl w-full shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">{doshaInfo.icon}</div>
              <h1 className="text-4xl font-bold text-green-800 mb-4">Your Prakriti is {doshaInfo.name}!</h1>
              <p className="text-xl text-gray-700 mb-6">{doshaInfo.description}</p>
              
              <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${doshaInfo.color} text-white font-semibold text-lg mb-6`}>
                Element: {doshaInfo.element}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {doshaInfo.traits.map((trait, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <span className="text-green-800 font-medium">{trait}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Your Dosha Scores</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{scores.vata}</div>
                    <div className="text-sm text-gray-600">Vata</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{scores.pitta}</div>
                    <div className="text-sm text-gray-600">Pitta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{scores.kapha}</div>
                    <div className="text-sm text-gray-600">Kapha</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Take Quiz Again
                </button>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Prakriti quiz screen
  if (!activeGame) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ 
        backgroundImage: 'url("/new commit chnages/welcome page.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-900/70"></div>
        
        {/* Floating Kerala elements */}
        <FloatingElement delay={0} duration={4}>🌴</FloatingElement>
        <FloatingElement delay={1} duration={5}>🥥</FloatingElement>
        <FloatingElement delay={2} duration={3}>🌺</FloatingElement>
        <FloatingElement delay={3} duration={6}>🦋</FloatingElement>
        <FloatingElement delay={4} duration={4}>🐘</FloatingElement>
        <FloatingElement delay={5} duration={5}>🌿</FloatingElement>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="max-w-6xl w-full">
            {/* Header with animated doctor and quote */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="text-6xl mr-6 animate-pulse">🧑‍⚕️</div>
                <div className="text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Ayurvedic Constitution</h1>
                  <p className="text-xl italic">"Know thyself and you will know the universe and the gods" - Ancient Wisdom</p>
                </div>
              </div>
            </div>

            {currentQuestion < prakritiquestions.length ? (
              // Quiz interface
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-amber-100 px-4 py-2 rounded-full">
                      <span className="text-amber-800 font-semibold">Karma: {karmaPoints}</span>
                    </div>
                    <div className="bg-green-100 px-4 py-2 rounded-full">
                      <span className="text-green-800 font-semibold">Streak: {streak}</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {prakritiquestions.length}
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                    style={{ width: `${((currentQuestion + 1) / prakritiquestions.length) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 text-center">
                  {prakritiquestions[currentQuestion].question}
                </h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {prakritiquestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="p-6 rounded-xl text-left bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <span className="text-lg font-medium text-gray-800">{option.text}</span>
                    </button>
                  ))}
                </div>
                
                {showFeedback && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-bounce">
                      <p className="text-2xl font-bold text-green-800 text-center">{feedbackMessage}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {/* Mini-games section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Ayurveda Mini-Games</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div 
                  onClick={() => startMiniGame('herb')}
                  className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="text-xl font-bold mb-2">Herb Memory Match</h3>
                  <p className="text-sm opacity-90">Test your knowledge of Ayurvedic herbs</p>
                </div>
                
                <div 
                  onClick={() => startMiniGame('chakra')}
                  className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4">🧘‍♀️</div>
                  <h3 className="text-xl font-bold mb-2">Chakra Balance</h3>
                  <p className="text-sm opacity-90">Learn about the seven chakras</p>
                </div>
                
                <div 
                  onClick={() => startMiniGame('yoga')}
                  className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4">🧘‍♂️</div>
                  <h3 className="text-xl font-bold mb-2">Yoga Pose Quiz</h3>
                  <p className="text-sm opacity-90">Master yoga asanas and their benefits</p>
                </div>
                
                <div 
                  onClick={() => startMiniGame('mudra')}
                  className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-2xl text-white cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-4xl mb-4">✋</div>
                  <h3 className="text-xl font-bold mb-2">Mudra Master</h3>
                  <p className="text-sm opacity-90">Discover the power of hand gestures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Prakriti;