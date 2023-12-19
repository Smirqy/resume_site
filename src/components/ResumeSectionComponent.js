function ResumeSection() {
    const handleDownload = () => {
        // Replace 'your-file-path' with the actual path to your file
        const filePath = process.env.PUBLIC_URL + '/Noah_Resume.pdf';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'Noah_Carlson_Resume.pdf'; // Change the name of the downloaded file if needed
        link.click();
      };

    return (
        <div>
            <h2 className="left clean-header display-header">{"RESUME"}</h2>
            <hr className="header-hr"/>
            {/* <h3 className="display-subheader">Download</h3> */}
            <p>Please feel free to download my resume here!</p>
            <button className="download-button" onClick={handleDownload}>Download</button>
            {/* <a href="https://docs.google.com/document/d/1H6hLrKS-BRqscl6EAaEpt3FgsIQwbZO9VQ5Hw3MguEA/edit?usp=sharing">View Resume</a> */}
            <p>Or view it right here - </p>
        </div>
    )
}

export default ResumeSection;