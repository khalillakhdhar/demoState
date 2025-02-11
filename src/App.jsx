import { useState } from 'react'

//import './App.css'

function App() {
  const [formData, setFormData] = useState({
  nom:'',
  email:'',
  pays:'',
  age:'',
  genre:'',
  abonnement:{
    newletter:false,
    offres:false
  },
  file:null
  
  });
const handleChange = (e) => {
  const {name,type,value,checked,file} = e.target;
  if(type==='checkbox'){
    setFormData((prev)=>({
      ...prev,
      abonnement:{
        ...prev.abonnement,
        [value]:checked
      }
    }))
  }
  else if(type==='file'){
    setFormData((prev)=>({
      ...prev,
      file:file[0]
    }))
  }
  else{
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
}

 return (
 <div>
<label>Nom</label>
<input type="text" value={formData.nom} name='nom' onChange={handleChange} />
<br />
<label>Email</label>
<input type="email" value={formData.email} name='email' onChange={handleChange} />
<br />
{/* selectbox */}
<label>Pays</label>
<select value={formData.pays} name='pays' onChange={handleChange}>
  <option value=''></option>
  <option value="Tunisie">Tunisie</option>
  <option value="Algérie">Algérie</option>
  <option value="Maroc">Maroc</option>

</select>
<br />
{/* number */}
<label>Age</label>
<input type="number" value={formData.age} name='age' min="18" onChange={handleChange} /><br />
{/* radio */}
<label>Genre</label>
<input type="radio" checked={formData.genre==="homme"} onChange={handleChange} value="homme" name="genre" />Homme<br />
<input type="radio" value="femme" checked={formData.genre==="femme"} onChange={handleChange} name="genre" />Femme<br />
{/* checkbox */}
<label>Abonnement</label>

<input type="checkbox" value="newletter" checked={formData.abonnement.newletter} name="abonnement" onChange={handleChange} />Recevoir la newletter
<br />
<input type="checkbox" value="offres" checked={formData.abonnement.offres} name="abonnement" onChange={handleChange} />Recevoir les offres
{/* file */}
<br />
<label>Joindre le C.V</label>
<input type="file" value={formData.file} name='file' onChange={handleChange} /><br />
<br />
<button>Envoyer</button>
<br /><br />
{JSON.stringify(formData)}
 </div>
 );

}

export default App
