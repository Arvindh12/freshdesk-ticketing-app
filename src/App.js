import React from "react";
import { useState , useEffect} from "react";

import "./App.css";
import DisplayOpenTickets from "./components/DisplayOpenTickets";
import CreateTicket from "./components/CreateTicket"
import Navbar from './components/navbar'
import CreateContact from './components/CreateContact'
import DisplayClosedTickets from './components//DisplayClosedTickets'
import CreateAgents from './components/CreateAgents'
import EditTickets from './components/EditTickets'

function App() {
  const [ticketId, setticketId] = useState(0)

  const [tickets, setTickets] = useState([
   // { name: "arvindh", description: "ticket creation", contact: "ash" ,priority : "High" , status : "unresolved" , agent : "guvi" , id : 0 }
  ]);

  const [contacts, setContacts] = useState([])

  const [agents, setAgents] = useState([])

  const [view, setView] = useState("CreateTickets")

  const [initialState,setInitialState ] = useState({ name: "", description: "", contact: "" ,priority : "" , status : "unresolved", agent : "" , id: "new" })

  const handleTicketSubmit = (data) =>{

    var temp = JSON.parse(JSON.stringify(data));
    if(temp.id === 'new'){
    delete temp.id ;
    
    fetch('https://5f0760909c5c250016306e77.mockapi.io/v1/tickets', {
      method: 'POST',
      body: JSON.stringify(temp),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((res) => res.json())
  .then((result) => {setTickets(tickets.concat(result));
    console.log("handle submit the form"); })
  .catch((err) => console.log(err))

    
   // setticketId(ticketId+1);
  //  setTickets(tickets.concat(temp))
    console.log("handle submit the form")
  }
    else{
      //initialState = { name: "", description: "", contact: "" ,priority : "" , status : "unresolved", agent : "" , id: "new" }
      setInitialState({ name: "", description: "", contact: "" ,priority : "" , status : "unresolved", agent : "" , id: "new" } )
      setTickets( tickets.filter((ticket) => ticket.id !== temp.id).concat(temp) )
      setView('DisplayOpenTickets')
    }
   // console.log(ticketId)

  }

  const handleContactSubmit = (data) => {
    setContacts(contacts.concat(data))
    
  }
  const handleAgentSubmit = (data) => {
    setAgents(agents.concat(data))
    
  }

  const handleResolveChange = (data) =>{
    console.log(data)
    var temp = JSON.parse(JSON.stringify(tickets));
    temp = temp.map((ticket) => {
      if(ticket.id === data){
        if(ticket.status === "unresolved") {
          ticket.status = "resolved";
          return ticket
        }
      }
      return ticket;
    })
    setTickets(temp)
  }

  const handleEditTicket = (data) => {
   // initialState = data;
if(data.status=== 'unresolved'){
    setInitialState(data)
    setView('CreateTickets')
  }
  }

  useEffect(() => {
    fetch(`https://5f0760909c5c250016306e77.mockapi.io/v1/tickets`)
    .then(results => results.json())
    .then(data => {
      setTickets(data);
    })
    .catch( (err) => console.log(err))

  }, [] )



  return (
    <>
    <div className="sidenav"><Navbar  changeView={setView} /></div>
    <div className="main">
      {/* <button className="">Create Ticket</button> */}
      {{"DisplayOpenTickets" : <DisplayOpenTickets data={tickets} handleResolveChange={handleResolveChange} handleEditTicket={handleEditTicket} />,
        "CreateTickets":  <CreateTicket agents={agents} contacts={contacts} handleTicketSubmit={handleTicketSubmit} initialState={initialState} /> ,
       "CreateContact" :  <CreateContact handleContactSubmit={handleContactSubmit} contactData={contacts} content='Contact' />,
        "DisplayClosedTickets" : <DisplayClosedTickets data={tickets} handleResolveChange={handleResolveChange} handleEditTicket={handleEditTicket} />,
        "CreateAgent" : <CreateAgents handleAgentSubmit= {handleAgentSubmit} agentData={agents} />,
        "EditTickets" : <EditTickets />
      }[view]
      }
         </div>
    </>
  );
}

export default App;
