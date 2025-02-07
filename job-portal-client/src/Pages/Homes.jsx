import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/Sidebar";

const Homes = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/all-jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) =>
      job.jobTitle &&
      job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  //------------ Radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-------button-based filtering-------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Filtering Input items
    if (query) {
      filteredJobs = filteredItems;
    }

    // Category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experiencelevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          (jobLocation &&
            jobLocation.toLowerCase() === selected.toLowerCase()) ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          (salaryType &&
            salaryType.toLowerCase() === selected.toLowerCase()) ||
          (employmentType &&
            employmentType.toLowerCase() === selected.toLowerCase())
      );
    }

    // Slice the data based on the current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    // Handle case where no jobs are available
    if (filteredJobs.length === 0) {
      return <p>No jobs available for this page</p>;
    }

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">0 Jobs</h3>
              <p>No data found</p>
            </>
          )}
        </div>

        {/* pagination */}
        {result.length > 0 && (
          <div className="flex justify-center mt-4 space-x-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="hover:underline"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of{" "}
              {Math.ceil(filteredItems.length / itemsPerPage)}
            </span>
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(filteredItems.length / itemsPerPage)
              }
              className="hover:underline"
            >
              Next
            </button>
          </div>
        )}

        {/* right side */}
        <div className="bg-white p-4 rounded">Right</div>
      </div>
    </div>
  );
};

export default Homes;
