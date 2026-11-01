import React, { useState } from "react";
import Swal from "sweetalert2";

// Modal Component matching your backend payload expectations
export default function ConsultationModal({ isOpen, onClose, selectedCategory }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: selectedCategory || "Custom Interior Design",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  // Keep selected category synced when modal opens from different card clicks
  React.useEffect(() => {
    if (selectedCategory) {
      setFormData((prev) => ({ ...prev, category: selectedCategory }));
    }
  }, [selectedCategory]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Replace '/api/contact' with your actual API endpoint route path if different
      const res = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle: `Interior Consultation Booking - ${formData.category}`,
          ...formData,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setTimeout(() => {
          onClose();
          setStatus({ loading: false, success: false, error: null });
        }, 3000);
        Swal.fire({text:"Booking sent , We shall get back to you soon. Thanks", icon:"success" });
setFormData({
    fullName: "",
    email: "",
    phone: "",
    category:"",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });
      } else {
        throw new Error(data.message || "Failed to submit request.");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={modalStyles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <h2 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>Book a Consultation</h2>
        <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          Fill out the details below to schedule your consultation.
        </p>

        {status.success ? (
          <div style={modalStyles.successBox}>
            <p>🎉 Your consultation request has been sent successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={modalStyles.form}>
            {status.error && <div style={modalStyles.errorBox}>{status.error}</div>}

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Consultation Type</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={modalStyles.input}
                required
              >
                <option value="Custom Interior Design">Custom Interior Design</option>
                <option value="Total Interior Transformation">Total Interior Transformation</option>
                <option value="Single Room Redesign">Single Room Redesign</option>
                <option value="Commercial Space Design">Commercial Space Design</option>
              </select>
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                style={modalStyles.input}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={modalStyles.formGroup}>
                <label style={modalStyles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.formGroup}>
                <label style={modalStyles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+234..."
                  value={formData.phone}
                  onChange={handleChange}
                  style={modalStyles.input}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={modalStyles.formGroup}>
                <label style={modalStyles.label}>Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.formGroup}>
                <label style={modalStyles.label}>Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  style={modalStyles.input}
                />
              </div>
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Project Details / Notes (Optional)</label>
              <textarea
                name="notes"
                rows="3"
                placeholder="Tell us a little about your space or ideas..."
                value={formData.notes}
                onChange={handleChange}
                style={{ ...modalStyles.input, resize: "vertical" }}
              />
            </div>

            <button type="submit" disabled={status.loading} style={modalStyles.submitBtn}>
              {status.loading ? "Submitting..." : "Confirm & Book"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// Inline Styles for Modal
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "1rem",
  },
  modal: {
    background: "#ffffff",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "520px",
    padding: "2rem",
    position: "relative",
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
  },
  closeBtn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "transparent",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#64748b",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  submitBtn: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#1e293b",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  successBox: {
    padding: "1.5rem",
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    color: "#166534",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "500",
  },
  errorBox: {
    padding: "0.75rem",
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#991b1b",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
};