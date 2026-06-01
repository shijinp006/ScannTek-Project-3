import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import arrowSvg from '../assets/arrow.svg';
import heroTrainer from '../assets/hero-image.png';
import serviceLosing from '../assets/service-losing-weight.png';
import serviceBuilding from '../assets/service-building-muscle.png';
import serviceHome from '../assets/service-home-training.png';
import serviceGym from '../assets/service-gym-plan.png';

/* ── Reusable animation variants ── */
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

/* ── Stat card with framer-motion ── */
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

      {/* ══════════ NAVBAR ══════════ */}
      {/* ── Mobile Navbar ── */}
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

      {/* ── Desktop / Tablet Navbar ── */}
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

      {/* ══════════ HERO ══════════ */}

      {/* ── Mobile Hero ── */}
      <div className="flex sm:hidden flex-col relative overflow-hidden"
        style={{ minHeight: '440px', padding: '40px 16px 20px', justifyContent: 'space-between' }}>
        {/* Red glow orb */}
        <div style={{ position: 'absolute', top: '20%', right: '-10px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, #c01a0a 0%, rgba(140,15,8,0.55) 45%, transparent 75%)', filter: 'blur(12px)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Trainer image — smaller, positioned in middle right */}
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

      {/* ── Desktop / Tablet Hero ── */}
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

        {/* ── RIGHT: Image + Cards ── */}
        <div style={{
          width: '57%',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'visible',
        }}>
          {/* Red glow orb — animated pulsing core */}
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
          {/* Outer ambient red halo — slow float */}
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

          {/* ── Stat Cards ── */}
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

      {/* ══════════ STATS FOOTER ══════════ */}
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
            {/* Desktop/Tablet stats — horizontal grid */}
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

      {/* ══════════ OUR SERVICES ══════════ */}
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
            {/* Ambient red glow — upper right */}
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
            {/* Ambient orange glow — left */}
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
            {/* Ambient brown-red glow — bottom right */}
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

      {/* ══════════ DETAILED SERVICE MODAL (DUMMY DATA) ══════════ */}
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
                ✕
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

      {/* ══════════ OUR PLANS SECTION ══════════ */}
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

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>

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
                          <span style={{ color: plan.btnColor }}>•</span>
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

    </div >
  );
}
