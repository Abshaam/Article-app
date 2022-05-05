
import { NavLink } from "react-router-dom";
import { getArticles } from "../data";
import '../css/articles.css'


export default function articles() {
  let articles = getArticles();
  return (
    <div className="articles-back">
      <h1>EXPLORE ARTICLES</h1>
      <div className="article">
        {articles.map((article) => (
          <NavLink
            to={`/articles/${article.id}`}
            key={article.id}
          >
            {article.src}
            {article.title}
            
          </NavLink>
        ))}
      </div>

      <h4>copyright Ushama@div 2022</h4>
  
    </div>
  );
}