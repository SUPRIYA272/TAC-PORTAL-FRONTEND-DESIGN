document.addEventListener('DOMContentLoaded', () => {
    // Default values
    let initializedCount = 0;
    let rejectedCount = 0;
    let approvedCount = 0;

    // Update box values
    const updateDashboardValues = () => {
        document.getElementById('initialized-value').textContent = initializedCount;
        document.getElementById('rejected-value').textContent = rejectedCount;
        document.getElementById('approved-value').textContent = approvedCount;
    };

    // Update values based on domain selection (simulated)
    document.getElementById('domain-select').addEventListener('change', (event) => {
        const selectedDomain = event.target.value;
        // Simulated API call or data update based on selected domain
        // Update counts accordingly
        if (selectedDomain === 'hardware') {
            initializedCount = 1;
            rejectedCount = 2;
            approvedCount = 3;
        } else if (selectedDomain === 'software') {
            initializedCount = 6;
            rejectedCount = 9;
            approvedCount = 3;
        }
        // Update dashboard with new values
        updateDashboardValues();
    });

    // Initial update
    updateDashboardValues();
    function logout() {
        // Redirect to student.html
        window.location.href = "teacher.html";
    }
});
