import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserInput = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);

      // Fetch user data
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (userResponse.ok) {
        const userData = await userResponse.json();
        setUserData(userData);
      }

      // Fetch user's repositories using the repos_url
      const reposResponse = await fetch(userData.repos_url); // Using userData to access the repos_url
      if (reposResponse.ok) {
        const reposData = await reposResponse.json();
        setRepositories(reposData);
      }

      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchUserData();
  };

  useEffect(() => {
    if (username.trim()) {
      fetchUserData();
    }
  }, [username]);

  return (
    <DIV>
      <h1>Github Explorer</h1>
      <input
        type="text"
        placeholder="Enter a GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button id="search" onClick={handleSubmit}>
        Submit
      </button>

      {userData && (
        <div id="users">
          <h2>User Information</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          {/* Display other user information as needed */}
        </div>
      )}
      {loading && <h1>Loading...</h1>}
      {repositories.length > 0 && (
        <div>
          <h2>Repositories</h2>
          <ul id="repolist">
            {repositories.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
                <p>Description: {repo.description || "N/A"}</p>
                {/* Display other repository details as needed */}

                {/* Link to Repository Details Page */}
                {/* <button>
                  <Link to={`/repositories/${repo.id}`}>
                    Repository Info
                  </Link>
                </button> */}
                {repo.id && (
                  <button>
                    <Link to={`/repositories/${repo.id}`}>Repository Info</Link>
                  </button>
                )}
                {/* <br /> */}
                {/* Link to Followers Page */}
                {/* <button><Link to={`/followers/${username}`}>Followers</Link></button> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </DIV>
  );
};

export default UserInput;

const DIV = styled.div`
  margin: auto;

  input {
    width: 20%;
    height: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
  }

  #search {
    width: 8%;
    height: 43px;
    padding: auto;
    border-radius: 20px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-left: 5px;
    color: red;
  }

  #search:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  #users {
    border: 50px;
    width: 30%;
    margin: auto;
    background-color: #f7f5f5;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-top: 20px;
    padding: 10px 10px;
  }

  #repolist {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    text-decoration: none;
  }

  #repolist li {
    text-align: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
    background-color: #ebe7e7;
  }
  #repolist li a {
    font-size: 20px;
    text-decoration: none;
  }

  #repolist button {
    height: 43px;
    padding: auto;
    border-radius: 20px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-left: 5px;
    color: red;
  }
  #repolist button:hover {
    background-color: red;
  }
`;
