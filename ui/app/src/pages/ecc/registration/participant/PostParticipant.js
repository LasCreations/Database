import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostParticipant.css";

const PostParticipant = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        telephone: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://192.168.0.67:8080/participants/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Failed to add student.");

            const data = await response.json();
            console.log("Student added successfully:", data);
            navigate("/participants");
        } catch (err) {
            console.error("Error adding student:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">
                    <h1>Add Participant</h1>
                    <p>Fill in the details below to register a new participant.</p>
                </div>

                {error && <div className="form-error">{error}</div>}

                <form onSubmit={handleSubmit} className="student-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                id="first_name"
                                type="text"
                                name="first_name"
                                placeholder="e.g. John"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                id="last_name"
                                type="text"
                                name="last_name"
                                placeholder="e.g. Doe"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone">Telephone</label>
                        <input
                            id="telephone"
                            type="text"
                            name="telephone"
                            placeholder="e.g. +1 555 000 0000"
                            value={formData.telephone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="e.g. john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-secondary" onClick={() => navigate("/")}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? "Submitting..." : "Add Participant"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostParticipant;