import { useState } from "react"

function Resources() {
  const [selectedResource, setSelectedResource] = useState(null)

  const resources = [
    {
      id: 1,
      icon: "📄",
      title: "Resume Building",
      description:
        "Learn how to create a professional resume that highlights your skills, projects and achievements.",

      videoUrl:
        "https://www.youtube.com/results?search_query=resume+building+for+college+students",

      resourceUrl:
        "https://www.canva.com/create/resumes/",

      videoText: "Watch Resume Video",

      resourceText: "Open Resume Builder"
    },

    {
      id: 2,
      icon: "🎤",
      title: "Interview Preparation",
      description:
        "Prepare for technical and HR interviews with useful questions, tips and practice resources.",

      videoUrl:
        "https://www.youtube.com/results?search_query=interview+preparation+for+college+students",

      resourceUrl:
        "https://www.indeed.com/career-advice/interviewing",

      videoText: "Watch Interview Video",

      resourceText: "Open Interview Guide"
    },

    {
      id: 3,
      icon: "💡",
      title: "Project Ideas",
      description:
        "Explore engineering and technology project ideas that can help you build practical skills.",

      videoUrl:
        "https://www.youtube.com/watch?v=ZWOwdFpdqs8",

      resourceUrl:
        "https://github.com/topics/project-ideas",

      videoText: "Watch Project Video",

      resourceText: "Explore Project Ideas"
    },

    {
      id: 4,
      icon: "🏆",
      title: "Competition Tips",
      description:
        "Learn how to choose ideas, build teams, prepare presentations and participate confidently in competitions.",

      videoUrl:
        "https://www.youtube.com/results?search_query=hackathon+tips+for+students",

      resourceUrl:
        "https://mlh.io/",

      videoText: "Watch Competition Video",

      resourceText: "Explore Hackathons"
    }
  ]

  function openResource(resource) {
    setSelectedResource(resource)
  }

  function closeResource() {
    setSelectedResource(null)
  }

  return (
    <section className="resources-section" id="resources">

      <div className="section-heading centered">

        <span className="section-label">
          STUDENT RESOURCES
        </span>

        <h2>
          Learn. Prepare.
          <span> Grow.</span>
        </h2>

        <p>
          Useful resources to help you make the most of every opportunity.
        </p>

      </div>

      <div className="resource-grid">

        {resources.map((resource) => (

          <div
            className="resource-card"
            key={resource.id}
          >

            <div className="resource-icon">
              {resource.icon}
            </div>

            <h3>{resource.title}</h3>

            <p>
              {resource.description}
            </p>

            <button
              className="resource-explore-btn"
              onClick={() => openResource(resource)}
            >
              Explore →
            </button>

          </div>

        ))}

      </div>

      {selectedResource && (

        <div className="resource-modal-overlay">

          <div className="resource-modal">

            <button
              className="resource-modal-close"
              onClick={closeResource}
            >
              ✕
            </button>

            <div className="resource-modal-icon">
              {selectedResource.icon}
            </div>

            <span className="section-label">
              STUDENT RESOURCE
            </span>

            <h2>
              {selectedResource.title}
            </h2>

            <p>
              {selectedResource.description}
            </p>

            <div className="resource-modal-actions">

              <a
                href={selectedResource.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                ▶ Watch Video
              </a>

              <a
                href={selectedResource.resourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                🔗 Open Resource
              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

export default Resources