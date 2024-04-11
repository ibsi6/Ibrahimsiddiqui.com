// Function to set the home content
// Define your models

const models = [

    {
        name: "Overview: Alzeimers",
        url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRkW3ttSzsvS3gvCkzYT394bgKGdFkJrlxD55qRtdQWik1fgaEF6v-tWc0PrK_YGcipE9qa8DKvt63N/pubhtml?widget=true&amp;headers=true"

    },
    {
        name: "Overview: Biopharma",
        url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQTFiDkWb3AJvgqxxV-Nc-416kTdSsKX5vs0mRYRwPqPsBXcOzP8-8Xa_muVmPIvUGgrEqaDAOeIdIL/pubhtml?widget=true&amp;headers=true"

    },
    {
        name: "Overview: Cardiovascular",
        url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRYmz7Peaam5nwFt_nq_HetX2XpgC2KE0YEsNJfBTt2t8MTKsgCMJYrpZpYK3zyNOr2waUCBrSjsRPa/pubhtml?widget=true&amp;headers=true"

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
        name: "Overview: Insulins",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQx1lPxabOi_LTdvi3kta6s2DUfRc8CJ8OCHnBcGA28HaSuO0CLco6OIxuH-wUrQLznKzhi9smGPULx/pubhtml?widget=true&amp;headers=true"

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
        name: "Becton Dickinson [BDX]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTRRPco7MlUpcgONBAwYPyNmTKuQ_HI1I-Uvm1afVy2kdSV4XmF_tZEkFW4TVA-MKYpAPMhFDM2yBvS/pubhtml?widget=true&amp;headers=true"


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
        name: "Bayer AG [BAYN GY]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWvajWnNqgGufsaHFbC4hBK8DQTYJ-HN14upB2cQeEpDKnQGeFZ--w-2KGC3ATc_tRbIXaLHtQkzmc/pubhtml?widget=true&amp;headers=true"


    },
    {
        name: "Baxter International [BAX]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSANcOI_vKVh-wmlrE-i8QNwvh_bvjkr4i76CpXXgWqNKM4xD_U5iNe3JZgeM_4lZEZ-6fgO72c6D8F/pubhtml?widget=true&amp;headers=true"


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

    {
        name: "Samsung Biologics [207940]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9f5i2onzTn52FP5NsP_MdjqZVSgwu4wpac5b-c5NRYYrLVsRts-K9KxwsA7pDXX8rdMPACpjfB4nv/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "Celltrion [068270]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNLNGogqkR4zqx33AoovYyibEGuAjj92x7jPWV3tpxxrDKoVf3QT4rraplq-1xc5zfr0zjnsA4vAcl/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "Otsuka [4578]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSFFX9BgNk3qQkiWNJjhJmx2WWOWIzrIeeXWLtpiy-yDAMypk-l2dNzs8ThYInlCZPXKf6hqL9Wp37/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "JP Daiichi Sankyo [4568]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRrXUmA3y1m6pZhkGin4IJwbqmRqCrg_nsI6_iLdzP8pkRNMM8wWCrlE91rhTqlYNcierTuBbN9___y/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "JP [4523]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_qdindHA_nqY8C0a1GSjdeTUenQE03HpEJBVkvQbw7VdQ9nCks_gQoSFw-eOkiKfARpweDQTCd--y/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "Chugai [4519]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYJYMBG_soKvjzZo3DnTc4Rago8FZliY-lycX9GtY-xIgH3x_KorCoIeIuGdf1rMWIzKac8gxzrDCm/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "JP [4503]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXkQS8UdOHQCHQEtTIclquE8tMGIOSADvUvqVNVxzi1Ulgg4H_BjqpSy8TQuYL-jr0nmHQ0hdiCAoC/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "Takeda [4502]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUk4vW7HHpuq-GdmYW_LFJlqQhNlJt2ckIim0_R9O_xIcapk78YkbVhiiFrugOQU8-GNS2NvN0ZeKe/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "HK WuXi Biologics [2269]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTfyazPfG8iZeAAN8sclZbFqm5RuQMIMgs2s2ho27CmQMPtf4bh5_rZemR2GVq3xWpniYugkR2WkPYj/pubhtml?widget=true&amp;headers=true"
    },
    {
        name: "HK Sino [1177]",
        url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTgrnNRAGob6OUOhyqH71YTWVZbhdZNsrT0sDiKF46_dgbYCSDJDiH2jwQMk5EYHQ2fKPzb2-Ou2f7R/pubhtml?widget=true&amp;headers=true"
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
            <h1 style = "">In on CTNM! Check out Gilead!</h1>
            <h1 style="text-align:left; color: red; font-size:smaller;">(Some models take longer to load)<br> </h1>

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
