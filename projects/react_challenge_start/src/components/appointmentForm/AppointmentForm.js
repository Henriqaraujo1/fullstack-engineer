import React from "react";

import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Appointment Title"
          />
        </label>
        <label>
          <ContactPicker
            name="contact"
            value={contact}
            contacts={getContactNames()}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Appointment With"
          />
        </label>
        <label>
          <input
            type="date"
            name="date"
            min={getTodayString()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Add Appointment" />
      </form>
    </div>
  );
};
