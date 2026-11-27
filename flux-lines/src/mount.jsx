import { createRoot } from 'react-dom/client';
import FluxLines from './FluxLines.jsx';

const NUMBERS = new Set([
  'speed',
  'scale',
  'turbulence',
  'fluidity',
  'rimWidth',
  'sharpness',
  'shimmer',
  'glow',
  'lineWidth',
  'opacity',
  'mouseStrength',
  'mouseRadius',
  'mouseDampening',
  'dpr'
]);

const BOOLEANS = new Set([
  'mouseInteraction',
  'clickSwirl',
  'intro',
  'lightMode',
  'transparent',
  'paused'
]);

const readProps = el => {
  const props = {};

  for (const [key, raw] of Object.entries(el.dataset)) {
    if (key === 'fluxLines' || raw === '') continue;

    if (key === 'colors') {
      const colors = raw.split(',').map(value => value.trim()).filter(Boolean);
      if (colors.length) props.colors = colors;
    } else if (NUMBERS.has(key)) {
      const value = Number(raw);
      if (Number.isFinite(value)) props[key] = value;
    } else if (BOOLEANS.has(key)) {
      props[key] = raw !== 'false' && raw !== '0';
    } else {
      props[key] = raw;
    }
  }

  return props;
};

const mounts = [];

for (const el of document.querySelectorAll('[data-flux-lines]')) {
  if (el.dataset.fluxLinesReady === 'true') continue;

  const host = document.createElement('div');
  host.className = 'flux-lines-root';
  el.appendChild(host);

  createRoot(host).render(<FluxLines {...readProps(el)} />);

  el.dataset.fluxLinesReady = 'true';
  el.dispatchEvent(new CustomEvent('flux-lines:ready'));
  mounts.push(el);
}

window.__fluxLines = { mounts };
