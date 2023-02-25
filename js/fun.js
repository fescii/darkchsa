//Issues
let issuesLink = document.querySelector("main.main>.content>.content-container>.main-section>.featured-comic>.featured>ul.header>li.item>a#issues-item-link")
let preLink = document.querySelector("main.main>.content>.content-container>.main-section>.featured-comic>.featured>ul.header>li.item>a#pre-item-link")
let detailsLink = document.querySelector("main.main>.content>.content-container>.main-section>.featured-comic>.featured>ul.header>li.item>a#details-item-link")

let issuesContainer = document.querySelector("main.main>.content>.content-container>.main-section>.featured-comic>.featured>#issues-content")
if (issuesLink != null && issuesContainer != null) {
    let close = issuesContainer.querySelector(".cancel")
    issuesLink.addEventListener("click", (e) => {
        e.preventDefault()
        try {
            preLink.classList.remove("selected")
            detailsLink.classList.remove("selected")
        } finally {
            if (issuesContainer.style.display == "flex") {
                issuesContainer.style.display = "none"
                e.target.classList.remove("selected")
            } else {
                issuesContainer.style.display = "flex"
                e.target.classList.toggle("selected")
            }
        }
    })
    close.addEventListener("click", (e) => {
        e.preventDefault()
        try {
            preLink.classList.toggle("selected")
            detailsLink.classList.remove("selected")
            issuesLink.classList.remove("selected")
        } finally {
            issuesContainer.style.display = "none"
        }
    })

    let scrollBtn = issuesContainer.querySelector(".scroll-btn");
    let icon = scrollBtn.querySelector("span");
    let height = 0,
        pointer = true,
        h = 100;
    let total = issuesContainer.scrollHeight
    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault()
            // console.log(issuesContainer.scrollHeight)
        if (pointer) {
            if ((issuesContainer.scrollHeight) >= (height + 150)) {
                issuesContainer.scrollBy({
                    top: h,
                    behavior: "smooth"
                })
                height = height + 150
            } else {
                height += 150
                issuesContainer.scrollBy({
                    top: h,
                    behavior: "smooth"
                })
                h = 0
                pointer = false
                icon.classList.remove("iconly-Arrow-Down-Circle")
                icon.classList.add("iconly-Arrow-Up-Circle")
            }
        } else {
            height -= 100
            if (height > 0) {
                h = -150
                issuesContainer.scrollBy({
                    top: h,
                    behavior: "smooth"
                })
                height -= 150
            } else {
                issuesContainer.scrollBy({
                    top: h,
                    behavior: "smooth"
                })
                h = 150
                pointer = true
                icon.classList.remove("iconly-Arrow-Up-Circle")
                icon.classList.add("iconly-Arrow-Down-Circle")
                height = 150
            }
        }
    })
}

//Header-items-scroll
let headerScrollBtn = document.querySelector("main.main>.content>.header>.rel-items>li#header-item-scroll")
if (headerScrollBtn != null) {
    let itemsContainer = headerScrollBtn.parentElement;
    let icon = headerScrollBtn.querySelector("span");
    let width = 150,
        pointer = true,
        h = 100;
    let total = itemsContainer.scrollWidth
    icon.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(total)
        if (pointer) {
            if ((itemsContainer.scrollWidth) >= (width + 150)) {
                itemsContainer.scrollBy({
                    left: h,
                    behavior: "smooth"
                })
                console.log(width)
                width = width + 150
            } else {
                width += 150
                itemsContainer.scrollBy({
                    left: h,
                    behavior: "smooth"
                })
                h = 0
                pointer = false
                icon.classList.remove("iconly-Arrow-Left-Circle")
                icon.classList.add("iconly-Arrow-Right-Circle")
            }
        } else {
            width -= 100
            if (width > 0) {
                h = -150
                itemsContainer.scrollBy({
                    left: h,
                    behavior: "smooth"
                })
                width -= 150
            } else {
                itemsContainer.scrollBy({
                    left: h,
                    behavior: "smooth"
                })
                h = 150
                pointer = true
                icon.classList.remove("iconly-Arrow-Right-Circle")
                icon.classList.add("iconly-Arrow-Left-Circle")
                width = 150
            }
        }
    })
}