import React, { useEffect, useState } from 'react';
import { Audio } from '../lib/api.js';

export default function EchoBox() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: '', url: '', durationSec: 0, visibility: 'private' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load() {
    try {
      setLoading(true);
      setNotes(await Audio.list());
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      await Audio.create(form);
      setForm({ title: '', url: '', durationSec: 0, visibility: 'private' });
      await load();
    } catch (e) { setError(e.message); }
  }

  async function remove(id) {
    try { await Audio.remove(id); await load(); } catch (e) { setError(e.message); }
  }

  return (
    <div>
      <h2>EchoBox — Audio Reflections</h2>
      <p className="muted">Record elsewhere for now; paste a URL to store the note’s metadata.</p>

      <form onSubmit={submit} className="card">
        <input placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <input placeholder="Audio URL (placeholder)" value={form.url} onChange={e=>setForm({...form, url: e.target.value})} required />
        <div className="row">
          <label>
            Duration (sec)
            <input type="number" min="0" value={form.durationSec} onChange={e=>setForm({...form, durationSec: Number(e.target.value)})} />
          </label>
          <label>
            Visibility
            <select value={form.visibility} onChange={e=>setForm({...form, visibility: e.target.value})}>
              {['private','trusted','public'].map(v=> <option key={v} value={v}>{v}</option>)}
            </select>
          </label>
        </div>
        <button type="submit">Save voice note</button>
      </form>

      {loading ? <p>Loading…</p> : (
        <ul className="list">
          {notes.map(n => (
            <li key={n._id} className="card">
              <div className="row between">
                <strong>{n.title || 'Untitled note'}</strong>
                <span className="muted">{new Date(n.createdAt).toLocaleString()}</span>
              </div>
              <audio src={n.url} controls preload="none" />
              <div className="row between">
                <span className="tag">{n.visibility}{n.durationSec ? ` • ${n.durationSec}s` : ''}</span>
                <button onClick={()=>remove(n._id)} className="danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
