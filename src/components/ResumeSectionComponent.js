function ResumeSection() {
    const handleDownload = () => {
        // Replace 'your-file-path' with the actual path to your file
        const filePath = process.env.PUBLIC_URL + '/Noah_Carlson_Resume.docx';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'Noah_Carlson_Resume.docx'; // Change the name of the downloaded file if needed
        link.click();
      };

    return (
        <div>
            <h2 className="left clean-header display-header">{"RESUME"}</h2>
            <hr className="header-hr"/>
            {/* <h3 className="display-subheader">Download</h3> */}
            <p>Please feel free to download my resume!</p>
            <button className="download-button" onClick={handleDownload}>Download</button>
            {/* <a href="https://docs.google.com/document/d/1H6hLrKS-BRqscl6EAaEpt3FgsIQwbZO9VQ5Hw3MguEA/edit?usp=sharing">View Resume</a> */}
            <p>Or view it right here - </p>

            <h3 className="display-header">Skills</h3>
            <ul className="resume-list">
                <li><span className="bold-first">Back End:</span> Python, Java, C#, C++, C, SQL, Node.js</li>
                <li><span className="bold-first">Front End:</span> React, Angular, React Native, HTML, CSS, JavaScript</li>
                <li><span className="bold-first">Tools and Technologies:</span> Supabase, AWS (S3, EC2), Hugging Face</li>
                <li><span className="bold-first">AI/ML:</span> Prompt engineering, OpenAI API, scikit-learn, pandas, PyTorch</li>
            </ul>

            <h3 className="display-header">Education</h3>
            <h4 className="display-subheader">University of Utah - M.S. Computer Science</h4>
            <ul className="resume-list">
                <li>Location: Salt Lake City, UT</li>
                <li>Date: August 2024 - December 2025</li>
                <li>GPA: 3.9/4.0</li>
            </ul>
            <h4 className="display-subheader">University of Utah - B.S. Computer Science</h4>
            <ul className="resume-list">
                <li>Location: Salt Lake City, UT</li>
                <li>Date: August 2019 - December 2023</li>
                <li>GPA: 3.7/4.0</li>
                <li>Extracurriculars:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>NCAA Swim and Dive Student Athlete, Fall 2019 - Spring 2023 </li>
                <li>Athletics Director Honor Roll, Fall 2019 - Spring 2021</li>
                <li>Pac-12 All-Academic, 2020-2021</li>
            </ul>
            

            <h3 className="display-header">Work History</h3>
            <h4 className="display-subheader">University of Utah</h4>
            <ul className="resume-list">
                <li>Title: Computer Science Teaching Assistant</li>
                <li>Location: Salt Lake City, UT</li>
                <li>Date: August 2023 - December 2023</li>
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Led labs for 80+ students with live demos, Q&A, and group guidance.</li>
                <li>Mentored 15 capstone teams through recurring check-ins, technical Q&A, and project reviews.</li>
            </ul>

            <h4 className="display-subheader">Motorola Solutions</h4>
            <ul className="resume-list">
                <li>Title: Software Development Intern</li>
                <li>Location: West Valley City, UT</li>
                <li>Date: May 2025 - August 2025</li>
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Updated and modernized 10,000+ Java tests across multiple teams, leveraging AI-assisted refactoring and validation.
                </li>
            </ul>

            <h4 className="display-subheader">Motorola Solutions</h4>
            <ul className="resume-list">
                <li>Title: Software Development Intern</li>
                <li>Location: West Valley City, UT</li>
                <li>Date: May 2024 - August 2024</li>
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Designed a Python testing suite for 20+ API endpoints and built an Angular dashboard for visualization; modeled test data for 100+ endpoints to improve QA automation.</li>
            </ul>

            <h4 className="display-subheader">Prime Presence</h4>
            <ul className="resume-list">
                <li>Title: Freelance Developer</li>
                <li>Location: Salt Lake City, UT</li>
                <li>Date: February 2024 - May 2024</li>
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Developed a custom website generator using Python scripts to transform client information into live, production-ready sites.</li>
                <li>Built client-facing websites with React and implemented a Node.js email server hosted on AWS to handle customer inquiries.</li>
                <li>Designed and deployed scalable infrastructure to support hundreds of new business websites per month.</li>
            </ul>

            <h4 className="display-subheader">Motorola Solutions</h4>
            <ul className="resume-list">
                <li>Title: Software Development Intern</li>
                <li>Location: West Valley City, UT</li>
                <li>Date: May 2023 - August 2023</li>
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Member of the dev team tasked with creating an internal diagnostic analyzing application to be used by Motorola's support staff and customers.</li>
                <li>Maintained a data pipeline which included interacting with data warehouses, datapools, api's, and in-house manipulation of the data.</li>
                <li>Created new servlet api to increase data output from the server analyzer application which is currently in use by hundreds of customers.</li>
                <li>Participated in an agile environment with sprint meetings and presentations.</li>
            </ul>

            <h4 className="display-subheader">Legrand Vantage</h4>
            <ul className="resume-list">
                <li>Title: Software Engineering Intern</li>
                <li>Location: Pleasant View, UT</li>
                <li>Date: June 2022 - September 2022</li>
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Lead the development of an ordering and styling application for smart- home appliances through a successful product launch.</li>
                <li>Discovered and resolved bugs in a large Visual Basic coding base.</li>
                <li>Worked on event listeners, user interface display, and a form for ordering, saving, and uploading using XML.</li>
                <li>Practiced Agile development with two-week sprints, user stories, tasks, story points, sprint planning, and reviews.</li>
                <li>Presented progress and future direction in daily stand-up meetings.</li>
            </ul>


            <h3 className="display-header">Projects</h3>
            <h4 className="display-subheader">Split It</h4>
            <ul className="resume-list">
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>A cost splitting app which allows people to join groups and split costs easily.</li>
                <li>React Native Javascript based app with a Firebase backend and a OCR receipt scanner.</li>
            </ul>
            <h4 className="display-subheader">Portfolio Website</h4>
            <ul className="resume-list">
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>React based web app at noahcarlson.dev. Outlines more detailed information related to this resume.</li>
                <li>Displays a 3D modeled character, animated in blender and displayed with react 3.</li>
                <li>Hosted by AWS and SquareSpace domains.</li>
            </ul>
            <h4 className="display-subheader">TA Application Website</h4>
            <ul className="resume-list">
                <li>Overview:</li>
            </ul>
            <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>Created a website allowing students to apply to be TAs using ASP.NET Core.</li>
                <li>Managed a database to store information as well as implemented google authentication.</li>
            </ul>


            <h3 className="display-header">Volunteering</h3>
            <h4 className="display-subheader">Rustic Pathways</h4>
            <ul className="resume-list">
                <li>Title: Thailand and Laos Service Trip</li>
                <li>Location: Thailand and Laos</li>
                <li>Date: June 2018</li>
                {/* <li>Overview:</li> */}
            </ul>
            {/* <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>3.7 Cumulative GPA</li>
                <li>NCAA Swim and Dive Student Athlete, Fall 2019 - Spring 2023 </li>
                <li>Athletics Director Honor Roll, Fall 2019 - Spring 2021</li>
                <li>Pac-12 All-Academic, 2020-2021</li>
            </ul> */}
            <h4 className="display-subheader">USA Swimming</h4>
            <ul className="resume-list">
                <li>Title: Hawaii State Athlete Representative</li>
                <li>Location: Honolulu, Hawaii</li>
                <li>Date: August 2016 - August 2018</li>
                {/* <li>Overview:</li> */}
            </ul>
            {/* <ul className="ulist resume-overview-list" style={{marginTop:0}}>
                <li>3.7 Cumulative GPA</li>
                <li>NCAA Swim and Dive Student Athlete, Fall 2019 - Spring 2023 </li>
                <li>Athletics Director Honor Roll, Fall 2019 - Spring 2021</li>
                <li>Pac-12 All-Academic, 2020-2021</li>
            </ul> */}

            <h3 className="display-header">Coursework</h3>
            <ul className="ulist resume-overview-list">
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Natural Language Processing</li>
                <li>Data Mining</li>
                <li>Network Security</li>
                <li>Data Analysis</li>
                <li>Robotics Motion Planning</li>
                <li>Computational Geometry</li>
                <li>Graduate Computer Architecture</li>
            </ul>

            <h3 className="display-header">Honors and Awards</h3>
            <ul className="ulist resume-overview-list">
                <li>Utah Men's Swim and Dive: Most Improved Male (2020)</li>
                <li>International Baccalaureate Diploma</li>
                <li>High School Valedictorian</li>
            </ul>

            <h3 className="display-header">Interests</h3>
            <ul className="ulist resume-overview-list">
                <li>Competitive swimming (2012 - 2023)</li>
                <li>Climbing</li>
                <li>Gaming</li>
                <li>Drawing</li>
                <li>Snowboarding</li>
                <li>Traveling</li>
            </ul>
        </div>
    )
}

export default ResumeSection;