// JavaScript for dynamic research template
// To add new research projects, add entries to the researchData object below
// To edit content, modify the title, background, and pdfSrc for each project

const researchData = {
  1: {
    title: "Examining the Impact of Premium Tea Consumption Trends on Lotus-Infused Tea Growth in Vietnam",
    background: "This is my first professional research paper published in a journal. This is the product of 2 months of studying and working with mentor - Dr. Lan Anh, Vietnam's pioneer researcher in Finance, Investing, and Business Law. Below is the link to the paper: https://acr-journal.com/article/examining-the-impact-of-premium-tea-consumption-trends-on-lotus-infused-tea-growth-in-vietnam-1596/",
    pdfSrc: "pdfs/Lotues_Infused_Tea_Paper_V2_06-10_1.pdf"
  },
  2: {
    title: "Applying Inequality Theory to Optimize Comprehensive Bus Systems and Public Transportation Networks in Hanoi",
    background: "This research paper is an \"upgraded version\" of the research paper with the same title in the previous VM2C exam. For this paper, I wrote it after learning with my teacher about how a research paper is developed and what makes it groundbreaking. This topic is also a topic that I have cherished to write for a long time. This paper is my first \"fairly complete\" self-written paper.",
    pdfSrc: "pdfs/Applying Inequality Theory to Optimize Comprehensive Bus Systems and Public Transportation Networks in Hanoi - Nguyen Ho Khoa.pdf"
  },
  3: {
    title: "Applying Mathematics to Optimize Comprehensive Bus Systems in Hanoi",
    background: "The following research paper was inspired by a topic I came up with and wrote right after I participated in the VM2C (Vietnam Mathematics Modelings Contest) and had to stop at the top 10. That contest gave me different experiences and perspectives on mathematics applied in life.",
    pdfSrc: "pdfs/Applying Mathematics to Optimize Comprehensive Bus Systems in Hanoi-Nguyen Ho Khoa.pdf"
  },
  4: {
    title: "The ST25 Paradox: An Analysis of Domestic Market Access Chaos and Brand Dilution Following Global Acclaim",
    background: "The topic and the intention to write this research paper came quite randomly and coincidentally. In the process of writing my thesis, I came across a topic about something that was undervalued. Speaking of this, I immediately thought of ST25 rice in Soc Trang, Vietnam - the world's best rice. I have heard of this rice for a long time, but from the time it became famous until 2 to 3 years later, I still see very few restaurants or households using this rice (from the Central to the North, or even abroad like the Philippines and Indonesia). This urged me to want to find out the reason and how to overcome the unfortunate \"decline\" of my hometown's symbol.",
    pdfSrc: "pdfs/The ST25 Paradox - An Analysis of Domestic Market Access Chaos and Brand Dilution Following Global Acclaim.pdf"
  },
  5: {
    title: "Hanoi's Systemic Drainage Failure: A Longitudinal Analysis Under the 'New Normal' of 2024-2025",
    background: "2025 and 2024 are truly difficult years when Vietnam in general and the Central region in particular have to suffer heavy losses from many unprecedented storms in history, such as typhoons Wipha and Bualoi. In the specific period from September to November, in Hanoi, the impact of successive storms has left significant consequences for the people in this city. Not only in terms of money, but the spiritual life of Hanoi people has also seriously declined. Specifically, people lose sleep worrying about their houses being flooded because the water level is too high, the number of broken vehicles has increased by more than 30%, flooded roads have forced all activities (going to work, going out) to stop. I was the one who had to walk my motorbike for 1.5 hours because the road was impassable and had to study online for 2 weeks because I could not go out to school. The above impacts are not small consequences of the ineffectiveness of stormwater drainage pipes in residential areas in Hanoi city. Looking at the flooded streets, alleys, and public housing, I really want to do something to find the reason and the best solution to overcome this critical situation.",
    pdfSrc: "pdfs/Hanoi's Systemic Drainage Failure A Longitudinal Analysis Under the 'New Normal' of 2024-2025.pdf"
  }
};

// Function to get URL parameter
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load research content based on project ID
function loadResearchContent() {
  const projectId = getUrlParameter('project');
  const data = researchData[projectId];

  if (data) {
    document.getElementById('research-title').textContent = data.title;
    document.getElementById('research-background').textContent = data.background;
    document.getElementById('pdf-embed').src = data.pdfSrc;
    // If using iframe instead: document.getElementById('pdf-iframe').src = data.pdfSrc;
  } else {
    // Default content if project not found
    document.getElementById('research-title').textContent = "Research Not Found";
    document.getElementById('research-background').textContent = "The requested research project could not be found. Please check the project ID or return to the researches page.";
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', loadResearchContent);

// To change colors, fonts, and spacing: Edit the CSS variables in css/styles.css
// To add hover effects: Modify the CSS for .btn:hover in styles.css
