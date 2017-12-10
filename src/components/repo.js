import React from 'react';

const Repo = ({ repo, onRepoSelect }) => {

   const responseURL = repo.request.responseURL.split("/");
   repo.owner = responseURL[responseURL.length - 3];
   repo.name = responseURL[responseURL.length - 2];
   const labellist = responseURL[responseURL.length - 1].split("=");
   repo.label = labellist[labellist.length - 1].split("%20").join(" ");
   repo.numIssues = repo.data.length;

   //get color
   if (repo.numIssues === 0)
      repo.labelColor = { "backgroundColor": "#e1e4e8" };
   else {
      const tmp = repo.data[0].labels;
      for (var j = 0; j < tmp.length; j++) {
         const tmpname = tmp[j].name;
         const color = tmp[j].color === "ffffff" ? "#e1e4e8" : "#" + tmp[j].color;
         if (tmpname === repo.label) {
            repo.labelColor = { "backgroundColor": color };
            //console.log(repo.labelColor);
            break;
         }
      }
   }

   return (
      <tr onClick={() => onRepoSelect(repo) } className = "row" key={this.name}>
         <td className="col-xs-5"><em>{repo.owner}</em>/{repo.name}</td>
         <td className="col-xs-5 label" style={repo.labelColor}>{repo.label}</td>
         <td className="col-xs-2">{repo.numIssues}</td>
      </tr>
   )
}

export default Repo;