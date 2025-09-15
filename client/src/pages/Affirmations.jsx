import React, { useEffect, useState } from 'react';
import { Affirmations } from '../lib/api.js';

export default function AffirmationLibrary() {
  const [theme, setTheme] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load() {
    try {
      setLoading(true);
      setItems(await Affirmations.list(theme || undefined));
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, [theme]);

  return (
    <div>
      <h2>Affirmation Library</h2>
      <p className="muted">Curated words from survivors and caretaking hearts.</p>
      <div className="row">
        <label>
          Theme
          <select value={theme} onChange={e=>setTheme(e.target.value)}>
            <option value="">All</option>
            {['safety','strength','softness','reclamation','grounding'].map(t=> <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
        <button onClick={load}>Refresh</button>
      </div>

      {loading ? <p>Loading…</p> : (
        <ul className="list">
          {items.map((a) => (
            <li key={a._id || a.text} className="card">
              <p>“{a.text}”</p>
              <div className="row between">
                <span className="muted">{a.author || 'Anonymous'}</span>
                <span className="tag">{a.theme}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
