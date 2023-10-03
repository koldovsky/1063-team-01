document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var customIcon = L.divIcon({
            className: 'custom-icon',
            html: `<svg height="40" width="40">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 166.418 166.418" xml:space="preserve">
                   <path style="fill:#edc100;" d="M83.209,166.418c-7.121,0-13.11-4.387-15.258-11.176l-3.572-11.285
                       c-5.089-16.083-13.75-31.047-25.742-44.478c-9.853-11.036-15.236-25.269-15.156-40.078c0.086-15.993,6.312-30.945,17.53-42.102
                       C52.229,6.144,67.215,0,83.209,0c32.934,0,59.728,26.794,59.728,59.729c0,15.138-5.676,29.576-15.982,40.657
                       c-11.19,12.03-19.574,26.691-24.917,43.575l-3.57,11.281C96.319,162.031,90.33,166.418,83.209,166.418z M83.209,5
                       C52.685,5,28.645,28.908,28.481,59.429c-0.073,13.568,4.858,26.61,13.886,36.721c12.465,13.961,21.475,29.538,26.779,46.3
                       l3.572,11.285c1.793,5.665,6.595,7.684,10.492,7.684c3.896,0,8.698-2.019,10.491-7.684l3.57-11.281
                       c5.568-17.597,14.324-32.896,26.023-45.474c9.443-10.151,14.644-23.381,14.644-37.251C137.937,29.551,113.387,5,83.209,5z
                        M83.209,91.996c-18.188,0-32.984-14.797-32.984-32.984c0-18.188,14.797-32.985,32.984-32.985c18.188,0,32.985,14.797,32.985,32.985
                       C116.194,77.199,101.397,91.996,83.209,91.996z M83.209,31.026c-15.431,0-27.984,12.554-27.984,27.985
                       c0,15.431,12.554,27.984,27.984,27.984c15.431,0,27.985-12.554,27.985-27.984C111.194,43.58,98.64,31.026,83.209,31.026z"/>"/></svg>
                    </svg>`,
            iconSize: [40, 40]
        });
        var map = L.map('mapworkout', {
            scrollWheelZoom: false,
            dragging: !L.Browser.mobile, // Add this line
            touchZoom: true, // And this line
            locale: 'en'
        });
        map.setView([25.1578983886893, 55.22161581094006], 19);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([25.1578983886893, 55.22161581094006], { icon: customIcon }).addTo(map)
            .bindPopup('<p style="font-size:15px; color: var(--color-why-choose-us-items-background);">83 Street 6C, Al SafaAl Safa 2, Dubai, UAE</p>')

        marker.openPopup();

    }, 500);
});