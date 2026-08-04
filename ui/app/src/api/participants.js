import React from "react";



const BASE_URL = "http://192.168.0.67:8080";

// ─── Participants ────────────────────────────────────────────────────────────

/**
 * Fetch all participants
 * Usage: const participants = await getAllParticipants();
 */
export const getAllParticipants = async () => {
    const response = await fetch(`${BASE_URL}/participants/fetch/all`);
    if (!response.ok) throw new Error("Failed to fetch participants");
    return response.json();
};

/**
 * Add a new participant
 * Usage: const newParticipant = await addParticipant({ first_name, last_name, telephone, email });
 */
export const addParticipant = async (participantData) => {
    const response = await fetch(`${BASE_URL}/participants/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(participantData),
    });
    if (!response.ok) throw new Error("Failed to add participant");
    return response.json();
};

/**
 * Search participants by name or email
 * Usage: const results = await searchParticipants("john");
 */
export const searchParticipants = async (query) => {
    const response = await fetch(
        `${BASE_URL}/participants/search?query=${encodeURIComponent(query)}`
    );
    if (!response.ok) throw new Error("Failed to search participants");
    return response.json();
};

/**
 * Get a single participant by ID
 * Usage: const person = await getParticipantById(5);
 */
export const getParticipantById = async (id) => {
    const response = await fetch(`${BASE_URL}/participants/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch participant with id ${id}`);
    return response.json();
};

/**
 * Delete a participant by ID
 * Usage: await deleteParticipant(5);
 */
export const deleteParticipant = async (id) => {
    const response = await fetch(`${BASE_URL}/participants/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error(`Failed to delete participant with id ${id}`);
    return response.json();
};

/**
 * Update a participant by ID
 * Usage: const updated = await updateParticipant(5, { first_name: "Jane" });
 */
export const updateParticipant = async (id, updatedData) => {
    const response = await fetch(`${BASE_URL}/participants/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error(`Failed to update participant with id ${id}`);
    return response.json();
};
