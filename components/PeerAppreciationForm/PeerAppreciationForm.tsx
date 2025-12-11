"use client";

import { useState } from "react";
import styles from "@/styles/PeerAppreciationForm/PeerAppreciationForm.module.css";
import { ChevronDown, Send, X } from "lucide-react";

interface Employee {
    id: number;
    name: string;
}

const mockEmployees: Employee[] = [
    { id: 1, name: "Amit Sharma" },
    { id: 2, name: "Sophia Patel" },
    { id: 3, name: "Rahul Mehta" },
    { id: 4, name: "Neha Gupta" },
    { id: 5, name: "Daniel Wilson" },
]

export default function PeerAppreciationForm() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
    const [message, setMessage] = useState("");

    const toggleEmployee = (employee: Employee) => {
        if (selectedEmployees.some((e) => e.id === employee.id)) {
            setSelectedEmployees((prev) =>
                prev.filter((e) => e.id !== employee.id)
            );
            setDropdownOpen(false)
        } else {
            setSelectedEmployees((prev) => [...prev, employee]);
            setDropdownOpen(false)
        }
    };

    const removeEmployee = (id: number) => {
        setSelectedEmployees((prev) => prev.filter((e) => e.id !== id));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert(
            `Sending appreciation to: ${selectedEmployees
                .map((e) => e.name)
                .join(", ")}`
        );

        setMessage("");
        setSelectedEmployees([]);
    };

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.title}>Peer Appreciation</h2>
            <p className={styles.subtitle}>
                Recognize and celebrate your colleagues
            </p>

            <form className={styles.card} onSubmit={handleSubmit}>
                <h3 className={styles.sectionTitle}>Send Appreciation</h3>
                <p className={styles.sectionSubtitle}>
                    Show your gratitude to a team member
                </p>

                {/* Select Employee */}
                <label className={styles.inputLabel}>Select Employee *</label>

                <div
                    className={styles.selectBox}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span className={styles.placeholder}>
                        {selectedEmployees.length === 0
                            ? "Choose a colleague"
                            : `${selectedEmployees.length} selected`}
                    </span>

                    <ChevronDown className={styles.chevron} />

                    {dropdownOpen && (
                        <div className={styles.dropdown}>
                            {mockEmployees.map((emp) => (
                                <div
                                    key={emp.id}
                                    className={`${styles.dropdownItem} ${selectedEmployees.some((e) => e.id === emp.id)
                                            ? styles.activeItem
                                            : ""
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleEmployee(emp);
                                    }}
                                >
                                    {emp.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Selected employee tags */}
                {selectedEmployees.length > 0 && (
                    <div className={styles.selectedContainer}>
                        {selectedEmployees.map((emp) => (
                            <div key={emp.id} className={styles.tag}>
                                {emp.name}
                                <button
                                    type="button"
                                    className={styles.removeTag}
                                    onClick={() => removeEmployee(emp.id)}
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Message */}
                <label className={styles.inputLabel}>Appreciation Message *</label>
                <textarea
                    className={styles.textarea}
                    placeholder="Write a heartfelt message of appreciation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {/* Button */}
                <button className={styles.submitButton}>
                    <Send size={16} />
                    Send Appreciation
                </button>
            </form>
        </div>
    );
}
