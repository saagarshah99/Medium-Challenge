import './App.scss';

import Nav from "./Components/Nav/Nav";
import Spotlight from "./Components/Spotlight/Spotlight";
import ArticleSummary from "./Components/ArticleSummary/ArticleSummary";

import articles from "./data/articles";

function App() {
  document.title = "Medium";
  
  const spotlightProps = [
    {
      heading: "Is It Time to Get Excited About Windows 11?",
      description: "Big changes are coming and that might be a good thing",
      author: "Lance Ulanoff",
      image: "cage4.jpg",
    },
  ];
  
  return (
    <div className="App">
      <Nav logoText="Medium" items={["Sign In", "Get Started"]} />

      <main>
        <Spotlight props={spotlightProps} />
        <ArticleSummary articles={articles} />
      </main>
    </div>
  );
};

export default App;
