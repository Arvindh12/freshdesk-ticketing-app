import React from "react";
import { useState } from "react";

import "./App.css";
import DisplayOpenTickets from "./components/DisplayOpenTickets";
import CreateTicket from "./components/CreateTicket"
import Navbar from './components/navbar'
import CreateContact from './components/CreateContact'
import DisplayClosedTickets from './components//DisplayClosedTickets'
import CreateAgents from './components/CreateAgents'

function App() {
  const [ticketId, setticketId] = useState(0)

  const [tickets, setTickets] = useState([
    { name: "arvindh", description: "ticket creation", contact: "ash" ,priority : "High" , status : "unresolved" , agent : "guvi" , id : 0 }
  ]);

  const [contacts, setContacts] = useState([])


  const [view, setView] = useState("CreateTickets")

  const handleTicketSubmit = (data) =>{
    console.log("handle submit the form")
    var temp = JSON.parse(JSON.stringify(data));
    temp.id = ticketId; 
    setticketId(ticketId+1)
 setTickets(tickets.concat(temp))


  }

  const handleContactSubmit = (data) => {
    setContacts(contacts.concat(data))
    
  }

  const handleResolveChange = (data) =>{
    console.log(data)
    var temp = JSON.parse(JSON.stringify(tickets));
    temp = temp.map((ticket) => {
      if(ticket.id == data){
        if(ticket.status == "unresolved") {
          ticket.status = "resolved";
          return ticket
        }
      }
      return ticket;
    })
    setTickets(temp)
  }


  return (
    <>
    <div className="sidenav"><Navbar  changeView={setView} /></div>
    <div className="main">
      {/* <button className="">Create Ticket</button> */}
      {{"DisplayOpenTickets" : <DisplayOpenTickets data={tickets} handleResolveChange={handleResolveChange} />,
        "CreateTickets":  <CreateTicket contacts={contacts} handleTicketSubmit={handleTicketSubmit} initialState={{ name: "", description: "", contact: "" ,priority : "" , status : "resolved"}} /> ,
       "CreateContact" :  <CreateContact handleContactSubmit={handleContactSubmit} contactData={contacts} />,
        "DisplayClosedTickets" : <DisplayClosedTickets data={tickets} handleResolveChange={handleResolveChange} />,
        "CreateAgent" : <CreateAgents />
      }[view]
      }
         </div>
    </>
  );
}

export default App;
