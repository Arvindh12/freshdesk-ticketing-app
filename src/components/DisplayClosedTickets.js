import React from 'react'
import Ticketcard from './Ticketcard'

function DisplayClosedTickets({data, handleResolveChange,handleEditTicket}) {
    return (
        <div>
             {data.filter((ticket) => ticket.status === "resolved").map(ticket => <Ticketcard ticket ={ticket} handleResolveChange={handleResolveChange} key ={ticket.id} handleEditTicket={handleEditTicket}/> )}
        </div>
    )
}

export default DisplayClosedTickets
