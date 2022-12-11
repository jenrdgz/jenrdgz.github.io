interface ProjectType {
    mainImage: ProgressiveImageSrcs;
    description: string;
    projectName: string;
    projectNameSide: string;
    course: string;
    instructor?: string;
    date: string;
    projectConcept: string;
    bookImages: ProgressiveImageSrcs[];
}

interface ProgressiveImageSrcs {
    imgSrc: string;
    placeholder: string;
    hasBorder?: boolean;
}

export const PROJECT_ORDER = ["project3", "project2", "project6", "project4", "project1", "project5"]

export const PROJECTS: { [key: string]: ProjectType } = {
    project1: {
        mainImage: {
            imgSrc: require("../resources/work1.jpg"),
            placeholder: require("../resources/work1-loading.jpg"),
        },
        description: `Artist Statement
        The camera is often utilized as a tool of representation, objectification, manipulation, and abstraction, but photography is typically the medium that is most closely associated with representing reality. My pictures call into question this very notion by embracing and pushing further the precarious relationship between the recorded world and reality.
        
        Whether utilizing reflective materials such as mylar and mirrors; or collaging pictures printed and then reprinted to create an illusion of depth on a flat surface; or finding what seems to be unlikely, uncanny reflected light and shadow in the world; my pictures distort and disguise reality and offer a new version, in which our relationship with reality and ability to read the real is dubious.
        
        My working process includes two modes of intervention: first, what is captured by the camera; and second, what is created through collages. Seeking out light and spaces that are a balance of humanity and nature, in my unmanipulated photographs, I either hunt for illusions and make pictures at angles that create a feeling of disorientation; or I intervene in the landscape with reflective materials and objects that create line and division, with the aim of abstracting space.
        
        In my collage work, the manipulation of photographs is done in camera to create the illusion or perception of layering images. Pictures are printed in multiples at various sizes, cut up, and pasted together to create layers or planes, which I then piece together in compositions that mimic my photographs made singularly with a camera.
        
        Both photographs and collages are installed and exist together so that the viewer contemplates these constructed spaces in and out of the camera, which may look digitally altered but are not. My aim is to call into question photography’s relationship with representation and reality.`,
        projectName: "Behind Mirrors",
        projectNameSide: "Undergrad Photography / Behind Mirrors",
        course: "Thesis",
        date: "2018",
        projectConcept: `Project Concept
        This project is my undergrad photography thesis.`,
        bookImages: [
            {
                imgSrc: require("../resources/project1/Page1.png"),
                placeholder: require("../resources/project1/Page1-loading.png"),
            },
            {
                imgSrc: require("../resources/project1/Page2.png"),
                placeholder: require("../resources/project1/Page2-loading.png"),
            },
            {
                imgSrc: require("../resources/project1/Page3.png"),
                placeholder: require("../resources/project1/Page3-loading.png"),
            },
       ]
    },
    project2: {
        mainImage: {
            imgSrc: require("../resources/work2.jpg"),
            placeholder: require("../resources/work2-loading.jpg"),
        },
        description: `Objective
        Pick a company/organization and redesign their CSR report or annual report.
         
        Approach
        Stumptown Coffee started in Portland, Oregon, and bloomed into a hip brand of what coffee is today. It is not only about the coffee; it is about the conversations you have while enjoying your hot beverage. Stumptown had just come out with its first report and needed a redesign to make it look more professional.`,
        projectName: "A Perfect Cup",
        projectNameSide: "Project Two / A Perfect Cup",
        course: "Course / Type Systems",
        instructor: "Instructor / John Nettleton",
        date: "Spring 2022",
        projectConcept: `Project Concept
        This project is a redesign of Stumptown Coffee’s Sustainability and Impact Report.`, 
        bookImages: [
            {
                imgSrc: require("../resources/project2/Page1.png"),
                placeholder: require("../resources/project2/Page1-loading.png"),
            },
            {
                imgSrc: require("../resources/project2/Page2.png"),
                placeholder: require("../resources/project2/Page2-loading.png"),
            },
            {
                imgSrc: require("../resources/project2/Page3.png"),
                placeholder: require("../resources/project2/Page3-loading.png"),
            },
        ]
    },
    project3: {
        mainImage: {
            imgSrc: require("../resources/work3.jpg"),
            placeholder: require("../resources/work3-loading.jpg"),
        },
        description: `Objective
        Design an online gallery of practitioners whose work advances the following UN Global Goal: Life on Land and create a platform to showcase their work and impact on achieving the goal.
         
        Approach
        To show awareness about the Earth’s forests and how we can help protect and restore them. I wanted to use a black and white film aesthetic to show the true beauty of nature within the photographs.
        `,
        projectName: "Forest Hugs",
        projectNameSide: "Project One / Forest Hugs",
        course: "Course / Digital Design Studio 1",
        instructor: "Instructor / Phil Hamlett",
        date: "Spring 2022",
        projectConcept: `Project Concept
        This project is about climate change and the impact it is having on forests.`, 
        bookImages: [
            {
                imgSrc: require("../resources/project3/Page1.png"),
                placeholder: require("../resources/project3/Page1-loading.png"),
                hasBorder: true,
            },
            {
                imgSrc: require("../resources/project3/Page2.png"),
                placeholder: require("../resources/project3/Page2-loading.png"),
            },
            {
                imgSrc: require("../resources/project3/Page3.png"),
                placeholder: require("../resources/project4/Page3-loading.png"),
            },
            {
                imgSrc: require("../resources/project3/Page4.png"),
                placeholder: require("../resources/project5/Page4-loading.png"),
            },
            {
                imgSrc: require("../resources/project3/Page5.png"),
                placeholder: require("../resources/project3/Page5-loading.png"),
            },
        ]
    },
    project4: {
        mainImage: {
            imgSrc: require("../resources/work4.jpg"),
            placeholder: require("../resources/work4-loading.jpg"),
        },
        description: `Objective
        Pick a book and redesign it. Coffee table books are good examples, as they usually have large images and include all the components, such as text, captions, titles, subtitles, and so on. The goal is to redesign sample spreads, not the whole book.
         
        Approach
        Epic Drives of the World was chosen because I wanted to take the reader on an adventure. I tried to make the pictures come alive so that the reader would be able to experience these new places.`,
        projectName: "Road Trips",
        projectNameSide: "Project Four / Road Trips",
        course: "Course / Type Composition",
        instructor: "Instructor / John Nettleton",
        date: "Fall 2021",
        projectConcept: `Project Concept
        This project is about redesigning an illustrated book about different road trips around the world.`, 
        bookImages: [
            {
                imgSrc: require("../resources/project4/Page1.png"),
                placeholder: require("../resources/project4/Page1-loading.png"),
            },
            {
                imgSrc: require("../resources/project4/Page2.png"),
                placeholder: require("../resources/project4/Page2-loading.png"),
            },
            {
                imgSrc: require("../resources/project4/Page3.png"),
                placeholder: require("../resources/project4/Page3-loading.png"),
            },
            {
                imgSrc: require("../resources/project4/Page4.png"),
                placeholder: require("../resources/project4/Page4-loading.png"),
            },
        ]
    },
    project5: {
        mainImage: {
            imgSrc: require("../resources/work5.jpg"),
            placeholder: require("../resources/work5-loading.jpg"),
        },
        description: `Objective
        This project is intended for vampires to create relationships and to connect socially with each other. Vampires do not have the same opportunities as mortals when it comes to dating. They need to come out into the light and tell everybody who they are. It is time for vampires to have a place where they can find long-lasting relationships.
         
        Approach
        I explored this topic by asking the question, what if vampires existed as a part of everyday life, and how would they find other vampires looking to date? I have always been fascinated with vampire movies and TV shows and wanted to create a story about them. I researched many different types of vampires and created three deliverables that were suited for an everyday vampire looking to date.`,
        projectName: "Everyday Vampires",
        projectNameSide: "Project Three / Everyday Vampires",
        course: "Course / Visual Thinking",
        instructor: "Instructor / Jeremy Stout",
        date: "Summer 2022",
        projectConcept: `Project Concept
        This project is about everyday vampires socializing and dating in the modern age.`, 
        bookImages: [
            {
                imgSrc: require("../resources/project5/Page1.png"),
                placeholder: require("../resources/project5/Page1-loading.png"),
                hasBorder: true,
            },
            {
                imgSrc: require("../resources/project5/Page2.png"),
                placeholder: require("../resources/project5/Page2-loading.png"),
            },
            {
                imgSrc: require("../resources/project5/Page3.png"),
                placeholder: require("../resources/project5/Page3-loading.png"),
            },
            {
                imgSrc: require("../resources/project5/Page4.png"),
                placeholder: require("../resources/project5/Page4-loading.png"),
            },
        ]
    },
    project6: {
        mainImage: {
            imgSrc: require("../resources/work6.jpg"),
            placeholder: require("../resources/work6-loading.jpg"),
        },
        description: `Objective­­­
        Explore your dream state as a place to experiment with type. After experimenting, design three movie posters and a trailer.
        
        I explored many different types of materials to create an illusion of a dream state. From my experimentation, I ended up in moving a different direction from where I started. I chose the movie The Pink Panther and started experimenting with a fun but sophisticated style.`,
        projectName: "Pink Panther",
        projectNameSide: "Project Five / Pink Panther",
        course: "Course / Type Experiments",
        instructor: "Instructor / David Hake",
        date: "Fall 2022",
        projectConcept: `Project Concept
        This project is about exploring your dreams with type. The movie posters were ideas based on the type experiments.`, 
        bookImages: [
            {
                imgSrc: require("../resources/project6/Page1.png"),
                placeholder: require("../resources/project6/Page1-loading.png"),
            },
            {
                imgSrc: require("../resources/project6/Page2.png"),
                placeholder: require("../resources/project6/Page2-loading.png"),
            },
            {
                imgSrc: require("../resources/project6/Page3.png"),
                placeholder: require("../resources/project6/Page3-loading.png"),
            },
            {
                imgSrc: require("../resources/project6/Page4.png"),
                placeholder: require("../resources/project6/Page4-loading.png"),
            },
        ]
    }
}

