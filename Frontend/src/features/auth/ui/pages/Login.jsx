import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useAuthHook } from "../../hooks/useAuthHook";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  let { register, handleSubmit, errors, loginSubmit, reset } = useAuthHook();

  return (
    <div className={darkMode ? "portal dark" : "portal light"}>
      <div className="portal-frame">
        {/* ================= HEADER ================= */}

        <header className="portal-header">
          <div className="portal-title">
            <span className="header-dot"></span>

            <span className="header-main">
              ANUGRAH INFRASTRUCTURE TELEMETRY PORTAL
            </span>
          </div>

          {/* <button
            type="button"
            className="dark-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>DARK MODE</span>

            <span className="toggle-switch">
              <span className="toggle-circle">{darkMode ? "☾" : "☀"}</span>
            </span>
          </button> */}
        </header>

        {/* ================= MAIN ================= */}

        <main className="portal-content">
          {/* ================= LEFT ================= */}

          <section className="engineering-panel">
            <div className="coordinates">+ 19°03'12.4"N / 72°53'24.8"E</div>

            <div className="blueprint-reference">+ REF: BLPR-ST-88</div>

            {/* Company */}

            <div className="company-brand">
              <div className="company-logo">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle
                    cx="40"
                    cy="40"
                    r="27"
                    stroke="#89ceff"
                    strokeWidth="2"
                  />

                  <path
                    d="M40 18C40 18 25 32 25 43C25 51.2843 31.7157 58 40 58C48.2843 58 55 51.2843 55 43C55 32 40 18 40 18Z"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                  />

                  <path
                    d="M31 44C34 40 37 39 40 41C43 43 46 42 49 38"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div>
                <h2>ANUGRAH ENTERPRISE</h2>

                <p>CIVIL &amp; WATER INFRASTRUCTURE</p>
              </div>
            </div>

            {/* Badge */}

            <div className="system-badge">
              <span className="green-dot"></span>
              CRITICAL CIVIL MANAGEMENT SYSTEM
            </div>

            {/* Hero */}

            <div className="hero-heading">
              <div>Engineering</div>

              <div>Infrastructure.</div>

              <div className="blue-text">Building a Sustainable</div>

              <div className="blue-text">Future.</div>
            </div>

            <p className="hero-description">
              Water conservation, infrastructure and civil construction
              solutions.
            </p>

            {/* Telemetry */}

            <div className="telemetry-card">
              <div className="telemetry-header">
                <span>AQUIFER PIEZOMETER FLOW [B-09]</span>

                <strong>99.82% OPTIMAL</strong>
              </div>

              <div className="graph-wrapper">
                <svg viewBox="0 0 360 90" className="telemetry-graph">
                  <defs>
                    <linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2c3a44" />

                      <stop offset="100%" stopColor="#1a2024" />
                    </linearGradient>
                  </defs>

                  <path
                    d="
                      M10 67
                      L38 63
                      L64 70
                      L93 49
                      L124 56
                      L151 42
                      L183 53
                      L211 43
                      L241 57
                      L272 38
                      L302 47
                      L331 31
                      L350 38
                      L350 90
                      L10 90
                      Z
                    "
                    fill="url(#graphFill)"
                  />

                  <polyline
                    points="
                      10,67
                      38,63
                      64,70
                      93,49
                      124,56
                      151,42
                      183,53
                      211,43
                      241,57
                      272,38
                      302,47
                      331,31
                      350,38
                    "
                    fill="none"
                    stroke="#89ceff"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

            {/* Tags */}

            <div className="technical-tags">
              <div className="tech-tag">
                <span className="tag-icon water-icon">◇</span>
                CGWA Ground Water Recharge Protocols
              </div>

              <div className="tech-tag">
                <span className="tag-icon green-icon">◉</span>
                Piezometer Telemetry &amp; Deep Aquifer Modeling
              </div>

              <div className="tech-tag">
                <span className="tag-icon blue-icon">▦</span>
                Heavy Reinforced Concrete Civil Structures
              </div>
            </div>

            <div className="system-version">SYS_READY // V4.1</div>
          </section>

          {/* ================= RIGHT LOGIN ================= */}

          <section className="login-section">
            {/* State tabs */}

            <div className="state-tabs">
              <button type="button" className="active">
                STANDARD
              </button>

              <button type="button">ERROR</button>

              <button type="button">LOADING</button>

              <button type="button">SUCCESS</button>
            </div>

            {/* Login Card */}

            <div className="login-card">
              <div className="security-row">
                {/* <span>TERMINAL SEC_LEVEL // TIER-1</span> */}

                <strong>ONLINE</strong>
              </div>

              <div className="login-heading">
                <h1>Welcome Back</h1>

                <p>Sign in to continue to Anugrah Enterprise.</p>
              </div>

              {/* ================= FORM ================= */}

              <form onSubmit={handleSubmit(loginSubmit)}>
                {/* EMAIL */}

                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL ADDRESS <span>*</span>
                  </label>

                  <div
                    className={`input-wrapper ${
                      errors.email ? "input-error" : ""
                    }`}
                  >
                    <span className="input-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="1" />

                        <path d="M3 7L12 13L21 7" />
                      </svg>
                    </span>

                    <input
                      id="email"
                      type="email"
                      placeholder="civil.lead@anugrah-infra.com"
                      {...register("email", {
                        required: "Email is required",

                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                  </div>

                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>

                {/* PASSWORD */}

                <div className="form-group">
                  <label htmlFor="password">
                    PASSWORD <span>*</span>
                  </label>

                  <div
                    className={`input-wrapper ${
                      errors.password ? "input-error" : ""
                    }`}
                  >
                    <span className="input-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <rect x="5" y="10" width="14" height="10" rx="1" />

                        <path d="M8 10V7a4 4 0 018 0v3" />
                      </svg>
                    </span>

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••••••"
                      {...register("password", {
                        required: "Password is required",

                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "◉" : "◉"}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="error-message">{errors.password.message}</p>
                  )}
                </div>

                {/* OPTIONS */}

                <div className="form-options">
                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* SUBMIT */}

                <button type="submit" className="sign-in-button">
                  <span>SIGN IN</span>

                  <span className="arrow">→</span>
                </button>
              </form>

              {/* REGISTER */}

              <div className="register-area">
                <span>Don't have an account?</span>

                <Link to="/register" className="register-link">
                  Create an account ↗
                </Link>
              </div>
            </div>

            {/* META */}

            <div className="portal-meta">
              <span>PORTAL: ID_IND_098</span>

              <span>ISO 9001:2015 • CGWA CERTIFIED</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Login;
