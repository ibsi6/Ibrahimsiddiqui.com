// Function to set the home content
// Define your models

const models = [
    {
        name: "Overview: Biopharma",
        url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQTFiDkWb3AJvgqxxV-Nc-416kTdSsKX5vs0mRYRwPqPsBXcOzP8-8Xa_muVmPIvUGgrEqaDAOeIdIL/pubhtml?widget=true&amp;headers=true"

    },

    {
        name: "Overview: Medical-Patents",
        url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vTa_eFgQMjYOeEX3z4qEMPfbpOy8AGuHQyg_NyDoTeAtYs0tXHvgPGXVMXP8_T9No6YEe2mGF14grsw/pubhtml?widget=true&amp;headers=true"

    },

    {
        name: "Overview: Pyschiatry",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHXQKce3LTXkwdq2auDsGO-8p9dI_C5Jsv1TDThwNToGYZNu1_JIJDJbZqMj-Lr-8U32Bd-4eCzPK6/pubhtml?widget=true&amp;headers=true"

    },
    {
        name: "Overview: Hedge Funds",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9l-Jnog-6YFPth8jTTGSJHmxeP2lQpdk2576r3KHpqLbmalcK6swEzLUKBctPvmfU2Yw43g4XFuT6/pubhtml?widget=true&amp;headers=true"

    },

    {
        name: "AbbVie [ABBV]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsRO9CaYbTpW54OE6AVEUYqxjYbPqe6rvgiIiZYs19fgSJgl2zTgqgUjjPVCBOoItPQV9eCXPcT1a2/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "Alnylam Pharmaceuticals [ALNY]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpcXjw3QeDfsOLiSXLb2ILp1FeXbNWcpIPtKd5-oNrJT9WsCNrpxFHe6kv2JoTPpe_IN_AmS3WCWkd/pubhtml?widget=true&amp;headers=true",
    },

    {
        name: "Biomarin Pharmaceutical [BMRN]",
        url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQmQqMa9rJ5k-x1g6cnDpg1rWkC1HsTzgmGi-UxKhmlFXefcfu3OUQoWOZa3vWO-FeYcFyf6mH29JWT/pubhtml?widget=true&amp;headers=true"


    },
    {
        name: "Bristol-Myers Squibb [BMY]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRk_1A-O7IF_S9RWxdS1_7_Nc-HDBkGx8-gXE5-qSTNW-FqRRNPxaYIKyfQFKjQDkTk9nltVpJ__ALK/pubhtml?widget=true&amp;headers=true"


    },

    {
        name: "Contineum Therapeutics [CTNM]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQPnjxTLOYpx7_E_SHqMPxKqQb3utPuIQQUrqbJaqeoNiuCK1gWZyqjcFh6TyZyghCFSV5Xsc5gAUbx/pubhtml?widget=true&headers=true",
    },
    {

        name: "Gilead Sciences [GILD]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTS1chW1zFI0ycRTi1JR48E5oOkNfki8nG2_vvFRt6ROhFwxNVULFFnp-1ECkYG5BotVe9J_1BzPdNW/pubhtml?widget=true&amp;headers=true"

    },

    {
        name: "Johnson and Johnson [JNJ]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRi2pwXPeCRjKfTkR-xbV-LJVdtkyXb9Qx90WQR1kP9myUsmkpmd3G2BQHh49QJzx_2xpyIevZraAo0/pubhtml?widget=true&amp;headers=true"

    },

    {
        name: "Eli Lily [LLY]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3onqvYjYDO0hFsAm03cxyutyC4aRyA5UrTVcy_6HfTUC3YdP7SKPZjTGeOgb1pMbDYdsE2ALlvqlO/pubhtml?widget=true&amp;headers=true"

    },
    {
        name: "Regeneron Pharmaceuticals [REGN]",
        url: " https://docs.google.com/spreadsheets/d/e/2PACX-1vTXs4HZ_YpxjCCOhyTviOYMQ-07RtYGV9o14498wsWKMyx0MCX1QoXONAY8TmeSIbinmoWnEmmFFlM_/pubhtml?widget=true&amp;headers=true"

    },
    {
        name: "Roche Holdings [ROG VX]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRRwaTqpQ_fqRw4mFBhm7NGKN55DyRN-z7TPpxF2cB4E4kQYex8rV18Fjt-MhFunPX1XMh0VvifpeBH/pubhtml?widget=true&amp;headers=true"
    },

    {
        name: "United Therapeutics [UTHR]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3Sjl93CF4LKtDfr0tsijOUuunod4qkekxNGeazn4GsDk6dgIT3p_BHIuEC2yrNl5vwVBg54qHUif3/pubhtml?widget=true&amp;headers=true"
    },




    
];

document.getElementById('nav-about').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    setAboutContent();
});

function setAboutContent() {
    const appDiv = document.querySelector('#app');
    // Start fade out
    appDiv.classList.add('fade-out');

    appDiv.addEventListener('animationend', () => {
        // Only proceed if fading out
        if (!appDiv.classList.contains('fade-out')) return;

        // Remove the fade-out class
        appDiv.classList.remove('fade-out');

        // Change the content after fade out
        appDiv.innerHTML = `
            <div style="padding: 20px; background-image: url('galaxy.png'); background-size: cover; background-position: center; height: 100vh; color: white;">
                <h1>About</h1>
                <p>I make models sometimes</p>
            </div>
        `;

        // Fade in the new content
        appDiv.classList.add('fade-in');
        // Once fade-in is done, clean up by removing the class
        appDiv.addEventListener('animationend', () => appDiv.classList.remove('fade-in'), { once: true });
    }, { once: true });
}



function setHomeContent() {
    const appDiv = document.querySelector('#app');
    // Start fade out
    appDiv.classList.add('fade-out');

    appDiv.addEventListener('animationend', () => {
        // Only proceed if fading out
        if (!appDiv.classList.contains('fade-out')) return;

        // Remove the fade-out class
        appDiv.classList.remove('fade-out');

        // Change the content after fade out
        appDiv.innerHTML = `
            <h1 style="text-align:center; margin-top:20%;">Ibrahim Siddiqui</h1>
            <p style="text-align:center; font-size:smaller; color:grey;">ibrahimsid.contact@gmail.com</p>
            
            <br><br>
            <p style="text-align:center; font-size:smaller; color:red;"></p>

        `;

        document.body.style.overflow = 'hidden'; // Optionally reset overflow here if needed

        // Fade in the new content
        appDiv.classList.add('fade-in');
        // Once fade-in is done, clean up by removing the class
        appDiv.addEventListener('animationend', () => appDiv.classList.remove('fade-in'), { once: true });
    }, { once: true });
}


// Event listener for the "Home" link
document.getElementById('nav-home').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    setHomeContent();
});

document.getElementById('nav-models').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const appDiv = document.querySelector('#app');
    // Start fade out
    appDiv.classList.add('fade-out');

    appDiv.addEventListener('animationend', () => {
        // Only proceed if fading out
        if (!appDiv.classList.contains('fade-out')) return;

        // Remove the fade-out class
        appDiv.classList.remove('fade-out');

        document.body.style.overflow = 'auto'; // Optionally, manage overflow here if needed

        // Update the content after the fade out
        let modelsHtml = models.map(model => `
    <li class="model-item" style="list-style-type: none; cursor:pointer; margin:10px 0;">
        <span style="font-weight: bold;">»</span>
        <span class="model-link" data-url="${model.url}" style="font-family: 'Roboto', sans-serif;">${model.name}</span>
    </li>
    `).join('');


        appDiv.innerHTML = `
            <div style="margin-top:20px; font-family: 'Roboto', sans-serif; padding-left: 20px;overflow-y: auto;">
            <h1 style="text-align:left; font-weight: bold; ">Analysis</h1>
            <h1 style="text-align:left; color: grey; font-size:smaller;">Some of the larger models take longer to load <br> <br> Working on CTNM right now!</h1>

            <ul id="models-list" style="padding:0;">
                ${modelsHtml}
            </ul>
            </div>
        `;

        // Add click listeners to each model link after the update
        document.querySelectorAll('.model-link').forEach(item => {
            item.addEventListener('click', function() {
                const modelUrl = this.getAttribute('data-url');
                // Repeating fade out for individual model view change might be redundant here
                // Just change the content directly or adjust as needed
                appDiv.innerHTML = `
                    <div style="height: calc(100vh - 60px); width: 100%; position: relative;">
                        <iframe src="${modelUrl}" style="width: 100%; height: 100%; border: none; position: absolute; top: 0; left: 0;"></iframe>
                    </div>
                `;
            });
        });

        // Start fade in
            }, { once: true });
});





// Set the home content by default when the page loads
setHomeContent();
