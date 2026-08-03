import { useState, useEffect } from "react";
import "./GetAllParticipants.css";

const GetAllParticipants = () => {
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://192.168.0.67:8080/participants/fetch/all")
            .then(response => response.json())
            .then(data => {
                setParticipants(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching participants:", error);
                setError("Failed to load participants.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="participants-container">
            <h1 className="participants-title">All Participants</h1>
            <p className="participants-count">{participants.length} participant{participants.length !== 1 ? "s" : ""}</p>

            {loading && <p className="status-msg">Loading...</p>}
            {error && <p className="status-msg error">{error}</p>}

            {!loading && !error && participants.length === 0 && (
                <p className="status-msg">No participants found.</p>
            )}

            {!loading && !error && participants.length > 0 && (
                <div className="table-wrapper">
                    <table className="participants-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Telephone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {participants.map((participant, index) => (
                                <tr key={participant.id}>
                                    <td>{index + 1}</td>
                                    <td>{participant.first_name}</td>
                                    <td>{participant.last_name}</td>
                                    <td>{participant.email}</td>
                                    <td>{participant.telephone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default GetAllParticipants;