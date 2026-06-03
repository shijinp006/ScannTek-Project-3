import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import arrowSvg from '../assets/arrow.svg';
import doubleCotSvg from '../assets/doublecot.svg';
import heroTrainer from '../assets/hero-image.png';
import serviceLosing from '../assets/service-losing-weight.png';
import serviceBuilding from '../assets/service-building-muscle.png';
import serviceHome from '../assets/service-home-training.png';
import serviceGym from '../assets/service-gym-plan.png';

// Fitness Tool assets
import toolCalorie from '../assets/af56840a26856a0143a20449181f094ebb0365b9.png';
import toolBmi from '../assets/d135e47fd40ce0cd2d2ccb9103fc472d6c94bc2f.png';
import toolMacro1 from '../assets/38ff352b88627b6db80be025bc73d4a344b24e18.png';
import toolGoal from '../assets/8ecb73d3ffec6aaf55ccc9ec87da40d3c7c91123.png';
import toolMacro2 from '../assets/69573ea629b490916a264f05f51d7e6ba3f27174.png';

// Testimonial assets
import testimonialMain from '../assets/ba0b4b6140f1442df69f99820b959f89e382e97c.png';
import testimonialJosh from '../assets/8514ab438f6d09d5879c609b997cb0e43526baff.png';
import testimonialEdward from '../assets/4552bcd93dbae33f0a40dac0e6bb7b5afb9b0f32.png';

// Trainer assets
import trainerSam from '../assets/6059fac6119c3f846dc8160da258ff6493233b0c.png';
import trainerMichael from '../assets/50893c736932ef090d1bacdd740cb0ccb39be9f5.png';
import trainerJohn from '../assets/4db40e0d45768febc86b5dd950fedce957e9e19a.png';
import trainerTom from '../assets/1a90e5cd7399735ff1d2ab1f41a2747eba676b3d.png';

//Fit Mark Section

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png"

/* â”€â”€ Interactive Calculators for Fitness Tools â”€â”€ */

function CalorieCalc() {
  const [age, setAge] = React.useState(25);
  const [gender, setGender] = React.useState('male');
  const [weight, setWeight] = React.useState(70);
  const [height, setHeight] = React.useState(175);
  const [activity, setActivity] = React.useState(1.375);
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    const calories = Math.round(bmr * activity);
    setResult(calories);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Age</label>
          <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Gender</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setGender('male')} style={{ flex: 1, padding: '10px', background: gender === 'male' ? '#D90A14' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', cursor: 'pointer', transition: '0.2s' }}>Male</button>
            <button onClick={() => setGender('female')} style={{ flex: 1, padding: '10px', background: gender === 'female' ? '#D90A14' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', cursor: 'pointer', transition: '0.2s' }}>Female</button>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
      </div>
      <div>
        <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Activity Level</label>
        <select value={activity} onChange={e => setActivity(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(15,10,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }}>
          <option value={1.2}>Sedentary (Little/No Exercise)</option>
          <option value={1.375}>Lightly Active (1-3 Days/Week)</option>
          <option value={1.55}>Moderately Active (3-5 Days/Week)</option>
          <option value={1.725}>Very Active (6-7 Days/Week)</option>
        </select>
      </div>
      <button onClick={calculate} style={{ padding: '12px', background: 'linear-gradient(to right, #D90A14, #CD4E17)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px' }}>Calculate Calories</button>
      {result && (
        <div style={{ background: 'rgba(217,10,20,0.1)', border: '1px solid rgba(217,10,20,0.3)', borderRadius: '8px', padding: '16px', textAlign: 'center', marginTop: '12px' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Daily Caloric Needs</span>
          <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#fff', margin: '4px 0' }}>{result} <span style={{ fontSize: '14px', fontWeight: 600, color: '#D90A14' }}>kcal</span></h3>
          <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0, lineHeight: 1.4 }}>This is the estimated amount of daily calories needed to maintain your current weight.</p>
        </div>
      )}
    </div>
  );
}

function BmiCalc() {
  const [weight, setWeight] = React.useState(70);
  const [height, setHeight] = React.useState(175);
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiVal = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      let category = '';
      let color = '';
      if (bmiVal < 18.5) {
        category = 'Underweight';
        color = '#38bdf8';
      } else if (bmiVal < 25) {
        category = 'Normal Weight';
        color = '#22c55e';
      } else if (bmiVal < 30) {
        category = 'Overweight';
        color = '#f97316';
      } else {
        category = 'Obese';
        color = '#ef4444';
      }
      setResult({ val: bmiVal, cat: category, color });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
      </div>
      <button onClick={calculate} style={{ padding: '12px', background: 'linear-gradient(to right, #D90A14, #CD4E17)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px' }}>Calculate BMI</button>
      {result && (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', textAlign: 'center', marginTop: '12px' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your BMI Result</span>
          <h3 style={{ fontSize: '32px', fontWeight: 900, color: result.color, margin: '4px 0' }}>{result.val}</h3>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff', display: 'inline-block', padding: '4px 12px', borderRadius: '4px', background: result.color, marginTop: '4px' }}>{result.cat}</span>
          <p style={{ fontSize: '11px', color: '#9ca3af', margin: '10px 0 0 0', lineHeight: 1.4 }}>
            A healthy BMI is between 18.5 and 24.9. Maintain a balanced diet and exercise regularly to stay within the healthy range.
          </p>
        </div>
      )}
    </div>
  );
}

function MacroCalc() {
  const [calories, setCalories] = React.useState(2000);
  const [goal, setGoal] = React.useState('maintain');
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    if (calories > 0) {
      let pRatio = 0.3, cRatio = 0.4, fRatio = 0.3;
      if (goal === 'lose') {
        pRatio = 0.4; cRatio = 0.3; fRatio = 0.3;
      } else if (goal === 'build') {
        pRatio = 0.35; cRatio = 0.45; fRatio = 0.2;
      }

      const pCals = calories * pRatio;
      const cCals = calories * cRatio;
      const fCals = calories * fRatio;

      const protein = Math.round(pCals / 4);
      const carbs = Math.round(cCals / 4);
      const fat = Math.round(fCals / 9);

      setResult({ protein, carbs, fat, pRatio, cRatio, fRatio });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Daily Calories</label>
          <input type="number" value={calories} onChange={e => setCalories(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Goal</label>
          <select value={goal} onChange={e => setGoal(e.target.value)} style={{ width: '100%', padding: '10px', background: 'rgba(15,10,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }}>
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Lose Fat</option>
            <option value="build">Build Muscle</option>
          </select>
        </div>
      </div>
      <button onClick={calculate} style={{ padding: '12px', background: 'linear-gradient(to right, #D90A14, #CD4E17)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px' }}>Calculate Macros</button>
      {result && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>Daily Macronutrient Targets</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            <div style={{ background: 'rgba(217,10,20,0.1)', border: '1px solid rgba(217,10,20,0.3)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '10px', color: '#D90A14', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>Protein</span>
              <h4 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', margin: '4px 0' }}>{result.protein}g</h4>
              <span style={{ fontSize: '9px', color: '#9ca3af' }}>{Math.round(result.pRatio * 100)}%</span>
            </div>
            <div style={{ background: 'rgba(205,78,23,0.1)', border: '1px solid rgba(205,78,23,0.3)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '10px', color: '#CD4E17', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>Carbs</span>
              <h4 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', margin: '4px 0' }}>{result.carbs}g</h4>
              <span style={{ fontSize: '9px', color: '#9ca3af' }}>{Math.round(result.cRatio * 100)}%</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 700, display: 'block', textTransform: 'uppercase' }}>Fat</span>
              <h4 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', margin: '4px 0' }}>{result.fat}g</h4>
              <span style={{ fontSize: '9px', color: '#9ca3af' }}>{Math.round(result.fRatio * 100)}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GoalCalc() {
  const [focus, setFocus] = React.useState('strength');
  const [currentW, setCurrentW] = React.useState(70);
  const [targetW, setTargetW] = React.useState(75);
  const [weeks, setWeeks] = React.useState(12);
  const [result, setResult] = React.useState(null);

  const calculate = () => {
    if (weeks > 0 && currentW > 0 && targetW > 0) {
      const difference = targetW - currentW;
      const weeklyRate = (difference / weeks).toFixed(2);

      let workoutsPerWeek = 4;
      let advice = '';
      if (focus === 'strength') {
        workoutsPerWeek = 4;
        advice = 'Focus on progressive overload, lifting heavy compound weights with a high protein diet.';
      } else if (focus === 'endurance') {
        workoutsPerWeek = 5;
        advice = 'Incorporate zone 2 cardio sessions alongside moderate weight circuit training.';
      } else {
        workoutsPerWeek = 4;
        advice = 'Maintain a caloric deficit, target high-intensity interval training (HIIT) and metabolic conditioning.';
      }

      setResult({ diff: difference, rate: weeklyRate, frequency: workoutsPerWeek, advice });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        <div>
          <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Current Wt</label>
          <input type="number" value={currentW} onChange={e => setCurrentW(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Target Wt</label>
          <input type="number" value={targetW} onChange={e => setTargetW(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
        <div>
          <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Weeks</label>
          <input type="number" value={weeks} onChange={e => setWeeks(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
        </div>
      </div>
      <div>
        <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>Fitness Focus</label>
        <select value={focus} onChange={e => setFocus(e.target.value)} style={{ width: '100%', padding: '10px', background: 'rgba(15,10,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }}>
          <option value="strength">Muscle & Strength Gain</option>
          <option value="endurance">Endurance & Conditioning</option>
          <option value="fatloss">Fat Loss & Definition</option>
        </select>
      </div>
      <button onClick={calculate} style={{ padding: '12px', background: 'linear-gradient(to right, #D90A14, #CD4E17)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px' }}>Calculate Plan</button>
      {result && (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Target Rate</span>
              <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#D90A14', margin: '2px 0' }}>{result.rate} kg</h4>
              <span style={{ fontSize: '10px', color: '#9ca3af' }}>per week</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Workouts</span>
              <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#CD4E17', margin: '2px 0' }}>{result.frequency} days</h4>
              <span style={{ fontSize: '10px', color: '#9ca3af' }}>per week</span>
            </div>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <div>
            <span style={{ fontSize: '11px', color: '#CD4E17', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Training Recommendation</span>
            <p style={{ fontSize: '11px', color: '#d1d5db', margin: 0, lineHeight: 1.4 }}>{result.advice}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* â”€â”€ Reusable animation variants â”€â”€ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  show: { opacity: 1, scale: 1 },
};

/* â”€â”€ Stat card with framer-motion â”€â”€ */
let _statCardId = 0;
function StatCard({ number, label, posStyleLg, posStyleMd, posStyle, variants, delay = 0 }) {
  const id = React.useRef('sc-' + (++_statCardId)).current;
  const lgStyle = posStyleLg || posStyle || {};
  const mdStyle = posStyleMd || posStyle || {};
  const toCSS = (obj) => Object.entries(obj).map(([k, v]) =>
    k.replace(/([A-Z])/g, '-$1').toLowerCase() + ':' + v
  ).join(';');
  return (
    <>
      <style>{`
        #${id} { ${toCSS(lgStyle)} }
        @media (max-width: 1023px) { #${id} { ${toCSS(mdStyle)} } }
      `}</style>
      <motion.div
        id={id}
        variants={variants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay, ease: 'backOut' }}
        style={{
          position: 'absolute',
          background: 'linear-gradient(rgba(22,22,22,0.92), rgba(22,22,22,0.92)) padding-box, linear-gradient(to bottom right, #CD4E17, #D90A14) border-box',
          border: '1px solid transparent',
          borderRadius: '10px',
          padding: '10px 16px  ',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
          zIndex: 20,
          minWidth: '90px',
        }}
      >
        <span style={{ fontSize: '17px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{number}</span>
        <span style={{ fontSize: '9px', fontWeight: 500, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '5px' }}>{label}</span>
      </motion.div>
    </>
  );
}

export default function LandingPage() {
  const [activeNav, setActiveNav] = React.useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);
  const [billingCycle, setBillingCycle] = React.useState('Monthly');
  const [selectedTool, setSelectedTool] = React.useState(null);
  const [toolPage, setToolPage] = React.useState(0);
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [activeTrainerIndex, setActiveTrainerIndex] = React.useState(0);
  const [selectedTrainer, setSelectedTrainer] = React.useState(null);
  const [showAllTrainers, setShowAllTrainers] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = React.useState(null);
  const [showAllBlogs, setShowAllBlogs] = React.useState(false);
  const [authTab, setAuthTab] = React.useState('signup');
  const [activeFaq, setActiveFaq] = React.useState(0);
  const [blogPosts, setBlogPosts] = React.useState([
    {
      id: 1,
      title: "5 Essential Exercises For Building Muscle",
      date: "August 14",
      category: "Strength Training",
      img: img1,
      content: "Building muscle requires a combination of structured resistance training, progressive overload, and adequate nutrition. The five essential exercises to include in your routine are: Squats (for lower body development), Bench Press (for chest and triceps), Deadlifts (for posterior chain strength), Overhead Press (for shoulder stability), and Pull-ups (for back strength). Focus on correct form, and slowly increase the weight over time to ensure continuous muscle growth."
    },
    {
      id: 2,
      title: "The Ultimate Guide To A Balanced Diet",
      date: "August 12",
      category: "Nutrition",
      img: img2,
      content: "A balanced diet is the cornerstone of fitness success. It's not about starvation, but fueling your body with the right macronutrients: lean proteins, complex carbohydrates, and healthy fats. Hydration plays a critical role, so aim for at least 3 liters of water daily. Ensure you consume plenty of leafy greens and fiber to aid digestion and maintain steady energy levels throughout your workouts."
    },
    {
      id: 3,
      title: "The Benefits Of HIIT Training",
      date: "August 10",
      category: "Cardio",
      img: img3,
      content: "High-Intensity Interval Training (HIIT) is one of the most efficient ways to burn fat and improve cardiovascular health. By alternating between short bursts of intense exercise and quick recovery periods, HIIT keeps your heart rate elevated and boosts your metabolism for hours after the workout ends. It is ideal for busy individuals, as a session can be completed in just 15 to 20 minutes."
    },
    {
      id: 4,
      title: "Home Workouts For Busy People",
      date: "August 08",
      category: "Home Workouts",
      img: img4,
      content: "No gym? No problem! Home workouts are highly effective if you utilize bodyweight movements or minimal equipment like resistance bands. Focus on compound exercises like push-ups, squats, lunges, and planks. To progress, decrease rest times or increase the number of repetitions. Consistency is key, so scheduling just 20 minutes a day can yield massive long-term results."
    },
    {
      id: 5,
      title: "How To Always Stay Motivated",
      date: "August 05",
      category: "Motivation",
      img: img5,
      content: "Motivation gets you started, but discipline keeps you going. To stay motivated on your fitness journey, set clear, measurable, and realistic goals. Track your progress with photos and strength benchmarks rather than just the scale. Find a workout partner or community, and remember to celebrate small victories along the way. Your mindset is your strongest muscle."
    }
  ]);
  const toolsScrollRef = React.useRef(null);
  const trainerContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (toolsScrollRef.current) {
      const container = toolsScrollRef.current;
      const scrollAmount = toolPage * (container.scrollWidth - container.clientWidth);
      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [toolPage]);

  React.useEffect(() => {
    if (trainerContainerRef.current) {
      const card = trainerContainerRef.current.querySelector('.trainer-card');
      if (card) {
        const offset = activeTrainerIndex * (card.offsetWidth + 12);
        trainerContainerRef.current.scrollTo({ left: offset, behavior: 'smooth' });
      }
    }
  }, [activeTrainerIndex]);

  const handleToolsScroll = () => {
    if (toolsScrollRef.current) {
      const container = toolsScrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;
      const pct = container.scrollLeft / maxScroll;
      if (pct > 0.5) {
        setToolPage(1);
      } else {
        setToolPage(0);
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #050505 0%, #0d0807 35%, #0e0909 70%, #050505 100%)',
      color: '#fff',
      fontFamily: "'Vazirmatn', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* â•â•â•â•â•â•â•â•â•â• NAVBAR â•â•â•â•â•â•â•â•â•â• */}
      {/* â”€â”€ Mobile Navbar â”€â”€ */}
      <motion.nav
        variants={fadeDown} initial="hidden" animate="show"
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex sm:hidden flex-col items-center justify-center   px-4 mt-[25px] pt-20 pb-3  w-full h-[50px]"
        style={{ zIndex: 50, position: 'relative' }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '16px', fontWeight: 800 }}>
              <span style={{ color: '#fff' }}>Fit</span><span style={{ color: '#D90A14' }}>Maker</span>
            </span>
            <span style={{ fontSize: '7px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ca3af' }}>Transform Your Body</span>
          </div>
          {/* Search bar */}
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: '999px', padding: '5px 12px', gap: '6px', flex: 1, margin: '0 10px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            <span style={{ fontSize: '11px', color: '#6b7280' }}>Search</span>
          </div>
          {/* Hamburger */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff', borderRadius: '2px', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: '0.3s' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff', borderRadius: '2px', opacity: mobileMenuOpen ? 0 : 1, transition: '0.3s' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff', borderRadius: '2px', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: '0.3s' }} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: '100vh', opacity: 1 }} transition={{ duration: 0.3 }}
            style={{ position: 'fixed', top: '75px', left: 0, width: '100%', background: '#0a0a0a', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '20px', padding: '30px 24px' }}>
            {[
              { label: 'Home' },
              { label: 'Programs' },
              { label: 'Coaching' },
              { label: 'Membership' },
              { label: 'About Us' },
            ].map(({ label }) => (
              <a key={label} href="#" onClick={e => { e.preventDefault(); setActiveNav(label); setMobileMenuOpen(false); }}
                style={{ fontSize: '18px', color: activeNav === label ? '#fff' : '#9ca3af', textDecoration: 'none', fontWeight: activeNav === label ? 600 : 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {label}
                {activeNav === label && <div style={{ width: '8px', height: '8px', background: '#D90A14', borderRadius: '50%' }} />}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', marginBottom: '100px' }}>
              <button style={{ padding: '14px 16px', borderRadius: '999px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '14px', flex: 1, fontWeight: 600 }}>Login</button>
              <button style={{ padding: '14px 16px', borderRadius: '999px', background: '#D90A14', border: 'none', color: '#fff', fontSize: '14px', flex: 1, fontWeight: 700 }}>Sign Up</button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* â”€â”€ Desktop / Tablet Navbar â”€â”€ */}
      <motion.nav
        variants={fadeDown}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden sm:flex items-center justify-center"
        style={{
          padding: '24px 36px',
          zIndex: 30,
          position: 'relative',
          gap: 'clamp(20px, 5vw, 60px)',
        }}
      >
        {/* Logo */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            width: '36px', height: '28px', background: '#D90A14',
            borderRadius: '4px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: '16px', height: '16px', background: '#D90A14', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '2px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '2px' }}>
            <span style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '0.02em' }}>
              <span style={{ color: '#fff' }}>Fit</span>
              <span style={{ color: '#D90A14' }}>Maker</span>
            </span>
            <span style={{ fontSize: '8px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9ca3af' }}>Transform Your Body</span>
          </div>
          <button style={{
            width: '30px', height: '30px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.25)', background: 'transparent',
            color: '#9ca3af', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', marginLeft: '6px',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </motion.div>

        {/* Nav links */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          className="flex items-center gap-[20px] lg:gap-[30px] list-none p-0 m-0"
        >
          {[
            { label: 'Home' },
            { label: 'Programs', arrow: true },
            { label: 'Coaching', arrow: true },
            { label: 'Membership' },
            { label: 'About Us' },
          ].map(({ label, arrow }) => {
            const isActive = activeNav === label;
            return (
              <motion.li key={label} variants={fadeDown} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => setActiveNav(label)}>
                <a href="#" onClick={e => e.preventDefault()} className={`text-[11px] lg:text-[13.5px] flex items-center gap-[5px] no-underline ${isActive ? 'font-semibold text-white' : 'font-medium text-[#d1d5db]'}`} style={{ whiteSpace: 'nowrap' }}>
                  {label}
                  {arrow && <img src={arrowSvg} alt="" className="w-[8px] lg:w-[10px] h-auto" />}
                </a>
                {isActive && <motion.span layoutId="nav-underline" style={{ display: 'block', height: '2px', width: '100%', background: '#D90A14', borderRadius: '2px' }} />}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Auth buttons */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center gap-[6px] lg:gap-[10px]"
        >
          <button style={{
            padding: 'clamp(6px, 1vw, 6px) clamp(22px, 4vw, 28px)', borderRadius: '999px',
            border: '1px solid transparent',
            background: 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(to right, #D90A14, #CD4E17) border-box',
            color: '#CD4E17', fontSize: 'clamp(11px, 1.5vw, 13px)', fontFamily: 'inherit', cursor: 'pointer',
            flexShrink: 0, whiteSpace: 'nowrap'
          }}>Login</button>
          <button style={{
            padding: 'clamp(6px, 1vw, 6px) clamp(22px, 4vw, 28px)', borderRadius: '999px',
            border: 'none', background: '#D90A14',
            color: '#fff', fontSize: 'clamp(11px, 1.5vw, 13px)', fontWeight: 600,
            fontFamily: 'inherit', cursor: 'pointer',
            flexShrink: 0, whiteSpace: 'nowrap'
          }}>Sign Up</button>
        </motion.div>
      </motion.nav>

      {/* â•â•â•â•â•â•â•â•â•â• HERO â•â•â•â•â•â•â•â•â•â• */}

      {/* â”€â”€ Mobile Hero â”€â”€ */}
      <div className="flex sm:hidden flex-col relative overflow-hidden"
        style={{ minHeight: '440px', padding: '40px 16px 20px', justifyContent: 'space-between' }}>
        {/* Red glow orb */}
        <div style={{ position: 'absolute', top: '20%', right: '-10px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, #c01a0a 0%, rgba(140,15,8,0.55) 45%, transparent 75%)', filter: 'blur(12px)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Trainer image â€” smaller, positioned in middle right */}
        <motion.img
          src={heroTrainer} alt="Fitness Trainer"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', right: '-8px', top: '15%', height: '55%', objectFit: 'contain', objectPosition: 'right', zIndex: 1, pointerEvents: 'none', userSelect: 'none' }}
        />

        {/* TOP block: Headings (pushed down to middle) */}
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
          style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '60%', flex: 1, justifyContent: 'center', marginTop: '-40px' }}>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: 0 }}>Achive Your</motion.h2>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} style={{ fontSize: '24px', fontWeight: 900, fontStyle: 'normal', color: '#D90A14', fontFamily: "'Gagalin', sans-serif", letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0, filter: 'drop-shadow(0 0 10px rgba(217,10,20,0.7))', lineHeight: 1.05 }}>FITNESS GOALS</motion.h1>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }} style={{ fontSize: '16px', fontWeight: 700, color: '#fff', margin: 0 }}>With Fitmaker</motion.h2>
        </motion.div>

        {/* BOTTOM block: Description + Buttons */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
            style={{ fontSize: '11px', color: '#9ca3af', lineHeight: 1.65, margin: 0, paddingRight: '20px' }}>
            "Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?"
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} style={{ padding: '10px 12px', borderRadius: '999px', border: 'none', background: '#D90A14', color: '#fff', fontSize: '12px', fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '0 0 16px rgba(217,10,20,0.5)', flex: 1 }}>Start Your Journey</motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} style={{ padding: '10px 12px', borderRadius: '999px', border: '1px solid transparent', background: 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(to right, #D90A14, #CD4E17) border-box', color: '#D90A14', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', flex: 1 }}>Explore Programs</motion.button>
          </motion.div>
        </div>
      </div>

      {/* â”€â”€ Desktop / Tablet Hero â”€â”€ */}
      <div className="hidden sm:flex flex-row relative overflow-hidden" style={{ flex: 1, minHeight: '520px' }}>

        {/* LEFT: Text content */}
        <div style={{
          width: '43%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '32px 28px 32px 48px', position: 'relative', zIndex: 10,
        }}>
          <div style={{ position: 'absolute', left: '-60px', top: '50%', transform: 'translateY(-50%)', width: 'min(340px, 35vw)', height: 'min(340px, 35vw)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(180,10,10,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }} style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <motion.h2 variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0 }}>Achive Your</motion.h2>
              <motion.h1 variants={fadeUp} transition={{ duration: 0.7, ease: 'easeOut' }} style={{ fontSize: 'clamp(24px, 4.5vw, 58px)', fontWeight: 900, fontStyle: 'normal', color: '#D90A14', fontFamily: "'Gagalin', sans-serif", letterSpacing: '0.04em', textTransform: 'uppercase', textAlign: 'center', margin: 0, filter: 'drop-shadow(0 0 16px rgba(217,10,20,0.6))', lineHeight: 1, whiteSpace: 'nowrap' }}>FITNESS GOALS</motion.h1>
              <motion.h2 variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0 }}>With FitMaker</motion.h2>
            </div>
            <motion.p variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ fontSize: 'clamp(7px, 1vw, 12px)', color: '#9ca3af', lineHeight: 1.8, textAlign: 'start', margin: 0 }}>
              "Join The Fitmaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?"
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: 'easeOut' }} style={{ display: 'flex', gap: 'clamp(8px, 1.5vw, 14px)', justifyContent: 'center' }}>
              <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(217,10,20,0.7)' }} whileTap={{ scale: 0.97 }} style={{ padding: 'clamp(8px, 1vw, 11px) clamp(16px, 2.5vw, 26px)', borderRadius: '999px', border: 'none', background: '#D90A14', color: '#fff', fontSize: 'clamp(9px, 1.2vw, 13px)', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '0 0 22px rgba(217,10,20,0.5)', whiteSpace: 'nowrap', flexShrink: 0 }}>Start Your Journey</motion.button>
              <motion.button whileHover={{ scale: 1.05, background: 'rgba(217,10,20,0.1)' }} whileTap={{ scale: 0.97 }} style={{ padding: 'clamp(7px, 1vw, 10px) clamp(16px, 2.5vw, 26px)', borderRadius: '999px', border: '1.5px solid #D90A14', background: 'transparent', color: '#D90A14', fontSize: 'clamp(9px, 1.2vw, 13px)', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>Explore Programs</motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* â”€â”€ RIGHT: Image + Cards â”€â”€ */}
        <div style={{
          width: '57%',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'visible',
        }}>
          {/* Red glow orb â€” animated pulsing core */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.92, 1, 0.92],
              y: [0, -18, 0],
            }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(480px, 45vw)', height: 'min(480px, 45vw)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #c01a0a 0%, #a01208 25%, rgba(140,15,8,0.75) 48%, rgba(90,8,4,0.35) 68%, transparent 82%)',
              filter: 'blur(6px)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
          {/* Outer ambient red halo â€” slow float */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.7, 1, 0.7],
              y: [0, 14, 0],
            }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(680px, 65vw)', height: 'min(680px, 65vw)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(180,20,10,0.18) 0%, transparent 65%)',
              filter: 'blur(24px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Trainer image */}
          <motion.img
            src={heroTrainer}
            alt="Fitness Trainer"
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              zIndex: 5,
              height: 'min(480px, 45vw)',
              objectFit: 'contain',
              objectPosition: 'bottom',
              filter: 'drop-shadow(0 8px 40px rgba(0,0,0,0.7))',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />

          {/* â”€â”€ Stat Cards â”€â”€ */}
          <StatCard number="+ 1300" label="Positive Reviews"
            posStyleLg={{ top: '100px', right: '120px' }}
            posStyleMd={{ top: '52px', right: '16px' }}
            variants={fadeLeft} delay={1.0} />
          <StatCard number="+ 80" label="Coaches"
            posStyleLg={{ top: '38%', left: '22px', transform: 'translateY(-50%)' }}
            posStyleMd={{ top: '30%', left: '8px', transform: 'translateY(-50%)' }}
            variants={fadeRight} delay={1.1} />
          <StatCard number="+ 1000" label="Workout Videos"
            posStyleLg={{ bottom: '85px', left: '35px' }}
            posStyleMd={{ bottom: '60px', left: '8px' }}
            variants={fadeRight} delay={1.2} />
          <StatCard number="+ 1500" label="Trainers"
            posStyleLg={{ bottom: '55px', right: '100px' }}
            posStyleMd={{ bottom: '40px', right: '16px' }}
            variants={fadeLeft} delay={1.3} />
        </div>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â• STATS FOOTER â•â•â•â•â•â•â•â•â•â• */}
      {(() => {
        const stats = [
          { big: '96%', color: '#D90A14', title: 'Client Satisfaction', sub: 'Our Members Love Their Results And Experience' },
          { big: '+5', color: '#f97316', title: 'Years Of Experience', sub: 'Trust In Our Proven Track Record Of Transforming' },
          { big: '+800', color: '#D90A14', title: 'Active Members', sub: 'Join Our Thriving Fitness Community' },
          { big: '24/7', color: '#f97316', title: 'Support Available', sub: 'Expert Assistance Whenever You Need It' },
        ];
        return (
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: 'easeOut' }}
            style={{ zIndex: 10 }}
          >
            <div className="flex sm:hidden flex-col" style={{ padding: '20px' }}>
              {stats.map(({ big, color, title, sub }, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '14px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '30px', fontWeight: 900, color, lineHeight: 1 }}>{big}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{title}</span>
                  </div>
                  <p style={{ fontSize: '11px', color: '#6b7280', textAlign: 'center', margin: 0, marginBottom: i < 3 ? '14px' : '0' }}>{sub}</p>
                  {i < 3 && <div style={{ width: '75%', height: '1px', background: 'linear-gradient(to right, #D90A14, #CD4E17)' }} />}
                </motion.div>
              ))}
            </div>
            {/* Desktop/Tablet stats â€” horizontal grid */}
            <div className="hidden sm:grid" style={{ maxWidth: '1100px', margin: '0 auto', gridTemplateColumns: 'repeat(4, 1fr)', padding: '26px 48px' }}>
              {stats.map(({ big, color, title, sub }, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 + i * 0.1, ease: 'easeOut' }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid' : 'none', borderImage: i < 3 ? 'linear-gradient(to bottom, #D90A14, #CD4E17) 1' : 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                    <span className="text-[28px] lg:text-[36px] font-black leading-none" style={{ color }}>{big}</span>
                    <span className="text-[11px] lg:text-[13px] font-medium text-white">{title}</span>
                  </div>
                  <p className="text-[9px] lg:text-[11px] text-[#6b7280] text-center m-0">{sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })()}

      {/* â•â•â•â•â•â•â•â•â•â• OUR SERVICES â•â•â•â•â•â•â•â•â•â• */}
      {(() => {
        const services = [
          {
            img: serviceLosing,
            title: 'LOSING WEIGHT',
            clickText: 'Click To Join Our Losing Weight Plans',
            desc: 'Achieve Sustainable Weight Loss With Our Customized Programs Designed To Help You Burn Fat And Build A Healthier Lean Body. Start Your Journey To A Healthier Life.',
          },
          {
            img: serviceBuilding,
            title: 'BUILDING MUSCLE',
            clickText: 'Click To Join Our Building Muscle Plans',
            desc: 'Develop Strength And Define Your Muscles With Tailored Programs Designed To Help You Gain Lean Muscle Efficiently. Click On The Button Below And Start Your Journey Right Now. Don\'t Miss The Extras.',
          },
          {
            img: serviceHome,
            title: 'TRAINING IN HOME',
            clickText: 'Click To See Our Ultimate Home Plans',
            desc: 'Stay Fit And Strong With Our Effective Home Workout Programs. No Gym, No Minimal Equipment, You Can Reach Your Goals At A Lot Of Ways. Or Just Choose To Go Home.',
          },
          {
            img: serviceGym,
            title: 'GYM PLAN',
            clickText: 'Click, Order Your Details, Get Your Plans.',
            desc: 'Maximize Your Gym Sessions With Structured Plans That Guide You Towards Your Goals. Fitness Progress.',
          },
        ];
        return (
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(180deg, #050505 0%, #0d0807 35%, #0e0909 70%, #050505 100%)',
              padding: 'clamp(40px, 6vw, 80px) clamp(16px, 5vw, 80px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient red glow â€” upper right */}
            <div style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '45%',
              height: '60%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217,10,20,0.2) 0%, rgba(120,8,8,0.08) 40%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />
            {/* Ambient orange glow â€” left */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '-8%',
              width: '35%',
              height: '50%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(205,78,23,0.12) 0%, rgba(160,40,10,0.06) 45%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />
            {/* Ambient brown-red glow â€” bottom right */}
            <div style={{
              position: 'absolute',
              bottom: '-10%',
              right: '10%',
              width: '40%',
              height: '50%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(150,20,10,0.15) 0%, rgba(100,15,5,0.06) 45%, transparent 70%)',
              filter: 'blur(55px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />
            {/* Section heading */}
            <div style={{ textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 48px)', position: 'relative', zIndex: 1 }}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: 'clamp(24px, 3.5vw, 42px)',
                  fontWeight: 800,
                  color: '#fff',
                  margin: '0 0 12px 0',
                  letterSpacing: '0.02em',
                }}
              >
                Our <span style={{ color: '#D90A14' }}>Services</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{
                  fontSize: 'clamp(10px, 1.1vw, 12px)',
                  color: '#9ca3af',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}
              >
                At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Chose Wich Ever You Want.
              </motion.p>
            </div>

            {/* Infinite Auto-Scrolling Marquee */}
            <div className="marquee-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', zIndex: 1 }}>
              <div className="marquee-track">
                {[1, 2].map((groupNum) => (
                  <div key={groupNum} className="marquee-group">
                    {services.map((svc, i) => (
                      <motion.div
                        key={`${groupNum}-${svc.title}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: 'easeOut' }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        onClick={() => setSelectedService(svc)}
                        style={{
                          background: 'linear-gradient(135deg, rgba(35, 12, 10, 0.95) 0%, rgba(18, 10, 10, 0.98) 50%, rgba(10, 10, 10, 1) 100%)',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'row',
                          position: 'relative',
                          cursor: 'pointer',
                          border: '1px solid rgba(255,255,255,0.06)',
                          minHeight: 'clamp(200px, 22vw, 280px)',
                          width: 'clamp(280px, 24vw, 380px)',
                          flexShrink: 0,
                        }}
                      >
                        {/* Red glow at top of card */}
                        <div style={{
                          position: 'absolute',
                          top: '-30px',
                          left: '30%',
                          transform: 'translateX(-50%)',
                          width: '100px',
                          height: '50px',
                          background: 'radial-gradient(ellipse, rgba(217,10,20,0.4) 0%, transparent 70%)',
                          filter: 'blur(14px)',
                          pointerEvents: 'none',
                          zIndex: 2,
                        }} />

                        {/* Top red accent line */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'linear-gradient(to right, transparent, #D90A14, #CD4E17, transparent)',
                          zIndex: 2,
                        }} />

                        {/* LEFT: Text content */}
                        <div style={{
                          width: '58%',
                          padding: 'clamp(14px, 1.5vw, 22px) clamp(10px, 1vw, 16px)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                          gap: '6px',
                          position: 'relative',
                          zIndex: 1,
                        }}>
                          <h3 style={{
                            fontSize: 'clamp(12px, 1.25vw, 20px)',
                            fontWeight: 900,
                            fontStyle: 'normal',
                            color: '#D90A14',
                            margin: 0,
                            letterSpacing: '0.02em',
                            fontFamily: "'Gagalin', sans-serif",
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}>
                            {svc.title}
                          </h3>
                          <p style={{
                            fontSize: 'clamp(7px, 0.65vw, 9px)',
                            color: '#ffffff',
                            margin: 0,
                            fontWeight: 600,
                            lineHeight: 1.4,
                            opacity: 0.9,
                          }}>
                            {svc.clickText}
                          </p>
                          <p style={{
                            fontSize: 'clamp(7px, 0.7vw, 10px)',
                            color: '#e2e8f0',
                            lineHeight: 1.65,
                            margin: '4px 0 0 0',
                            flex: 1,
                            opacity: 0.85,
                          }}>
                            {svc.desc}
                          </p>

                          {/* Learn More link */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            marginTop: 'auto',
                            paddingTop: '8px',
                          }}>
                            <span style={{
                              fontSize: 'clamp(9px, 0.8vw, 12px)',
                              color: '#fff',
                              fontWeight: 600,
                              letterSpacing: '0.03em',
                            }}>
                              Learn More
                            </span>
                            <svg width="20" height="6" viewBox="0 0 20 6" fill="none" style={{ marginTop: '1px' }}>
                              <path d="M0 3h17M14 0.5l3 2.5-3 2.5" stroke="#CD4E17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                        {/* RIGHT: Image */}
                        <div style={{
                          width: '42%',
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img
                            src={svc.img}
                            alt={svc.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center',
                              display: 'block',
                            }}
                          />
                          {/* Gradient overlay on the left edge of image for smooth blend */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: '50%',
                            background: 'linear-gradient(to right, #0a0a0a 5%, transparent 100%)',
                            pointerEvents: 'none',
                          }} />
                          {/* Red ambient glow on image */}
                          <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '-10%',
                            width: '80%',
                            height: '80%',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(217,10,20,0.12) 0%, transparent 65%)',
                            filter: 'blur(10px)',
                            pointerEvents: 'none',
                          }} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Custom CSS for Infinite Marquee Carousel */}
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-container {
                mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 25s linear infinite;
              }
              .marquee-track:hover {
                animation-play-state: paused;
              }
              .marquee-group {
                display: flex;
                gap: 18px;
                padding-right: 18px;
                flex-shrink: 0;
              }

              /* Mobile View Override: Stacks cards vertically, hides marquee animation */
              @media (max-width: 500px) {
                .marquee-container {
                  mask-image: none !important;
                  -webkit-mask-image: none !important;
                }
                .marquee-track {
                  animation: none !important;
                  width: 100% !important;
                  flex-direction: column !important;
                  gap: 20px !important;
                }
                .marquee-group {
                  flex-direction: column !important;
                  width: 100% !important;
                  padding-right: 0 !important;
                  gap: 20px !important;
                }
                .marquee-group:last-child {
                  display: none !important;
                }
                .marquee-group > div {
                  width: 100% !important;
                }
              }
            `}</style>
          </motion.section >
        );
      })()}

      {/* â•â•â•â•â•â•â•â•â•â• DETAILED SERVICE MODAL (DUMMY DATA) â•â•â•â•â•â•â•â•â•â• */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, #1c0e0d 0%, #0d0a0a 100%)',
                border: '1px solid rgba(217, 10, 20, 0.3)',
                boxShadow: '0 0 35px rgba(217, 10, 20, 0.2)',
                borderRadius: '20px',
                width: '100%',
                maxWidth: '540px',
                padding: 'clamp(20px, 3vw, 40px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glowing top line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(to right, #D90A14, #CD4E17)',
              }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: '0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(217, 10, 20, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(217, 10, 20, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                âœ•
              </button>

              {/* Header */}
              <h2 style={{
                fontFamily: "'Gagalin', sans-serif",
                fontSize: 'clamp(22px, 3vw, 32px)',
                color: '#D90A14',
                margin: '0 0 8px 0',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}>
                {selectedService.title}
              </h2>
              <p style={{
                fontSize: 'clamp(11px, 1.2vw, 14px)',
                color: '#fff',
                fontWeight: 600,
                margin: '0 0 20px 0',
                opacity: 0.9,
              }}>
                {selectedService.clickText}
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '20px' }} />

              {/* Body Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ color: '#CD4E17', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0', fontWeight: 700 }}>
                    Program Overview
                  </h4>
                  <p style={{ color: '#d1d5db', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                    {selectedService.desc} This customized training plan is built around your individual routine, targeting optimal metabolic conditioning and body adaptation to ensure you achieve your fitness benchmarks quickly and safely.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '4px' }}>
                  <div>
                    <h4 style={{ color: '#CD4E17', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0', fontWeight: 700 }}>
                      Features Included
                    </h4>
                    <ul style={{ color: '#d1d5db', fontSize: '13px', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                      <li>Custom nutrition coach</li>
                      <li>Weekly progression tracking</li>
                      <li>Interactive video plans</li>
                      <li>24/7 priority support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ color: '#CD4E17', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0', fontWeight: 700 }}>
                      Target Benchmarks
                    </h4>
                    <ul style={{ color: '#d1d5db', fontSize: '13px', margin: 0, paddingLeft: '16px', lineHeight: 1.6 }}>
                      <li>Cardio & Stamina boost</li>
                      <li>Core strength definition</li>
                      <li>Metabolic acceleration</li>
                      <li>Sustainable habits</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedService(null)}
                style={{
                  marginTop: '28px',
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(to right, #D90A14, #CD4E17)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(217, 10, 20, 0.3)',
                  transition: 'transform 0.2s, boxShadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(217, 10, 20, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(217, 10, 20, 0.3)';
                }}
              >
                Start Free Trial
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* â•â•â•â•â•â•â•â•â•â• DETAILED FITNESS TOOL MODAL â•â•â•â•â•â•â•â•â•â• */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTool(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, #1c0e0d 0%, #0d0a0a 100%)',
                border: `1px solid ${selectedTool.color}50`,
                boxShadow: `0 0 35px ${selectedTool.color}25`,
                borderRadius: '20px',
                width: '100%',
                maxWidth: '480px',
                padding: 'clamp(20px, 3vw, 36px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glowing top line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(to right, ${selectedTool.color}, #CD4E17)`,
              }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedTool(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: '0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(217, 10, 20, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(217, 10, 20, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                âœ•
              </button>

              {/* Header */}
              <h2 style={{
                fontFamily: "'Vazirmatn', sans-serif",
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: 900,
                color: '#fff',
                margin: '0 0 4px 0',
                textTransform: 'uppercase',
              }}>
                Interactive <span style={{ color: selectedTool.color }}>{selectedTool.title}</span>
              </h2>
              <p style={{
                fontSize: '13px',
                color: '#9ca3af',
                margin: '0 0 16px 0',
                lineHeight: 1.4,
              }}>
                Use this tool to track your fitness parameters and optimize your training targets.
              </p>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '16px' }} />

              {/* Calculator Form */}
              {selectedTool.type === 'calorie' && <CalorieCalc />}
              {selectedTool.type === 'bmi' && <BmiCalc />}
              {(selectedTool.type === 'macro1' || selectedTool.type === 'macro2') && <MacroCalc />}
              {selectedTool.type === 'goal' && <GoalCalc />}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* â•â•â•â•â•â•â•â•â•â• OUR PLANS SECTION â•â•â•â•â•â•â•â•â•â• */}
      {(() => {
        const plans = [
          {
            title: 'PRO PLAN',
            borderColor: 'rgba(205, 78, 23, 0.45)',
            btnColor: '#CD4E17',
            priceMonthly: '99',
            priceAnnually: '79',
            desc: 'Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now.',
            features: [
              'Access To All Of Our Exercise Videos',
              'Progress Tracking',
              'Supportive Online Community',
              'Advanced, Personalized Workout Plans',
              'Comprehensive Nutrition Coaching',
              'Access To Advanced Workout Programs',
              'Body Composition Analysis'
            ]
          },
          {
            title: 'CUSTOM PLAN',
            borderColor: 'rgba(217, 10, 20, 0.7)',
            btnColor: '#D90A14',
            priceMonthly: '149',
            priceAnnually: '119',
            desc: 'Experience A Fully Tailored Fitness Experience With Our Custom Plan. Work One-On-One With A Dedicated Trainer To Achieve Your Goals.',
            features: [
              'Access To All Of Our Exercise Videos',
              'Progress Tracking',
              'Supportive Online Community',
              'Fully Customized Workout And Nutrition Plan',
              'Weekly Check-Ins With Your Trainer',
              'Access To All Platform Features',
              'Exclusive Gear Discounts'
            ],
            featured: true
          },
          {
            title: 'BEGGINER PLAN',
            borderColor: 'rgba(205, 78, 23, 0.45)',
            btnColor: '#CD4E17',
            priceMonthly: '49',
            priceAnnually: '39',
            desc: 'Start Your Fitness Journey With Our Beginner Plan. Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.',
            features: [
              'Access To All Of Our Exercise Videos',
              'Progress Tracking',
              'Supportive Online Community',
              'Personalized Workout Plans',
              'Basic Nutrition Guidance',
              'Access To Group Fitness Classes'
            ]
          }
        ];

        return (
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(180deg, #050505 0%, #0d0807 35%, #0e0909 70%, #050505 100%)',
              padding: 'clamp(24px, 4vw, 48px) clamp(16px, 5vw, 80px)',
              fontFamily: "'Vazirmatn', sans-serif",
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <style>{`
              .plans-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin-top: 20px;
              }
              .plans-subtitle {
                font-size: clamp(12px, 1.2vw, 15px);
                color: #9ca3af;
                margin: 0 auto 12px auto;
                line-height: 1.6;
                white-space: nowrap;
              }
              @media (max-width: 500px) {
                .plans-grid {
                  grid-template-columns: 1fr;
                  gap: 20px;
                }
                .plans-subtitle {
                  white-space: normal;
                  padding: 0 16px;
                }
              }
            `}</style>
            {/* Background ambient glow for premium look */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '70%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217, 10, 20, 0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            <div style={{ position: 'relative', zIndex: 1, width: '100%', margin: '0 auto' }}>

              {/* Section Header */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2 style={{
                  fontSize: 'clamp(28px, 4vw, 46px)',
                  fontWeight: 900,
                  margin: '0 0 8px 0',
                  letterSpacing: '0.02em',
                  color: '#fff',
                }}>
                  Our <span style={{ color: '#D90A14' }}>Plans</span>
                </h2>
                <p className="plans-subtitle">
                  Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
                </p>

                {/* Billing toggle */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid #D90A14',
                  borderRadius: '999px',
                  padding: '4px',
                  gap: '4px',
                }}>
                  <button
                    onClick={() => setBillingCycle('Monthly')}
                    style={{
                      background: billingCycle === 'Monthly' ? '#D90A14' : 'transparent',
                      border: 'none',
                      borderRadius: '999px',
                      color: '#fff',
                      padding: '8px 24px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('Annually')}
                    style={{
                      background: billingCycle === 'Annually' ? '#D90A14' : 'transparent',
                      border: 'none',
                      borderRadius: '999px',
                      color: '#fff',
                      padding: '8px 24px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    Annually
                  </button>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="plans-grid" style={{ alignItems: 'stretch' }}>
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    style={{
                      background: 'rgba(15, 10, 10, 0.95)',
                      border: `1.5px solid ${plan.borderColor}`,
                      boxShadow: plan.featured ? '0 0 30px rgba(217, 10, 20, 0.15)' : 'none',
                      borderRadius: '16px',
                      padding: '20px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Top Package label */}
                    <span style={{
                      color: '#CD4E17',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '8px',
                    }}>
                      Package
                    </span>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Gagalin', sans-serif",
                      fontSize: 'clamp(22px, 2.5vw, 32px)',
                      fontWeight: 900,
                      fontStyle: 'normal',
                      color: '#fff',
                      margin: '0 0 16px 0',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}>
                      {plan.title}
                    </h3>




                    {/* Description Section */}
                    <span style={{
                      color: '#CD4E17',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '6px',
                    }}>
                      Description
                    </span>
                    <p style={{
                      fontSize: 'clamp(9px, 0.8vw, 11px)',
                      color: '#9ca3af',
                      lineHeight: 1.55,
                      margin: '0 0 18px 0',
                    }}>
                      {plan.desc}
                    </p>

                    {/* Features Section */}
                    <span style={{
                      color: '#CD4E17',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '10px',
                    }}>
                      Features
                    </span>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 36px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      textAlign: 'left',
                      width: '100%',
                      flex: 1,
                    }}>
                      {plan.features.map((feat) => (
                        <li key={feat} style={{
                          fontSize: '12px',
                          color: '#d1d5db',
                          lineHeight: 1.5,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '6px',
                        }}>
                          <span style={{ color: plan.btnColor }}>â€¢</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price Block */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '2px',
                      marginBottom: '24px',
                    }}>
                      <span style={{
                        fontSize: '36px',
                        fontWeight: 900,
                        color: '#fff',
                      }}>
                        {billingCycle === 'Monthly' ? plan.priceMonthly : plan.priceAnnually}$
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        fontWeight: 600,
                      }}>
                        /USDT
                      </span>
                    </div>

                    {/* Button */}
                    <button style={{
                      width: '100%',
                      padding: '14px',
                      background: plan.btnColor,
                      border: 'none',
                      borderRadius: '999px',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'transform 0.2s, boxShadow 0.2s',
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                        e.currentTarget.style.boxShadow = `0 4px 15px ${plan.btnColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Choose This Plan
                    </button>

                  </motion.div>
                ))}
              </div>

            </div>
          </motion.section>
        );
      })()}

      {/* â•â•â•â•â•â•â•â•â•â• OUR FITNESS TOOLS SECTION â•â•â•â•â•â•â•â•â•â• */}
      {(() => {
        const toolsList = [
          {
            type: 'calorie',
            img: toolCalorie,
            title: 'Calorie Calculator',
            color: '#D90A14',
            arrowColor: '#D90A14'
          },
          {
            type: 'bmi',
            img: toolBmi,
            title: 'BMI Calculator',
            color: '#CD4E17',
            arrowColor: '#CD4E17'
          },
          {
            type: 'macro1',
            img: toolMacro1,
            title: 'Macronutrient Calculator',
            color: '#D90A14',
            arrowColor: '#D90A14'
          },
          {
            type: 'goal',
            img: toolGoal,
            title: 'Goal Setting Tool',
            color: '#CD4E17',
            arrowColor: '#CD4E17'
          },
          {
            type: 'macro2',
            img: toolMacro2,
            title: 'Macronutrient Calculator',
            color: '#D90A14',
            arrowColor: '#D90A14'
          }
        ];

        return (
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(180deg, #050505 0%, #0c0807 50%, #050505 100%)',
              padding: 'clamp(40px, 6vw, 80px) clamp(16px, 5vw, 80px)',
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            {/* Ambient glows */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '-10%',
              width: '40%',
              height: '60%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217,10,20,0.06) 0%, transparent 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />
            <div style={{
              position: 'absolute',
              bottom: '10%',
              right: '-10%',
              width: '40%',
              height: '60%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(205,78,23,0.06) 0%, transparent 70%)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            <div style={{ position: 'relative', zIndex: 1, width: '100%', margin: '0 auto' }}>

              {/* Header row */}
              <div className="tools-header-row" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <h2 className="tools-title" style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 900,
                  margin: 0,
                  letterSpacing: '0.02em',
                  color: '#fff',
                  fontFamily: "'Vazirmatn', sans-serif",
                }}>
                  Our Fitness <span style={{ color: '#D90A14' }}>Tools</span>
                </h2>

                {/* Slider Controls */}
                <div className="tools-controls" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '6px'
                }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setToolPage(0)}
                      aria-label="Previous tools"
                      style={{
                        width: '36px',
                        height: '36px',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={() => setToolPage(1)}
                      aria-label="Next tools"
                      style={{
                        width: '36px',
                        height: '36px',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                  {/* Indicators */}
                  <div style={{ display: 'flex', gap: '6px', paddingRight: '4px', marginTop: '2px' }}>
                    <div style={{
                      width: toolPage === 0 ? '24px' : '10px',
                      height: '6px',
                      borderRadius: '999px',
                      background: toolPage === 0 ? '#D90A14' : 'rgba(255,255,255,0.15)',
                      transition: 'all 0.3s ease'
                    }} />
                    <div style={{
                      width: toolPage === 1 ? '24px' : '10px',
                      height: '6px',
                      borderRadius: '999px',
                      background: toolPage === 1 ? '#D90A14' : 'rgba(255,255,255,0.15)',
                      transition: 'all 0.3s ease'
                    }} />
                  </div>
                </div>
              </div>

              {/* Subtitle description */}
              <p style={{
                fontSize: 'clamp(11px, 1.2vw, 13.5px)',
                color: '#9ca3af',
                maxWidth: '650px',
                margin: '0 auto 32px auto',
                textAlign: 'center',
                lineHeight: 1.6,
              }}>
                Access A Variety Of Tools To Help You Reach Your Fitness Goals More Effectively
              </p>

              {/* Tools Slider Container */}
              <div
                ref={toolsScrollRef}
                onScroll={handleToolsScroll}
                className="tools-slider-container"
                style={{
                  display: 'flex',
                  gap: '20px',
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  padding: '10px 4px 20px 4px',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {toolsList.map((tool, index) => {
                  return (
                    <motion.div
                      key={index}
                      onClick={() => setSelectedTool(tool)}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      style={{
                        flex: '0 0 auto',
                        width: 'calc((100% - 80px) / 5)',
                        minWidth: '200px',
                        scrollSnapAlign: 'start',
                        background: 'rgba(15, 10, 10, 0.95)',
                        border: `1.5px solid ${tool.color}25`,
                        borderRadius: '16px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '8px',
                        boxShadow: `0 0 15px ${tool.color}05`,
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${tool.color}75`;
                        e.currentTarget.style.boxShadow = `0 0 25px ${tool.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${tool.color}25`;
                        e.currentTarget.style.boxShadow = `0 0 15px ${tool.color}05`;
                      }}
                    >
                      <div style={{ width: '100%' }}>
                        <img
                          src={tool.img}
                          alt={tool.title}
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            display: 'block',
                          }}
                        />
                      </div>

                      {/* Learn More */}
                      <div className="tool-learn-more" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 12px 14px 12px',
                        marginTop: '12px',
                      }}>
                        <span style={{
                          fontSize: '12.5px',
                          color: '#fff',
                          fontWeight: 600,
                          letterSpacing: '0.02em',
                        }}>
                          Learn More
                        </span>
                        <svg width="20" height="6" viewBox="0 0 20 6" fill="none" style={{ marginTop: '1px' }}>
                          <path d="M0 3h17M14 0.5l3 2.5-3 2.5" stroke={tool.arrowColor} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>

            <style>{`
              .tools-slider-container::-webkit-scrollbar {
                display: none;
              }
              @media (max-width: 1024px) {
                .tools-slider-container {
                  gap: 12px !important;
                }
                .tools-slider-container > div {
                  width: calc((100% - 48px) / 5) !important;
                  min-width: 130px !important;
                }
              }
              @media (max-width: 768px) {
                .tools-slider-container {
                  gap: 8px !important;
                }
                .tools-slider-container > div {
                  width: calc((100% - 32px) / 5) !important;
                  min-width: 100px !important;
                }
              }
              @media (max-width: 480px) {
                .tools-header-row {
                  flex-wrap: nowrap !important;
                  justify-content: space-between !important;
                  gap: 8px !important;
                  margin-bottom: 12px !important;
                }
                .tools-title {
                  font-size: 20px !important;
                  white-space: nowrap !important;
                }
                .tools-controls {
                  align-items: flex-end !important;
                }
                .tools-controls button {
                  width: 28px !important;
                  height: 28px !important;
                }
                .tools-controls svg {
                  width: 12px !important;
                  height: 12px !important;
                }
                .tools-slider-container {
                  gap: 10px !important;
                }
                .tools-slider-container > div {
                  width: calc((100% - 20px) / 3) !important;
                  min-width: 100px !important;
                }
                .tool-learn-more {
                  gap: 4px !important;
                  padding: 4px 6px 8px 6px !important;
                  margin-top: 6px !important;
                  white-space: nowrap !important;
                }
                .tool-learn-more span {
                  font-size: 9px !important;
                }
                .tool-learn-more svg {
                  width: 14px !important;
                  height: 5px !important;
                }
              }
            `}</style>
          </motion.section>
        );
      })()}

      {/* â•â•â•â•â•â•â•â•â•â• WHAT OUR CUSTOMERS SAY SECTION â•â•â•â•â•â•â•â•â•â• */}
      {(() => {
        const testimonials = [
          {
            name: 'Steven Haward',
            role: 'Our Trainer',
            img: testimonialMain,
            text: "I've Been Using Fitmaker For The Past Three Months, And I'm Genuinely Impressed. The Website Is Easy To Navigate, And Everything Is Laid Out Clearly. I Purchased The Premium Plan, And The Personalized Coaching Has Been A Game-Changer For Me. My Coach Is Incredibly Supportive And Always Available To Answer My Questions. The Weekly Video Sessions Keep Me Motivated, And The Custom Meal Plans Have Helped Me Stay On Track With My Goals. Highly Recommended For Anyone Serious About Their Fitness Journey!",
          },
          {
            name: 'Josh Oliver',
            role: 'Our Trainer',
            img: testimonialJosh,
            text: "Fitmaker Has Completely Transformed My Approach To Fitness. The Personalized Workout Plans Are Incredibly Detailed And Effective. I've Seen More Progress In Two Months Than I Did In A Year On My Own. The Community Support And Expert Guidance Make All The Difference. Truly A Premium Experience!",
          },
          {
            name: 'Edward Hawley',
            role: 'Our Trainer',
            img: testimonialEdward,
            text: "As A Busy Professional, Finding Time For Fitness Was Always A Challenge. Fitmaker's Flexible Scheduling And Home Training Options Have Made It Possible For Me To Stay Consistent. The Nutrition Coaching Is Top-Notch, And My Trainer Is Always Just A Message Away. Best Investment I've Made In My Health!",
          },
        ];

        const current = testimonials[activeTestimonial];
        const sideCards = testimonials.filter((_, i) => i !== activeTestimonial);

        return (
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="testimonial-section"
            style={{
              background: 'linear-gradient(180deg, #050505 0%, #0d0807 35%, #0e0909 70%, #050505 100%)',
              padding: 'clamp(40px, 6vw, 80px) clamp(16px, 5vw, 80px)',
              fontFamily: "'Vazirmatn', sans-serif",
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            {/* Background ambient glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              width: '60%',
              height: '80%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217, 10, 20, 0.07) 0%, transparent 70%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            <div className="testimonial-inner" style={{ position: 'relative', zIndex: 1, width: '100%', margin: '0 auto' }}>

              {/* Section Header */}
              <div className="testimonial-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                {/* Title row â€” on mobile this becomes flex row with arrows on the right */}
                <div className="testimonial-header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h2 style={{
                    fontSize: 'clamp(28px, 4vw, 46px)',
                    fontWeight: 900,
                    margin: '0 0 12px 0',
                    letterSpacing: '0.02em',
                    color: '#fff',
                  }}>
                    What Our <span style={{ color: '#D90A14' }}>Customers Say</span>
                  </h2>
                  {/* Mobile-only arrows â€” shown only on â‰¤640px */}
                  <div className="testimonial-nav-mobile" style={{ display: 'none', gap: '8px', marginLeft: '10px', marginBottom: '12px', flexShrink: 0 }}>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      aria-label="Previous testimonial mobile"
                      style={{ width: '26px', height: '26px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', cursor: 'pointer' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                      aria-label="Next testimonial mobile"
                      style={{ width: '26px', height: '26px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', cursor: 'pointer' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
                <p style={{
                  fontSize: 'clamp(11px, 1.2vw, 14px)',
                  color: '#9ca3af',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}>
                  At This Part You Can See Few Of The Many Positive Reviews Of Our Customers.
                </p>
              </div>

              {/* Testimonial Layout */}
              <div className="testimonial-layout" style={{
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'stretch',
                gap: '0',
                position: 'relative',
                minHeight: '420px',
                paddingBottom: '20px',
              }}>

                {/* Left: Main trainer image */}
                <motion.div
                  key={`main-img-${activeTestimonial}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="testimonial-main-img"
                  style={{
                    flex: '0 0 270px',
                    height: '320px',
                    position: 'relative',
                    zIndex: 4,
                    alignSelf: 'flex-end',
                  }}
                >
                  <img
                    src={current.img}
                    alt={current.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                      display: 'block',
                      filter: 'brightness(0.9) contrast(1.05)',
                    }}
                  />
                  {/* Fade-out gradient at bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, #0a0606 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }} />
                </motion.div>

                {/* Card + arrows wrapper (desktop/tablet: column) */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  minWidth: 0,
                }}>
                  {/* Center: Testimonial Card */}
                  <motion.div
                    key={`card-${activeTestimonial}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="testimonial-card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '30px 40px',
                      background: 'rgba(54, 8, 10, 0.95)',
                      border: '1.5px solid rgba(217, 10, 20, 0.25)',
                      borderRadius: '20px',
                      position: 'relative',
                      zIndex: 3,
                      marginLeft: '20px',
                      marginTop: '0px',
                      height: '320px',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(217, 10, 20, 0.15)',
                    }}
                  >
                    {/* Name & Role Row */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px',
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: 'clamp(18px, 2vw, 24px)',
                          fontWeight: 600,
                          color: '#fff',
                          margin: '0 0 2px 0',
                        }}>
                          {current.name}
                        </h3>
                        <span style={{
                          fontSize: '13px',
                          color: 'white',
                          fontWeight: 600,
                        }}>
                          {current.role}
                        </span>
                      </div>
                      {/* Quote icon */}
                      <img
                        src={doubleCotSvg}
                        alt="Quote"
                        style={{
                          width: '38.4px',
                          height: '28.8px',
                          display: 'block',
                          opacity: 0.9,
                          marginTop: '-4px',
                        }}
                      />
                    </div>

                    {/* Testimonial text */}
                    <p style={{
                      fontSize: 'clamp(10px, 1vw, 13px)',
                      color: '#d1d5db',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {current.text}
                    </p>
                  </motion.div>
                </div>

                {/* Right: Side portrait cards + arrows in single line */}
                <div className="testimonial-side-cards-wrapper" style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  gap: '16px',
                  flex: '0 0 auto',
                  marginLeft: '24px',
                }}>
                  {/* Arrows below/to-the-left of portrait cards â€” desktop/tablet only */}
                  <div className="testimonial-nav-desktop" style={{
                    display: 'flex',
                    gap: '10px',
                    marginRight: '8px',
                  }}>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      aria-label="Previous testimonial"
                      style={{ width: '30px', height: '30px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', cursor: 'pointer', transition: 'all 0.2s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                      aria-label="Next testimonial"
                      style={{ width: '30px', height: '30px', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#fff', cursor: 'pointer', transition: 'all 0.2s ease' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </div>

                  {/* Portrait cards row */}
                  <div className="testimonial-side-cards" style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-end',
                  }}>
                    {sideCards.map((person, i) => (
                      <motion.div
                        key={person.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                        onClick={() => setActiveTestimonial(testimonials.indexOf(person))}
                        style={{
                          width: '100px',
                          height: '330px',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          position: 'relative',
                          cursor: 'pointer',
                          border: '1.5px solid rgba(205, 78, 23, 0.4)',
                          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                          marginBottom: '15px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(217, 10, 20, 0.7)';
                          e.currentTarget.style.boxShadow = '0 0 20px rgba(217, 10, 20, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(205, 78, 23, 0.4)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <img
                          src={person.img}
                          alt={person.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            display: 'block',
                          }}
                        />
                        {/* Bottom gradient overlay */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '50%',
                          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                          pointerEvents: 'none',
                        }} />
                        {/* Vertical name */}
                        <span style={{
                          position: 'absolute',
                          bottom: '30px',
                          left: '50%',
                          width: '200px',
                          textAlign: 'left',
                          transform: 'rotate(-90deg) translateY(-50%)',
                          transformOrigin: 'left center',
                          color: '#fff',
                          fontSize: '12px',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.05em',
                        }}>
                          {person.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <style>{`
              /* â”€â”€ Desktop (default) â”€â”€ */
              .testimonial-layout {
                flex-direction: row;
                flex-wrap: nowrap !important;
              }
              .testimonial-main-img {
                flex: 0 0 270px !important;
                align-self: flex-end;
              }

              /* â”€â”€ Tablet (641px â€“ 900px): keep single row â”€â”€ */
              @media (max-width: 900px) and (min-width: 641px) {
                .testimonial-section {
                  padding: 30px 16px !important;
                }
                .testimonial-header {
                  margin-bottom: 24px !important;
                }
                .testimonial-layout {
                  flex-direction: row !important;
                  flex-wrap: nowrap !important;
                  min-height: auto !important;
                  align-items: center !important;
                }
                .testimonial-main-img {
                  flex: 0 0 160px !important;
                  height: 240px !important;
                  min-width: 0 !important;
                }
                .testimonial-card {
                  margin-left: 12px !important;
                  margin-top: 10px !important;
                  padding: 14px 18px !important;
                  height: 200px !important;
                  min-width: 0 !important;
                  overflow: hidden !important;
                }
                .testimonial-side-cards-wrapper {
                  margin-left: 10px !important;
                }
                .testimonial-nav-desktop {
                  display: flex !important;
                  margin-left: 0 !important;
                  margin-top: 8px !important;
                }
                .testimonial-card h3 {
                  font-size: 15px !important;
                }
                .testimonial-card p {
                  font-size: 10px !important;
                  line-height: 1.5 !important;
                  -webkit-line-clamp: 5 !important;
                  display: -webkit-box !important;
                  -webkit-box-orient: vertical !important;
                  overflow: hidden !important;
                }
                .testimonial-side-cards {
                  flex-shrink: 0 !important;
                  margin-left: 10px !important;
                  padding-bottom: 10px !important;
                  gap: 8px !important;
                }
                .testimonial-side-cards > div {
                  width: 72px !important;
                  height: 250px !important;
                  margin-bottom: 12px !important;
                  padding: 0 !important;
                }
              }

              /* â”€â”€ Mobile (â‰¤ 640px): horizontal row, arrows in header, no side cards â”€â”€ */
              @media (max-width: 640px) {
                .testimonial-section {
                  padding: 28px 16px !important;
                }
                .testimonial-header {
                  text-align: left !important;
                  margin-bottom: 20px !important;
                }
                .testimonial-header-row {
                  justify-content: space-between !important;
                  align-items: flex-start !important;
                }
                .testimonial-header-row h2 {
                  font-size: 18px !important;
                  margin-bottom: 0 !important;
                  white-space: nowrap !important;
                }
                .testimonial-nav-mobile {
                  display: flex !important;
                }
                .testimonial-nav-desktop {
                  display: none !important;
                }
                .testimonial-layout {
                  flex-direction: row !important;
                  min-height: auto !important;
                  align-items: stretch !important;
                }
                .testimonial-main-img {
                  flex: 0 0 120px !important;
                  height: 220px !important;
                  overflow: hidden;
                }
                .testimonial-card {
                  margin-left: 10px !important;
                  margin-top: 0 !important;
                  margin-bottom: 0 !important;
                  padding: 14px 16px !important;
                  height: 220px !important;
                  border-radius: 12px !important;
                }
                .testimonial-card h3 {
                  font-size: 14px !important;
                }
                .testimonial-card span {
                  font-size: 11px !important;
                }
                .testimonial-card p {
                  font-size: 10px !important;
                  line-height: 1.5 !important;
                  -webkit-line-clamp: 7 !important;
                  display: -webkit-box !important;
                  -webkit-box-orient: vertical !important;
                  overflow: hidden !important;
                  margin-bottom: 0 !important;
                }
                .testimonial-side-cards-wrapper {
                  display: none !important;
                }
                .testimonial-side-cards {
                  display: none !important;
                }
              }
            `}</style>
          </motion.section >


        );
      })()}


      {/* â•â•â•â•â•â•â•â•â•â• MEET OUR TRAINERS SECTION â•â•â•â•â•â•â•â•â•â• */}
      {(() => {
        const trainers = [
          {
            name: 'Sam Cole',
            role: 'Personal Trainer',
            img: trainerSam,
            experience: '8 Years',
            specialties: ['Weight Loss', 'Strength Training', 'HIIT'],
            bio: 'Sam is a certified personal trainer with 8 years of experience helping clients achieve their fitness goals. He specializes in high-intensity interval training and sustainable weight management programs.',
          },
          {
            name: 'Michael Harris',
            role: 'Personal Trainer',
            img: trainerMichael,
            experience: '6 Years',
            specialties: ['Muscle Building', 'Bodybuilding', 'Nutrition'],
            bio: 'Michael is passionate about body transformation. With 6 years of coaching, he has helped hundreds of clients build lean muscle and improve their physique through science-backed training methods.',
          },
          {
            name: 'John Anderson',
            role: 'Personal Trainer',
            img: trainerJohn,
            experience: '10 Years',
            specialties: ['Athletic Performance', 'Functional Fitness', 'Flexibility'],
            bio: 'John brings a decade of experience in athletic training. He focuses on functional movement, injury prevention, and performance optimization for clients of all fitness levels.',
          },
          {
            name: 'Tom Blake',
            role: 'Personal Trainer',
            img: trainerTom,
            experience: '5 Years',
            specialties: ['Home Training', 'Cardio', 'Mobility'],
            bio: 'Tom specializes in home-based fitness programs that deliver gym-quality results. His innovative approach makes staying fit accessible to everyone, anywhere, with minimal equipment.',
          },
        ];

        return (
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="trainers-section"
            style={{
              background: '#0a0606',
              padding: 'clamp(40px, 6vw, 80px) clamp(16px, 5vw, 80px)',
              fontFamily: "'Vazirmatn', sans-serif",
              position: 'relative',
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <div style={{ position: 'relative', zIndex: 1, width: '100%', margin: '0 auto' }}>

              {/* Header row */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                flexWrap: 'wrap',
                gap: '16px'
              }} className="trainers-header-row">
                <div>
                  <h2 style={{
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 900,
                    margin: 0,
                    letterSpacing: '0.02em',
                    color: '#fff',

                  }}>
                    Meet Our <span style={{ color: '#D90A14' }}>Trainers</span>
                  </h2>
                </div>

                {/* Nav buttons & indicators on the right */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '10px',
                }} className="trainers-nav-group">
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setActiveTrainerIndex((prev) => Math.max(prev - 1, 0))}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(255, 255, 255, 0.25)',
                        background: 'transparent',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      className="trainer-nav-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveTrainerIndex((prev) => Math.min(prev + 1, trainers.length - 1))}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(255, 255, 255, 0.25)',
                        background: 'transparent',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      className="trainer-nav-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                  {/* Indicator Dots */}
                  <div style={{ display: 'flex', gap: '8px', paddingRight: '4px' }}>
                    {trainers.map((_, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveTrainerIndex(idx)}
                        style={{
                          width: idx === activeTrainerIndex ? '20px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          background: idx === activeTrainerIndex ? '#D90A14' : '#374151',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Centered subtitle below header row */}
              <p style={{
                color: '#9ca3af',
                fontSize: '14px',
                margin: '0 auto 32px auto',
                maxWidth: '600px',
                lineHeight: '1.6',
                textAlign: 'center',
              }}>
                At This Part You Can See Some Of Our Trainers And They're Works.
              </p>

              {/* Slider / Grid container */}
              <div
                ref={trainerContainerRef}
                className="trainers-grid-container"
                style={{
                  position: 'relative',
                  width: '100%',
                  overflowX: 'scroll',
                  scrollBehavior: 'smooth',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                }}
              >
                <div className="trainers-slider" style={{
                  display: 'flex',
                  gap: '12px',
                }}>
                  {trainers.map((trainer, idx) => {
                    const isActive = idx === activeTrainerIndex;
                    return (
                      <div
                        key={idx}
                        className={`trainer-card ${isActive ? 'active' : ''}`}
                        style={{
                          position: 'relative',
                          background: 'rgba(25, 25, 25, 0.95)',
                          border: isActive ? '1.5px solid rgba(217, 10, 20, 0.4)' : '1.5px solid rgba(255, 255, 255, 0.05)',
                          borderRadius: '20px',
                          padding: '16px 16px 14px 16px',
                          display: 'flex',
                          flexDirection: 'column',
                          height: '380px',
                          boxSizing: 'border-box',
                          overflow: 'hidden',
                          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                          boxShadow: isActive ? '0 15px 35px rgba(217, 10, 20, 0.12)' : '0 10px 30px rgba(0,0,0,0.5)',
                        }}
                      >
                        {/* Outlined text in background */}
                        <div style={{
                          position: 'absolute',
                          top: '20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          fontSize: '28px',
                          fontWeight: 900,
                          fontFamily: 'Gagalin, sans-serif',
                          color: 'transparent',
                          WebkitTextStroke: '1px rgba(217, 10, 20, 0.08)',
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          zIndex: 0,
                          textTransform: 'uppercase',
                        }}>
                          Fitmaker Trainer
                        </div>

                        {/* Image container */}
                        <div style={{
                          position: 'relative',
                          width: '100%',
                          height: '240px',
                          zIndex: 2,
                          overflow: 'hidden',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}>
                          <img
                            src={trainer.img}
                            alt={trainer.name}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                              objectPosition: 'bottom center',
                              filter: isActive ? 'brightness(1) contrast(1.02)' : 'brightness(0.85) contrast(0.95)',
                              transition: 'all 0.3s ease',
                            }}
                            className="trainer-img"
                          />
                          {/* Ambient glow behind image for active item */}
                          {isActive && (
                            <div style={{
                              position: 'absolute',
                              bottom: '-10px',
                              width: '120px',
                              height: '120px',
                              borderRadius: '50%',
                              background: 'radial-gradient(circle, rgba(217,10,20,0.4) 0%, transparent 70%)',
                              filter: 'blur(15px)',
                              zIndex: -1,
                            }} />
                          )}
                          {/* Fade-out gradient at bottom of image */}
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '60px',
                            background: 'linear-gradient(to top, rgba(25, 25, 25, 0.95) 0%, transparent 100%)',
                            zIndex: 3,
                            pointerEvents: 'none',
                          }} />
                        </div>

                        {/* Details */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginTop: 'auto',
                          zIndex: 4,
                          position: 'relative',
                        }}>
                          <h3 style={{
                            fontSize: '22px',
                            fontWeight: 800,
                            color: '#fff',
                            margin: '0 0 2px 0',
                          }}>
                            {trainer.name}
                          </h3>
                          <p style={{
                            fontSize: '13px',
                            color: '#9ca3af',
                            margin: '0 0 16px 0',
                          }}>
                            {trainer.role}
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'pointer',
                            }}
                            className="trainer-learn-more"
                            onClick={() => setSelectedTrainer(trainer)}
                          >
                            <span style={{
                              fontSize: '13.5px',
                              fontWeight: 600,
                              color: '#fff',
                              transition: 'color 0.2s',
                            }}>
                              Learn More
                            </span>
                            <svg width="18" height="6" viewBox="0 0 20 6" fill="none" style={{ transition: 'transform 0.2s ease-in-out' }}>
                              <path d="M0 3h17M14 0.5l3 2.5-3 2.5" stroke="#D90A14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* View All Button at bottom */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '11px 32px',
                    borderRadius: '999px',
                    border: '1.5px solid #CD4E17',
                    background: 'transparent',
                    color: '#CD4E17',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  className="trainers-view-all-btn"
                  onClick={() => setShowAllTrainers(true)}
                >
                  View All
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CD4E17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '1px' }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

            </div>

            <section className="w-full bg-[#0a0606] mt-10 md:mt-24 lg:mt-42 pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 px-4 md:px-3 lg:px-12 overflow-hidden flex justify-center items-center" style={{ fontFamily: "'Vazirmatn', sans-serif", position: 'relative' }}>
              {/* Background ambient red glow components */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: 'min(500px, 50vw)',
                height: 'min(500px, 50vw)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(217, 10, 20, 0.1) 0%, rgba(120, 8, 8, 0.04) 45%, transparent 70%)',
                filter: 'blur(70px)',
                pointerEvents: 'none',
                zIndex: 0,
              }} />
              <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-15%',
                width: 'min(600px, 60vw)',
                height: 'min(600px, 60vw)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(217, 10, 20, 0.08) 0%, rgba(90, 5, 5, 0.03) 45%, transparent 70%)',
                filter: 'blur(80px)',
                pointerEvents: 'none',
                zIndex: 0,
              }} />

              <div className="w-full" style={{ position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-white text-lg sm:text-xl md:text-xl lg:text-3xl font-bold" style={{ fontFamily: "'Vazirmatn', sans-serif" }}>
                    Fitmaker <span className="text-[#D90A14]">Blog Posts</span>
                  </h2>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-3">
                      <button
                        className="trainer-nav-btn"
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          border: '1.5px solid rgba(255, 255, 255, 0.25)',
                          background: 'transparent',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </button>
                      <button
                        className="trainer-nav-btn"
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          border: '1.5px solid rgba(255, 255, 255, 0.25)',
                          background: 'transparent',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </div>
                    {/* Dots indicator */}
                    <div className="flex gap-1.5 items-center justify-end mt-1 pr-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-700" />
                      <span className="w-5 h-2 rounded-full bg-[#D90A14]" />
                      <span className="w-2 h-2 rounded-full bg-neutral-700" />
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-400 text-xs md:text-base" style={{ marginBottom: 'clamp(20px, 4vw, 48px)', color: '#9ca3af' }}>
                  Discover Essential Tips To Maximize Your Workout Results And Reach
                  Your Fitness Goals Faster.
                </p>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-4">

                  {/* Left Large Card */}
                  <div className="md:col-span-1">
                    <div className="relative h-[340px] md:h-[380px] lg:h-[496px] rounded-xl overflow-hidden group">
                      <img
                        src={blogPosts[0].img}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                      <div className="absolute bottom-5 left-5 right-5 z-10">
                        <h3 className="text-white text-lg md:text-base lg:text-2xl font-bold mb-3 md:mb-4 leading-tight">
                          {blogPosts[0].title}
                        </h3>

                        <div className="flex justify-between items-center w-full text-[10px] md:text-[10px] lg:text-sm text-gray-300">
                          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                            <span className="flex items-center whitespace-nowrap">
                              <svg className="w-4 h-4 text-gray-400 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              {blogPosts[0].date}
                            </span>
                            <span className="flex items-center whitespace-nowrap">
                              <svg className="w-4 h-4 text-gray-400 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                              </svg>
                              {blogPosts[0].category}
                            </span>
                          </div>
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedBlog(blogPosts[0]);
                            }}
                            className="text-white hover:text-[#D90A14] transition-colors flex items-center gap-1 cursor-pointer font-semibold whitespace-nowrap"
                          >
                            Learn More <span className="text-[#D90A14] font-bold">→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Grid */}
                  <div className="md:col-span-2 grid grid-cols-2 gap-4">
                    {blogPosts.slice(1).map((post, sliceIdx) => {
                      const originalIdx = sliceIdx + 1;
                      return (
                        <div
                          key={post.id}
                          onClick={() => {
                            const updated = [...blogPosts];
                            const temp = updated[0];
                            updated[0] = updated[originalIdx];
                            updated[originalIdx] = temp;
                            setBlogPosts(updated);
                          }}
                          className="relative h-[162px] md:h-[182px] lg:h-[240px] rounded-xl overflow-hidden group cursor-pointer"
                        >
                          <img
                            src={post.img}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                          <div className="absolute bottom-4 left-4 right-4 z-10">
                            <h3 className="text-white text-xs md:text-[11px] lg:text-lg font-semibold mb-2 md:mb-3 leading-snug">
                              {post.title}
                            </h3>

                            <div className="flex justify-between items-center w-full text-[10px] md:text-[9px] lg:text-xs text-gray-300">
                              <span className="flex items-center whitespace-nowrap">
                                <svg className="w-3.5 h-3.5 text-gray-400 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                                  <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                                  <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                                </svg>
                                {post.category}
                              </span>
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedBlog(post);
                                }}
                                className="text-white hover:text-[#D90A14] transition-colors flex items-center gap-1 cursor-pointer font-semibold whitespace-nowrap"
                              >
                                Learn More <span className="text-[#D90A14] font-bold">→</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* View All */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(20px, 3.5vw, 40px)' }}>
                  <button
                    onClick={() => setShowAllBlogs(true)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: 'transparent',
                      border: '1.5px solid #D90A14',
                      borderRadius: '32px',
                      padding: '14px 44px',
                      color: '#D90A14',
                      fontSize: 'clamp(14px, 1.2vw, 16px)',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Vazirmatn', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#D90A14';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#D90A14';
                    }}
                  >
                    View All
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(0.5px)' }}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            {/* Responsive Styles */}
            <style>{`
              .trainers-grid-container::-webkit-scrollbar {
                display: none;
              }
              .trainer-nav-btn:hover {
                border-color: #D90A14 !important;
                background: rgba(217, 10, 20, 0.05) !important;
              }
              .trainer-card:hover {
                transform: translateY(-8px);
                border-color: rgba(217, 10, 20, 0.4) !important;
                box-shadow: 0 15px 35px rgba(217, 10, 20, 0.15) !important;
              }
              .trainer-card:hover .trainer-img {
                transform: scale(1.04);
              }
              .trainer-learn-more:hover span {
                color: #D90A14 !important;
              }
              .trainer-learn-more:hover svg {
                transform: translateX(4px);
              }
              .trainers-view-all-btn:hover {
                background: #CD4E17 !important;
                box-shadow: 0 0 20px rgba(205, 78, 23, 0.4) !important;
              }
              .trainers-view-all-btn:hover svg {
                stroke: #fff !important;
              }
              
              /* ── Desktop (≥ 901px): show 4 cards ── */
              @media (min-width: 901px) {
                .trainers-slider {
                  flex-wrap: nowrap !important;
                }
                .trainer-card {
                  flex: 0 0 calc((100% - 36px) / 4) !important;
                  min-width: 0 !important;
                  height: 380px !important;
                }
              }
              /* ── Tablet (601px – 900px): show 4 cards ── */
              @media (max-width: 900px) and (min-width: 601px) {
                .trainers-slider {
                  flex-wrap: nowrap !important;
                }
                .trainer-card {
                  flex: 0 0 calc((100% - 36px) / 4) !important;
                  min-width: 0 !important;
                  height: 340px !important;
                }
                .trainers-header-row {
                  margin-bottom: 12px !important;
                }
              }
              /* ── Mobile (≤ 600px): show 1.2 cards for peek ── */
              @media (max-width: 600px) {
                .trainers-grid-container {
                  overflow: hidden !important;
                }
                .trainers-slider {
                  flex-wrap: nowrap !important;
                }
                .trainer-card {
                  flex: 0 0 calc(60% - 12px) !important;
                  min-width: 0 !important;
                  height: 240px !important;
                  padding: 12px 12px 12px 12px !important;
                  border-radius: 14px !important;
                }
                .trainer-card h3 {
                  font-size: 16px !important;
                  margin-bottom: 1px !important;
                }
                .trainer-card p {
                  font-size: 11px !important;
                  margin-bottom: 6px !important;
                }
                .trainer-learn-more span {
                  font-size: 12px !important;
                }
                .trainers-header-row h2 {
                  font-size: 18px !important;
                }
                .trainers-header-row + p {
                  font-size: 11px !important;
                  margin-bottom: 16px !important;
                }
                .trainer-nav-btn {
                  width: 30px !important;
                  height: 30px !important;
                  border-radius: 7px !important;
                }
                .trainer-nav-btn svg {
                  width: 13px !important;
                  height: 13px !important;
                }
                .trainers-header-row {
                  margin-bottom: 8px !important;
                }
                .trainers-section {
                  padding: 32px 12px !important;
                }
              }
            `}</style>
          </motion.section>
        );
      })()}

      {/* ══ JOIN OUR FITNESS COMMUNITY SECTION ══ */}
      {(() => {
        return (
          <section
            id="community"
            style={{
              width: '100%',
              background: '#0a0606',
              padding: 'clamp(48px, 7vw, 96px) clamp(16px, 5vw, 80px)',
              fontFamily: "'Vazirmatn', sans-serif",
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient red glow */}
            <div style={{
              position: 'absolute', top: '30%', right: '-10%',
              width: 'min(500px, 50vw)', height: 'min(500px, 50vw)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217,10,20,0.08) 0%, rgba(120,8,8,0.03) 45%, transparent 70%)',
              filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
            }} />
            <div style={{
              position: 'absolute', bottom: '10%', left: '-10%',
              width: 'min(400px, 40vw)', height: 'min(400px, 40vw)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217,10,20,0.05) 0%, transparent 70%)',
              filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
            }} />

            <div id="community-container" style={{
              maxWidth: '1680px', margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 'clamp(32px, 4vw, 64px)',
              alignItems: 'center',
              position: 'relative', zIndex: 1,
              width: '98%',
            }}>
              {/* ── Left Column ── */}
              <div id="community-left-col" style={{ gridColumn: 'span 6' }}>
                <h2 style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 900,
                  color: '#fff',
                  margin: '0 0 16px 0',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}>
                  Join Our <span style={{ color: '#D90A14' }}>Fitness Community</span>
                </h2>
                <p style={{
                  fontSize: 'clamp(13px, 1.1vw, 15px)',
                  color: '#9ca3af',
                  lineHeight: 1.7,
                  margin: '0 0 clamp(24px, 3vw, 40px) 0',
                  maxWidth: '560px',
                }}>
                  Sign Up Now To Unlock Exclusive Access To Personalized Workout Plans, Expert Coaching, And A
                  Supportive Community That Will Help You Achieve Your Fitness Goals.
                </p>

                {/* 2×2 Feature Cards */}
                <div id="community-features-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(12px, 1.5vw, 20px)',
                }}>
                  {[
                    { label: 'Personalized', rest: ' Workout Plans', desc: 'Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.' },
                    { label: 'Expert ', rest: 'Coaching', desc: "Work with certified trainers who will guide you every step of the way to ensure you're on the right track." },
                    { label: 'Community ', rest: 'Support', desc: 'Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired.' },
                    { label: 'Exclusive ', rest: 'Resources', desc: 'Access premium content, including video tutorials, nutrition guides, and member-only discounts on fitness gear.' },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="community-feature-card"
                      style={{
                        background: '#000000',
                        border: '1.5px solid rgba(217,10,20,0.12)',
                        borderRadius: '16px',
                        padding: 'clamp(14px, 1.5vw, 22px)',
                        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(217,10,20,0.35)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(217,10,20,0.07)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(217,10,20,0.12)';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <h3 style={{ fontSize: 'clamp(13px, 1vw, 15px)', fontWeight: 700, color: '#fff', margin: '0 0 8px 0', whiteSpace: 'nowrap' }}>
                        <span style={{ color: '#D90A14' }}>{card.label}</span>{card.rest}
                      </h3>
                      <p style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', color: '#9ca3af', lineHeight: 1.65, margin: 0 }}>
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right Column: Form Card ── */}
              <div id="community-right-col" style={{ gridColumn: 'span 6', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '100%',
                  background: '#2e0506',
                  borderRadius: '24px',
                  padding: '24px 28px',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 30px rgba(217,10,20,0.05)',
                }}>
                  {/* Tabs */}
                  <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', marginBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px', position: 'relative' }}>
                    {['signup', 'login'].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setAuthTab(tab)}
                        style={{
                          background: 'none', border: 'none', cursor: 'pointer',
                          fontSize: '16px', fontWeight: 700,
                          color: authTab === tab ? '#D90A14' : '#9ca3af',
                          padding: '0 0 4px 0',
                          position: 'relative',
                          transition: 'color 0.2s',
                          fontFamily: "'Vazirmatn', sans-serif",
                        }}
                      >
                        {tab === 'signup' ? 'Sign Up' : 'Login'}
                        {authTab === tab && (
                          <div style={{
                            position: 'absolute', bottom: '-9px', left: 0, right: 0,
                            height: '2px', background: '#D90A14',
                            boxShadow: '0 0 8px #D90A14',
                          }} />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={e => { e.preventDefault(); alert(authTab === 'signup' ? 'Successfully Signed Up!' : 'Successfully Logged In!'); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                  >
                    {authTab === 'signup' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 700, color: '#fff', textTransform: 'capitalize', letterSpacing: '0.02em', fontFamily: "'Vazirmatn', sans-serif" }}>Name</label>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <span style={{ position: 'absolute', left: '12px', color: '#fff', display: 'flex', opacity: 0.85 }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                            </svg>
                          </span>
                          <input type="text" required placeholder="Enter Your Name" style={{
                            width: '100%', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.45)',
                            borderRadius: '8px', padding: '8px 12px 8px 38px',
                            color: '#fff', fontSize: '12.5px', outline: 'none', transition: 'border-color 0.2s',
                            boxSizing: 'border-box', fontFamily: "'Vazirmatn', sans-serif",
                          }}
                            onFocus={e => e.target.style.borderColor = '#fff'}
                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.45)'}
                          />
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#fff', textTransform: 'capitalize', letterSpacing: '0.02em', fontFamily: "'Vazirmatn', sans-serif" }}>E-Mail</label>
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <span style={{ position: 'absolute', left: '12px', color: '#fff', display: 'flex', opacity: 0.85 }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                          </svg>
                        </span>
                        <input type="email" required placeholder="Enter Your E-Mail" style={{
                          width: '100%', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.45)',
                          borderRadius: '8px', padding: '8px 12px 8px 38px',
                          color: '#fff', fontSize: '12.5px', outline: 'none', transition: 'border-color 0.2s',
                          boxSizing: 'border-box', fontFamily: "'Vazirmatn', sans-serif",
                        }}
                          onFocus={e => e.target.style.borderColor = '#fff'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.45)'}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#fff', textTransform: 'capitalize', letterSpacing: '0.02em', fontFamily: "'Vazirmatn', sans-serif" }}>Password</label>
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <span style={{ position: 'absolute', left: '12px', color: '#fff', display: 'flex', opacity: 0.85 }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                        </span>
                        <input type="password" required placeholder="Enter Your Password" style={{
                          width: '100%', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.45)',
                          borderRadius: '8px', padding: '8px 12px 8px 38px',
                          color: '#fff', fontSize: '12.5px', outline: 'none', transition: 'border-color 0.2s',
                          boxSizing: 'border-box', fontFamily: "'Vazirmatn', sans-serif",
                        }}
                          onFocus={e => e.target.style.borderColor = '#fff'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.45)'}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" style={{
                      width: '100%', background: '#D90A14', border: 'none',
                      borderRadius: '8px', padding: '10px', color: '#fff',
                      fontSize: '13px', fontWeight: 800, letterSpacing: '0.02em',
                      textTransform: 'none', cursor: 'pointer',
                      marginTop: '2px', transition: 'background 0.2s, box-shadow 0.2s',
                      boxShadow: '0 4px 20px rgba(217,10,20,0.25)',
                      fontFamily: "'Vazirmatn', sans-serif",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#b80811'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(217,10,20,0.45)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#D90A14'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(217,10,20,0.25)'; }}
                    >
                      {authTab === 'signup' ? 'Sign Up' : 'Login'}
                    </button>

                    {/* Divider */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                      <span style={{ fontSize: '10.5px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Or</span>
                      <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
                    </div>

                    {/* Google */}
                    <button type="button" onClick={() => alert('Signing in with Google...')} style={{
                      width: '100%', background: 'transparent',
                      border: '1.5px solid rgba(255,255,255,0.45)',
                      borderRadius: '8px', padding: '8.5px',
                      color: '#fff', fontSize: '12.5px', fontWeight: 700,
                      cursor: 'pointer', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '8px',
                      transition: 'border-color 0.2s',
                      fontFamily: "'Vazirmatn', sans-serif",
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.48 3.77v3.13h3.97c2.32-2.13 3.66-5.27 3.66-8.75z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.97-3.13c-1.1.74-2.5 1.18-3.96 1.18-3.05 0-5.63-2.06-6.55-4.83H1.42v3.23C3.4 21.35 7.42 24 12 24z" />
                        <path fill="#FBBC05" d="M5.45 14.31a7.18 7.18 0 0 1 0-4.62V6.46H1.42a11.95 11.95 0 0 0 0 11.08l4.03-3.23z" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.19 15.24 0 12 0 7.42 0 3.4 2.65 1.42 6.46l4.03 3.23c.92-2.77 3.5-4.83 6.55-4.83z" />
                      </svg>
                      {authTab === 'signup' ? 'Sign Up With Google' : 'Login With Google'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* ── Responsive overrides ── */}
            <style>{`
              @media (min-width: 768px) and (max-width: 1024px) {
                /* Container — wider, tighter gap */
                #community-container {
                  width: 98% !important;
                  gap: 16px !important;
                }
                #community-left-col {
                  grid-column: span 6 !important;
                }
                #community-right-col {
                  grid-column: span 6 !important;
                }

                /* Heading — smaller */
                #community-left-col h2 {
                  font-size: 19px !important;
                  margin-bottom: 6px !important;
                }

                /* Subtitle paragraph — smaller, less margin */
                #community-left-col > div > p,
                #community-left-col p {
                  font-size: 10.5px !important;
                  margin-bottom: 10px !important;
                  line-height: 1.45 !important;
                }

                /* 2x2 cards — smaller gap & padding & border-radius */
                #community-features-grid {
                  gap: 6px !important;
                }
                .community-feature-card {
                  padding: 8px 10px !important;
                  border-radius: 12px !important;
                }
                .community-feature-card h3 {
                  font-size: 10.5px !important;
                  margin-bottom: 2px !important;
                }
                .community-feature-card p {
                  font-size: 9.5px !important;
                  line-height: 1.4 !important;
                }

                /* Form card — smaller padding, border-radius and compact */
                #community-right-col > div {
                  padding: 12px 14px !important;
                  max-width: 100% !important;
                  border-radius: 20px !important;
                }

                /* Tabs row — tighter */
                #community-right-col > div > div:first-child {
                  margin-bottom: 8px !important;
                  padding-bottom: 4px !important;
                  gap: 16px !important;
                }
                #community-right-col > div > div:first-child button {
                  font-size: 12px !important;
                  padding: 0 0 2px 0 !important;
                }
                #community-right-col > div > div:first-child button div {
                  bottom: -5px !important;
                }

                /* Form gap */
                #community-right-col form {
                  gap: 6px !important;
                }

                /* Labels */
                #community-right-col label {
                  font-size: 9px !important;
                }

                /* Inputs */
                #community-right-col input {
                  padding: 5px 8px 5px 30px !important;
                  font-size: 10.5px !important;
                  border-radius: 6px !important;
                }
                #community-right-col span[style*="left"] {
                  left: 8px !important;
                  opacity: 0.7 !important;
                }
                #community-right-col span[style*="left"] svg {
                  width: 12px !important;
                  height: 12px !important;
                }

                /* Submit button */
                #community-right-col button[type="submit"] {
                  padding: 7px !important;
                  font-size: 11px !important;
                  margin-top: 1px !important;
                  border-radius: 6px !important;
                }

                /* Google button */
                #community-right-col button[type="button"] {
                  padding: 6px !important;
                  font-size: 10px !important;
                  border-radius: 6px !important;
                }

                /* OR divider text */
                #community-right-col p {
                  font-size: 9px !important;
                  margin: 2px 0 !important;
                }
              }

              @media (max-width: 767px) {
                #community {
                  padding: 32px 14px !important;
                }
                #community-container {
                  display: flex !important;
                  flex-direction: column !important;
                  width: 100% !important;
                  gap: 22px !important;
                }
                #community-left-col, #community-right-col {
                  grid-column: span 12 !important;
                  width: 100% !important;
                }

                /* Header column content styling */
                #community-left-col {
                  text-align: center !important;
                }
                #community-left-col h2 {
                  font-size: 19px !important;
                  margin-bottom: 6px !important;
                  white-space: normal !important;
                  text-align: center !important;
                }
                #community-left-col p {
                  font-size: 10.5px !important;
                  margin: 0 auto 16px auto !important;
                  line-height: 1.5 !important;
                  max-width: 100% !important;
                  text-align: center !important;
                }

                /* 2x2 Feature Cards Grid */
                #community-features-grid {
                  grid-template-columns: 1fr 1fr !important;
                  gap: 10px !important;
                }
                .community-feature-card {
                  padding: 10px 8px !important;
                  border-radius: 12px !important;
                  text-align: center !important;
                }
                .community-feature-card h3 {
                  font-size: 10.5px !important;
                  margin-bottom: 4px !important;
                  white-space: normal !important;
                  display: block !important;
                }
                .community-feature-card p {
                  font-size: 9px !important;
                  line-height: 1.35 !important;
                }

                /* Form Card Wrapper */
                #community-right-col {
                  justify-content: center !important;
                }
                #community-right-col > div {
                  width: 100% !important;
                  max-width: 100% !important;
                  padding: 20px 16px !important;
                  border-radius: 20px !important;
                }

                /* Tabs row spacing */
                #community-right-col > div > div:first-child {
                  margin-bottom: 12px !important;
                  padding-bottom: 6px !important;
                  gap: 20px !important;
                }
                #community-right-col > div > div:first-child button {
                  font-size: 12.5px !important;
                  padding: 0 0 2px 0 !important;
                }
                #community-right-col > div > div:first-child button div {
                  bottom: -7px !important;
                }

                /* Form layout */
                #community-right-col form {
                  gap: 8px !important;
                }
                #community-right-col label {
                  font-size: 9.5px !important;
                  text-align: left !important;
                  margin-bottom: 2px !important;
                }
                #community-right-col input {
                  padding: 7px 10px 7px 34px !important;
                  font-size: 10.5px !important;
                  border-radius: 6px !important;
                }
                #community-right-col span[style*="left"] {
                  left: 9px !important;
                  opacity: 0.75 !important;
                }
                #community-right-col span[style*="left"] svg {
                  width: 13px !important;
                  height: 13px !important;
                }

                /* Submit & Alternative Auth Buttons */
                #community-right-col button[type="submit"] {
                  padding: 9px !important;
                  font-size: 11.5px !important;
                  margin-top: 2px !important;
                  border-radius: 6px !important;
                }
                #community-right-col button[type="button"] {
                  padding: 8px !important;
                  font-size: 10.5px !important;
                  border-radius: 6px !important;
                }
                #community-right-col p {
                  font-size: 9.5px !important;
                  margin: 3px 0 !important;
                }
              }
            `}</style>
          </section>
        );
      })()}

      {/* ══ FAQ SECTION ══ */}
      {(() => {
        const faqs = [
          {
            q: "What Is FitMaker And How Can It Help Me Reach My Fitness Goals?",
            a: "FitMaker Is An Online Fitness Platform That Offers Personalized Workout Plans, Expert Coaching, And Comprehensive Nutritional Guidance. Whether You're Looking To Lose Weight, Build Muscle, Or Simply Stay Fit, Our Tailored Programs And Community Support Will Help You Achieve Your Fitness Goals."
          },
          {
            q: "How Do I Get Started With A Workout Plan On FitMaker?",
            a: "To Get Started, Simply Choose A Plan That Fits Your Goals, Sign Up, And Complete Your Profile. Our System Will Generate A Personalized Workout Routine Based On Your Details, And You'll Get Instant Access To Expert Coaching."
          },
          {
            q: "What Is Included In The Custom Plan?",
            a: "The Custom Plan Includes Tailored Workout Routines, Complete Meal Plans, Weekly Progress Tracking, And Direct Messaging With Your Personal Trainer For Guidance And Motivation."
          },
          {
            q: "Can I Change My Plan After Signing Up?",
            a: "Yes, You Can Easily Modify Your Plan, Update Your Fitness Goals, Or Switch Between Different Workout Styles Anytime Directly From Your Member Portal."
          },
          {
            q: "What Kind Of Support Can I Expect From My Trainer?",
            a: "Your Trainer Will Provide Regular Feedback, Adjust Your Workout Routines As You Progress, Answer Your Nutrition Questions, And Keep You Accountable And Motivated Every Week."
          }
        ];
        return (
          <section id="faq" style={{
            width: '100%', background: '#0a0606',
            padding: '40px clamp(16px, 5vw, 80px) clamp(64px, 8vw, 100px)',
            fontFamily: "'Vazirmatn', sans-serif",
          }}>
            <div style={{ margin: '0 auto', textAlign: 'center', width: '100%' }}>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 900,
                color: '#fff',
                margin: '0 auto 32px auto',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                FAQ
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left', width: '100%', border: '1.5px solid #D90A14', gap: "20px", borderRadius: "10px" }}>
                {faqs.map((faq, i) => {
                  const isOpen = activeFaq === i;
                  return (
                    <div key={i} style={{
                      background: '#19191a',
                      border: '1.5px solid #D90A14',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'border-color 0.25s, box-shadow 0.25s',
                      boxShadow: isOpen ? '0 8px 24px rgba(217,10,20,0.08)' : 'none',
                    }}>
                      <button
                        className="faq-question-text"
                        onClick={() => setActiveFaq(isOpen ? null : i)}
                        style={{
                          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '18px 24px', background: 'none', border: 'none', cursor: 'pointer',
                          color: '#fff', fontWeight: 700, fontSize: 'clamp(14px, 1.15vw, 16px)',
                          fontFamily: "'Vazirmatn', sans-serif", textAlign: 'left', gap: '16px',
                          outline: 'none',
                        }}
                      >
                        <span style={{ lineHeight: 1.4 }}>{faq.q}</span>
                        <span style={{
                          color: isOpen ? '#D90A14' : '#CD4E17',
                          flexShrink: 0,
                          transition: 'transform 0.3s',
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          display: 'flex'
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>
                      <div style={{
                        maxHeight: isOpen ? '280px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease'
                      }}>
                        <div className="faq-answer-text" style={{
                          padding: '14px 24px 20px 24px',
                          color: '#9ca3af',
                          fontSize: 'clamp(13px, 0.95vw, 14.5px)',
                          lineHeight: 1.65,
                          borderTop: '1px solid rgba(217, 10, 20, 0.25)'
                        }}>
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <style>{`
              @media (max-width: 640px) {
                .faq-question-text {
                  font-size: 13px !important;
                  padding: 14px 16px !important;
                }
                .faq-answer-text {
                  font-size: 11px !important;
                  padding: 10px 16px 14px 16px !important;
                }
              }
            `}</style>
          </section>
        );
      })()}

      {/* ══ TRAINER LEARN MORE MODAL ══ */}
      {selectedTrainer && (
        <div
          onClick={() => setSelectedTrainer(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.82)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'linear-gradient(145deg, #1a0808 0%, #110505 100%)',
              border: '1.5px solid rgba(217,10,20,0.3)',
              borderRadius: '24px',
              padding: '0',
              maxWidth: '520px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(217,10,20,0.1)',
              position: 'relative',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedTrainer(null)}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '34px', height: '34px',
                color: '#fff', fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(217,10,20,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >✕</button>

            {/* Image banner */}
            <div style={{ position: 'relative', height: '240px', background: '#0d0404', overflow: 'hidden' }}>
              <img
                src={selectedTrainer.img}
                alt={selectedTrainer.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
                background: 'linear-gradient(to top, #1a0808 0%, transparent 100%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '16px', left: '24px',
              }}>
                <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#fff', margin: '0 0 2px 0' }}>{selectedTrainer.name}</h2>
                <span style={{ fontSize: '13px', color: '#D90A14', fontWeight: 600 }}>{selectedTrainer.role}</span>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '20px 24px 28px 24px' }}>
              {/* Experience */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(217,10,20,0.15)', border: '1px solid rgba(217,10,20,0.3)',
                  borderRadius: '999px', padding: '4px 14px', fontSize: '12px',
                  color: '#D90A14', fontWeight: 700,
                }}>⏱ {selectedTrainer.experience} Experience</span>
              </div>
              {/* Bio */}
              <p style={{ fontSize: '13.5px', color: '#d1d5db', lineHeight: 1.7, margin: '0 0 18px 0' }}>
                {selectedTrainer.bio}
              </p>
              {/* Specialties */}
              <div>
                <p style={{ fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px', fontWeight: 700 }}>Specialties</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedTrainer.specialties.map(s => (
                    <span key={s} style={{
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px', padding: '6px 14px', fontSize: '12.5px', color: '#fff', fontWeight: 500,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ VIEW ALL TRAINERS MODAL ══ */}
      {showAllTrainers && (
        <div
          onClick={() => setShowAllTrainers(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#0d0404',
              border: '1.5px solid rgba(217,10,20,0.25)',
              borderRadius: '24px',
              padding: '28px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 30px 80px rgba(0,0,0,0.9)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setShowAllTrainers(false)}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '34px', height: '34px',
                color: '#fff', fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(217,10,20,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >✕</button>
            <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#fff', margin: '0 0 24px 0' }}>
              All <span style={{ color: '#D90A14' }}>Trainers</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
              {[
                { name: 'Sam Cole', role: 'Personal Trainer', img: trainerSam },
                { name: 'Michael Harris', role: 'Personal Trainer', img: trainerMichael },
                { name: 'John Anderson', role: 'Personal Trainer', img: trainerJohn },
                { name: 'Tom Blake', role: 'Personal Trainer', img: trainerTom },
              ].map(t => (
                <div key={t.name} style={{
                  background: 'rgba(25,25,25,0.95)',
                  border: '1.5px solid rgba(217,10,20,0.2)',
                  borderRadius: '16px', overflow: 'hidden',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(217,10,20,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ height: '200px', background: '#0d0404', overflow: 'hidden' }}>
                    <img src={t.img} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }} />
                  </div>
                  <div style={{ padding: '12px 14px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#fff', margin: '0 0 2px 0' }}>{t.name}</h3>
                    <p style={{ fontSize: '11.5px', color: '#9ca3af', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══ BLOG POST LEARN MORE MODAL ══ */}
      {selectedBlog && (
        <div
          onClick={() => setSelectedBlog(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'linear-gradient(145deg, #1a0808 0%, #110505 100%)',
              border: '1.5px solid rgba(217,10,20,0.3)',
              borderRadius: '24px',
              padding: '0',
              maxWidth: '560px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(217,10,20,0.1)',
              position: 'relative',
              fontFamily: "'Vazirmatn', sans-serif"
            }}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedBlog(null)}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '34px', height: '34px',
                color: '#fff', fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(217,10,20,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >✕</button>

            {/* Image banner */}
            <div style={{ position: 'relative', height: '260px', background: '#0d0404', overflow: 'hidden' }}>
              <img
                src={selectedBlog.img}
                alt={selectedBlog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, #110505 5%, rgba(17,5,5,0.2) 60%, transparent 100%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '16px', left: '24px', right: '24px',
              }}>
                <span style={{
                  fontSize: '11px',
                  color: '#fff',
                  background: '#D90A14',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}>{selectedBlog.category}</span>
                <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#fff', margin: '0', lineHeight: 1.25 }}>{selectedBlog.title}</h2>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '24px 24px 30px 24px' }}>
              {/* Date & Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', color: '#9ca3af', fontSize: '13px' }}>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Published on {selectedBlog.date}
                </span>
              </div>
              {/* Content */}
              <p style={{ fontSize: '14.5px', color: '#d1d5db', lineHeight: 1.8, margin: '0' }}>
                {selectedBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ══ ALL BLOG POSTS DIALOG MODAL ══ */}
      {showAllBlogs && (
        <div
          onClick={() => setShowAllBlogs(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="custom-scrollbar"
            onClick={e => e.stopPropagation()}
            style={{
              background: '#0a0505',
              border: '1.5px solid rgba(217,10,20,0.3)',
              borderRadius: '24px',
              padding: 'clamp(20px, 4vw, 36px)',
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              boxShadow: '0 30px 80px rgba(217,10,20,0.15)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setShowAllBlogs(false)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: '50%', width: '36px', height: '36px',
                color: '#fff', fontSize: '18px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
                zIndex: 10,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(217,10,20,0.4)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >✕</button>

            <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900, color: '#fff', margin: '0 0 8px 0', fontFamily: "'Vazirmatn', sans-serif" }}>
              All Fitmaker <span style={{ color: '#D90A14' }}>Blog Posts</span>
            </h2>
            <p style={{ fontSize: '14px', color: '#9ca3af', margin: '0 0 32px 0' }}>
              Explore all our fitness articles, tips, and guides.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {blogPosts.map(post => (
                <div
                  key={post.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    background: 'rgba(15,10,10,0.6)',
                    border: '1px solid rgba(217,10,20,0.15)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    padding: '16px',
                  }}
                >
                  {/* Image side */}
                  <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                    <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Text content side */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '4px' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', color: '#D90A14', background: 'rgba(217,10,20,0.1)', padding: '3px 8px', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: '12px', color: '#9ca3af' }}>{post.date}</span>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: '13.5px', color: '#d1d5db', lineHeight: 1.6, margin: 0 }}>
                        {post.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div >
  );
}
