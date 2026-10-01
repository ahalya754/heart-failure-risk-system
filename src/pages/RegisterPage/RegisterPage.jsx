
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import { T, sans } from "../../theme";
import { registerUser } from "../../services/api";

function TextInput({ label, type = "text", value, onChange }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <div style={{ fontSize: 13, color: T.inkSoft, marginBottom: 5 }}>
        {label}
      </div>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 7,
          border: "1px solid " + T.line,
          fontSize: 14.5,
          fontFamily: sans,
          boxSizing: "border-box",
          outline: "none",
        }}
        onFocus={(e) => (e.target.style.borderColor = T.teal)}
        onBlur={(e) => (e.target.style.borderColor = T.line)}
      />
    </label>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    // Check password and confirm password
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Don't send confirmPassword to backend
      const { confirmPassword, ...userData } = form;

      registerUser(userData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: sans,
        padding: 20,
      }}
    >
      <div style={{ width: 360, maxWidth: "100%" }}>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            marginBottom: 26,
          }}
        >
          <HeartPulse size={26} color={T.teal} strokeWidth={2.2} />

          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: T.ink,
            }}
          >
            Cardia<span style={{ color: T.teal }}>Watch</span>
          </div>
        </div>

        <div
          style={{
            background: T.panel,
            borderRadius: 14,
            padding: 28,
            border: "1px solid " + T.line,
          }}
        >
          <h1
            style={{
              fontSize: 19,
              margin: "0 0 3px",
              color: T.ink,
            }}
          >
            Create your account
          </h1>

          <p
            style={{
              fontSize: 13,
              color: T.inkSoft,
              margin: "0 0 22px",
            }}
          >
            Track daily heart-failure risk in one place.
          </p>

          <form onSubmit={submit}>

            <TextInput
              label="Full name"
              value={form.name}
              onChange={(v) =>
                setForm({ ...form, name: v })
              }
            />

            <TextInput
              label="Username"
              value={form.username}
              onChange={(v) =>
                setForm({ ...form, username: v })
              }
            />

            <TextInput
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) =>
                setForm({ ...form, email: v })
              }
            />

            <TextInput
              label="Password"
              type="password"
              value={form.password}
              onChange={(v) =>
                setForm({ ...form, password: v })
              }
            />

            <TextInput
              label="Confirm password"
              type="password"
              value={form.confirmPassword}
              onChange={(v) =>
                setForm({ ...form, confirmPassword: v })
              }
            />

            {error && (
              <div
                style={{
                  fontSize: 12.5,
                  color: T.veryHigh,
                  marginBottom: 12,
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "11px 20px",
                borderRadius: 8,
                border: "none",
                background: T.teal,
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Create account
            </button>
          </form>

          <div
            style={{
              marginTop: 16,
              fontSize: 13,
              color: T.inkSoft,
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: T.teal,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
