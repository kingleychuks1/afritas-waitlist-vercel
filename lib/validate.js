const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value) {
  return typeof value === "string" && EMAIL_RE.test(value.trim());
}

export function clean(value, { max = 200 } = {}) {
  return String(value ?? "").trim().slice(0, max);
}

export function requireFields(body, fields) {
  const missing = fields.filter((f) => !clean(body[f]));
  return missing;
}
