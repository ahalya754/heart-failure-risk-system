const USERS_KEY = "chw_users";
const SESSION_KEY = "chw_session";
const historyKey = (username) => "chw_history_" + username;

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function registerUser({ name, username, password }) {
  const users = readJSON(USERS_KEY, []);
  if (users.some((u) => u.username === username)) {
    throw new Error("That username is already registered.");
  }
  if (!name || !username || !password) {
    throw new Error("Fill in every field to continue.");
  }
  const user = { name, username, password };
  writeJSON(USERS_KEY, [...users, user]);
  writeJSON(SESSION_KEY, { name, username });
  return { name, username };
}

export function loginUser({ username, password }) {
  const users = readJSON(USERS_KEY, []);
  const match = users.find((u) => u.username === username && u.password === password);
  if (!match) {
    throw new Error("No account matches that username and password.");
  }
  const session = { name: match.name, username: match.username };
  writeJSON(SESSION_KEY, session);
  return session;
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  return readJSON(SESSION_KEY, null);
}

function clamp01(n) {
  return Math.max(0, Math.min(1, Number.isNaN(n) ? 0 : n));
}
function bucketEvidence(x) {
  if (x < 0.33) return "Normal";
  if (x < 0.66) return "Medium";
  return "High";
}
function classify(score) {
  if (score <= 30) return "LOW";
  if (score <= 70) return "HIGH";
  return "VERY HIGH";
}

export function runRiskAnalysis(params) {
  const impScore = clamp01((100 - params.imp) / 80);
  const afScore = clamp01(params.afBurden / 100);
  const vrafScore = clamp01((params.vraf - 60) / 100);
  const nhrScore = clamp01((params.nhr - 60) / 60);
  const hrvScore = clamp01((60 - params.hrv) / 60);
  const actScore = clamp01((3 - params.activity) / 3);

  const weighted =
    impScore * 0.28 +
    afScore * 0.24 +
    vrafScore * 0.18 +
    nhrScore * 0.12 +
    hrvScore * 0.1 +
    actScore * 0.08;

  const score = Math.round(clamp01(weighted) * 100);

  return {
    score,
    tier: classify(score),
    evidence: {
      IMP: bucketEvidence(impScore),
      "AF Burden": bucketEvidence(afScore),
      VRAF: bucketEvidence(vrafScore),
      NHR: bucketEvidence(nhrScore),
      HRV: bucketEvidence(hrvScore),
      Activity: bucketEvidence(actScore),
    },
  };
}

export function saveAssessment(username, entry) {
  const key = historyKey(username);
  const existing = readJSON(key, []);
  const withDate = { ...entry, date: new Date().toISOString() };
  writeJSON(key, [withDate, ...existing]);
  return withDate;
}

export function getHistory(username) {
  return readJSON(historyKey(username), []);
}