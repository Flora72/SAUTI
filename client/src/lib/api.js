const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

// Maintain an anonymous id in localStorage and send it with every request
function getAnonId() {
  let id = localStorage.getItem('sauti_anon_id');
  if (!id) {
    id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    localStorage.setItem('sauti_anon_id', id);
  }
  return id;
}

async function api(path, options = {}) {
  const headers = options.headers ? { ...options.headers } : {};
  headers['Content-Type'] = 'application/json';
  headers['x-anon-id'] = getAnonId();
  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error || res.statusText);
  }
  return res.json();
}

export const Journal = {
  list: () => api('/journal'),
  create: (data) => api('/journal', { method: 'POST', body: JSON.stringify(data) }),
  get: (id) => api(`/journal/${id}`),
  remove: (id) => api(`/journal/${id}`, { method: 'DELETE' }),
};

export const Audio = {
  list: () => api('/audio'),
  create: (data) => api('/audio', { method: 'POST', body: JSON.stringify(data) }),
  remove: (id) => api(`/audio/${id}`, { method: 'DELETE' }),
};

export const Affirmations = {
  list: (theme) => api(`/affirmations${theme ? `?theme=${encodeURIComponent(theme)}` : ''}`),
};

export const Threads = {
  list: () => api('/threads'),
  create: (data) => api('/threads', { method: 'POST', body: JSON.stringify(data) }),
  addPost: (id, data) => api(`/threads/${id}/posts`, { method: 'POST', body: JSON.stringify(data) }),
  archive: (id) => api(`/threads/${id}/archive`, { method: 'POST' }),
};

export const Safety = {
  panic: () => api('/safety/panic', { method: 'POST' }),
  wipe: () => api('/safety/wipe', { method: 'POST' }),
  heartbeat: () => api('/safety/heartbeat'),
};
