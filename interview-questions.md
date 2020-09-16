# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer: Super is placed in the constructor of a child's React component so that it can have access to its parent's props.

  Researched answer: From the MDN web docs: the super key word is used to access and call functions on an object's parent. Additionally, the super keyword must be used before THIS can be used in the constructor. (I think I sort of understand this, but I need to do more React tutorials.)



2. What is the DOM? What is the virtual DOM?

  Your answer: DOM is the Document Object Model. The virtual DOM is the blueprint of the current DOM that is being rendered. React can update the currently loaded webpage without reloading because it only rerenders the portions of the page where the virtual DOM and the current DOM differ.

  Researched answer:DOM is a cross-platform and language independent interface that treats an XML or HTML document as a tree structure which allows a developer to change the structure, style or content of a document. The virtual DOM is an ideal representation of a UI that is synced with the "real" DOM by a library.



3. What is a higher-order function?

  Your answer: A higher order function is a function that either takes a function as an argument or returns a function when finished.

  Researched answer: Hey, I remembered the first sentence of that syllabus section almost verbatim. Go me.



4. What is JSX?

  Your answer: JSX is JavaScript Xomething. (Probably not Xtreme. Maybe XML?) It is a combination of JavaScript and XML (which looks a lot like HTML). It allows React to inject and execute JavaScript code in the layout of a website.

  Researched answer: According to w3schools JSX stands for JavaScript XML. According to our syllabus JSX is JavaScript flavored HTML and the building block of React Components.



5. What is React?

  Your answer: React is a JavaScript library that is used to create highly responsive and dynamic user interfaces.

  Researched answer: Should have added that it's component based. 



6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer: yarn is a program created by facebook that facilitates building, testing, and debugging React websites.

  Researched answer: yarn is a package manager for code. Running yarn start creates in the current directory the file yarn.lock and the folder node_modules which contains the file .yarn-integrity.



7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer: localhost:3000 is a port on the user's host computer that can display in progress work on a website in the user's browser.

  Researched answer: localhost:3000 is the default port on the user's computer used by React and rails to demo your project while you're working on it.



8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer: Probably something to do with loops since they iterate.

  Researched answer: An iterable in JavaScript is an object that can be iterated over, i.e. it has a series of elements that can be accessed and interacted with sequentially. Strings and arrays are iterable. This property is valuable as it allows to utilize operations (loops, etc.) and and built-in methods (map, filter, etc.) on the iterables.



9. STRETCH: What is hoisting in JavaScript?

  Your answer: I have seen this word. Related to React. That's all the context my brain can currently give me. Maybe it's importing / exporting classes and methods between parents and children?

  Researched answer: I was thinking of state hoisting which is accomplished by passing a callback from a container component to a child component. (I don't fully understand what those words mean.)
  
  But it's also possible that you were talking about hoisting declarations, which is the process that allows variables to be used before they are declared since JavaScript's default behavior is to "hoist" all declarations up to the top of their scope.



10. STRETCH: What are closures in JavaScript?

  Your answer: If I had to guess I would say semicolons. I do not think that this is a good guess.

  Researched answer: A closure is a combination of a function bundled together with references to its surrounding state. In practice this means that a function that resides within another function can access the variables associated with the outer function.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- React state
- React props
- React lifecycle methods
- API
- e.preventDefault()
- DOM events
