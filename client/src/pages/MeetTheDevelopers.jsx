const MeetTheDevelopers = () => {
  const developers = [
    {
      name: "Leandro Michelena",
      imageSrc: "https://avatars.githubusercontent.com/u/97864910?v=4",
      githubLink: "https://github.com/leandromichelena",
      linkedinLink: "https://www.linkedin.com/in/leandro-michelena/",
    },
    {
      name: "Luiz Medina",
      imageSrc: "https://avatars.githubusercontent.com/u/21269523?v=4",
      githubLink: "https://github.com/luizmedina87",
      linkedinLink: "https://www.linkedin.com/in/luizmedina87/",
    },
    {
      name: "Fernando Almeida",
      imageSrc:
        "https://flalmeida3105.github.io/myportfolio/assets/images/profile-image3.jpeg",
      githubLink: "https://github.com/flalmeida3105",
      linkedinLink: "https://www.linkedin.com/in/flalmeida/",
    },
    {
      name: "Nathaniel Chan",
      imageSrc: "https://avatars.githubusercontent.com/u/98130524?v=4",
      githubLink: "https://github.com/nchan22",
      linkedinLink: "https://www.linkedin.com/in/nchan22/",
    },
    {
      name: "Maggie Joe",
      imageSrc: "https://avatars.githubusercontent.com/u/98727672?v=4",
      githubLink: "https://github.com/maggiejoe",
      linkedinLink: "https://www.linkedin.com/in/maggie-joe/",
    },
    {
      name: "Eric Smith",
      imageSrc:
        "https://professor-fate.github.io/portfolio/assets/images/profile-pic.jpeg",
      githubLink: "https://github.com/professor-fate",
    },
  ];

  return (
    <div className="text-center container">
      <div className="m-5">
        <h1 className="fs-1 fw-bold mb-5 border-bottom border-dark pb-4">
          Eye Spy Developers
        </h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
        {developers.map((developer) => (
          <div
            key={developer.githubLink}
            className="col d-flex justify-content-center border-0"
          >
            <DeveloperCard {...developer} />
          </div>
        ))}
      </div>
    </div>
  );
};

const DeveloperCard = ({ name, imageSrc, githubLink, linkedinLink }) => {
  return (
    <div
      className="card bg-transparent text-center border-0"
      style={{ height: "100%" }}
    >
      <img
        src={imageSrc}
        className="card-img-top rounded-circle justify-content-center mx-auto"
        alt={`${name}'s profile`}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="card-body" style={{ minHeight: "auto" }}>
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-center">
          {linkedinLink && (
            <a
              href={linkedinLink}
              className="all-btns p-2 rounded text-decoration-none me-2 mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="all-btns p-2 rounded text-decoration-none me-2 mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetTheDevelopers;
