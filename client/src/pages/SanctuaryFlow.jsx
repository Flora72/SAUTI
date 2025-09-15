import React, { useEffect, useState } from 'react';
import { Journal } from '../lib/api.js';

export default function SanctuaryFlow() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', content: '', mood: 'steady', visibility: 'private' });

  async function load() {
    try {
      setLoading(true);
      const data = await Journal.list();
      setEntries(data);
    } catch (e) {
      setError(e.message);
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      await Journal.create(form);
      setForm({ title: '', content: '', mood: 'steady', visibility: 'private' });
      await load();
    } catch (e) { setError(e.message); }
  }

  async function remove(id) {
    try {
      await Journal.remove(id);
      await load();
    } catch (e) { setError(e.message); }
  }

  return (
    <div>
      <h2>SanctuaryFlow — Guided Journaling</h2>
      <p className="muted">Write at your own pace. You can keep it private.</p>

      <form onSubmit={submit} className="card">
        <input placeholder="Title (optional)" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <textarea placeholder="Your reflection" value={form.content} onChange={e=>setForm({...form, content: e.target.value})} required />
        <div className="row">
          <label>
            Mood
            <select value={form.mood} onChange={e=>setForm({...form, mood: e.target.value})}>
              {['soft','steady','strong','tender','numb','anxious','calm'].map(m=> <option key={m} value={m}>{m}</option>)}
            </select>
          </label>
          <label>
            Visibility
            <select value={form.visibility} onChange={e=>setForm({...form, visibility: e.target.value})}>
              {['private','trusted','public'].map(v=> <option key={v} value={v}>{v}</option>)}
            </select>
          </label>
        </div>
        <button type="submit">Save entry</button>
      </form>

      {loading ? <p>Loading…</p> : (
        <ul className="list">
          {entries.map(e => (
            <li key={e._id} className="card">
              <div className="row between">
                <strong>{e.title || 'Untitled'}</strong>
                <span className="muted">{new Date(e.createdAt).toLocaleString()} • {e.mood}</span>
              </div>
              <p>{e.content}</p>
              <div className="row between">
                <span className="tag">{e.visibility}</span>
                <button onClick={()=>remove(e._id)} className="danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
