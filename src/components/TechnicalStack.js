import React from "react";
import TechnicalCardStack from "./TechnicalCardStack";

import androidLogo from "../images/programming_icons/android.png";
import appleLogo from "../images/programming_icons/apple.png";
import cssLogo from "../images/programming_icons/css.png";
import databaseLogo from "../images/programming_icons/database.png";
import expoLogo from "../images/programming_icons/expo4.png";
import githubLogo from "../images/programming_icons/github.png";
import gnubashLogo from "../images/programming_icons/gnu-bash.png";
import herokuLogo from "../images/programming_icons/heroku.png";
import htmlLogo from "../images/programming_icons/html-5.png";
import javascriptLogo from "../images/programming_icons/javascript.png";
import mysqlLogo from "../images/programming_icons/mysql.png";
import nodejsLogo from "../images/programming_icons/nodejs.png";
import reactLogo from "../images/programming_icons/react.png";
import rubyLogo from "../images/programming_icons/ruby.png";
import slackLogo from "../images/programming_icons/slack-2.png";

export default function TechnicalStack() {
    return (
        <>
            <div>
                <center>
                    <h1>Here's all technologies we have worked with</h1>
                </center>
            </div>

            <div>
                <center>
                    <h1>Web Development (Front/Backend)</h1>
                </center>
            </div>

            <div className="thirds">
                <TechnicalCardStack
                    src={htmlLogo}
                    title="HTML"
                    content="We use the latest HTML5 specification to ensure all websites and applications render nicely across all browsers."
                />
                <TechnicalCardStack
                    src={cssLogo}
                    title="CSS3"
                    content="CSS3 (the latest version) is used to maximise complete control over the visual appearance of the website and/or applications."
                />

                <TechnicalCardStack
                    src={javascriptLogo}
                    title="JavaScript"
                    content="JavaScript allows us to create both dynamic & interacdtive frontend solutions and where necessary, complex backend solutions."
                />
            </div>
            <div className="thirds">
                <TechnicalCardStack
                    src={rubyLogo}
                    title="Ruby"
                    content="We use Ruby to also create great looking frontend solutions and backend solution too."
                />
            </div>

            <div>
                <center>
                    <h1>Frameworks & Libraries</h1>
                </center>
            </div>

            <div className="thirds">
                <TechnicalCardStack
                    src={nodejsLogo}
                    title="Node js"
                    content="Node.js is used to enable us to develop non-blocking, asynchronous applications which is very memory efficient for today's apps/websites."
                />
                <TechnicalCardStack
                    src={expoLogo}
                    title="Expo"
                    content="We use the Expo framework built around React Native to develop, build, deploy apps for iOS & Android all whilst using JavaScript"
                />

                <TechnicalCardStack
                    src={reactLogo}
                    title="React and React Native"
                    content="React and React Native are used to quicly devise and build great looking UI's seamlessly across multiple platforms such as Android and IOS."
                />
            </div>

            <div>
                <center>
                    <h1>Apps deployed on:</h1>
                </center>
            </div>

            <div className="thirds">
                <TechnicalCardStack
                    src={androidLogo}
                    title="Android"
                    content="By utilsing the EXPO framework, we develop great looking and functional applications quickly all via native JavaScript."
                />

                <TechnicalCardStack
                    src={appleLogo}
                    title="IOS"
                    content="Expo's cross playform solutions enable us to quickly develop great looking applications with our expert knowledge of Javascript."
                />
            </div>

            <div>
                <center>
                    <h1>Cloud Platforms utilised:</h1>
                </center>
            </div>

            <div className="thirds">
                <TechnicalCardStack
                    src={herokuLogo}
                    title="Heroku"
                    content="We use Heroku is it makes the processes of deploying, configuring, scaling, tuning, and managing apps as simple and straightforward."
                />
            </div>

            <div>
                <center>
                    <h1>Database Experience:</h1>
                </center>
            </div>
            <div className="thirds">
                <TechnicalCardStack
                    src={databaseLogo}
                    title="Databases"
                    content="PostgreSQL and SQlite are our main databases but can easily work with MySQL, MariaDB and other popular databases."
                />
            </div>

            <div>
                <center>
                    <h1>Collaboration & Version Control</h1>
                </center>
            </div>

            <div className="thirds">
                <TechnicalCardStack
                    src={githubLogo}
                    title="Github"
                    content="We use GitHub for our code hosting & version control. It lets our team to efficiently work together on projects from anywhere."
                />

                <TechnicalCardStack
                    src={slackLogo}
                    title="Slack"
                    content="Slack is our go-to choice for constant communication and collaboration within a secure, enterprise-grade environment."
                />
            </div>
        </>
    );
}
