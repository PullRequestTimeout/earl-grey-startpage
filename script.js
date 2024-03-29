// Dark Mode --------------------------------------------------------------------------

const toggleDarkStyles = () => {
    
    const darkModeSwitch = document.getElementById("darkModeToggle");
    
    // Light Mode SVGs
    const googleSearchLabelLight = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-brand-google\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M17.788 5.108a9 9 0 1 0 3.212 6.892h-8\" /></svg>";
    const duckduckgoSearchLabelLight = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40 40\" width=\"40px\" height=\"40px\"><g id=\"surface33221335\"><path style=\" stroke:none;fill-rule:nonzero;fill:#002C54;fill-opacity:1;\" d=\"M 20 1.601562 C 9.847656 1.601562 1.601562 9.847656 1.601562 20 C 1.601562 30.152344 9.847656 38.398438 20 38.398438 C 30.152344 38.398438 38.398438 30.152344 38.398438 20 C 38.398438 9.847656 30.152344 1.601562 20 1.601562 Z M 20 3.199219 C 29.289062 3.199219 36.800781 10.710938 36.800781 20 C 36.800781 28.082031 31.121094 34.8125 23.523438 36.425781 C 23.332031 36.125 23.101562 35.773438 22.824219 35.375 C 22.246094 34.546875 21.835938 33.898438 21.601562 33.398438 C 23.113281 34.015625 24.128906 34.324219 24.648438 34.324219 C 25.027344 34.324219 25.226562 33.734375 25.226562 32.550781 C 25.226562 30.351562 25.003906 29.25 24.601562 29.25 C 24.007812 29.25 22.878906 29.898438 21.175781 31.199219 C 21.175781 30.867188 21.003906 30.726562 20.648438 30.773438 L 20.449219 30.773438 C 19.835938 29.144531 19.550781 27.679688 19.550781 26.398438 C 19.550781 26.042969 19.578125 25.707031 19.648438 25.351562 C 21.824219 26.414062 23.574219 26.925781 24.898438 26.925781 C 25.632812 26.925781 26.746094 26.726562 28.226562 26.300781 C 29.703125 25.875 30.425781 25.421875 30.425781 24.925781 C 30.425781 24.617188 30.226562 24.449219 29.824219 24.449219 C 29.210938 24.449219 28.335938 24.535156 27.175781 24.699219 C 26.015625 24.867188 25.117188 24.949219 24.5 24.949219 C 23.863281 24.949219 23.167969 24.78125 22.398438 24.449219 C 21.632812 24.117188 21.25 23.667969 21.25 23.101562 C 21.25 22.980469 21.261719 22.882812 21.300781 22.824219 C 21.335938 22.769531 21.378906 22.738281 21.449219 22.726562 C 21.523438 22.710938 21.601562 22.710938 21.675781 22.726562 C 21.746094 22.738281 21.832031 22.761719 21.949219 22.773438 C 22.070312 22.789062 22.179688 22.773438 22.273438 22.773438 C 22.488281 22.773438 22.796875 22.816406 23.199219 22.875 C 23.601562 22.933594 23.882812 22.949219 24.074219 22.949219 C 24.808594 22.949219 26.304688 22.539062 28.574219 21.675781 C 30.847656 20.8125 32 20.121094 32 19.648438 C 32 19.367188 31.761719 19.167969 31.324219 19.050781 C 30.886719 18.929688 30.503906 18.875 30.125 18.875 C 29.792969 18.875 29.289062 18.972656 28.625 19.148438 C 27.960938 19.328125 27.230469 19.527344 26.449219 19.773438 C 25.667969 20.023438 25.160156 20.203125 24.898438 20.273438 C 24.992188 19.804688 25.050781 19.410156 25.050781 19.125 C 25.050781 18.011719 24.742188 16.726562 24.148438 15.25 C 23.558594 13.773438 22.882812 12.660156 22.101562 11.949219 C 21.460938 11.382812 20.589844 11.011719 19.523438 10.800781 C 18.863281 9.945312 17.832031 9.171875 16.425781 8.476562 C 15.019531 7.777344 13.789062 7.425781 12.699219 7.425781 C 12.488281 7.425781 12.164062 7.46875 11.726562 7.550781 C 11.289062 7.632812 10.992188 7.675781 10.875 7.699219 L 10.101562 8.800781 L 10.300781 8.851562 C 10.464844 8.851562 10.730469 8.820312 11.074219 8.773438 C 11.417969 8.726562 11.683594 8.699219 11.851562 8.699219 C 12.652344 8.699219 13.558594 8.867188 14.601562 9.199219 C 13.9375 9.53125 13.371094 9.757812 12.875 9.875 C 12.828125 9.898438 12.660156 9.914062 12.398438 9.949219 C 12.140625 9.984375 11.929688 10.039062 11.75 10.074219 C 11.570312 10.109375 11.402344 10.167969 11.25 10.273438 C 11.097656 10.382812 11.023438 10.507812 11.023438 10.675781 C 12.351562 10.535156 13.335938 10.476562 14 10.476562 C 14.898438 10.476562 15.605469 10.558594 16.125 10.726562 C 14.304688 10.9375 12.90625 11.558594 11.925781 12.601562 C 10.945312 13.640625 10.449219 15.078125 10.449219 16.898438 C 10.449219 17.539062 10.507812 18.132812 10.601562 18.675781 C 11.050781 21.511719 11.898438 25.742188 13.175781 31.375 C 13.742188 34.019531 13.917969 34.824219 14.125 35.75 C 7.742188 33.371094 3.199219 27.222656 3.199219 20 C 3.199219 10.710938 10.710938 3.199219 20 3.199219 Z M 22.226562 13.949219 C 22.816406 13.949219 23.238281 14.203125 23.476562 14.726562 C 23.003906 14.488281 22.609375 14.375 22.300781 14.375 C 21.617188 14.375 21.191406 14.519531 21 14.824219 C 21.09375 14.234375 21.492188 13.949219 22.226562 13.949219 Z M 14.148438 14.375 C 14.601562 14.375 14.9375 14.539062 15.175781 14.851562 C 14.890625 14.730469 14.664062 14.648438 14.476562 14.648438 C 14.070312 14.648438 13.625 14.789062 13.175781 15.074219 C 12.726562 15.359375 12.527344 15.695312 12.550781 16.074219 C 12.476562 15.933594 12.449219 15.789062 12.449219 15.648438 C 12.449219 15.246094 12.632812 14.949219 13 14.726562 C 13.367188 14.5 13.746094 14.375 14.148438 14.375 Z M 22.851562 16.574219 C 23.132812 16.574219 23.375 16.675781 23.574219 16.875 C 23.773438 17.074219 23.875 17.316406 23.875 17.601562 C 23.875 17.859375 23.773438 18.113281 23.574219 18.324219 C 23.375 18.539062 23.132812 18.625 22.851562 18.625 C 22.589844 18.625 22.335938 18.539062 22.125 18.324219 C 21.914062 18.113281 21.800781 17.859375 21.800781 17.601562 C 21.800781 17.316406 21.914062 17.074219 22.125 16.875 C 22.335938 16.675781 22.589844 16.574219 22.851562 16.574219 Z M 23.300781 17 C 23.132812 17 23.050781 17.085938 23.050781 17.25 C 23.050781 17.441406 23.132812 17.523438 23.300781 17.523438 C 23.492188 17.523438 23.574219 17.441406 23.574219 17.25 C 23.574219 17.085938 23.492188 17 23.300781 17 Z M 14.824219 17.101562 C 15.132812 17.101562 15.402344 17.226562 15.648438 17.476562 C 15.898438 17.726562 16.023438 18.019531 16.023438 18.324219 C 16.023438 18.632812 15.898438 18.902344 15.648438 19.148438 C 15.402344 19.398438 15.132812 19.523438 14.824219 19.523438 C 14.519531 19.523438 14.222656 19.398438 13.976562 19.148438 C 13.726562 18.898438 13.625 18.632812 13.625 18.324219 C 13.625 18.019531 13.726562 17.722656 13.976562 17.476562 C 14.226562 17.226562 14.519531 17.101562 14.824219 17.101562 Z M 15.351562 17.601562 C 15.136719 17.601562 15.023438 17.710938 15.023438 17.925781 C 15.023438 18.117188 15.136719 18.199219 15.351562 18.199219 C 15.5625 18.199219 15.675781 18.117188 15.675781 17.925781 C 15.675781 17.710938 15.5625 17.601562 15.351562 17.601562 Z M 15.351562 17.601562 \"/></g></svg>";
    
    // Dark Mode SVGs
    const googleSearchLabelDark = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-brand-google\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"#F4EFDF\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M17.788 5.108a9 9 0 1 0 3.212 6.892h-8\" /></svg>";
    const duckduckgoSearchLabelDark = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 40 40\" width=\"40px\" height=\"40px\"><g id=\"surface33221335\"><path style=\" stroke:none;fill-rule:nonzero;fill:#F4EFDF;fill-opacity:1;\" d=\"M 20 1.601562 C 9.847656 1.601562 1.601562 9.847656 1.601562 20 C 1.601562 30.152344 9.847656 38.398438 20 38.398438 C 30.152344 38.398438 38.398438 30.152344 38.398438 20 C 38.398438 9.847656 30.152344 1.601562 20 1.601562 Z M 20 3.199219 C 29.289062 3.199219 36.800781 10.710938 36.800781 20 C 36.800781 28.082031 31.121094 34.8125 23.523438 36.425781 C 23.332031 36.125 23.101562 35.773438 22.824219 35.375 C 22.246094 34.546875 21.835938 33.898438 21.601562 33.398438 C 23.113281 34.015625 24.128906 34.324219 24.648438 34.324219 C 25.027344 34.324219 25.226562 33.734375 25.226562 32.550781 C 25.226562 30.351562 25.003906 29.25 24.601562 29.25 C 24.007812 29.25 22.878906 29.898438 21.175781 31.199219 C 21.175781 30.867188 21.003906 30.726562 20.648438 30.773438 L 20.449219 30.773438 C 19.835938 29.144531 19.550781 27.679688 19.550781 26.398438 C 19.550781 26.042969 19.578125 25.707031 19.648438 25.351562 C 21.824219 26.414062 23.574219 26.925781 24.898438 26.925781 C 25.632812 26.925781 26.746094 26.726562 28.226562 26.300781 C 29.703125 25.875 30.425781 25.421875 30.425781 24.925781 C 30.425781 24.617188 30.226562 24.449219 29.824219 24.449219 C 29.210938 24.449219 28.335938 24.535156 27.175781 24.699219 C 26.015625 24.867188 25.117188 24.949219 24.5 24.949219 C 23.863281 24.949219 23.167969 24.78125 22.398438 24.449219 C 21.632812 24.117188 21.25 23.667969 21.25 23.101562 C 21.25 22.980469 21.261719 22.882812 21.300781 22.824219 C 21.335938 22.769531 21.378906 22.738281 21.449219 22.726562 C 21.523438 22.710938 21.601562 22.710938 21.675781 22.726562 C 21.746094 22.738281 21.832031 22.761719 21.949219 22.773438 C 22.070312 22.789062 22.179688 22.773438 22.273438 22.773438 C 22.488281 22.773438 22.796875 22.816406 23.199219 22.875 C 23.601562 22.933594 23.882812 22.949219 24.074219 22.949219 C 24.808594 22.949219 26.304688 22.539062 28.574219 21.675781 C 30.847656 20.8125 32 20.121094 32 19.648438 C 32 19.367188 31.761719 19.167969 31.324219 19.050781 C 30.886719 18.929688 30.503906 18.875 30.125 18.875 C 29.792969 18.875 29.289062 18.972656 28.625 19.148438 C 27.960938 19.328125 27.230469 19.527344 26.449219 19.773438 C 25.667969 20.023438 25.160156 20.203125 24.898438 20.273438 C 24.992188 19.804688 25.050781 19.410156 25.050781 19.125 C 25.050781 18.011719 24.742188 16.726562 24.148438 15.25 C 23.558594 13.773438 22.882812 12.660156 22.101562 11.949219 C 21.460938 11.382812 20.589844 11.011719 19.523438 10.800781 C 18.863281 9.945312 17.832031 9.171875 16.425781 8.476562 C 15.019531 7.777344 13.789062 7.425781 12.699219 7.425781 C 12.488281 7.425781 12.164062 7.46875 11.726562 7.550781 C 11.289062 7.632812 10.992188 7.675781 10.875 7.699219 L 10.101562 8.800781 L 10.300781 8.851562 C 10.464844 8.851562 10.730469 8.820312 11.074219 8.773438 C 11.417969 8.726562 11.683594 8.699219 11.851562 8.699219 C 12.652344 8.699219 13.558594 8.867188 14.601562 9.199219 C 13.9375 9.53125 13.371094 9.757812 12.875 9.875 C 12.828125 9.898438 12.660156 9.914062 12.398438 9.949219 C 12.140625 9.984375 11.929688 10.039062 11.75 10.074219 C 11.570312 10.109375 11.402344 10.167969 11.25 10.273438 C 11.097656 10.382812 11.023438 10.507812 11.023438 10.675781 C 12.351562 10.535156 13.335938 10.476562 14 10.476562 C 14.898438 10.476562 15.605469 10.558594 16.125 10.726562 C 14.304688 10.9375 12.90625 11.558594 11.925781 12.601562 C 10.945312 13.640625 10.449219 15.078125 10.449219 16.898438 C 10.449219 17.539062 10.507812 18.132812 10.601562 18.675781 C 11.050781 21.511719 11.898438 25.742188 13.175781 31.375 C 13.742188 34.019531 13.917969 34.824219 14.125 35.75 C 7.742188 33.371094 3.199219 27.222656 3.199219 20 C 3.199219 10.710938 10.710938 3.199219 20 3.199219 Z M 22.226562 13.949219 C 22.816406 13.949219 23.238281 14.203125 23.476562 14.726562 C 23.003906 14.488281 22.609375 14.375 22.300781 14.375 C 21.617188 14.375 21.191406 14.519531 21 14.824219 C 21.09375 14.234375 21.492188 13.949219 22.226562 13.949219 Z M 14.148438 14.375 C 14.601562 14.375 14.9375 14.539062 15.175781 14.851562 C 14.890625 14.730469 14.664062 14.648438 14.476562 14.648438 C 14.070312 14.648438 13.625 14.789062 13.175781 15.074219 C 12.726562 15.359375 12.527344 15.695312 12.550781 16.074219 C 12.476562 15.933594 12.449219 15.789062 12.449219 15.648438 C 12.449219 15.246094 12.632812 14.949219 13 14.726562 C 13.367188 14.5 13.746094 14.375 14.148438 14.375 Z M 22.851562 16.574219 C 23.132812 16.574219 23.375 16.675781 23.574219 16.875 C 23.773438 17.074219 23.875 17.316406 23.875 17.601562 C 23.875 17.859375 23.773438 18.113281 23.574219 18.324219 C 23.375 18.539062 23.132812 18.625 22.851562 18.625 C 22.589844 18.625 22.335938 18.539062 22.125 18.324219 C 21.914062 18.113281 21.800781 17.859375 21.800781 17.601562 C 21.800781 17.316406 21.914062 17.074219 22.125 16.875 C 22.335938 16.675781 22.589844 16.574219 22.851562 16.574219 Z M 23.300781 17 C 23.132812 17 23.050781 17.085938 23.050781 17.25 C 23.050781 17.441406 23.132812 17.523438 23.300781 17.523438 C 23.492188 17.523438 23.574219 17.441406 23.574219 17.25 C 23.574219 17.085938 23.492188 17 23.300781 17 Z M 14.824219 17.101562 C 15.132812 17.101562 15.402344 17.226562 15.648438 17.476562 C 15.898438 17.726562 16.023438 18.019531 16.023438 18.324219 C 16.023438 18.632812 15.898438 18.902344 15.648438 19.148438 C 15.402344 19.398438 15.132812 19.523438 14.824219 19.523438 C 14.519531 19.523438 14.222656 19.398438 13.976562 19.148438 C 13.726562 18.898438 13.625 18.632812 13.625 18.324219 C 13.625 18.019531 13.726562 17.722656 13.976562 17.476562 C 14.226562 17.226562 14.519531 17.101562 14.824219 17.101562 Z M 15.351562 17.601562 C 15.136719 17.601562 15.023438 17.710938 15.023438 17.925781 C 15.023438 18.117188 15.136719 18.199219 15.351562 18.199219 C 15.5625 18.199219 15.675781 18.117188 15.675781 17.925781 C 15.675781 17.710938 15.5625 17.601562 15.351562 17.601562 Z M 15.351562 17.601562 \"/></g></svg>";
    
    if (darkModeSwitch.checked == true) {
        // Dark Mode CSS FIle
        document.getElementById("darkmode").setAttribute("href", "dark.css");
        // Dark Mode SVGs
        document.getElementById("googleSearchLabel").innerHTML = googleSearchLabelDark;
        document.getElementById("duckduckgoSearchLabel").innerHTML = duckduckgoSearchLabelDark;
        localStorage.setItem("darkModeSwitch", true);
    } else {
        // Light Mode CSS File
        document.getElementById("darkmode").setAttribute("href", "light.css");
        // Light Mode SVGs
        document.getElementById("googleSearchLabel").innerHTML = googleSearchLabelLight;
        document.getElementById("duckduckgoSearchLabel").innerHTML = duckduckgoSearchLabelLight;
        localStorage.setItem("darkModeSwitch", false);
}};

document.getElementById("darkModeToggle").addEventListener('change', toggleDarkStyles);

// Local Storage ------------------------------------------------------------------------ 

const loadSaveState = () => {
    let darkModeToggle = JSON.parse(localStorage.getItem("darkModeSwitch"));
    if(darkModeToggle == true){ 
        document.getElementById("darkModeToggle").checked = true;
        toggleDarkStyles();
    };
}

// Update Location and Set Weather Icons and Data-----------------------------------------

const updateLocation = () =>{
    
    const error = () => {
        alert("You have not given location permissions to this website.")
    }

    const success = (position) => {
        // SVG Icon Variables
        const thunderstormIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud-storm\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1\" /><polyline points=\"13 14 11 18 14 18 12 22\" /></svg>";
        const cloudsIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12\" /></svg>";
        const drizzleIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud-snow\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7\" /><path d=\"M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01\" /></svg>";
        const rainIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-cloud-rain\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7\" /><path d=\"M11 13v2m0 3v2m4 -5v2m0 3v2\" /></svg>";
        const snowIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-snowflake\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(60 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(120 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(180 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(240 12 12)\" /><path d=\"M10 4l2 1l2 -1m-2 -2v6.5l3 1.72\" transform=\"rotate(300 12 12)\" /></svg>";
        const clearIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-sun\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7\" /></svg>";
        const fogIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-mist\" width=\"100\" height=\"100\" viewBox=\"0 0 24 24\" stroke-width=\"0.9\" stroke=\"#002C54\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M5 5h3m4 0h9\" /><path d=\"M3 10h11m4 0h1\" /><path d=\"M5 15h5m4 0h7\" /><path d=\"M3 20h9m4 0h3\" /></svg>";

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=464f77339fb17e890968824a382be54b&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById("weatherDescription").setAttribute("title", data.weather[0].description);
                const weatherWidget = document.getElementById("weatherIcon");

                // Sets the current weather icon
                switch (data.weather[0].main) {
                    case "Thunderstorm":
                        weatherWidget.innerHTML = thunderstormIcon;
                        break;
                    case "Clouds":
                        weatherWidget.innerHTML = cloudsIcon;
                        break;
                    case "Drizzle":
                        weatherWidget.innerHTML = drizzleIcon;
                        break;
                    case "Rain":
                        weatherWidget.innerHTML = rainIcon;
                        break;
                    case "Snow":
                        weatherWidget.innerHTML = snowIcon;
                        break;
                    case "Clear":
                        weatherWidget.innerHTML = clearIcon;
                        break;
                    case "Mist":
                    case "Smoke":
                    case "Haze":
                    case "Dust":
                    case "Fog":
                        weatherWidget.innerHTML = fogIcon;
                        break;
                };

                // Sets Current Location Text
                document.getElementById("currentLocationDisplay").innerText = data.name;

                // Sets the temp display
                let currentTempValue = Math.trunc(data.main.temp);
                
                localStorage.setItem("currentTemp", currentTempValue);

                
                const tempUnitToggle = document.getElementById("tempUnitToggle");
                
                if (tempUnitToggle.checked == true) {
                    document.getElementById("currentTempDisplay").innerText = Math.trunc(currentTempValue * 9/5 + 32) + "°F";
                } else if (tempUnitToggle.checked == false) {
                    document.getElementById("currentTempDisplay").innerText = currentTempValue + "°C";
                }
                

            })}

    navigator.geolocation.getCurrentPosition(success, error);
}

// Temp Unit Toggle ---------------------------------------------------------------------

const tempStorage = () => {
    const tempUnitToggle = document.getElementById("tempUnitToggle");

    if (tempUnitToggle.checked == true) {
        localStorage.setItem("tempUnitToggle", true);
    } else if (tempUnitToggle.checked == false){
        localStorage.setItem("tempUnitToggle", false);
    }
}

const changeTempUnit = () => {
    
    const tempDisplay = document.getElementById("currentTempDisplay");;
    const tempUnitToggle = JSON.parse(localStorage.getItem("tempUnitToggle"));
    const currentTemp = JSON.parse(localStorage.getItem("currentTemp"));
    
    if (tempUnitToggle == true){
        tempDisplay.innerText = Math.trunc(currentTemp * 9/5 + 32) + "°F";
    } else if (tempUnitToggle == false) {
        tempDisplay.innerText = currentTemp + "°C";
    }

}

document.getElementById("tempUnitToggle").addEventListener("change", tempStorage) // Needs better function name
document.getElementById("tempUnitToggle").addEventListener("change", changeTempUnit)

// Search Toggle ------------------------------------------------------------------------

const searchString = document.getElementById("searchString")

document.getElementById("googleSearchSwitch").onclick = function(){
    searchString.setAttribute("action", "https://www.google.com/search?");
}

document.getElementById("duckduckgoSearchSwitch").onclick = function(){
    searchString.setAttribute("action", "https://duckduckgo.com/?");
}


