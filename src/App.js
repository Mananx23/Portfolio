import React from 'react';
import MainLanding from './components/mainLanding/MainLanding';
import Contacts from './components/mainLanding/Contacts';
import Toolbox from './components/SkillSection/Toolbox';
import ProjectSection from './components/ProjectSection/ProjectSection';



const App = () =>(

   <div className="app">
      <MainLanding/>
      <Toolbox/>
      <ProjectSection/>
   </div>
 
)

export default App;
