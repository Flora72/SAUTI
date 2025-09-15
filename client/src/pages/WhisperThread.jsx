import React, { useEffect, useState } from 'react';
import { Threads } from '../lib/api.js';

const FEATURE_THREADS = import.meta.env.VITE_FEATURE_THREADS !== 'false';

export default function WhisperThread() {
  const [threads, setThreads] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      setThreads(await Threads.list());
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }

  useEffect(() => { if (FEATURE_THREADS) load(); }, []);

  async function createThread(e) {
    e.preventDefault();
    try {
      await Threads.create({ title, visibility: 'trusted' });
      setTitle('');
      await load();
    } catch (e) { setError(e.message); }
  }

  async function addPost(id, body) {
    try { await Threads.addPost(id, { body }); await load(); }
    catch (e) { setError(e.message); }
  }

  if (!FEATURE_THREADS) return <p className="muted">Community Threads are turned off.</p>;

  return (
    <div>
      <h2>WhisperThread — Community</h2>
      <p className="muted">A gentle space. No likes. Just presence and response.</p>

      <form onSubmit={createThread} className="card">
        <input placeholder="Thread title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <button type="submit">Open thread</button>
      </form>

      {loading ? <p>Loading…</p> : (
        <ul className="list">
          {threads.map(t => (
            <li key={t._id} className="card">
              <div className="row between">
                <strong>{t.title}</strong>
                <span className="muted">{new Date(t.createdAt).toLocaleString()}</span>
              </div>
              <ul className="list">
                {t.posts?.map((p, i) => (
                  <li key={p._id || i} className="card">
                    <p>{p.body}</p>
                    <span className="muted small">{new Date(p.createdAt).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <ThreadReply onSend={(body)=>addPost(t._id, body)} />
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

function ThreadReply({ onSend }) {
  const [body, setBody] = useState('');
  return (
    <form onSubmit={(e)=>{e.preventDefault(); if(!body.trim()) return; onSend(body); setBody('');}} className="row">
      <input placeholder="Write a gentle reply…" value={body} onChange={e=>setBody(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
