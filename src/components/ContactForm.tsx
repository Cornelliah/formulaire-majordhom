import React, { useState } from 'react';
import {AvailabilityChip} from './AvailabilityChip';

type Availability = { 
    day: string; 
    hour: number; 
    minute: number }

type FormType = {
  gender: string;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  messagetype: string;
  availabilities: Availability[];
  message: string;
};

export default function ContactForm () {

 const [form, setForm] = useState <FormType>({
        gender: "",
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        messagetype:"",
        availabilities: [],
        message: "",
  });

 const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
const [selectedDay, setSelectedDay] = useState("Lundi");
const [selectedHour, setSelectedHour] = useState(9);
const [selectedMinute, setSelectedMinute] = useState(0);

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


return (
    <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
         <h2> CONTACTEZ L'AGENCE</h2>
         

         <div className="grid">
            
            <div className="left">
               <h4>Vos coordonnées</h4>  
               <div className="radio-group">
                    <input type="radio" name="gender" id="female"  checked={form.gender === "Mme"} onChange={handleChange}/>
                    <label htmlFor="female">Mme</label>
                    <input type="radio" name="gender" id="male"  checked={form.gender === "M"} onChange={handleChange} />
                    <label htmlFor="male">M</label>
               </div>
               <input type="text" name="lastname" id="lastname" placeholder='Nom' value={form.lastname} onChange={handleChange}/>
               <input type="text" name="firstname" id="firstname" placeholder='Prénom' value={form.firstname} onChange={handleChange}/>
               <input type="email" name="email" id="email" placeholder='Adresse mail' value={form.email} onChange={handleChange}/>
               <input type="tel" name="telephone" id="telephone" placeholder='Téléphone' value={form.telephone} onChange={handleChange}/>
              
              <h4>Disponibilités pour une visite</h4>
              <select name="day" id="day" onChange={(e) => setSelectedDay(e.target.value)}>
                    {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map(jour => (
                         <option key={jour} value={jour}>{jour}</option>
                    ))}              
              </select>  
              <select name="hour" id="hour" onChange={(e) => setSelectedHour(Number(e.target.value))}>
                    {Array.from({ length: 12 }, (_, i) => i + 9).map(hour => (
                          <option key={hour} value={hour}>{hour}h</option>
                        ))
                    }
                </select>
              <select name="minute" id="minute" onChange={(e) => setSelectedMinute(Number(e.target.value))}>
                    {[0, 15, 30, 45].map((min) => (
                        <option key={min} value={min}>
                        {min.toString().padStart(2, "0")}m
                        </option>
                    ))}
              </select>
              <button type="button"  onClick={addAvailability}>
                    Ajouter dispo
              </button>

              <div className="availabilities">
                    {form.availabilities.map((a, index) => (
                        <AvailabilityChip
                        key={index}
                        day={a.day}
                        hour={a.hour}
                        minute={a.minute}
                        onDelete={() =>
                        setForm({
                            ...form,
                            availabilities: form.availabilities.filter((_, i) => i !== index),
                        })
                        }
                        />
                    ))}
               </div>  
            </div>
    
            
            <div className="right">
                <h4>Votre message</h4>
                { ['Demande de visite', 'Être rappelé.e', 'Plus de photos' ].map((type) => (
                        <label key={type}>
                        <input type="radio" name="messagetype" id={type} value={type} checked={form.messagetype === type} onChange={handleChange}/>
                        {type}
                        </label>
                    ))}
                <textarea name="message" id="message"  placeholder='Votre message' value={form.message} onChange={handleChange}></textarea>
                <input type="submit" value="Envoyer" />
            </div>   
         </div>
        
         
        </form>
      
      
    </div>
)
}