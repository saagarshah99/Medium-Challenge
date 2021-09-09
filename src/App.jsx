import './App.scss';
import Nav from "./Components/Nav/Nav";
import ArticleSummary from "./Components/ArticleSummary/ArticleSummary";
import articles from "./data/articles";

import cage from "./assets/images/cage.jpg";

function App() {
  document.title = "Medium";
  
  return (
    <div className="App">
      <Nav logoText="Medium" items={["Sign In", "Get Started"]} />

      <main>
        <ArticleSummary articles={articles} thumbnail={cage} />
      </main>
    </div>
  );
}

export default App;
