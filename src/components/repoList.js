import React, { Component } from 'react';
import Repo from './repo';

const RepoList = ({ repolist, onRepoSelect }) => {

   if(!repolist) {
      return <td>Loading...</td>;
   }

   const repos = repolist.map((repo) => {
      return (
         <Repo repo={repo} key={repo.headers.etag} onRepoSelect={onRepoSelect}/>
      );
   });

   return (
      <div>
         <table>
            <thead>
               <tr className="row no-hover" valign="middle" style={{ "border-bottom": "1px solid #e1e4e8" }}>
                  <th className="col-xs-5">Repository</th>
                  <th className="col-xs-5">Label</th>
                  <th className="col-xs-2" style={ {"fontSize":14} }>Open Issues</th>
               </tr>
            </thead>
            <tbody>{repos}</tbody>
         </table>
      </div>
   )
}

export default RepoList;