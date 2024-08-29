import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Goal.css';

const SelectionScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const options = [
    { id: 1, label: 'Learning specific skills', icon: '💻' },
    { id: 2, label: 'Following my curiosity', icon: '🔍' },
    { id: 3, label: 'Building my problem-solving skills', icon: '🧩' },
    { id: 4, label: 'Brushing up on the basics', icon: '✏️' },
    { id: 5, label: 'Something else', icon: '🔓' }
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigate('/goal/next');
    }
  };

  return (
    <div className="goal-container">
      <div className="question-container">
        <span className="question-icon">🔰</span>
        <span className="question-text">What do you want to focus on?</span>
      </div>
      <div className="options">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedOption === option.label ? 'selected' : ''}`}
            onClick={() => handleOptionChange(option.label)}
          >
            <span className="icon">{option.icon}</span>
            <span className="label">{option.label}</span>
          </div>
        ))}
      </div>
      <button className="continue-button" disabled={!selectedOption} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

const NextScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const options = [
    { id: 1, label: 'Professional growth', icon: '📈' },
    { id: 2, label: 'Staying sharp', icon: '🎯' },
    { id: 3, label: 'Excelling in school', icon: '📚' },
    { id: 4, label: 'Helping my child learn', icon: '👶' },
    { id: 5, label: 'Helping my students learn', icon: '🍎' },
    { id: 6, label: 'Something else', icon: '🦄' }
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigate('/topic-selection');
    }
  };

  return (
    <div className="goal-container">
      <div className="question-container">
        <span className="question-icon">🔰</span>
        <span className="question-text">What's your top goal?</span>
      </div>
      <div className="options">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedOption === option.label ? 'selected' : ''}`}
            onClick={() => handleOptionChange(option.label)}
          >
            <span className="icon">{option.icon}</span>
            <span className="label">{option.label}</span>
          </div>
        ))}
      </div>
      <button className="continue-button" disabled={!selectedOption} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

const TopicSelectionScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const topics = [
    { id: 1, label: 'Math', icon: '📚' },
    { id: 2, label: 'Science & Engineering', icon: '🔬' },
    { id: 3, label: 'Computer Science & Programming', icon: '💻' },
    { id: 4, label: 'Data Science & Data Analysis', icon: '📊' }
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigate('/comfort-level');
    }
  };

  return (
    <div className="goal-container">
      <div className="question-container">
        <span className="question-icon">🔰</span>
        <span className="question-text">Which topic do you want to explore first?</span>
      </div>
      <div className="options">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`option ${selectedOption === topic.label ? 'selected' : ''}`}
            onClick={() => handleOptionChange(topic.label)}
          >
            <span className="icon">{topic.icon}</span>
            <span className="label">{topic.label}</span>
          </div>
        ))}
      </div>
      <button className="continue-button" disabled={!selectedOption} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

const ComfortLevelScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const levels = [
    {
      id: 1,
      code: 'print("hello")',
      level: 'Beginner',
      description: 'I want to start from the basics.'
    },
    {
      id: 2,
      code: 'if b > a:\n  print(b)',
      level: 'Novice',
      description: "I've seen, but not touched code before."
    },
    {
      id: 3,
      code: 'for i in range(5):',
      level: 'Intermediate',
      description: 'I can write simple programs with loops.'
    },
    {
      id: 4,
      code: 'def circle(size):',
      level: 'Advanced',
      description: "I've written longer programs."
    }
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      navigate('/learning-fit');
    }
  };

  return (
    <div className="goal-container">
      <div className="question-container">
        <span className="question-icon">🔰</span>
        <span className="question-text">What's your programming comfort level?</span>
      </div>
      <div className="comfort-level-options">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`comfort-level-option ${selectedOption === level.level ? 'selected' : ''}`}
            onClick={() => handleOptionChange(level.level)}
          >
            <pre className="code-snippet">{level.code}</pre>
            <span className="level">{level.level}</span>
            <span className="description">{level.description}</span>
          </div>
        ))}
      </div>
      <button className="continue-button" disabled={!selectedOption} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

const LearningFitScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { id: 1, label: 'Morning routine', icon: '🌅', description: 'during breakfast or my commute' },
    { id: 2, label: 'Quick break', icon: '🍕', description: 'during lunch or between activities' },
    { id: 3, label: 'Nightly ritual', icon: '🌙', description: 'after dinner or while in bed' },
    { id: 4, label: 'Another time', icon: '💻', description: 'in my day' }
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      // Handle the next navigation step
      console.log('Selected learning fit:', selectedOption);
      // Example: navigate('/next-step');
    }
  };

  return (
    <div className="goal-container">
      <div className="question-container">
        <span className="question-icon">🔰</span>
        <span className="question-text">How will learning fit into your day?</span>
      </div>
      <div className="options">
        {options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedOption === option.label ? 'selected' : ''}`}
            onClick={() => handleOptionChange(option.label)}
          >
            <span className="icon">{option.icon}</span>
            <span className="label">{option.label}</span>
            <span className="description">{option.description}</span>
          </div>
        ))}
      </div>
      <button className="continue-button" disabled={!selectedOption} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

// Export all components correctly
export { SelectionScreen, NextScreen, TopicSelectionScreen, ComfortLevelScreen, LearningFitScreen };
export default SelectionScreen;
