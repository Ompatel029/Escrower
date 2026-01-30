import React, { useState } from 'react';
import { FaGithub, FaXTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa6';
import './Team.css';

const teamData = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    socials: ["github", "twitter", "linkedin"]
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Senior Dev",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    socials: ["github", "linkedin"]
  },
  {
    id: 3,
    name: "Casey Jones",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    socials: ["twitter", "linkedin"]
  },
  {
    id: 4,
    name: "John Lewis",
    role: "Game Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    socials: ["github", "twitter", "linkedin", "pinterest"]
  },
  {
    id: 5,
    name: "Sarah Connor",
    role: "UI/UX Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    socials: ["github", "linkedin"]
  },
  {
    id: 6,
    name: "Mike Ross",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    socials: ["github", "twitter"]
  },
];

const Team = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const renderSocialIcons = (socials) => {
    const links = {
      github: "#",
      twitter: "#",
      linkedin: "#",
      pinterest: "#"
    };

    return (
      <div className="social-icons-row">
        {socials.map((s, i) => (
          <a key={i} href={links[s]} className="social-circle">
            {s === 'github' && <FaGithub />}
            {s === 'twitter' && <FaXTwitter />}
            {s === 'linkedin' && <FaLinkedin />}
            {s === 'pinterest' && <FaPinterest />}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="team-wrapper">
      <div className="team-header-text">
        <h2>Our incredible team is</h2>
        <h1>making wonders</h1>
      </div>

      <div className="team-grid-container">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="team-card"
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />

              <div className={`card-overlay ${hoveredId === member.id ? 'visible' : ''}`}>
                {hoveredId === member.id && (
                  <div className="hover-details">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    {renderSocialIcons(member.socials)}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
