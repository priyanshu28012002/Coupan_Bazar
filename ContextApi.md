Context API

✅ Theme and Styling: You can use the Context API to manage the theme and styling preferences of the user. This allows you to provide a customizable user interface where users can switch between light and dark themes, adjust font sizes, or choose custom color schemes.

Product Catalog: Redux can store product data fetched from an API or database. This includes product details, images, prices, and inventory levels. Storing this data in Redux allows for efficient access to product information throughout the application.

User Preferences and Settings: Redux can store user preferences and settings, such as preferred currency, language, and display options. Storing this data in Redux allows for a personalized user experience that persists across sessions.


let's create a context for toggling between light and dark themes using the Context API in React.

1. **Create the Context**: First, create a new Folder -> src/context 
Sec Create the file UserContext.js

```javascript
import React from "react";

const UserContext = React.createClass() // is contest variable ko es a rapper user karange 

export default UserContext ;
'''
context global variabel
context ke sath ek providet the peovide the data on the raper

<UserContext> UserContext ke through component ko all state ka access milta hai
<Login>

<Card/>
<Login/>

<UserContext/>

```javascript
// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);
```

2. **Wrap Your App with the Provider**: Wrap your entire application with the `ThemeProvider` to make the theme context available to all components.

```javascript
// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import YourApp from './YourApp';

const App = () => {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
};

export default App;
```

3. **Use the Context in Components**: Now, you can use the `useTheme` hook to access the theme and toggle function in any component.

```javascript
// YourComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

const YourComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default YourComponent;
```

With this setup, you can easily toggle between light and dark themes throughout your application by accessing the theme context.