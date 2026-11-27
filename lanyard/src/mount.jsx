import { createRoot } from 'react-dom/client';
import Lanyard from './Lanyard.jsx';

const CHOICES = {
  imageFit: ['cover', 'contain'],
  orientation: ['portrait', 'landscape'],
  finish: ['glossy', 'glossy-soft', 'matte', 'holographic', 'metallic'],
  anchor: ['left', 'center', 'right'],
  metal: ['graphite', 'silver', 'gold']
};

const number = (value, fallback) => {
  if (value === undefined || value === '') return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const boolean = (value, fallback) => {
  if (value === undefined || value === '') return fallback;
  return value !== 'false' && value !== '0';
};

const choice = (value, name, fallback) => (CHOICES[name].includes(value) ? value : fallback);

const readProps = el => {
  const data = el.dataset;
  return {
    frontImage: data.front,
    backImage: data.back,
    imageFit: choice(data.imageFit, 'imageFit', 'cover'),
    cardColor: data.cardColor || '#ffffff',
    orientation: choice(data.orientation, 'orientation', 'portrait'),
    finish: choice(data.finish, 'finish', 'glossy'),
    cornerRadius: number(data.cornerRadius, 0.3),
    size: number(data.size, 0.6),
    anchor: choice(data.anchor, 'anchor', 'center'),
    strapLength: number(data.strapLength, 0.5),
    strapImage: data.strapImage,
    strapColor: data.strapColor || '#111111',
    strapWidth: number(data.strapWidth, 0.65),
    metal: choice(data.metal, 'metal', 'silver'),
    gravity: number(data.gravity, 1),
    damping: number(data.damping, 0.5),
    elasticity: number(data.elasticity, 0.5),
    breeze: number(data.breeze, 0.5),
    interactive: boolean(data.interactive, true),
    intro: boolean(data.intro, true)
  };
};

const mounts = [];

for (const el of document.querySelectorAll('[data-lanyard]')) {
  if (el.dataset.lanyardReady === 'true') continue;

  const host = document.createElement('div');
  host.className = 'lanyard-root';
  el.appendChild(host);

  const props = readProps(el);
  createRoot(host).render(<Lanyard {...props} />);

  el.dataset.lanyardReady = 'true';
  mounts.push(el);

  // Swap the poster for the live canvas once three.js has painted. If WebGL is
  // unavailable the component renders no canvas, so the poster stays.
  let frames = 0;
  const swap = () => {
    if (host.querySelector('canvas')) {
      window.setTimeout(() => el.classList.add('lanyard-live'), 200);
      el.dispatchEvent(new CustomEvent('lanyard:ready'));
      return;
    }
    if (++frames > 120) {
      el.classList.add('lanyard-failed');
      return;
    }
    requestAnimationFrame(swap);
  };
  requestAnimationFrame(swap);
}

window.__lanyard = { mounts };
