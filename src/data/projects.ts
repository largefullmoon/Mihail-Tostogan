import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ConstructKoin Presale',
    description: 'Blockchain-based presale platform for cryptocurrency projects',
    longDescription: 'A comprehensive blockchain presale system built with smart contracts and Web3 technologies. Features include secure token distribution, automated vesting schedules, KYC/AML integration, and real-time presale analytics. Implements industry-standard security practices and provides a seamless user experience for both investors and project creators.',
    techStack: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum', 'Hardhat', 'MetaMask'],
    image: ['1.png', '2.png', '3.png'],
    featured: true,
    link: 'https://constructkoin.com/'
  },
  {
    id: '2',
    title: 'Chatnode AI',
    description: 'Intelligent AI agent system for automated customer interactions',
    longDescription: 'Advanced AI-powered conversational agent platform that leverages natural language processing and machine learning to deliver intelligent, context-aware responses. Features include multi-channel integration, sentiment analysis, automated workflow routing, and seamless handoff to human agents. Reduces customer response time by 85% while maintaining high satisfaction scores.',
    techStack: ['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker'],
    image: ['4.png', '5.png', '6.png'],
    link: 'https://chatnode.ai/'
  },
  {
    id: '3',
    title: 'JustBookfiy',
    description: 'Comprehensive book rental platform for children and families',
    longDescription: 'An innovative digital library platform designed specifically for children, offering curated book collections, age-appropriate content filtering, and interactive reading experiences. Features include personalized recommendations, progress tracking, parental controls, and integration with educational institutions. Promotes literacy and learning through gamified reading challenges.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS S3', 'Stripe', 'Socket.io'],
    image: ['7.png', '8.png', '9.png', '10.png', '11.png'],
    link: 'https://www.justbookify.com/'
  },
  {
    id: '4',
    title: 'Trading Hero',
    description: 'Professional mobile trading platform for financial markets',
    longDescription: 'A sophisticated mobile trading application that provides real-time market data, advanced charting tools, and secure trading capabilities across multiple financial instruments. Features include portfolio management, risk assessment tools, automated trading strategies, and comprehensive market analysis. Built with enterprise-grade security and compliance standards.',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'WebSocket', 'Redis', 'AWS', 'Trading APIs'],
    image: ['12.png'],
    link: 'https://play.google.com/store/apps/details?id=com.khochora.hero'
  },
  {
    id: '5',
    title: 'The Courier Guys',
    description: 'International courier and logistics service platform',
    longDescription: 'A comprehensive logistics platform connecting customers in Trinidad & Tobago with international shipping services from the United States. Features include real-time package tracking, customs documentation assistance, cost calculators, and automated shipping notifications. Streamlines the international shopping experience with transparent pricing and reliable delivery.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Stripe', 'Email Services'],
    image: ['13.png'],
    link: 'https://play.google.com/store/apps/details?id=courierguys.khochora'
  },
  {
    id: '6',
    title: 'Dorascribe',
    description: 'AI-powered medical consultation transcription system',
    longDescription: 'Advanced medical transcription platform that utilizes artificial intelligence to accurately convert spoken medical consultations into structured, searchable text. Features include medical terminology recognition, HIPAA compliance, automated formatting, and integration with electronic health record systems. Improves documentation accuracy and reduces administrative burden for healthcare providers.',
    techStack: ['Python', 'OpenAI Whisper', 'FastAPI', 'React', 'PostgreSQL', 'AWS', 'Medical APIs'],
    image: ['16.png', '14.png', '15.png'],
    link: 'https://dorascribe.ai/'
  },
  {
    id: '7',
    title: 'FlyUSA',
    description: 'AI-driven aircraft booking and travel management platform',
    longDescription: 'Intelligent travel booking platform that leverages machine learning algorithms to optimize aircraft reservations and travel planning. Features include dynamic pricing optimization, demand forecasting, automated booking management, and personalized travel recommendations. Integrates with major airline APIs and provides comprehensive travel management solutions for businesses and individuals.',
    techStack: ['Python', 'React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'Airline APIs', 'AWS'],
    image: ['17.png', '18.png', '19.png'],
    link: 'https://flyusa.com/'
  },
];