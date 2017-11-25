import React from 'react';

const Issues = ({ selectedRepo }) => {
   let issues;
   if (!selectedRepo) issues = <tr className="row issues-row"><td>Select a repository</td></tr>;

   else {
      issues = selectedRepo.data.map((issue) => {
         const date = issue.created_at.split("T")[0];
         const num = issue.number;
         return (  
               <tr key={issue.id} className="row issue-row">
                  <a style={{ "textDecoration": "none", "color": "#24292e" }} href={issue.html_url}>
                     <td> 
                        <span style={{ "color" : "silver", "font-weight" : "normal"}}>[#{num}]</span> {issue.title}
                        <div className="date">opened {date}</div>
                     </td>
                  </a>
               </tr>
           
         );
      });   
   }
   
   return (
      <div className="jumbotron">
         <table>
            <tbody>{issues}</tbody>
         </table>
      </div>
   )
}

export default Issues;