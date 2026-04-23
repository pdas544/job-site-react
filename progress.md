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
- JSX is JavaScript eXtension
- Name of each component starts with a Capital letter, for example, App.jsx or App.tsx
- We can additional componets which needs to be imported inside the App.jsx file before using.
- For instance, `src/components/Navbar.jsx` is the component containing the navbar. A component can return only a single element inside the return method.
- Javascript expressions can be used inside the `{}` curly brackets.
- Additional attribute such as `class` are written as `className`. For eg: `<h1 className=text-4xl>`

## 2. Props
- We can pass data into the components using props, for eg:
`const Hero = ({title="React based Job Posting Site", subTitle="React Crash Course"}) => {
  return () }` where title and subTitle are the props, which are used by the Hero card.
