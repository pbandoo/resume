/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'


// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 
function scaleCv(){
    document.body.classList.add('scale-cv')
}


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 
function removeScale(){
    document.body.classList.remove('scale-cv')
}


/*==================== GENERATE PDF ====================*/ 

let resumeButton = document.getElementById('resume-button')


// Function to call areaCv and Html2Pdf options 
function generateResume(){

  // Dynamically create filename 
  function getFormattedDate(){
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const now = new Date();
    
    let day = now.getDate().toString().padStart(2, '0');
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    return `${day}${month}${year}`;
  }

  let filename = `McCann, Tyler - Resume - ${getFormattedDate()}.pdf`;

      

  // Document element to print limited to 2 pages 
  let areaCv = document.getElementById('area-cv')
  let originalHeight = areaCv.style.maxHeight;
  areaCv.style.maxHeight = "22in";

  // Tweak html2pdf for high quality PDF (~1.5MBs) that's no longer shifted right
  let options = {
    margin:       [0,-3,0,0], // Changed from 0 --> fixed the shift to the right         
    filename:     filename, // 'McCann, Tyler - Resume - <current_date>.pdf',
    pagebreak:    { before: ['#certifications','#page-break'] },
    image:        { type: 'jpeg', quality: 0.99 },
    html2canvas:  { scale: 2, scrollX: 0, scrollY: 0, logging: true },
    jsPDF:        { format: 'letter', orientation: 'portrait' }
  };

  // Print to PDF, then revert the page back to it's original height
  //html2pdf().set(options).from(areaCv).save().then(() => {
  //  areaCv.style.maxHeight = originalHeight;
  //});
  
  html2pdf()
    .set(options)
    .from(areaCv)
    .toPdf()
    .get('pdf')
    .then((pdf) => {
      // Determine page number text color based on the current theme
      let theme = getCurrentTheme();
      let textColor = theme === 'dark' ? [191, 191, 191] : [64, 58, 58]; // #bfbfbf for dark, #403a3a for light
      //let textColor = theme === 'dark' ? [242, 242, 242] : [11, 10, 10]; // #f2f2f2 for dark, #0b0a0a for light
      
      // Add page numbers to bottom right of printed pages
      let totalPages = pdf.internal.getNumberOfPages();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(9);
        pdf.setTextColor(...textColor);
        pdf.text(`${i}`, 207, 271, {align: 'right'}); // Position: bottom right
      }
    })
    .save()
    .then(() => {
      areaCv.style.maxHeight = originalHeight; // Undo 2 page limit
    });

}


// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () =>{
    
  scaleCv()                     // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  generateResume()              // 2. The PDF is generated
  setTimeout(removeScale, 5000) // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.

});
