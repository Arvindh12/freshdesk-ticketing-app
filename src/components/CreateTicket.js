import React from 'react'

function CreateTicket({contacts , handleTicketSubmit , initialState , agents}) {

    const [data, setData] = React.useState(initialState)

    const handleChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        var temp = JSON.parse(JSON.stringify(data));
        temp[name] = value;
        setData(temp);
        console.log(temp)
    }


    return (
        <div>
            <form onSubmit={(event) => { event.preventDefault();handleTicketSubmit(data) }} >
                <label> Name:
                <input type="text" name="name" value={data.name } onChange={handleChange} />
                </label> <br />
                <label> Description:
                <input type="text" name="description" value={data.description} onChange={handleChange}/>
                </label>  <br />
                <label> Priority:
                <select value={data.priority}  name="priority" onChange={handleChange}>
                <option value="">Select your option</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>

          </select>
                </label> <br />
                <label> Contact:
                <select value={data.contact} name="contact" onChange={handleChange}>
                <option value="">Select your option</option>
            {/* <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option> */}
            {
                contacts.map((data) => <option value={data.name}>{data.name}</option>)
            }

          </select>
                </label> <br />

                <label> Agent:
                <select value={data.agent} name="agent" onChange={handleChange}>
                <option value="">Select your option</option>
            {/* <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option> */}
            {
                agents.map((data) => <option value={data.name}>{data.name}</option>)
            }

          </select>
                </label> <br />

                <input type="submit" value="Submit" /> 
            </form>
        </div>
    )
}

export default CreateTicket