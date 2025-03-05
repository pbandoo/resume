# resume
**This repository is a static Github Pages hosted resume with a modern, monotone aesthetic with mobile device support.  The site also allows for dynamic PDF generation, supporting both light mode and dark mode.**


## Inspiration
> The original style stems from the [responsive-resume-cv-smith](https://github.com/bedimcode/responsive-resume-cv-smith) repository, 
but modified and stylized to my liking.


## Local Modifications
```powershell
# Modify resume contents 
nvim ./index.html 

# Modify html2pdf Configuration
nvim ./assets/js/main.js 

# Modify fonts & spacing
nvim ./assets/css/styles.css

# Serve changes on http://localhost:3000
npm install serve --global
serve
```


## Forking Instructions
- I have made sure to comment and standardize the contents of `index.html` to allow for easy modification for anyone that wants to 
~~steal~~ *use* my resume template.

  1. Fork this repository.
  2. Add your own profile picture to the `assets/img` directory.
  3. Adjust `index.html` with your own data accordingly.
  4. Enable page deployment for your repository: `Repo --> Settings --> Pages --> Build and Deployment --> Deploy from a branch (main)`
  5. Your resume should then be hosted at: `https://<username>.github.io/<repo_name>`



---

> [!note]
> **Current Issue(s) / Tip(s):**
> - There are no intuitive page breaks/hard defined cut offs, meaning the resume will need to be fairly fine-tuned. This will include:
>   - Manually refreshing the local copy to check general spacing.
>   - Using class ID's within `index.html` to manually set page breaks in the `html2pdf` options inside of `main.js`.
>   - Manually tweaking spacing of the CSS inside of `styles.css`.
>
> - When using the `html2pdf` functionality, you may need to play with scaling to get it to look exactly how you want / match the standard site.  If needed, adjust scaling via `.scale-cv` inside of `css/styles.css`.  On top of this, to view what it would look like without having to generate a PDF every time, open up the developer console and type `scaleCv()` to rescale to PDF size, and `removeScale()` to undo the scaling.

--- 

