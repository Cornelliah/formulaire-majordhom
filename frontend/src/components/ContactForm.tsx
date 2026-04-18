import React, { useState } from 'react';
import { AvailabilityChip } from './AvailabilityChip';
import './ContactForm.css';

type Availability = {
  day: string;
  hour: number;
  minute: number;
};

type FormType = {
  gender: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  requestVisit: boolean;
  callMeBack: boolean;
  morePhotos: boolean;
  availabilities: Availability[];
  message: string;
};

export default function ContactForm() {
  const [selectedDay, setSelectedDay] = useState("Lundi");
  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const [selectedMessageType, setSelectedMessageType] = useState<string>("");

  const [form, setForm] = useState<FormType>({
    gender: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    requestVisit: false,
    callMeBack: false,
    morePhotos: false,
    availabilities: [],
    message: "",
  });

  const addAvailability = () => {
    const newAvailability = {
      day: selectedDay,
      hour: selectedHour,
      minute: selectedMinute,
    };

    setForm({
      ...form,
      availabilities: [...form.availabilities, newAvailability],
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMessageTypeChange = (type: string) => {
    setSelectedMessageType(type);

    setForm({
      ...form,
      requestVisit: type === "Demande de visite",
      callMeBack: type === "Être rappelé.e",
      morePhotos: type === "Plus de photos",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        alert("Votre message a été envoyé avec succès !");
        setForm({
          gender: "",
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          requestVisit: false,
          callMeBack: false,
          morePhotos: false,
          availabilities: [],
          message: "",
        });
        setSelectedMessageType("");
      } else {
        alert(result.errors ? result.errors.join('\n') : result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Impossible de contacter le serveur.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>CONTACTEZ L'AGENCE</h2>

        <div className="grid">
          <div className="left">
            <h4>VOS COORDONNÉES</h4>

            <div className="radio-group">
              <input
                type="radio"
                name="gender"
                value="Mme"
                checked={form.gender === "Mme"}
                onChange={handleChange}
              />
              <label>Mme</label>

              <input
                type="radio"
                name="gender"
                value="M"
                checked={form.gender === "M"}
                onChange={handleChange}
              />
              <label>M</label>
            </div>

            <div className="name-row">
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                value={form.lastname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="firstname"
                placeholder="Prénom"
                value={form.firstname}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Adresse mail"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={form.phone}
              onChange={handleChange}
            />

            <h4>DISPONIBILITÉS</h4>

            <div className="availability-selectors">
              <select onChange={(e) => setSelectedDay(e.target.value)}>
                {['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'].map(d => (
                  <option key={d}>{d}</option>
                ))}
              </select>

              <select onChange={(e) => setSelectedHour(Number(e.target.value))}>
                {Array.from({ length: 12 }, (_, i) => i + 9).map(h => (
                  <option key={h}>{h}h</option>
                ))}
              </select>

              <select onChange={(e) => setSelectedMinute(Number(e.target.value))}>
                {[0, 15, 30, 45].map(m => (
                  <option key={m}>{m.toString().padStart(2, "0")}m</option>
                ))}
              </select>

              <button type="button" onClick={addAvailability}>
                AJOUTER
              </button>
            </div>

            <div className="availabilities">
              {form.availabilities.map((a, i) => (
                <AvailabilityChip
                  key={i}
                  day={a.day}
                  hour={a.hour}
                  minute={a.minute}
                  onDelete={() =>
                    setForm({
                      ...form,
                      availabilities: form.availabilities.filter((_, idx) => idx !== i),
                    })
                  }
                />
              ))}
            </div>
          </div>

          <div className="right">
            <h4>VOTRE MESSAGE</h4>

            <div className="radio-group">
              {[
                "Demande de visite",
                "Être rappelé.e",
                "Plus de photos",
              ].map((type) => (
                <label key={type}>
                  <input  type="radio"   name="messageTypeUI"   checked={selectedMessageType === type}
                    onChange={() => handleMessageTypeChange(type)}
                  />
                  {type}
                </label>
              ))}
            </div>

            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
            />

            <input type="submit" className="submit" value="Envoyer" />
          </div>
        </div>
      </form>
    </div>
  );
}