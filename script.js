// ── State ──────────────────────────────────────────────
let current = '0';
let expr = '';
let justEvaled = false;
let mode = 'deg';

// ── Button Definitions ─────────────────────────────────
const flatBtns = [
  { label: 'sin',    type: 'fn'    }, { label: 'cos',    type: 'fn'    },
  { label: 'tan',    type: 'fn'    }, { label: 'π',      type: 'fn'    },
  { label: 'sin⁻¹', type: 'fn'    }, { label: 'cos⁻¹', type: 'fn'    },
  { label: 'tan⁻¹', type: 'fn'    }, { label: 'e',      type: 'fn'    },
  { label: 'xʸ',    type: 'fn'    }, { label: '√',      type: 'fn'    },
  { label: 'log',   type: 'fn'    }, { label: 'ln',     type: 'fn'    },
  { label: '(',     type: 'op'    }, { label: ')',      type: 'op'    },
  { label: '%',     type: 'op'    }, { label: '÷',      type: 'op'    },
  { label: '7',     type: 'num'   }, { label: '8',      type: 'num'   },
  { label: '9',     type: 'num'   }, { label: '×',      type: 'op'    },
  { label: '4',     type: 'num'   }, { label: '5',      type: 'num'   },
  { label: '6',     type: 'num'   }, { label: '−',      type: 'op'    },
  { label: '1',     type: 'num'   }, { label: '2',      type: 'num'   },
  { label: '3',     type: 'num'   }, { label: '+',      type: 'op'    },
  { label: '±',     type: 'fn'    }, { label: '0',      type: 'num'   },
  { label: '.',     type: 'num'   }, { label: '=',      type: 'eq'    },
  { label: 'C',     type: 'clear' }, { label: 'DEL',    type: 'clear' },
];

// ── Angle Mode ─────────────────────────────────────────
function setMode(m) {
  mode = m;
  ['deg', 'rad', 'grad'].forEach(x => {
    document.getElementById(x + 'Btn').classList.toggle('active', x === m);
  });
}

function toRad(x) {
  if (mode === 'rad')  return x;
  if (mode === 'grad') return x * Math.PI / 200;
  return x * Math.PI / 180;
}

function fromRad(x) {
  if (mode === 'rad')  return x;
  if (mode === 'grad') return x * 200 / Math.PI;
  return x * 180 / Math.PI;
}

// ── Display ────────────────────────────────────────────
function updateDisplay() {
  const el = document.getElementById('display');
  el.textContent = current;
  el.className = 'display-main' +
    (current === 'Error' || current === 'Infinity' ? ' error' : '');
  document.getElementById('expr').textContent = expr;
}

function fmt(n) {
  if (!isFinite(n)) return 'Infinity';
  const s = +n.toPrecision(12);
  return String(s).length > 14 ? n.toExponential(6) : String(s);
}

// ── Button Handler ─────────────────────────────────────
function handleBtn(label, type) {

  // Clear / Delete
  if (type === 'clear') {
    if (label === 'C') {
      current = '0'; expr = ''; justEvaled = false;
    } else {
      if (justEvaled) { current = '0'; expr = ''; justEvaled = false; }
      else { current = current.length > 1 ? current.slice(0, -1) : '0'; }
    }
    updateDisplay();
    return;
  }

  // Equals
  if (type === 'eq') {
    try {
      const e = expr + current;
      expr = e + ' =';
      const evalStr = e
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-')
        .replace(/\^/g, '**')
        .replace(/π/g, 'Math.PI')
        .replace(/e(?![a-z])/g, 'Math.E');
      const result = Function('"use strict"; return (' + evalStr + ')')();
      current = fmt(result);
      justEvaled = true;
    } catch (err) {
      current = 'Error'; expr = ''; justEvaled = true;
    }
    updateDisplay();
    return;
  }

  // Scientific Functions
  if (type === 'fn') {
    justEvaled = false;

    if (label === 'π') {
      if (current === '0') current = fmt(Math.PI);
      else { expr += current + '×'; current = fmt(Math.PI); }
      updateDisplay();
      return;
    }

    if (label === 'e') {
      if (current === '0') current = fmt(Math.E);
      else { expr += current + '×'; current = fmt(Math.E); }
      updateDisplay();
      return;
    }

    if (label === 'xʸ') {
      expr += current + '^'; current = '0';
      updateDisplay();
      return;
    }

    if (label === '±') {
      current = current.startsWith('-')
        ? current.slice(1)
        : (current === '0' ? '0' : '-' + current);
      updateDisplay();
      return;
    }

    const v = parseFloat(current);
    switch (label) {
      case 'sin':    current = fmt(Math.sin(toRad(v)));         break;
      case 'cos':    current = fmt(Math.cos(toRad(v)));         break;
      case 'tan':    current = fmt(Math.tan(toRad(v)));         break;
      case 'sin⁻¹': current = fmt(fromRad(Math.asin(v)));      break;
      case 'cos⁻¹': current = fmt(fromRad(Math.acos(v)));      break;
      case 'tan⁻¹': current = fmt(fromRad(Math.atan(v)));      break;
      case '√':      current = v < 0  ? 'Error' : fmt(Math.sqrt(v));   break;
      case 'log':    current = v <= 0 ? 'Error' : fmt(Math.log10(v));  break;
      case 'ln':     current = v <= 0 ? 'Error' : fmt(Math.log(v));    break;
    }

    justEvaled = true;
    expr = '';
    updateDisplay();
    return;
  }

  // Operators
  if (type === 'op') {
    if (justEvaled) {
      expr = current + label; current = '0'; justEvaled = false;
    } else if (current === '0' && label !== '(' && label !== ')') {
      if (expr.length > 0) expr = expr.slice(0, -1) + label;
      else expr = label;
    } else {
      expr += current + label; current = '0';
    }
    updateDisplay();
    return;
  }

  // Numbers & Decimal
  if (type === 'num') {
    if (justEvaled) { current = '0'; expr = ''; justEvaled = false; }
    if (label === '.') {
      if (current.includes('.')) { updateDisplay(); return; }
      current += '.';
    } else {
      current = current === '0' ? label : current + label;
    }
    updateDisplay();
  }
}

// ── Keyboard Support ───────────────────────────────────
document.addEventListener('keydown', e => {
  const map = {
    '0':'0', '1':'1', '2':'2', '3':'3', '4':'4',
    '5':'5', '6':'6', '7':'7', '8':'8', '9':'9',
    '.': '.', '+': '+', '-': '−', '*': '×', '/': '÷',
    'Enter': '=', '=': '=', 'Backspace': 'DEL',
    'Escape': 'C', '(': '(', ')': ')', '%': '%',
  };
  const k = map[e.key];
  if (!k) return;
  e.preventDefault();
  const found = flatBtns.find(b => b.label === k);
  if (found) handleBtn(found.label, found.type);
});

// ── Build Button Grid ──────────────────────────────────
function buildGrid() {
  const grid = document.getElementById('btnGrid');
  flatBtns.forEach(({ label, type }) => {
    const btn = document.createElement('button');
    const cls =
      type === 'eq'    ? 'eq'    :
      type === 'clear' ? 'clear' :
      type === 'op'    ? 'op'    :
      type === 'fn'    ? 'fn'    : 'num';
    btn.className = 'btn btn-' + cls;
    btn.textContent = label;
    btn.onclick = () => handleBtn(label, type);
    grid.appendChild(btn);
  });
}

// ── Init ───────────────────────────────────────────────
buildGrid();
updateDisplay();
