import React from 'react'
import CreateContact from './CreateContact'

function CreateAgents({handleAgentSubmit , agentData }) {
    return (
        <div>
            <CreateContact  handleContactSubmit= {handleAgentSubmit} contactData={agentData}/>
        </div>
    )
}

export default CreateAgents
