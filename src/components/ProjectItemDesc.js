import React from 'react'

const ProjectItemDesc = ({ description }) => {
    return (
        <div className='py-5'>
            {
                description.map((text, idx) => {
                    return (
                        <p key={idx} className='py-2 font-light indent-5'>
                            {text}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default ProjectItemDesc;