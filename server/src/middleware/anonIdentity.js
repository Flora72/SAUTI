import crypto from 'crypto';

// Derive an anonymous user id from header or generate a transient one
export function anonIdentity(req, res, next) {
  const headerId = req.header('x-anon-id');
  if (headerId && /^[a-zA-Z0-9_-]{8,64}$/.test(headerId)) {
    req.userId = headerId;
    return next();
  }
  // Generate non-persistent id for this request (client should set header for persistence)
  const id = crypto.randomBytes(12).toString('base64url');
  req.userId = id;
  res.setHeader('x-anon-id', id);
  next();
}
