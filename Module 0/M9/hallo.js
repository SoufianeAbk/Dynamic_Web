document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".endpoint-knop");
    const statusInfo = document.getElementById("status-info");
    const responseDetails = document.getElementById("response-details");

    buttons.forEach(button => {
        button.addEventListener("click", async () => {
            const statusCode = button.getAttribute("data-code");
            const url = `https://httpstat.us/${statusCode}`;
            
            try {
                const response = await fetch(url);
                
                const statusClass = getStatusClass(response.status);
                statusInfo.innerHTML = `
                    <span class="${statusClass}">Status: ${response.status} ${response.statusText}</span><br>
                    Succesvol: ${response.ok ? "Ja" : "Nee"} <br>
                    Categorie: ${getStatusCategory(response.status)}
                `;
                
                const headers = [];
                response.headers.forEach((value, name) => {
                    headers.push(`${name}: ${value}`);
                });
                
                responseDetails.textContent = `Response Headers:\n${headers.join("\n")}\n\nResponse Type: ${response.type}`;
            } catch (error) {
                statusInfo.innerHTML = `<span class="status-client-error">Fout: Kan geen verbinding maken</span>`;
                responseDetails.textContent = error.toString();
            }
        });
    });

    function getStatusClass(status) {
        if (status >= 200 && status < 300) return "status-success";
        if (status >= 300 && status < 400) return "status-redirect";
        if (status >= 400 && status < 500) return "status-client-error";
        if (status >= 500) return "status-server-error";
        return "";
    }

    function getStatusCategory(status) {
        if (status >= 200 && status < 300) return "200s (Succes)";
        if (status >= 300 && status < 400) return "300s (Redirect)";
        if (status >= 400 && status < 500) return "400s (Client Error)";
        if (status >= 500) return "500s (Server Error)";
        return "Onbekend";
    }
});
