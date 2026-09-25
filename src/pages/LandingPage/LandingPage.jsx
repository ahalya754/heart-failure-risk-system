import React from "react";
import { useNavigate } from "react-router-dom";
import { HeartPulse, ArrowRight } from "lucide-react";
import { T, sans, mono } from "../../theme";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: T.bg, fontFamily: sans }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 40px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, marginBottom: 28 }}>
          <HeartPulse size={26} color={T.teal} strokeWidth={2.2} />
          <span style={{ fontSize: 18, fontWeight: 700, color: T.ink }}>
            Cardia<span style={{ color: T.teal }}>Watch</span>
          </span>
        </div>

        <h1 style={{ fontSize: 34, lineHeight: 1.25, color: T.ink, margin: "0 0 16px" }}>
          A daily early-warning check for heart failure risk
        </h1>
        <p style={{ fontSize: 15.5, color: T.inkSoft, lineHeight: 1.6, maxWidth: 520, margin: "0 auto 34px" }}>
          Log a handful of readings each day and a Bayesian risk model turns them into one clear
          number — low, high, or very high — so patterns get caught before they become a hospital visit.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/register")}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 8, border: "none", background: T.teal, color: "#fff", fontWeight: 600, fontSize: 14.5, cursor: "pointer" }}
          >
            Create an account <ArrowRight size={16} />
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{ padding: "12px 22px", borderRadius: 8, border:" 1px solid " + T.teal,background: "transparent", color: T.teal, fontWeight: 600, fontSize: 14.5, cursor: "pointer" }}
           >
            Log in
          </button>
        </div>

        <div style={{ marginTop: 56, display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["IMP · AF · VRAF", "NHR · HRV · Activity"],
            ["30-day", "hospitalization window"],
            ["3", "risk tiers"],
          ].map(([big, small], i) => (
            <div key={i} style={{ background: T.panel, border: "1px solid" + T.line, borderRadius: 12, padding: "16px 20px", minWidth: 150 }}>
              <div style={{ fontFamily: mono, fontSize: 15, color: T.teal, marginBottom: 4 }}>{big}</div>
              <div style={{ fontSize: 12, color: T.inkSoft }}>{small}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}