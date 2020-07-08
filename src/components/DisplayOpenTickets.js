import React from 'react'
import Ticketcard from './Ticketcard'
function DisplayOpenTickets({data,handleResolveChange}) {
 

    return (
        <div>
            {data.filter((ticket) => ticket.status == "unresolved").map(ticket => <Ticketcard ticket ={ticket} handleResolveChange={handleResolveChange} key ={ticket.id} /> )}
        </div>
    )
}

export default DisplayOpenTickets
