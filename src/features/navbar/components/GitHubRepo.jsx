import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GitHubRepo = () => {
    return (
        <a
            aria-label="View the source code repository."
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AnOrdinaryUsername/cv-project"
        >
            <FontAwesomeIcon icon={faGithub} />
        </a>
    );
};

export default GitHubRepo;
