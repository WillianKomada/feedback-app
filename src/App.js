import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AboutPage from "./pages/AboutPage";

import { Header } from "./components/Header";
import { FeedbackList } from "./components/FeedbackList";
import { FeedbackStats } from "./components/FeedbackStats";
import { FeedbackForm } from "./components/FeedbackForm";
import { AboutIconLink } from "./components/AboutIconLink";
import { Post } from "./components/Post";

import { Card } from "./components/shared/Card";

import FeedBackData from "./data/FeedbackData";

export default function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
    console.log(newFeedback.id);
  };

  return (
    <Router>
      <Header />

      <div className="container">
        <Card reverse={true}>
          <NavLink
            to="/"
            activeClassName="active"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 40,
              marginRight: 20,
              borderRadius: 8,
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 40,
              marginRight: 20,
              borderRadius: 8,
            }}
          >
            About
          </NavLink>
        </Card>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />

          <Route path="/post/:id/:name" element={<Post />} />
        </Routes>
      </div>

      <AboutIconLink />
    </Router>
  );
}
