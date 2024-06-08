# resume
**This repository is a static Github Pages hosted resume with a modern, monotone aesthetic with mobile device support.  The site also allows for dynamic PDF generation, supporting both light mode and dark mode.**

---

> [!note]
> **Current Issue(s):**
> - `html2pdf` functionality technically works, but the scaling / canvas size is a little off and minorly shifted to the right.  This is mostly noticeable on the dark mode variant, where any off scaling results in whitespace.
> - There are no page breaks/hard defined cut offs, meaning the resume should be tweaked and compared to the generated PDFs to find the page breaks.
>
> **Current Workaround(s):**
> - To hardcode a manually created PDF instead of using `html2pdf`, take screenshots of near identical size and use online [PNG2PDF converters](https://png2pdf.com/). Next, add your resume PDF to the `assets/pdf` directory, and update `index.html` to download the new file.
>   - (*Note: the link above allows you to upload multiple PNG's, then download a singular combined PDF.*)
> - When using the `html2pdf` functionality, you may need to play with scaling to get it to look exactly how you want / match the standard site.  If needed, adjust scaling via `.scale-cv` inside of `css/styles.css`.  On top of this, to view what it would look like without having to generate a PDF every time, open up the developer console and type `scaleCv()` to rescale to PDF size, and `removeScale()` to undo the scaling.
> - Lastly, I have NO IDEA WHY, but the PDF canvas being minorly shifted to the right is completely fixed on my end if I simply open up the the developer console with the device toolbar set to `Dimensions: Responsive` before clicking on the PDF download.

--- 

## Inspiration
- The original style stems from the [responsive-resume-cv-smith](https://github.com/bedimcode/responsive-resume-cv-smith) repository, 
but modified and stylized to my liking.

## Forking Instructions
- I have made sure to comment and standardize the contents of `index.html` to allow for easy modification for anyone that wants to 
~~steal~~ *use* my resume template.


1. Fork this repository.
2. Add your own profile picture to the `assets/img` directory.
3. Adjust `index.html` with your own data accordingly.
4. Enable page deployment for your repository: `Repo --> Settings --> Pages --> Build and Deployment --> Deploy from a branch (main)`
5. Your resume should then be hosted at: `https://<username>.github.io/<repo_name>`
 
