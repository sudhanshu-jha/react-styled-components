import React from 'react';
import styled from 'styled-components';


const ARTICLES = [
  { id: '0', title: 'The Beginner\'s Guide to ReactJS', url: 'https://egghead.io/courses/the-beginner-s-guide-to-reactjs' },
  { id: '1', title: 'React.js Introduction For People Who Know Just Enough jQuery To Get By', url: 'http://chibicode.com/react-js-introduction-for-people-who-know-just-enough-jquery-to-get-by/' },
  { id: '2', title: '13 things you need to know about React ', url: 'http://aimforsimplicity.com/post/13-things-you-need-to-know-about-react/' },
  { id: '3' , title: 'Tutorial: Intro To React', url: 'https://facebook.github.io/react/tutorial/tutorial.html'},
  { id: '4' , title: 'ReactJS For Stupid People', url: 'http://blog.andrewray.me/reactjs-for-stupid-people/'},
  { id: '5' , title: 'Complete Intro to React, v3 (feat. Redux, Router & Flow)', url: 'https://frontendmasters.com/courses/react/'},
  { id: '6' , title: 'React ', url: 'https://react.holiday/'},
  { id: '7' , title: 'React Enlightenment ', url: 'https://www.reactenlightenment.com/'},
  { id: '8' , title: 'REACT JS TUTORIAL #1 - Reactjs Javascript Introduction & Workspace Setup', url: 'https://www.youtube.com/watch?v=MhkGQAoc7bc&t=6s'},
  { id: '9' , title: 'Build Your First Production Quality React App', url: 'https://egghead.io/courses/build-your-first-production-quality-react-app'},
  { id: '10' , title: 'Advanced React Component Patterns', url: 'https://egghead.io/courses/advanced-react-component-patterns'},
  { id: '11' , title: 'React Patterns ', url: 'https://reactpatterns.com/'},
  { id: '12' , title: '8 Key React Component Decisions', url: 'https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594'},
  { id: '13' , title: 'React + Mobx codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the RealWorld spec and API.', url: 'https://github.com/gothinkster/react-mobx-realworld-example-app'},
  { id: '14' , title: 'An Introduction to React Router v4 and its Philosophy Toward Routing ', url: 'https://medium.freecodecamp.org/react-router-v4-philosophy-and-introduction-730fd4fff9bc'},
  { id: '15' , title: 'Advanced State Management in React (feat. Redux and MobX)', url: 'https://frontendmasters.com/courses/react-state/'},
  ];

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const applySearchTerm = searchTerm => () => ({
  searchTerm,
});

const AppWrapper = styled.div`
  margin: 20px;
`;


class App extends React.Component<AppProps, AppState> {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    const { value } = event.target;

    this.setState(applySearchTerm(value));
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <AppWrapper>
        <Search value={searchTerm} onSearch={this.onSearch}>
          <p>Search</p>
        </Search>
        <Articles articles={ARTICLES.filter(applyFilter(searchTerm))} />
      </AppWrapper>
    );
  }
}

const header = styled.h1`
    display: flex;
    marginBottom: 20px;
    text-align : center;
`;


const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const MyInput = styled.input`
  padding: 10px;
`;

const Search = ({ value, onSearch, children }) =>
  <SearchWrapper>
    {children}&nbsp;<MyInput
      value={value}
      onChange={onSearch}
      type="text"
    />
  </SearchWrapper>

const List = styled.ul`
  margin: 40px;
  padding: 20px;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid grey;
`;

const Articles = ({ articles }) =>
  <List>
    {articles.map(article =>
      <ListItem key={article.id}>
        <Article article={article} />
      </ListItem>
    )}
  </List>

const MyLink = styled.a`
  text-decoration: none;
`;

const Article = ({ article }) =>
  <MyLink href={article.url}>{article.title}</MyLink>

export default App;
