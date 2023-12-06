function ProjectsSection() {
    return (
        <div>
            <h3 className="left clean-header display-header">{"PROJECTS"}</h3>
            <h3>SplitIt</h3>
            <h4>Overview</h4>
            <p>SplitIt is a cost splitting app created for the iPhone. The app is composed of a React Native JS frontend, a Firebase Backend, and Firebase FireStore as the Database.
            The App allows users to create groups, add friends, and split costs between them.</p>
            <h4>Functionalities</h4>
            <p>One of the features that SplitIt boasts is receipt scanning capabilities, allowing users to take a picture of a receipt and have the app automatically fill out the items 
             into the app. Once having items inputted into the app, users are able to split each item independently bettween group members.Those Item splits are then able to be viewed 
             on the 'group debt' screen via graphs or text. Optionally, users are able to simplify their payment graph through the click of a button. This minimizes the amount of 
             payments to be made to settle everyones debts.</p>
             <video autoPlay loop muted className="portfolio-video">
            <source src={process.env.PUBLIC_URL + '/SplitITDemo.mov'} type="video/mp4"></source>
            </video>
            <h3>Portfolio Website</h3>
            <h4>Overview</h4>
            <p>This is this website! The website is a ReactJs Web app hosted on AWS that is here to display the portfolio of Noah Carlson.</p>
            <h4>Functionalities</h4>
            <p>The layout and look of the website is custom made with CSS. The avatar was created using Ready Player Me, animated using Mixamo and Blender, and finally rendered on page using
             React three. The link interaction animations are created through CSS and the avatar interactions are made using javascript.</p>
            <img src={process.env.PUBLIC_URL + '/Blender.png'} alt="Blender" className="portfolio-img" />
            <h3>Server Based Spreadsheet App</h3>
            <p>Currently under construction...</p>

            <h3>TA Application Website</h3>
            <p>Currently under construction...</p>

            <h3>Calculator App</h3>
            <p>Currently under construction...</p>

            <h3>Third Person Game</h3>
            <p>Currently under construction...</p>



        </div>
    )
}

export default ProjectsSection;