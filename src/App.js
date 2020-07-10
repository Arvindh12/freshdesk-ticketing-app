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
      var id = temp.id;
      delete temp.id;
      fetch('https://5f0760909c5c250016306e77.mockapi.io/v1/tickets/'+id, {
        method: 'PUT',
        body: JSON.stringify(temp),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
    .then((result) => {
      
      setInitialState({ name: "", description: "", contact: "" ,priority : "" , status : "unresolved", agent : "" , id: "new" } )
      setTickets( tickets.filter((ticket) => ticket.id !== result.id).concat(result) )
      setView('DisplayOpenTickets')
     // setTickets(tickets.concat(result));
      console.log("handle edit the form"); })
    .catch((err) => console.log(err))

      
    }
   // console.log(ticketId)

  }

  const handleContactSubmit = (data) => {
    fetch('https://5f0760909c5c250016306e77.mockapi.io/v1/contacts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((res) => res.json())
  .then((result) => {

    setContacts(contacts.concat(result))

  })
  .catch(err => {console.log(err)})
    
  }

  const handleAgentSubmit = (data) => {
    fetch('https://5f0760909c5c250016306e77.mockapi.io/v1/agents', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((res) => res.json())
  .then((result) => {

    setAgents(agents.concat(result))

  })
  .catch(err => {console.log(err)})   
  }

  const handleResolveChange = (data) =>{
    console.log(data)
    var temp = JSON.parse(JSON.stringify(tickets));
    var isSet = -1;
    temp = temp.map((ticket,index) => {
      if(ticket.id === data){
        if(ticket.status === "unresolved") {
          ticket.status = "resolved";
          isSet = index
          return ticket
        }
      }
      return ticket;
    })
    if(isSet > -1){
      fetch('https://5f0760909c5c250016306e77.mockapi.io/v1/tickets/'+temp[isSet].id, {
        method: 'PUT',
        body: JSON.stringify(temp[isSet]),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
    .then((result) => {
      setTickets(temp)
      console.log(result)

    })


    }
   
  }

  const handleEditTicket = (data) => {
   // initialState = data;
if(data.status=== 'unresolved'){
    setInitialState(data)
    setView('CreateTickets')
  }
  }

  useEffect(() => {
  Promise.all([
    fetch("https://5f0760909c5c250016306e77.mockapi.io/v1/tickets"),
    fetch("https://5f0760909c5c250016306e77.mockapi.io/v1/contacts"),
    fetch("https://5f0760909c5c250016306e77.mockapi.io/v1/agents")
  ]).then(([ticket, contact, agent]) => {

    return Promise.all([ticket.json(), contact.json(), agent.json()])

  })
  .then(([ticket, contact, agent]) => {
   setTickets(ticket);
   setContacts(contact)
   setAgents(agent)
  })
  .catch((err) => {
      console.log(err);
  });

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
