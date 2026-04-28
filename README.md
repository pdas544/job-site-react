## React Crash Course

- Installation: Check the Official Website react.dev
- Inside the terminal of VS Code run the following
`
npm create vite@latest <folder-name>
`
where folder-name is the project directory
- Choose React -> Javascript

## 1. Components
- React uses components. main.jsx is the Entry Point: which loads the main component called
App.jsx in a div with id = App.
- App.jsx is imported at the top of the file.
- App component is rendered inside the main.jsx using `<App />`
- JSX is JavaScript Syntax eXtension: allows user to HTML like markup directly into javascript files.
- Name of each component starts with a Capital letter, for example, App.jsx or App.tsx
- We can additional componets which needs to be imported inside the App.jsx file before using.
- For instance, `src/components/Navbar.jsx` is the component containing the navbar. A component can return only a single element inside the return method.
- Javascript expressions can be used inside the `{}` curly brackets.
- Additional attribute such as `class` are written as `className`. For eg: `<h1 className=text-4xl>`

## 2. Props
- We can pass data into the components using props, for eg:
`const Hero = ({title="React based Job Posting Site", subTitle="React Crash Course"}) => {
  return () }` where title and subTitle are the props, which are used by the Hero card.
- Checkout the `Card` component which is used with Start and End pair. It uses `{children}`. We can display child elements inside the Card component using `{children}` props.

## 3. Hooks
- useState is a hook: It is used to store the state of a component.
- States are of two types: component and global
- `-Step 1: import {useState} from react; Step 2: const [showMore, setShowMore] = useState(false)`
- Checkout `src/components/JobListing.jsx` for the usage


## 4. Routing, Pages, Layout
- Since React JS is a library, it does not have backend abilities such as Routing, Authentication, etc.
- Another library `react-router-dom` needs to be installed to implement Routing
- **Step-1:** `npm i react-router-dom`
- **Step-2:** `import { BrowserRouter } from 'react-router-dom'` in the `main.jsx`
- **Step-3:**  Wrap the `<App/>` component with `<BrowserRouter />` component.
```
<BrowserRouter>
  <App />
</BrowserRouter>
```

- **Step-4:** Use Routes inside the `App.jsx` file as below:
```
  <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
        </Route>
  </Routes>
```

## 5. Hooks - Revisited, JSON-Server, API calls
- `useState()`: component can remember values between renders
- `JobListings.jsx`: When the component loads, `jobs = empty array`, `setLoading = false`.
- When state changes, React redraws the component with new values and calls useState().
- `useEffect()`: to run something after rendering of the component.
- use when we want to talk to outside world, for eg: API calls, timers, DOM, etc.
- In `JobListings.jsx` to fetch jobs from API calls. `[]: dependency array` is required, otherwise, infinite loop.
- New package `json-server` is installed and emulate back-end behavior
- Check package.json => `scripts->server` and vite.config.js => `proxy`. To run server `npm run server` and then
- Jobs are fetched using RESTFul APIs, for eg: `http://localhost:5000/jobs` gives all jobs in src/jobs.json