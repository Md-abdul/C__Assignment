import React, { useState, useEffect } from "react";

const RepositoryDetails = () => {
  const [datagit, setData] = useState(null);

  useEffect(() => {
    const userId = "Md-abdul";
    const desiredRepositoryName = "YOUR_DESIRED_REPOSITORY_NAME";

    fetch(`https://api.github.com/users/${userId}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const desiredRepository = data.find(
          (repo) => repo.name === desiredRepositoryName
        );

        if (desiredRepository) {
          setData(desiredRepository);
        } else {
          console.error(`Repository "${desiredRepositoryName}" not found.`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Display the data only when it's available
  return (
    <div>
      {datagit ? (
        <>
          <h1>{datagit.name}</h1>
          <p>Description: {datagit.description}</p>
          {/* Display other repository details as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RepositoryDetails;
