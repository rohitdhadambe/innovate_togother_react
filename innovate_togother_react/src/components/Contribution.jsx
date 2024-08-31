import  { useState, useEffect } from 'react';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  useEffect(() => {
    const apiUrl = 'https://api.github.com/orgs/github/repos?per_page=100';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        const uniqueLanguages = [...new Set(data.map(repo => repo.language))];
        setLanguages(uniqueLanguages.filter(Boolean)); // Remove null/undefined languages
        localStorage.setItem('allProjects', JSON.stringify(data));
      })
      .catch(error => console.error('Error fetching GitHub data:', error));
  }, []);

  const displayProjects = (filteredProjects) => {
    return filteredProjects.map(project => (
      <div className="project-card" key={project.id}>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
        <p>{project.description || 'No description provided.'}</p>
        <span className="language">{project.language ? project.language.toLowerCase() : 'Unknown'}</span>
      </div>
    ));
  };

  const handleFilter = () => {
    const allProjects = JSON.parse(localStorage.getItem('allProjects'));
    const filteredProjects = allProjects.filter(project => {
      const languageMatch = selectedLanguage === 'all' || (project.language && project.language.toLowerCase() === selectedLanguage);
      const domainMatch = selectedDomain === 'all' || (project.description && project.description.toLowerCase().includes(selectedDomain));
      const levelMatch = selectedLevel === 'all' || (project.description && project.description.toLowerCase().includes(selectedLevel));
      return languageMatch && domainMatch && levelMatch;
    });
    setProjects(filteredProjects);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <h1>GitHub Projects</h1>
        <div className="filters flex items-center">
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="mr-2 p-2 bg-black text-white border border-white rounded-lg">
            <option value="all">All Languages</option>
            {languages.map((language, index) => (
              <option key={index} value={language.toLowerCase()}>{language}</option>
            ))}
          </select>
          <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)} className="mr-2 p-2 bg-black text-white border border-white rounded-lg">
            <option value="all">All Domains</option>
            <option value="machine learning">Machine Learning</option>
            <option value="web development">Web Development</option>
            <option value="ai">Artificial Intelligence</option>
          </select>
          <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="mr-2 p-2 bg-black text-white border border-white rounded-lg">
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="average">Average</option>
            <option value="advanced">Advanced</option>
          </select>
          <button onClick={handleFilter} className="p-2 bg-transparent border border-white rounded-lg hover:bg-blue-700">Filter</button>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {displayProjects(projects)}
      </main>
    </div>
  );
};

export default GitHubProjects;
