"use client"
import { useState } from "react";
import { post } from "@/services/apiUtils";
import SearchForm from "@/components/searchForm";
import SearchResult from "@/components/searchResult";
import SearchHeader from "@/components/searchHeader";

const Similarverse = () => {
  const [similarAyats, setSimilarAyats] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [error, seterror] = useState(false)

  const handleSearch = async (query) => {
    setButtonClicked(true);
    seterror(false)
    if (query.trim() === "") return;

    try {
      setLoading(true)
      const data = await post(query);
      setLoading(false)
      setSimilarAyats(data);
    } catch (error) {
      seterror(true)
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex flex-col items-center justify-start pt-7 relative p-3">
      <SearchHeader buttonClicked={buttonClicked}/>
      <SearchForm onSubmit={handleSearch} />
      <SearchResult similarAyats={similarAyats} error={error} loading={loading} setLoading={setLoading}  />
    </div>
  );
};

export default Similarverse;
