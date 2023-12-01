import React, {useState} from 'react';

import Login from './Components/Login';
import { ThemeContext , themes } from './Context/themeContext';

function App() {
  const [theme,setTheme]= useState(themes.light)

  
// btn 
function handleOnClick() {
  
  theme === themes.light ? setTheme(themes.dark) :setTheme(themes.light)
}
  return (
    <ThemeContext.Provider value={{theme,handleOnClick}}>
    <div className='main-container'>
      {/* <h1 className='text-center'>Light dark theme </h1>  */}
      <Login theme={theme}/>

    </div>
    </ThemeContext.Provider>
  );
}

export default App;