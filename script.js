fetch("Dailyexpenses.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let placeholder = document.querySelector("#data-output");
        let out = "";

        data["Form Responses 1"].forEach(expense => {
            out += `
                <tr>
                    <td>${expense["SI.No"]}</td>
                    <td>${expense.Date}</td>
                    <td>${expense.Purpose}</td>
                    <td>${expense.Amount}</td>
                    <td>${expense["Paid by"]}</td>
                    <td><a href="${expense.Bills}" target="_blank">View Bill</a></td>
                </tr>
            `;
        });

        placeholder.innerHTML = out;
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
    });
