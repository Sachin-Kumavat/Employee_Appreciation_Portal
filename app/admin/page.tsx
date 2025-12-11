"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import "./adminLogin.css";
// interface LoginPageProps {
//   onLogin: () => void;
// }
export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            window.location.href = "/adminDashboard";
        }, 800);
    };

    return (
        <div className="login-container">
            <div className="login-card">

                {/* Logo */}
                <div className="login-brand">
                    <div className="brand-icon">
                        <span className="brand-emoji">🏆</span>
                    </div>
                    <h1 className="brand-title">Recognition Portal</h1>
                    <p className="brand-subtitle">Celebrate achievements, inspire excellence</p>
                </div>

                {/* Form */}
                <div className="login-form-wrapper">
                    <form onSubmit={handleSubmit} className="login-form">

                        <div>
                            <label htmlFor="email" className="login-label">Email Address</label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                icon={<Mail className="icon-size" />}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="login-label">Password</label>
                            <div className="password-wrapper">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    icon={<Lock className="icon-size" />}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="icon-size" />
                                    ) : (
                                        <Eye className="icon-size" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="login-row">
                            <label className="checkbox-row">
                                <input type="checkbox" className="checkbox" />
                                <span style={{color: "#6b7280"}}>Remember me</span>
                            </label>

                            <a className="forgot-link" href="#">Forgot password?</a>
                        </div>

                        <Button type="submit" variant="primary" fullWidth isLoading={isLoading}>
                            Sign In
                        </Button>
                    </form>

                    {/* <div className="support-box">
                        <p>
                            Need help?{" "}
                            <a href="#" className="support-link">Contact IT Support</a>
                        </p>
                    </div> */}
                </div>

                {/* <p className="footer-text">© 2025 Your Company. All rights reserved.</p> */}
            </div>
        </div>
    );
}
