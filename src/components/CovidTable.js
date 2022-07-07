import React from 'react';

export default function CovidTable(props) {
    return (
        
            <>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.branch}</td>
                    <td>{props.year}</td>
                    <td>{props.vaccination_type}</td>
                    <td>{props.date_1}</td>
                    <td>{props.date_2}</td>
    
            </>
                
               
                
        
    )
}
