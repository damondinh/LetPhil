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
const totalApplicationsCount = document.getElementById('totalApplicationsCount');
const activeInterviewsCount = document.getElementById('activeInterviewsCount');
const offersReceivedCount = document.getElementById('offersReceivedCount');
const rejectionRatePercentage = document.getElementById('rejectionRatePercentage');
const jobApplicationModal = document.getElementById('jobApplicationModal');
const addJobApplicationBtn = document.getElementById('addJobApplicationBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitModalBtn = document.getElementById('submitModalBtn');

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
    tableHeader.id = 'tableHeader';
    tableHeader.classList.add("row");
    tableHeader.classList.add("text-th");
    tableHeader.innerHTML=`
                        <div>Company</div>
                        <div>Position</div>
                        <div>Status</div>
                        <div>Date Applied</div>
                        <div>Notes</div>
                        <div style="text-align: center;">Actions</div>`;
    jobsContainer.appendChild(tableHeader);

    // 3. Render each job application as a row
    jobsToRender.forEach((job, index) => {
        let jobRow = document.createElement("div");
        jobRow.classList.add("row");
        jobRow.classList.add("row-content");
        jobRow.innerHTML=`
                        <div id="rowCompany" class="text-sm">${job.company}</div>
                        <div id="rowPosition" class="text-sm">${job.position}</div>
                        <div id="rowBadge" class="badge badge-${job.status.toLowerCase()}">${job.status}</div>
                        <div id="rowDate" class="text-sm text-grey">${formatDate(job.date)}</div>
                        <div id="rowNotes" class"text-sm text-grey">${job.notes}</div>
                        <div id="rowActions">
                            <button class="btn-edit btn-row" data-index="${index}">✏️</button>
                            <button class="btn-delete btn-row" data-index="${index}">🗑️</button>
                        </div>
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
    const editBtns = document.querySelectorAll(".btn-edit");
    editBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            openEditModal(index);
        });
    }); 

    // Update dashboard
    renderTotalApplicationsCount();
    renderActiveInterviewsCount();
    renderOffersReceivedCount();
    renderRejectionRatePercentageCount();
}

// formatDate(date) -> formats date string to "8 Apr 2026"
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// submit(e) -> Adds/Edits job
function submit(e) {
    e.preventDefault(); // to stop the form from refreshing
    const mode = jobForm.dataset.mode;
    const index = jobForm.dataset.id;
    const newJob = {
        company: companyInput.value.trim(),
        position: positionInput.value.trim(),
        status: statusSelect.value.trim(),
        date: applicationDate.value,
        notes: notesTextArea.value.trim()};

    // Add new job application to array or update existing job application based on mode
    if (mode === 'add') {
        jobs.push(newJob);
    } else if (mode === 'edit') {
        jobs[index] = newJob;
    }
    
    // Save and render jobs, reset form and close modal
    saveJobs();
    renderJobs(jobs);
    jobForm.reset();
    closeModal();
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

// renderTotalApplicationsCount()
function renderTotalApplicationsCount() {
    totalApplicationsCount.textContent = jobs.length;
}

// renderActiveInterviewsCount()
function renderActiveInterviewsCount() {
    const activeInterviews = jobs.filter((job) => job.status === "Interview");
    activeInterviewsCount.textContent = activeInterviews.length;
}

// renderOffersReceivedCount()
function renderOffersReceivedCount() {
    const offersReceived = jobs.filter((job) => job.status === "Offer");
    offersReceivedCount.textContent = offersReceived.length;
}

// renderrejectionRatePercentageCount()
function renderRejectionRatePercentageCount() {
    const rejectionCount = jobs.filter((job) => job.status === "Rejected");
    rejectionRatePercentage.textContent = Math.round((rejectionCount.length/jobs.length)*100)+ "%";
}
// closeModal() -> Closes modal
function closeModal() {
    jobApplicationModal.close();
}

// openAddModal(mode) -> Configures the modal to add 
function openAddModal() {
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    const form = document.getElementById('jobForm');

    // Update modal 
    title.innerText = "Add New Application";
    description.innerText = "Track a new job application by filling out the details below.";
    form.dataset.mode = "add";
    form.reset(); // Clear previous inputs

    jobApplicationModal.showModal();
}

// openEditModal(mode) -> Configures the modal to edit
function openEditModal(index) {
    const title = document.getElementById('modalTitle');
    const description = document.getElementById('modalDescription');
    const form = document.getElementById('jobForm');

    // Update modal 
    title.innerText = "Edit Application";
    description.innerText = "Update the details of your job application.";
    form.dataset.mode = "edit";
    form.dataset.id = index;

    // Add current jobs data into inputs to modify
    document.getElementById('companyInput').value = jobs[index].company;
    document.getElementById('positionInput').value = jobs[index].position;
    document.getElementById('statusSelect').value = jobs[index].status;
    document.getElementById('applicationDate').value = jobs[index].date;
    document.getElementById('notesTextArea').value = jobs[index].notes;

    jobApplicationModal.showModal();
}

// Add event listeners
closeModalBtn.addEventListener("click", closeModal);
submitModalBtn.addEventListener("click", submit);
addJobApplicationBtn.addEventListener("click", openAddModal);
filterDropdown.addEventListener("change", filterJobsByStatus);
searchInput.addEventListener("input",filterJobsByCompanyOrPosition);

// Initialize the app
function initialize() {
    loadJobs();
    renderJobs(jobs);
    console.log("App Initialized");
}

initialize();