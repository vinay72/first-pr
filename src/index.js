import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RepoList from './components/repoList';
import Issues from './components/issues';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

const requestUrls = ["https://api.github.com/repos/mozilla/pdf.js/issues?labels=5-good-beginner-bug", 
   "https://api.github.com/repos/cdnjs/cdnjs/issues?labels=BEGINNER", 
   "https://api.github.com/repos/pouchdb/pouchdb/issues?labels=first%20timers%20only",
   "https://api.github.com/repos/avajs/ava/issues?labels=good%20for%20beginner",
   "https://api.github.com/repos/kinto/kinto.js/issues?labels=easy-pick",
   "https://api.github.com/repos/eslint/eslint/issues?labels=beginner",
   "https://api.github.com/repos/emberjs/ember.js/issues?labels=Good%20for%20New%20Contributors",
   "https://api.github.com/repos/FreeCodeCamp/FreeCodeCamp/issues?labels=first-timers-only",
   "https://api.github.com/repos/TryGhost/Ghost/issues?labels=good%20first%20issue",
   "https://api.github.com/repos/moment/moment/issues?labels=Up-For-Grabs",
   "https://api.github.com/repos/zeit/next.js/issues?labels=good%20first%20issue"
];

export default class App extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         repos: [],
         selectedRepo: null
      }
   }

   componentDidMount() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const issuesJSON = requestUrls.map(function(url) {
         return axios.get(url)
            .then(res => {
               return res;
            })
      });


      Promise.all(issuesJSON).then(results => {
         console.log(results);
         this.setState({ repos: results });
      })
   }

   render() {
      return (
         <div className="row">
            <div className="col-lg-5">
               <RepoList 
                  onRepoSelect={selectedRepo => this.setState({ selectedRepo })}
                  repolist={this.state.repos} />
            </div>
            <div className="col-lg-7">
               <Issues selectedRepo={this.state.selectedRepo}/>
            </div>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.querySelector(".react-container"));
registerServiceWorker();