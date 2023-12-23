Project Structure
The project follows a simple component-based architecture:
src
|-- components
|   |-- App.js
|   |-- TodoList.js
|   |-- TodoItem.js
|   |-- Input.js
|   |-- Button.js
|-- App.css
|-- index.js
|-- ...
Components
App
The main component that manages the state of the TODO app. It renders the TodoList component.

TodoList
Displays the list of TODO items. Maps through the array of todos and renders a TodoItem for each one.

TodoItem
Represents an individual TODO item. Allows marking a todo as completed and deleting it.

Input
A form component for adding a new TODO. It includes a submit button to add the new todo to the list.

Button
A generic button component used for handling onClick events.

State Management
The state of the TODO app is managed in the App component. Each TODO item in the state includes text and a completion status.

Functionality
Adding a new todo
Removing a todo
Editing a todo
Marking a todo as done
Removing all todos
Functions to handle these functionalities are implemented in the App component.

Styling
The components are styled using CSS and Bootstrap classes for a clean and responsive design.

Local Storage
Todo list items are stored in local storage, ensuring that they persist even after a page refresh.
