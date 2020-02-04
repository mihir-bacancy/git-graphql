import React, { useState } from "react";
import styled from "styled-components";

import {
  searchRepositories,
  getRepositories
} from "../Context/Action/repository";

import { star } from "../services/git";
import { useStore } from "../Context";

const SearchBox = styled.input`
  width: 100%;
  border: 3px solid;
  border-right: none;
  padding: 5px;
  margin-right: 15px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  margin-left: 5px;
`;

const Button = styled.button`
  border-radius: 5px;
  border-color: black;
  background-color: white;
`;

function Search() {
  const [, dispatch] = useStore();
  const [searchResult, setSearchResult] = useState([]);
  const searchRepository = async query => {
    try {
      const res = await searchRepositories({ query });
      setSearchResult(res);
    } catch (error) {
      alert(error.message);
    }
  };

  const starRepo = async id => {
    try {
      await star({ id });
      await getRepositories(dispatch);
      alert("Successful");
    } catch (error) {
      alert(error);
      console.log(error.message);
    }
  };

  return (
    <div
      style={{
        marginRight: "15px",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0px 3px 7px rgba(0,0,0,0.15)",
        width: "312px",
        zIndex: 99
      }}
    >
      <SearchBox
        type="search"
        onChange={e => searchRepository(e.target.value)}
        placeholder="Find Repositories..."
        aria-label="Search"
      />
      {searchResult.map(node => (
        <div
          style={{
            width: "312px",
            backgroundColor: "white",
            padding: "5px",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between"
          }}
          key={node.id}
        >
          <span style={{ color: "black", textAlign: "left" }}>
            {node.nameWithOwner}
          </span>
          <Button
            onClick={() => starRepo(node.id)}
            className="btn btn-primary btn-sm form-control mr-sm-2"
          >
            Star
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Search;
