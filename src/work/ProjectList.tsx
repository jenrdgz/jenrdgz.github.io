interface ProjectType {
    mainImage: ProgressiveImageSrcs;
    description: string;
    bookImages: ProgressiveImageSrcs[][];
}

interface ProgressiveImageSrcs {
    imgSrc: string;
    placeholder: string;
}

export const PROJECT_ORDER = ["project3", "project2", "project6", "project4", "project1", "project5"]

export const PROJECTS: { [key: string]: ProjectType } = {
    project1: {
        mainImage: {
            imgSrc: require("../resources/work1.jpg"),
            placeholder: require("../resources/work1-loading.jpg"),
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed imperdiet mi, in consectetur risus. Nulla tempor vel nunc vitae placerat. Donec in odio quis lacus gravida euismod vel a quam. Cras sit amet porta augue. Donec in consectetur nunc. Proin auctor quis turpis a placerat. Integer ultrices porta magna, et accumsan diam dignissim faucibus. Aliquam interdum, purus at molestie suscipit, risus erat mattis lorem, eget ornare ante risus eget libero. Integer pulvinar turpis nec nunc molestie blandit. Sed quis semper orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Fusce suscipit luctus suscipit. Etiam tempor consectetur ligula sit amet viverra. Quisque id rhoncus enim, vulputate ultricies velit.

        Nullam lacinia lorem et tempus venenatis. Phasellus ac arcu elementum, cursus ipsum vel, tincidunt sapien. In quis eleifend arcu. Nulla vulputate sem eu velit hendrerit bibendum. Phasellus ac faucibus nunc. Vivamus gravida, augue quis tincidunt lacinia, ligula diam rhoncus justo, ac tempor ex neque sed mauris. Sed non fringilla magna, rhoncus tincidunt ante. Pellentesque mattis risus at lorem sodales facilisis. Morbi at risus mattis, placerat est eu, finibus quam. Vivamus vel commodo turpis, varius iaculis lacus. Morbi lorem ante, sollicitudin in varius rutrum, facilisis sit amet lacus. Proin lacinia, purus convallis ornare porttitor, purus tortor pretium dolor, ut fermentum dui metus faucibus quam. Nullam ligula leo, laoreet ac eros in, auctor efficitur turpis. Morbi sit amet sollicitudin lorem. Maecenas ut pulvinar lorem. Donec ornare quam ante.
        
        In tempus metus quam. In tellus elit, imperdiet id lectus ut, porta dictum lacus. Ut bibendum commodo lectus, nec auctor neque auctor cursus. Praesent non mauris in lectus interdum faucibus non eget nisi. Cras elit risus, commodo ac nisl non, aliquet tempor dolor. Mauris suscipit diam nec varius vestibulum. Suspendisse ut sapien nisi. Proin eleifend id est vitae consequat. Cras vel tortor eget sem vulputate auctor nec fermentum turpis.
        
        `,
        bookImages: [
            [{
                imgSrc: require("../resources/project1/Page1.png"),
                placeholder: require("../resources/project1/Page1-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project1/Page2.png"),
                placeholder: require("../resources/project1/Page2-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project1/Page3.png"),
                placeholder: require("../resources/project1/Page3-loading.png"),
            }],
       ]
    },
    project2: {
        mainImage: {
            imgSrc: require("../resources/work2.jpg"),
            placeholder: require("../resources/work2-loading.jpg"),
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed imperdiet mi, in consectetur risus. Nulla tempor vel nunc vitae placerat. Donec in odio quis lacus gravida euismod vel a quam. Cras sit amet porta augue. Donec in consectetur nunc. Proin auctor quis turpis a placerat. Integer ultrices porta magna, et accumsan diam dignissim faucibus. Aliquam interdum, purus at molestie suscipit, risus erat mattis lorem, eget ornare ante risus eget libero. Integer pulvinar turpis nec nunc molestie blandit. Sed quis semper orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Fusce suscipit luctus suscipit. Etiam tempor consectetur ligula sit amet viverra. Quisque id rhoncus enim, vulputate ultricies velit.

        Nullam lacinia lorem et tempus venenatis. Phasellus ac arcu elementum, cursus ipsum vel, tincidunt sapien. In quis eleifend arcu. Nulla vulputate sem eu velit hendrerit bibendum. Phasellus ac faucibus nunc. Vivamus gravida, augue quis tincidunt lacinia, ligula diam rhoncus justo, ac tempor ex neque sed mauris. Sed non fringilla magna, rhoncus tincidunt ante. Pellentesque mattis risus at lorem sodales facilisis. Morbi at risus mattis, placerat est eu, finibus quam. Vivamus vel commodo turpis, varius iaculis lacus. Morbi lorem ante, sollicitudin in varius rutrum, facilisis sit amet lacus. Proin lacinia, purus convallis ornare porttitor, purus tortor pretium dolor, ut fermentum dui metus faucibus quam. Nullam ligula leo, laoreet ac eros in, auctor efficitur turpis. Morbi sit amet sollicitudin lorem. Maecenas ut pulvinar lorem. Donec ornare quam ante.
        
        In tempus metus quam. In tellus elit, imperdiet id lectus ut, porta dictum lacus. Ut bibendum commodo lectus, nec auctor neque auctor cursus. Praesent non mauris in lectus interdum faucibus non eget nisi. Cras elit risus, commodo ac nisl non, aliquet tempor dolor. Mauris suscipit diam nec varius vestibulum. Suspendisse ut sapien nisi. Proin eleifend id est vitae consequat. Cras vel tortor eget sem vulputate auctor nec fermentum turpis.
        
        `,
        bookImages: [
            [{
                imgSrc: require("../resources/project2/Page1.png"),
                placeholder: require("../resources/project2/Page1-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project2/Page2.png"),
                placeholder: require("../resources/project2/Page2-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project2/Page3.png"),
                placeholder: require("../resources/project2/Page3-loading.png"),
            }],
        ]
    },
    project3: {
        mainImage: {
            imgSrc: require("../resources/work3.jpg"),
            placeholder: require("../resources/work3-loading.jpg"),
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed imperdiet mi, in consectetur risus. Nulla tempor vel nunc vitae placerat. Donec in odio quis lacus gravida euismod vel a quam. Cras sit amet porta augue. Donec in consectetur nunc. Proin auctor quis turpis a placerat. Integer ultrices porta magna, et accumsan diam dignissim faucibus. Aliquam interdum, purus at molestie suscipit, risus erat mattis lorem, eget ornare ante risus eget libero. Integer pulvinar turpis nec nunc molestie blandit. Sed quis semper orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Fusce suscipit luctus suscipit. Etiam tempor consectetur ligula sit amet viverra. Quisque id rhoncus enim, vulputate ultricies velit.

        Nullam lacinia lorem et tempus venenatis. Phasellus ac arcu elementum, cursus ipsum vel, tincidunt sapien. In quis eleifend arcu. Nulla vulputate sem eu velit hendrerit bibendum. Phasellus ac faucibus nunc. Vivamus gravida, augue quis tincidunt lacinia, ligula diam rhoncus justo, ac tempor ex neque sed mauris. Sed non fringilla magna, rhoncus tincidunt ante. Pellentesque mattis risus at lorem sodales facilisis. Morbi at risus mattis, placerat est eu, finibus quam. Vivamus vel commodo turpis, varius iaculis lacus. Morbi lorem ante, sollicitudin in varius rutrum, facilisis sit amet lacus. Proin lacinia, purus convallis ornare porttitor, purus tortor pretium dolor, ut fermentum dui metus faucibus quam. Nullam ligula leo, laoreet ac eros in, auctor efficitur turpis. Morbi sit amet sollicitudin lorem. Maecenas ut pulvinar lorem. Donec ornare quam ante.
        
        In tempus metus quam. In tellus elit, imperdiet id lectus ut, porta dictum lacus. Ut bibendum commodo lectus, nec auctor neque auctor cursus. Praesent non mauris in lectus interdum faucibus non eget nisi. Cras elit risus, commodo ac nisl non, aliquet tempor dolor. Mauris suscipit diam nec varius vestibulum. Suspendisse ut sapien nisi. Proin eleifend id est vitae consequat. Cras vel tortor eget sem vulputate auctor nec fermentum turpis.
        
        `,
        bookImages: [
            [{
                imgSrc: require("../resources/project3/Page1.png"),
                placeholder: require("../resources/project3/Page1-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project3/Page2.png"),
                placeholder: require("../resources/project3/Page2-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project3/Page3.png"),
                placeholder: require("../resources/project4/Page3-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project3/Page4.png"),
                placeholder: require("../resources/project5/Page4-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project3/Page5.png"),
                placeholder: require("../resources/project5/Page5-loading.png"),
            }],
        ]
    },
    project4: {
        mainImage: {
            imgSrc: require("../resources/work4.jpg"),
            placeholder: require("../resources/work4-loading.jpg"),
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed imperdiet mi, in consectetur risus. Nulla tempor vel nunc vitae placerat. Donec in odio quis lacus gravida euismod vel a quam. Cras sit amet porta augue. Donec in consectetur nunc. Proin auctor quis turpis a placerat. Integer ultrices porta magna, et accumsan diam dignissim faucibus. Aliquam interdum, purus at molestie suscipit, risus erat mattis lorem, eget ornare ante risus eget libero. Integer pulvinar turpis nec nunc molestie blandit. Sed quis semper orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Fusce suscipit luctus suscipit. Etiam tempor consectetur ligula sit amet viverra. Quisque id rhoncus enim, vulputate ultricies velit.

        Nullam lacinia lorem et tempus venenatis. Phasellus ac arcu elementum, cursus ipsum vel, tincidunt sapien. In quis eleifend arcu. Nulla vulputate sem eu velit hendrerit bibendum. Phasellus ac faucibus nunc. Vivamus gravida, augue quis tincidunt lacinia, ligula diam rhoncus justo, ac tempor ex neque sed mauris. Sed non fringilla magna, rhoncus tincidunt ante. Pellentesque mattis risus at lorem sodales facilisis. Morbi at risus mattis, placerat est eu, finibus quam. Vivamus vel commodo turpis, varius iaculis lacus. Morbi lorem ante, sollicitudin in varius rutrum, facilisis sit amet lacus. Proin lacinia, purus convallis ornare porttitor, purus tortor pretium dolor, ut fermentum dui metus faucibus quam. Nullam ligula leo, laoreet ac eros in, auctor efficitur turpis. Morbi sit amet sollicitudin lorem. Maecenas ut pulvinar lorem. Donec ornare quam ante.
        
        In tempus metus quam. In tellus elit, imperdiet id lectus ut, porta dictum lacus. Ut bibendum commodo lectus, nec auctor neque auctor cursus. Praesent non mauris in lectus interdum faucibus non eget nisi. Cras elit risus, commodo ac nisl non, aliquet tempor dolor. Mauris suscipit diam nec varius vestibulum. Suspendisse ut sapien nisi. Proin eleifend id est vitae consequat. Cras vel tortor eget sem vulputate auctor nec fermentum turpis.
        
        `,
        bookImages: [
            [{
                imgSrc: require("../resources/project4/Page1.png"),
                placeholder: require("../resources/project4/Page1-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project4/Page2.png"),
                placeholder: require("../resources/project4/Page2-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project4/Page3.png"),
                placeholder: require("../resources/project4/Page3-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project4/Page4.png"),
                placeholder: require("../resources/project4/Page4-loading.png"),
            }],
        ]
    },
    project5: {
        mainImage: {
            imgSrc: require("../resources/work5.jpg"),
            placeholder: require("../resources/work5-loading.jpg"),
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed imperdiet mi, in consectetur risus. Nulla tempor vel nunc vitae placerat. Donec in odio quis lacus gravida euismod vel a quam. Cras sit amet porta augue. Donec in consectetur nunc. Proin auctor quis turpis a placerat. Integer ultrices porta magna, et accumsan diam dignissim faucibus. Aliquam interdum, purus at molestie suscipit, risus erat mattis lorem, eget ornare ante risus eget libero. Integer pulvinar turpis nec nunc molestie blandit. Sed quis semper orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Fusce suscipit luctus suscipit. Etiam tempor consectetur ligula sit amet viverra. Quisque id rhoncus enim, vulputate ultricies velit.

        Nullam lacinia lorem et tempus venenatis. Phasellus ac arcu elementum, cursus ipsum vel, tincidunt sapien. In quis eleifend arcu. Nulla vulputate sem eu velit hendrerit bibendum. Phasellus ac faucibus nunc. Vivamus gravida, augue quis tincidunt lacinia, ligula diam rhoncus justo, ac tempor ex neque sed mauris. Sed non fringilla magna, rhoncus tincidunt ante. Pellentesque mattis risus at lorem sodales facilisis. Morbi at risus mattis, placerat est eu, finibus quam. Vivamus vel commodo turpis, varius iaculis lacus. Morbi lorem ante, sollicitudin in varius rutrum, facilisis sit amet lacus. Proin lacinia, purus convallis ornare porttitor, purus tortor pretium dolor, ut fermentum dui metus faucibus quam. Nullam ligula leo, laoreet ac eros in, auctor efficitur turpis. Morbi sit amet sollicitudin lorem. Maecenas ut pulvinar lorem. Donec ornare quam ante.
        
        In tempus metus quam. In tellus elit, imperdiet id lectus ut, porta dictum lacus. Ut bibendum commodo lectus, nec auctor neque auctor cursus. Praesent non mauris in lectus interdum faucibus non eget nisi. Cras elit risus, commodo ac nisl non, aliquet tempor dolor. Mauris suscipit diam nec varius vestibulum. Suspendisse ut sapien nisi. Proin eleifend id est vitae consequat. Cras vel tortor eget sem vulputate auctor nec fermentum turpis.
        
        `,
        bookImages: [
            [{
                imgSrc: require("../resources/project5/Page1.png"),
                placeholder: require("../resources/project5/Page1-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project5/Page2.png"),
                placeholder: require("../resources/project5/Page2-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project5/Page3.png"),
                placeholder: require("../resources/project5/Page3-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project5/Page4.png"),
                placeholder: require("../resources/project5/Page4-loading.png"),
            }],
        ]
    },
    project6: {
        mainImage: {
            imgSrc: require("../resources/work6.jpg"),
            placeholder: require("../resources/work6-loading.jpg"),
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed imperdiet mi, in consectetur risus. Nulla tempor vel nunc vitae placerat. Donec in odio quis lacus gravida euismod vel a quam. Cras sit amet porta augue. Donec in consectetur nunc. Proin auctor quis turpis a placerat. Integer ultrices porta magna, et accumsan diam dignissim faucibus. Aliquam interdum, purus at molestie suscipit, risus erat mattis lorem, eget ornare ante risus eget libero. Integer pulvinar turpis nec nunc molestie blandit. Sed quis semper orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Fusce suscipit luctus suscipit. Etiam tempor consectetur ligula sit amet viverra. Quisque id rhoncus enim, vulputate ultricies velit.

        Nullam lacinia lorem et tempus venenatis. Phasellus ac arcu elementum, cursus ipsum vel, tincidunt sapien. In quis eleifend arcu. Nulla vulputate sem eu velit hendrerit bibendum. Phasellus ac faucibus nunc. Vivamus gravida, augue quis tincidunt lacinia, ligula diam rhoncus justo, ac tempor ex neque sed mauris. Sed non fringilla magna, rhoncus tincidunt ante. Pellentesque mattis risus at lorem sodales facilisis. Morbi at risus mattis, placerat est eu, finibus quam. Vivamus vel commodo turpis, varius iaculis lacus. Morbi lorem ante, sollicitudin in varius rutrum, facilisis sit amet lacus. Proin lacinia, purus convallis ornare porttitor, purus tortor pretium dolor, ut fermentum dui metus faucibus quam. Nullam ligula leo, laoreet ac eros in, auctor efficitur turpis. Morbi sit amet sollicitudin lorem. Maecenas ut pulvinar lorem. Donec ornare quam ante.
        
        In tempus metus quam. In tellus elit, imperdiet id lectus ut, porta dictum lacus. Ut bibendum commodo lectus, nec auctor neque auctor cursus. Praesent non mauris in lectus interdum faucibus non eget nisi. Cras elit risus, commodo ac nisl non, aliquet tempor dolor. Mauris suscipit diam nec varius vestibulum. Suspendisse ut sapien nisi. Proin eleifend id est vitae consequat. Cras vel tortor eget sem vulputate auctor nec fermentum turpis.
        
        `,
        bookImages: [
            [{
                imgSrc: require("../resources/project6/Page1.png"),
                placeholder: require("../resources/project6/Page1-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project6/Page2.png"),
                placeholder: require("../resources/project6/Page2-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project6/Page3.png"),
                placeholder: require("../resources/project6/Page3-loading.png"),
            }],
            [{
                imgSrc: require("../resources/project6/Page4.png"),
                placeholder: require("../resources/project6/Page4-loading.png"),
            }],
        ]
    }
}

