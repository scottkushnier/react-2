### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router effectively emulates the action of routing from one web page to another, but all on the client side.  In other words, it's a single page (so no page refreshes) but it looks to the user like actual routing, including page history, "back" and "forward" action, and route displayed in title bar.

- What is a single page application?

A single page application is a web app that doesn't require calls to the server to navigate to (& refresh) other pages. Everything happens on a "single page" which is modified in response to user actions. This means that the client sees a much more responsive web page, without full reloads/redraws of pages, in addition to saving network bandwidth and server processing load.

- What are some differences between client side and server side routing?

In server side routing, every link, button, etc. necessitates a call to the server in order to render an entirely new web page. This can look and feel clunky. This can make it more difficult for a web developer because the developer must resort to local storage, tokens, etc. to keep track of the client's "state". Server side routing also incurs more networking bandwidth and server load. Busy networks and servers can incur additional wait time, which is less efficient, and can interfere with a smooth user experience.

- What are two ways of handling redirects with React Router? When would you use each?

(1) One could redirect to a route and have it look like the user actually wanted to go there - including history, back arrow, etc.
(2) One could simply reroute to a home page or "page not found" route in response to some issue (e.g. invalid page). In this case history wouldn't be saved and going "back" would simply return the user to the page from which the bad link was requested.

- What are two different ways to handle page-not-found user experiences using React Router? 

(1) We could use the "`*`" route, which will match any route that hasn't been matched above. Then any invalid route would fall through to here.
(2) We could use route to an address using a URL parameter and render a page
that gives a message such as: `*sdflskdfljsdf* is not a valid page route`.

- How do you grab URL parameters from within a component using React Router?

Using a route with ':' will match the specified variable and allow the developer access to the value specified. For example, a route of '/users/:username' will link
to a page like '/users/scott'. Calling `{ user } = useParams();` will set the variable '`name`' to '`scott`' for whatever use is required. 

- What is context in React? When would you use it?

Context is an effective way to avoid "prop drilling", where you need to send information, conceivably, through a chain of descendants to the component that needs that information. Context allows one to specify that information more *globally* so that it doesn't need to be explicitly passed in a redundant, ugly, and inefficient manner.

- Describe some differences between class-based components and function
  components in React.

Components were originally designed to be class-based. Each object would have a '`render`' method. States were implemented by setting variables in constructor methods. Other actions, such as "cleanup", were implemented through specific methods that would be inherited and called before an object was, for example "destructed". Methods for cleanup would be specified to happen during object destruction. Function components were designed to be more streamlined and elegant in conception and syntax. "Hooks" were designed to enable the kinds of functionality such as saving states, initialization methods, etc.

- What are some of the problems that hooks were designed to solve?

Hooks were invented to facilitate the ability to create components in a modular fashion in order to promote reuse, ease of testing, and transparency of function in React components. For example, custom hooks allow one to design functionality to allow toggle a variable by use of a button. That custom hook could then be used across an app where many buttons could toggle many variables, e.g. client settings like (light/dark mode, logging,  guest mode, etc.) Also, hooks became necessary in going from class-based components to functional components since methods like constructors were no longer applicable.