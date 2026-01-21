import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";

// component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";

// page imports
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Search from "./pages/Search";
import AddDestination from "./pages/AddDestination";
import SearchResults from "./components/SearchResults";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>

      <Router>
        <div className="">
          <Header />
          <div className="">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/contact-us" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/sign-up" element={<SignUp />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/activity-search" element={<Search />} />
              <Route exact path="/add-destination" element={<AddDestination />} />
              <Route exact path="/search-results" element={<SearchResults />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
