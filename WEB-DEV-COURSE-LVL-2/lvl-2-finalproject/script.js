// job object { company, position, status, date, notes }

// Declare an empty array to store job application objects
let jobs = [];

// References to all DOM elements
const jobsContainer = document.getElementById('jobsContainer');
const companyInput = document.getElementById('companyInput');
const positionInput = document.getElementById('positionInput');
const statusSelect = document.getElementById('statusSelect');
const applicationDate = document.getElementById('applicationDate');
const notesTextArea = document.getElementById('notesTextArea');
const jobForm = document.getElementById('jobForm');
const filterDropdown = document.getElementById('filterDropDown');
const searchInput = document.getElementById('searchInput');

// loadJobs() -> load the saved job applications from localStorage
function loadJobs() {
    // 1. Get saved data from local storage
    const savedJobs = localStorage.getItem("savedJobs"); 

    // 2. Validate data exists
    if (savedJobs) {
        jobs = JSON.parse(savedJobs); // parse the json data to array
    }
    else {
        console.log("No saved job applications found in local storage");
    }
}

// saveJobs() -> save the job applications into localStorage
function saveJobs() {
    // 1. Convert data to JSON and save into local storage
    localStorage.setItem("savedJobs",JSON.stringify(jobs)); 
    console.log("Job Applications saved to local storage");
}

// renderJobs(jobsToRender) -> render the job applications to the screen
function renderJobs(jobsToRender) {
    // 1. Clear the job application container
    jobsContainer.innerHTML = "";

    // 2. Render job table headings
    let tableHeader = document.createElement("div");
    tableHeader.classList.add("table");
    tableHeader.classList.add("text-th");
    tableHeader.innerHTML=`
                        <div>Company</div>
                        <div>Position</div>
                        <div>Status</div>
                        <div>Date Applied</div>
                        <div>Notes</div>
                        <div>Actions</div>`;
    jobsContainer.appendChild(tableHeader);

    // 3. Render each job application as a row
    jobsToRender.forEach((job, index) => {
        let jobRow = document.createElement("div");
        jobRow.classList.add("table");
        jobRow.classList.add("row");
        jobRow.innerHTML=`
                        <div>${job.company}</div>
                        <div>${job.position}</div>
                        <div>${job.status}</div>
                        <div>${job.date}</div>
                        <div>${job.notes}</div>
                        <button class="btn-delete" data-index="${index}">🗑️</button>
                        `;
        jobsContainer.appendChild(jobRow);
    });

    // 3.2 add delete functionality to each delete button
    const deleteBtns = document.querySelectorAll(".btn-delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            jobs.splice(index, 1);
            saveJobs();
            renderJobs(jobs);
        });
    });

    // TODO: 3.3 add edit functionality to each edit button
    /* <button class="btn-edit" data-index="${index}">✏️</button>
    const editBtns = document.querySelectorAll(".btn-edit");
    editBtns.forEach((btn) => {
        btn.addEventListener("click", function ())
    }); */
}

// addJob(e) -> Adds new job
function addJob(e) {
   e.preventDefault(); // to stop the form from refreshing
   const newJob = {
    company: companyInput.value.trim(),
    position: positionInput.value.trim(),
    status: statusSelect.value.trim(),
    date: applicationDate.value,
    notes: notesTextArea.value.trim()
   };
   jobs.push(newJob);
   saveJobs();
   renderJobs(jobs);
   jobForm.reset();
   console.log("New job added");
}    

// filterJobsByStatus() -> filters jobs by status
function filterJobsByStatus() {
    const selectedFilter = filterDropdown.value;
    if (selectedFilter === "All") {
        renderJobs(jobs);
    }
    else {
        const filteredJobs = jobs.filter((job) => job.status === selectedFilter);
        renderJobs(filteredJobs);
    }
}

// filterJobsByCompanyOrPosition() -> filter jobs by company or position
function filterJobsByCompanyOrPosition() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === "") {
        renderJobs(jobs);
    }
    else {
        const filteredJobs = jobs.filter((job) => job.company.toLowerCase().includes(query) || job.position.toLowerCase().includes(query));
        renderJobs(filteredJobs);
    }
}

// Add event listeners
jobForm.addEventListener("submit", addJob);
filterDropdown.addEventListener("change", filterJobsByStatus);
searchInput.addEventListener("input",filterJobsByCompanyOrPosition);

// Initialize the app
function initialize() {
    loadJobs();
    renderJobs(jobs);
    console.log("App Initialized");
}

initialize();