import React, { useEffect, useState } from 'react';
import { Safety } from '../lib/api.js';

export default function SoftGate() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');

  async function heartbeat() {
    try {
      const hb = await Safety.heartbeat();
      setUserId(hb.userId);
      setStatus('Connected');
    } catch (e) { setError(e.message); }
  }

  useEffect(() => { heartbeat(); }, []);

  async function panic() {
    try {
      await Safety.panic();
      // clear client session
      localStorage.removeItem('sauti_anon_id');
      setStatus('Session cleared locally');
    } catch (e) { setError(e.message); }
  }

  async function wipe() {
    try {
      const res = await Safety.wipe();
      setStatus(`Wiped: journal ${res.journalUpdated}, audio ${res.audioUpdated}`);
    } catch (e) { setError(e.message); }
  }

  return (
    <div>
      <h2>SoftGate — Safety & Settings</h2>
      <p className="muted">You control your data and your pace.</p>

      <div className="card">
        <p><strong>Anonymous ID</strong>: <code>{userId || 'unknown'}</code></p>
        <div className="row">
          <button onClick={heartbeat}>Heartbeat</button>
          <button onClick={panic} className="warning">Emergency logout</button>
          <button onClick={wipe} className="danger">Wipe my data</button>
        </div>
      </div>

      {status && <p className="success">{status}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
