@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Outfit:wght@300;400;500;600&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background: #0e0e1f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Outfit', sans-serif;
}

/* ── Calculator Container ── */
.calculator {
  width: 340px;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);
}

/* ── Header Label ── */
.calc-label {
  font-size: 10px;
  color: rgba(100,200,255,0.25);
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
}

/* ── Display Area ── */
.display-area {
  background: #0a0a1a;
  border-radius: 16px;
  padding: 16px 20px 12px;
  margin-bottom: 18px;
  border: 1px solid rgba(100,200,255,0.1);
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
}

.display-area::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(100,200,255,0.4), transparent);
}

.display-expr {
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  color: rgba(100,200,255,0.45);
  text-align: right;
  min-height: 18px;
  letter-spacing: 0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.display-main {
  font-family: 'Share Tech Mono', monospace;
  font-size: 32px;
  color: #e0f4ff;
  text-align: right;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 0 0 20px rgba(100,200,255,0.3);
  transition: color 0.15s;
}

.display-main.error {
  font-size: 18px;
  color: #ff6b6b;
  text-shadow: 0 0 10px rgba(255,80,80,0.3);
}

/* ── Angle Mode Row ── */
.mode-row {
  display: flex;
  gap: 6px;
  margin-bottom: 14px;
}

.mode-btn {
  flex: 1;
  padding: 5px 0;
  border-radius: 8px;
  border: 1px solid rgba(100,200,255,0.15);
  background: rgba(100,200,255,0.04);
  color: rgba(100,200,255,0.5);
  font-size: 11px;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  letter-spacing: 0.5px;
}

.mode-btn.active {
  background: rgba(100,200,255,0.15);
  color: #64c8ff;
  border-color: rgba(100,200,255,0.35);
}

.mode-btn:hover {
  background: rgba(100,200,255,0.1);
  color: #64c8ff;
}

/* ── Button Grid ── */
.btn-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

/* ── Base Button ── */
.btn {
  border: none;
  border-radius: 12px;
  height: 52px;
  font-size: 14px;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.1s, background 0.1s;
  position: relative;
  overflow: hidden;
  outline: none;
}

.btn:active {
  transform: scale(0.93);
}

/* ── Number Buttons ── */
.btn-num {
  background: #1e2a3d;
  color: #d0e8ff;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow: 0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
}

.btn-num:hover {
  background: #263550;
  color: #e8f4ff;
}

/* ── Operator Buttons ── */
.btn-op {
  background: #1a2e4a;
  color: #64c8ff;
  border: 1px solid rgba(100,200,255,0.15);
  box-shadow: 0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(100,200,255,0.05);
}

.btn-op:hover {
  background: #1e3a5e;
  color: #8ad8ff;
  border-color: rgba(100,200,255,0.3);
}

/* ── Function Buttons ── */
.btn-fn {
  background: #1d1d35;
  color: #a78bfa;
  border: 1px solid rgba(167,139,250,0.15);
  font-size: 12px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
}

.btn-fn:hover {
  background: #252544;
  color: #c4b5fd;
  border-color: rgba(167,139,250,0.3);
}

/* ── Clear / DEL Buttons ── */
.btn-clear {
  background: #2d1a1a;
  color: #ff8a8a;
  border: 1px solid rgba(255,100,100,0.2);
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
}

.btn-clear:hover {
  background: #3d2020;
  color: #ffaaaa;
  border-color: rgba(255,100,100,0.4);
}

/* ── Equals Button ── */
.btn-eq {
  background: linear-gradient(135deg, #1a6fff, #0d54cc);
  color: #fff;
  border: 1px solid rgba(100,180,255,0.3);
  font-size: 20px;
  box-shadow: 0 4px 15px rgba(26,111,255,0.35), inset 0 1px 0 rgba(255,255,255,0.15);
}

.btn-eq:hover {
  background: linear-gradient(135deg, #2a7fff, #1a64dd);
  box-shadow: 0 4px 20px rgba(26,111,255,0.5);
}
