import React from 'react'

function CreateContact({handleContactSubmit , contactData}) {

    const [data, setData] = React.useState({name:"",company:"",position:""})

    const handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        var temp = JSON.parse(JSON.stringify(data));
        temp[name] = value;
        setData(temp);

    }

    console.log(contactData)



    return (
        <div>
            <form onSubmit={(event) => {event.preventDefault();handleContactSubmit(data) }}>
            <label>Contact Name: 
            <input type="text" name ="name"  value={data.name } onChange={handleChange} />    
            </label>
            <label>Company Name: 
            <input type="text" name ="company"  value={data.company } onChange={handleChange} />    
            </label>
            <label>Position: 
            <input type="text" name ="position"  value={data.position } onChange={handleChange} />    
            </label>
            <input type="submit" value="Submit" />    
            </form>
            <div>
            <h3>Saved Contats</h3>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Position</th>
    </tr>
  </thead>
  <tbody> 
      {contactData.map((contact) => 
          <tr>
          <th scope="row">contact.id</th>
          <td>{contact.name}</td>
          <td>{contact.company}</td>
          <td>{contact.position}</td>
        </tr> 
      )}


  </tbody>
</table>
            </div>
        </div>
    )
}

export default CreateContact
