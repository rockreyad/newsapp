import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor form News Component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2022-04-22&to=2022-04-22&sortBy=popularity&apiKey=903a45777c174c5e85d8cac680a2975b";

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2022-04-22&to=2022-04-22&sortBy=popularity&apiKey=903a45777c174c5e85d8cac680a2975b&page=${
      this.state.page - 1
    }&pageSize=25`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("Next News fetch!");
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 25)) {
    } else {
      let url = `https://newsapi.org/v2/everything?q=apple&from=2022-04-22&to=2022-04-22&sortBy=popularity&apiKey=903a45777c174c5e85d8cac680a2975b&page=${
        this.state.page + 1
      }&pageSize=25`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log("Next News fetch!");
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container mx-auto sm:px-4 my-3">
        <h2 className="text-2xl text-black font-semibold px-3 py-1">
          News Monkey top Headlines
        </h2>

        <div className="flex flex-wrap">
          {this.state.articles.map((element) => {
            return (
              <div
                className="flex flex-col md:w-1/3 pr-4 pl-4"
                key={element.url}
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container mx-auto sm:px-4">
          <nav aria-label="Page navigation">
            <ul className="flex lg:justify-between justify-center">
              <li>
                <button
                  className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100 flex flex-row justify-between items-center"
                  disabled={this.state.page <= 1}
                  onClick={this.handlePreviousClick}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  Prev
                </button>
              </li>
              <li>
                <button
                  className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100  flex flex-row justify-between items-center"
                  onClick={this.handleNextClick}
                >
                  Next
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default News;
