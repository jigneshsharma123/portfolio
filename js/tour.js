const driver = window.driver.js.driver;

const driverObj = driver({
  showProgress: true,
  steps: [
    {
        element: '#nav',
        popover: {
          title: 'Navigation Section',
          description: 'This is the navigation section that allows you to quickly move to the respective sections.'
        }
    },
    {
      element: '#about',
      popover: {
        title: 'Welcome to About Section',
        description: 'This is the About section of my portfolio where you can learn more about me.'
      }
    },
    {
      element: '#skills',
      popover: {
        title: 'Explore My Skills',
        description: 'In this section, you can find information about my technical skills and expertise.'
      }
    },
    {
      element: '#contact',
      popover: {
        title: 'Get in Touch',
        description: 'The Contact section provides my contact information. Feel free to reach out!'
      }
    },
    {
      element: '#projects',
      popover: {
        title: 'Discover My Projects',
        description: 'Here you can check out the projects I have worked on. Click "Next" to explore!'
      }
    },
    {
      element : '#scrollBtn',
      popover : {
        title : 'scroll Button',
        description : 'Help in moving quickly at the top of the page'
      }
    }
  ]
});

driverObj.drive();
