import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h3>What is createContext?</h3>
        <p>
          useContext” hook is used to create common data that can be accessed
          throughout the component hierarchy without passing the props down
          manually to each level. Context defined will be available to all the
          child components without involving “props”.
        </p>
      </div>
      <div>
        <h3>What is the use of semantic tags in HTML5?</h3>
        <p>
          What is the use of semantic tags in HTML5? One of the most important
          features of HTML5 is its semantics. Semantic HTML refers to syntax
          that makes the HTML more comprehensible by better defining the
          different sections and layout of web pages. It makes web pages more
          informative and adaptable, allowing browsers and search engines to
          better interpret content.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
