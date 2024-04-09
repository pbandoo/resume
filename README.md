# resume
**This repository is a static Github Pages hosted resume with a modern, monotone aesthetic with mobile device support.**

---

> [!note]
> **Current Issue(s):**
> - `html2pdf` is currently configured to resize the resume and print to A4 scaling. This is suboptimal, and the returned PDF looks considerably worse than the live site.
> - There are no page breaks/hard defined cut offs, meaning even if `html2pdf` was using `Letter` or `Legal` scaling, the output would still be off. 
>
> **Current Workaround(s):**
> - Take screenshots of near identical size and use online [PNG2PDF converters](https://png2pdf.com/).
>   - (*Note: the link above allows you to upload multiple PNG's, then download a singular combined PDF.*)
> - Add your resume to the `assets/pdf` directory, and update `index.html` to download that file.

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
4. Enable page deployment for your repository: ``Repo --> Settings --> Pages --> Build and Deployment --> Deploy from a branch (main)``
5. Your resume should then be hosted at: `https://<username>.github.io/<repo_name>`
 
