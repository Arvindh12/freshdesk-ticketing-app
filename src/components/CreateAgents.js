import React from 'react'
import CreateContact from './CreateContact'

function CreateAgents({handleAgentSubmit , agentData }) {
    return (
        <div>
            <CreateContact  handleContactSubmit= {handleAgentSubmit} contactData={agentData} content={'Agent'}/>
        </div>
    )
}

export default CreateAgents
