/* eslint-disable react/prop-types */
import { useState,useEffect} from "react";
import "./App.css";

function TakeInput({ handleSubmit, isEdited, personData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNb: "",
  });

  useEffect( () =>{
    if (isEdited)
    {
      setFormData(personData);
    }
  },[personData,isEdited]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    handleSubmit(formData);
    setFormData({ name: "", email: "", phoneNb: "" });
  };
  return (
    <div className="flex flex-col gap-1">
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="name"
        onChange={handleChange}
        disabled={!isEdited}
        className="bg-slate-50 text-blue-950"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="email"
        onChange={handleChange}
        disabled={!isEdited}
className="bg-slate-50 text-blue-950"
      />
      <input
        type="text"
        name="phoneNb"
        value={formData.phoneNb}
        placeholder="phoneNb"
        onChange={handleChange}
        disabled={!isEdited}
        className="bg-slate-50 text-blue-950"
      />
      <button onClick={onSubmit} type="submit" disabled={!isEdited}>
        submit
      </button>
    </div>
  );
}

function DisplayOutput({ name, email, phoneNb, switchToEdit ,deletePerson}) {
  return (
    <div className="flex flex-col pb-11 relative min-w-16">
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{phoneNb}</h3>
      <button className="absolute right-3 bottom-1" onClick={switchToEdit}>Edit</button>
      <button onClick={deletePerson}>delete</button>
    </div>
  );
}
function App() {
  const [person, setPerson] = useState({ name: "", email: "", phoneNb: "" });
  const [isEdited, setEdit] = useState(true);
  const handleSubmit = (formData) => {
    setPerson(formData);
    setEdit(false);
  };
  const switchToEdit = () => {
    setEdit(true);

  };
  const deletePerson= () => {
    setPerson({ name: "", email: "", phoneNb: "" });
    setEdit(true);
  };

  return (
    
    <div className="h-screen flex gap-40 justify-center items-center content-center">
      <TakeInput handleSubmit={handleSubmit} isEdited={isEdited} personData={person}></TakeInput>
      <DisplayOutput 
        name={person.name}
        email={person.email}
        phoneNb={person.phoneNb}
        switchToEdit={switchToEdit}
        deletePerson={deletePerson}
      ></DisplayOutput>
    </div>

  );
}
export default App;
