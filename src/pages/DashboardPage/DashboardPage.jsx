import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f6f8fb;
          color: #1f2937;
        }

        .dashboard-page {
          display: flex;
          min-height: 100vh;
          background: #f6f8fb;
        }

        /* ================= SIDEBAR ================= */

        .sidebar {
          width: 250px;
          min-height: 100vh;
          background: #ffffff;
          border-right: 1px solid #e8ebf0;
          padding: 28px 18px;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 23px;
          font-weight: 700;
          color: #1f2937;
          padding: 0 12px;
          margin-bottom: 45px;
        }

        .sidebar-logo span span {
          color: #e63956;
        }

        .heart-icon {
          color: #e63956;
          font-size: 30px;
          line-height: 1;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .menu-item {
          text-decoration: none;
          color: #667085;
          padding: 13px 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 13px;
          font-size: 15px;
          font-weight: 500;
          transition: 0.2s;
        }

        .menu-item span {
          width: 22px;
          text-align: center;
          font-size: 19px;
        }

        .menu-item:hover {
          background: #fff2f4;
          color: #e63956;
        }

        .menu-item.active {
          background: #ffecef;
          color: #e63956;
          font-weight: 600;
        }

        .menu-item.logout {
          margin-top: 12px;
        }

        .sidebar-bottom {
          margin-top: auto;
          text-align: center;
          padding: 25px 10px 10px;
          color: #98a2b3;
          font-size: 13px;
          line-height: 0.8;
        }

        .sidebar-heart {
          color: #e63956;
          font-size: 30px;
          margin-bottom: 12px;
        }

        /* ================= MAIN ================= */

        .dashboard-main {
          margin-left: 250px;
          width: calc(100% - 250px);
          min-height: 100vh;
        }

        /* ================= TOP BAR ================= */

        .top-bar {
          height: 75px;
          background: #ffffff;
          border-bottom: 1px solid #e8ebf0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 38px;
        }

        .user-area {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .notification {
          font-size: 21px;
          color: #667085;
          margin-right: 8px;
        }

        .user-avatar {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: #ffecef;
          color: #e63956;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .user-name {
          font-size: 14px;
          font-weight: 600;
          color: #344054;
        }

        .dropdown-arrow {
          color: #667085;
          font-size: 18px;
        }

        /* ================= CONTENT ================= */

        .dashboard-content {
          padding: 35px 40px 50px;
          max-width: 1500px;
          margin: auto;
        }

        /* ================= WELCOME ================= */

        .welcome-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .welcome-section h1 {
          margin: 0 0 8px;
          font-size: 30px;
          color: #1d2939;
        }

        .welcome-section p {
          margin: 0;
          color: #667085;
          font-size: 15px;
        }

        .assessment-button {
          background: #e63956;
          color: white;
          text-decoration: none;
          padding: 13px 21px;
          border-radius: 9px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s;
        }

        .assessment-button:hover {
          background: #c92f49;
        }

        /* ================= TOP CARDS ================= */

        .top-cards {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 22px;
          margin-bottom: 22px;
        }

        .risk-card {
          background: #ffffff;
          border: 1px solid #e7eaf0;
          border-radius: 14px;
          padding: 27px;
          display: flex;
          align-items: center;
          gap: 25px;
          min-height: 190px;
        }

        .risk-heart {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #ffecef;
          color: #e63956;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 43px;
          flex-shrink: 0;
        }

        .risk-details h2 {
          margin: 0 0 11px;
          font-size: 18px;
          color: #344054;
        }

        .risk-badge {
          display: inline-block;
          background: #e9f8ef;
          color: #16803c;
          padding: 6px 13px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .risk-score {
          margin: 4px 0;
          color: #667085;
          font-size: 14px;
        }

        .risk-score strong {
          color: #1d2939;
          font-size: 17px;
        }

        .risk-description {
          margin: 7px 0;
          color: #98a2b3;
          font-size: 13px;
        }

        .last-check {
          margin: 10px 0 0;
          color: #98a2b3;
          font-size: 12px;
        }

        /* ================= QUICK NOTE ================= */

        .quick-note {
          background: #fff8e8;
          border: 1px solid #f8df9f;
          border-radius: 14px;
          padding: 25px;
          position: relative;
          min-height: 190px;
        }

        .quick-note h3 {
          margin: 0 0 15px;
          color: #8a6116;
          font-size: 16px;
        }

        .quick-note p {
          color: #7a6a48;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .note-arrow {
          position: absolute;
          bottom: 20px;
          right: 25px;
          color: #a77b24;
          font-size: 20px;
        }

        /* ================= PARAMETERS ================= */

        .parameters-card {
          background: #ffffff;
          border: 1px solid #e7eaf0;
          border-radius: 14px;
          padding: 25px;
          margin-bottom: 22px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .section-heading h2 {
          margin: 0;
          font-size: 18px;
          color: #344054;
        }

        .section-heading a {
          text-decoration: none;
          color: #e63956;
          font-size: 13px;
          font-weight: 600;
        }

        .parameter-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .parameter-item {
          border: 1px solid #edf0f4;
          border-radius: 11px;
          padding: 17px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .parameter-icon {
          width: 43px;
          height: 43px;
          border-radius: 10px;
          background: #fff1f3;
          color: #e63956;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
          flex-shrink: 0;
        }

        .parameter-item h3 {
          margin: 0 0 5px;
          font-size: 13px;
          color: #667085;
          font-weight: 600;
        }

        .parameter-item strong {
          display: block;
          font-size: 17px;
          color: #344054;
          margin-bottom: 4px;
        }

        .parameter-item span {
          color: #16803c;
          font-size: 11px;
        }

        /* ================= BOTTOM GRID ================= */

        .bottom-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 22px;
        }

        .progress-card,
        .advice-card {
          background: #ffffff;
          border: 1px solid #e7eaf0;
          border-radius: 14px;
          padding: 25px;
        }

        .score-dropdown {
          border: 1px solid #d9dde5;
          background: white;
          padding: 7px 12px;
          border-radius: 7px;
          color: #667085;
          font-size: 12px;
        }

        .progress-content {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 25px;
        }

        /* ================= GRAPH ================= */

        .graph {
          height: 230px;
          position: relative;
          padding-left: 42px;
          padding-top: 10px;
        }

        .graph-line {
          height: 42px;
          border-bottom: 1px dashed #e5e7eb;
          position: relative;
        }

        .graph-line span {
          position: absolute;
          left: -38px;
          top: -7px;
          font-size: 10px;
          color: #98a2b3;
        }

        .graph-values {
          position: absolute;
          left: 48px;
          right: 0;
          bottom: 5px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .graph-values div {
          text-align: center;
          position: relative;
        }

        .graph-values b {
          display: block;
          font-size: 12px;
          color: #e63956;
          margin-bottom: 7px;
        }

        .graph-values span {
          display: block;
          font-size: 10px;
          color: #98a2b3;
        }

        /* ================= HISTORY ================= */

        .assessment-history {
          border-left: 1px solid #edf0f4;
          padding-left: 22px;
        }

        .assessment-history h3 {
          margin: 0 0 16px;
          font-size: 14px;
          color: #344054;
        }

        .history-header,
        .history-row {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr;
          gap: 10px;
          align-items: center;
        }

        .history-header {
          color: #98a2b3;
          font-size: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid #edf0f4;
        }

        .history-row {
          font-size: 11px;
          color: #667085;
          padding: 11px 0;
          border-bottom: 1px solid #f1f2f4;
        }

        .history-row:last-child {
          border-bottom: none;
        }

        .low {
          color: #16803c;
          background: #e9f8ef;
          padding: 4px 7px;
          border-radius: 10px;
          width: fit-content;
          font-size: 10px;
        }

        .moderate {
          color: #9a6700;
          background: #fff4d6;
          padding: 4px 7px;
          border-radius: 10px;
          width: fit-content;
          font-size: 10px;
        }

        /* ================= ADVICE ================= */

        .advice-card h2 {
          margin: 0 0 20px;
          font-size: 18px;
          color: #344054;
        }

        .advice-status {
          background: #effaf3;
          border: 1px solid #ccebd7;
          color: #16803c;
          border-radius: 9px;
          padding: 13px;
          font-size: 13px;
          margin-bottom: 20px;
        }

        .advice-list {
          margin-bottom: 20px;
        }

        .advice-list p {
          color: #667085;
          font-size: 13px;
          margin: 12px 0;
          line-height: 1.5;
        }

        .disclaimer {
          background: #f8f9fb;
          border-radius: 9px;
          padding: 14px;
          display: flex;
          gap: 10px;
          color: #98a2b3;
        }

        .disclaimer strong {
          color: #667085;
          font-size: 15px;
        }

        .disclaimer p {
          margin: 0;
          font-size: 10px;
          line-height: 1.6;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {
          .top-cards,
          .bottom-grid {
            grid-template-columns: 1fr;
          }

          .progress-content {
            grid-template-columns: 1fr;
          }

          .assessment-history {
            border-left: none;
            border-top: 1px solid #edf0f4;
            padding-left: 0;
            padding-top: 20px;
          }
        }

        @media (max-width: 800px) {
          .sidebar {
            width: 75px;
            padding: 25px 10px;
          }

          .sidebar-logo span:not(.heart-icon) {
            display: none;
          }

          .menu-item {
            justify-content: center;
            font-size: 0;
          }

          .menu-item span {
            font-size: 20px;
          }

          .sidebar-logo {
            justify-content: center;
            padding: 0;
          }

          .dashboard-main {
            margin-left: 75px;
            width: calc(100% - 75px);
          }

          .dashboard-content {
            padding: 25px 20px;
          }

          .parameter-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .welcome-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }

        @media (max-width: 550px) {
          .parameter-grid {
            grid-template-columns: 1fr;
          }

          .risk-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .top-bar {
            padding: 0 20px;
          }

          .user-name,
          .dropdown-arrow {
            display: none;
          }
        }
      `}</style>

      <div className="dashboard-page">

        {/* ================= SIDEBAR ================= */}

        <aside className="sidebar">

          <div className="sidebar-logo">
            <span className="heart-icon">♡</span>

            <span>
              Cardia<span>Watch</span>
            </span>
          </div>

          <nav className="sidebar-menu">

            <Link
              to="/dashboard"
              className="menu-item active"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/assessment"
              className="menu-item"
            >
              <span>⊕</span>
              New Assessment
            </Link>

            <Link
              to="/history"
              className="menu-item"
            >
              <span>▥</span>
              Health History
            </Link>

            <Link
              to="/profile"
              className="menu-item"
            >
              <span>♙</span>
              Profile
            </Link>

            <Link
              to="/about"
              className="menu-item"
            >
              <span>ⓘ</span>
              About
            </Link>

            <Link
              to="/login"
              className="menu-item logout"
            >
              <span>↪</span>
              Logout
            </Link>

          </nav>

          <div className="sidebar-bottom">
            <div className="sidebar-heart">♡</div>

            <p>Better monitoring.</p>
            <p>Healthier tomorrow.</p>
          </div>

        </aside>


        {/* ================= MAIN CONTENT ================= */}

        <main className="dashboard-main">

          {/* ================= TOP BAR ================= */}

          <header className="top-bar">

            <div></div>

            <div className="user-area">

              <span className="notification">
                ♧
              </span>

              <div className="user-avatar">
                M
              </div>

              <span className="user-name">
                Manoj
              </span>

              <span className="dropdown-arrow">
                ⌄
              </span>

            </div>

          </header>


          {/* ================= DASHBOARD CONTENT ================= */}

          <section className="dashboard-content">

            {/* ================= WELCOME ================= */}

            <div className="welcome-section">

              <div>

                <h1>
                  Welcome back, Manoj!
                </h1>

                <p>
                  Monitor your heart health and stay one step ahead.
                </p>

              </div>

              <Link
                to="/assessment"
                className="assessment-button"
              >
                + &nbsp; Start New Assessment &nbsp; →
              </Link>

            </div>


            {/* ================= RISK SECTION ================= */}

            <div className="top-cards">

              <div className="risk-card">

                <div className="risk-heart">
                  ♥
                </div>

                <div className="risk-details">

                  <h2>
                    Current Heart Failure Risk
                  </h2>

                  <div className="risk-badge">
                    Low Risk
                  </div>

                  <p className="risk-score">
                    Risk Score: <strong>24%</strong>
                  </p>

                  <p className="risk-description">
                    Based on your latest health parameters.
                  </p>

                  <p className="last-check">
                    ▣ &nbsp; Last checked: Oct 1, 2026
                  </p>

                </div>

              </div>


              {/* ================= QUICK NOTE ================= */}

              <div className="quick-note">

                <h3>
                  💡 &nbsp; Quick Note
                </h3>

                <p>
                  Your current risk level is low. Keep monitoring
                  your health parameters and maintain a healthy
                  lifestyle.
                </p>

                <span className="note-arrow">
                  →
                </span>

              </div>

            </div>


            {/* ================= HEALTH PARAMETERS ================= */}

            <div className="parameters-card">

              <div className="section-heading">

                <h2>
                  ♡ &nbsp; Latest Health Parameters
                </h2>

                <Link to="/assessment">
                  View Details →
                </Link>

              </div>


              <div className="parameter-grid">

                <div className="parameter-item">

                  <div className="parameter-icon">
                    ♡
                  </div>

                  <div>
                    <h3>IMP</h3>
                    <strong>—</strong>
                    <span>Normal</span>
                  </div>

                </div>


                <div className="parameter-item">

                  <div className="parameter-icon">
                    ⌁
                  </div>

                  <div>
                    <h3>AF Burden</h3>
                    <strong>—</strong>
                    <span>Normal</span>
                  </div>

                </div>


                <div className="parameter-item">

                  <div className="parameter-icon">
                    ♢
                  </div>

                  <div>
                    <h3>VRAF</h3>
                    <strong>—</strong>
                    <span>Normal</span>
                  </div>

                </div>


                <div className="parameter-item">

                  <div className="parameter-icon">
                    ♢
                  </div>

                  <div>
                    <h3>NHR</h3>
                    <strong>—</strong>
                    <span>Normal</span>
                  </div>

                </div>


                <div className="parameter-item">

                  <div className="parameter-icon">
                    ⌁
                  </div>

                  <div>
                    <h3>HRV</h3>
                    <strong>—</strong>
                    <span>Normal</span>
                  </div>

                </div>


                <div className="parameter-item">

                  <div className="parameter-icon">
                    ◷
                  </div>

                  <div>
                    <h3>ACT</h3>
                    <strong>—</strong>
                    <span>Normal</span>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= BOTTOM SECTION ================= */}

            <div className="bottom-grid">

              {/* ================= HEALTH PROGRESS ================= */}

              <div className="progress-card">

                <div className="section-heading">

                  <h2>
                    ▥ &nbsp; Your Health Progress
                  </h2>

                  <button
                    type="button"
                    className="score-dropdown"
                  >
                    Risk Score ⌄
                  </button>

                </div>


                <div className="progress-content">

                  {/* ================= GRAPH ================= */}

                  <div className="graph">

                    <div className="graph-line">
                      <span>100%</span>
                    </div>

                    <div className="graph-line">
                      <span>75%</span>
                    </div>

                    <div className="graph-line">
                      <span>50%</span>
                    </div>

                    <div className="graph-line">
                      <span>25%</span>
                    </div>

                    <div className="graph-line">
                      <span>0%</span>
                    </div>


                    <div className="graph-values">

                      <div>
                        <b>21%</b>
                        <span>Sep 28</span>
                      </div>

                      <div>
                        <b>27%</b>
                        <span>Sep 29</span>
                      </div>

                      <div>
                        <b>35%</b>
                        <span>Sep 30</span>
                      </div>

                      <div>
                        <b>24%</b>
                        <span>Oct 1</span>
                      </div>

                    </div>

                  </div>


                  {/* ================= PREVIOUS ASSESSMENTS ================= */}

                  <div className="assessment-history">

                    <h3>
                      Previous Assessments
                    </h3>


                    <div className="history-header">

                      <span>Date</span>
                      <span>Risk Score</span>
                      <span>Risk Level</span>

                    </div>


                    <div className="history-row">

                      <span>
                        Oct 1, 2026
                      </span>

                      <span>
                        24%
                      </span>

                      <span className="low">
                        Low
                      </span>

                    </div>


                    <div className="history-row">

                      <span>
                        Sep 30, 2026
                      </span>

                      <span>
                        35%
                      </span>

                      <span className="moderate">
                        Moderate
                      </span>

                    </div>


                    <div className="history-row">

                      <span>
                        Sep 29, 2026
                      </span>

                      <span>
                        27%
                      </span>

                      <span className="low">
                        Low
                      </span>

                    </div>


                    <div className="history-row">

                      <span>
                        Sep 28, 2026
                      </span>

                      <span>
                        21%
                      </span>

                      <span className="low">
                        Low
                      </span>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================= HEALTH ADVICE ================= */}

              <div className="advice-card">

                <h2>
                  💡 &nbsp; Health Advice
                </h2>


                <div className="advice-status">

                  ♥ &nbsp;

                  <strong>
                    Your current risk level is low.
                  </strong>

                </div>


                <div className="advice-list">

                  <p>
                    ✓ &nbsp; Continue monitoring your health parameters.
                  </p>

                  <p>
                    ✓ &nbsp; Maintain regular physical activity.
                  </p>

                  <p>
                    ✓ &nbsp; Keep track of future assessments.
                  </p>

                </div>


                <div className="disclaimer">

                  <strong>
                    ⓘ
                  </strong>

                  <p>
                    This system is for informational purposes only
                    and does not replace professional medical advice.
                    Please consult a healthcare professional for
                    personalized guidance.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>
    </>
  );
}

export default Dashboard;