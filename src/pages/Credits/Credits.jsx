import './Credits.scss'

export default function Credits() {
    return (
        <div className="credits">
            <h2>Credits</h2>

            <div className="credits__acknowledgements">
                <h3>Acknowledgements</h3>
                <p>
                I want to give a heartfelt shoutout to everyone who's been by my side on this journey. Being the sole contributor has been a rollercoaster, but it's been incredibly rewarding.
                </p>

                <div className="credits__mentors">
                    <h4>Mentors and Educators</h4>
                    <p>
                    Huge gratitude to the amazing mentors at BrainStation who've shared their knowledge and expertise. Jon Mazin and Eli Boninger, you've been rockstars in guiding me through this. And to Charu Jain and Hilary Chen, your support has meant the world to me.
                    </p>
                </div>

                <div className="credits__special-thanks">
                    <h4>Special Thanks</h4>
                    <p>
                    Special love goes out to my partner, Mara Rodriguez, for being my constant cheerleader. And to my awesome classmates - Anne Smith, Praise Yu, Maggie Zhang, Erica Manalo, and Michelle Mah - your encouragement kept me going even on the toughest days.
                    </p>
                </div>

                <div className="credits__sponsorship">
                    <h4>Sponsorship</h4>
                    <p>
                    Big thanks to Code to Career for providing this incredible opportunity.
                    </p>
                </div>

                <div className="credits__tools">
                    <h4>Tools and Technologies</h4>
                    <p>
                    The successful completion of this project relied on a suite of powerful tools and technologies, including:
                    </p>
                    <ul>
                        <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
                        <li><strong>Node:</strong> A JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
                        <li><strong>Vercel:</strong> A platform for deploying serverless functions and static sites.</li>
                        <li><strong>REST APIs:</strong> Architectural style for designing networked applications.</li>
                        <li><strong>Heroku:</strong> A cloud platform as a service supporting several programming languages.</li>
                        <li><strong>Express:</strong> A minimal and flexible Node.js web application framework.</li>
                        <li><strong>Jaws MySQL:</strong> A MySQL database adapter for Node.js.</li>
                        <li><strong>SQL:</strong> A domain-specific language used in programming and designed for managing data held in a relational database management system.</li>
                        <li><strong>Knex:</strong> A SQL query builder for Node.js.</li>
                        <li><strong>Mapbox:</strong> An open-source mapping platform for custom designed maps.</li>
                        <li><strong>GeoJSON:</strong> A format for encoding a variety of geographic data structures.</li>
                    </ul>
                </div>

                <div className="credits__institution">
                    <h4>Institution</h4>
                    <p>
                    Finally, I would like to acknowledge BrainStation for providing an exceptional educational program. The knowledge, resources, and support offered by this institution have been pivotal to the completion of this project.
                    </p>
                </div>
            </div>
        </div>
    );
}