export function healthController(req, res) {
  res.json({ status: 'ok', service: 'api', message: 'Sauti API is breathing softly.' });
}
