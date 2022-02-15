//Hamburger Animation Setup
let hamburger = document.getElementById('ham');
let two = document.getElementsByClassName('two')[0];
let three = document.getElementsByClassName('three')[0];

hamburger.addEventListener('mouseover', () => {
    two.style.width = '30px'
    three.style.width = '30px'
})

hamburger.addEventListener('mouseout', () => {
    two.style.width = '24px'
    three.style.width = '26px'
})

//Search Bar Setup
let search = document.getElementById('form-search-mobile');

function toggleSearch() {
    if (search.style.display == 'none') {
        search.style.display = 'flex';
    } else {
        search.style.display = 'none';
    }
}

//Sidebar Setup
let sidebar = document.getElementById('sidebar');
let body = document.getElementById('body')

function toggleSidebar() {
    if (sidebar.style.left == '-350px') {
        sidebar.style.left = '0';
        body.style.overflow = 'hidden'
    } else {
        sidebar.style.left = '-350px';
        body.style.overflow = 'hidden scroll';
    }
}

//User-Options Setup
let user_icon = document.querySelectorAll('.user');
let user_options = document.querySelectorAll('.options');

user_icon.forEach(element => {
    element.addEventListener('mouseover', () => {
        user_options.forEach(element => {
            element.style.top = "52px";
        });

    })
});

user_options.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.top = "52px";
    })
});

user_icon.forEach(element => {
    element.addEventListener('mouseout', () => {
        user_options.forEach(element => {
            element.style.top = "-146px";
        });

    })
});


user_options.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.style.top = "-146px";
    })
});

function user() {
    user_options.forEach(element => {
        if (element.style.top == "-146px") {
            element.style.top = "52px";
        } else {
            element.style.top = "-146px"
        }
    });
}

//Alert Setup
let alerts = document.getElementById('alert');

function alert() {
    alerts.style.display = 'flex'
}

function hide() {
    alerts.style.opacity = "0";
    setInterval(() => {
        alerts.style.display = "none";
    }, 450);
}

//Auto Scroll and closing video
let video = document.getElementById('video');

function pageScroll() {
    if (video.style.display == 'none') {
        video.style.display = 'flex';
    } else {
        video.style.display = 'none';
    }
    window.scrollTo(0, 1000);
}

function pageScroll1() {
    if (video.style.display == 'none') {
        video.style.display = 'flex';
    } else {
        video.style.display = 'none';
    }
}