var express = require("express");

var app = express();

app.get("/", (req, res, next) => {
    res.json([
        {
            title: 'CAN I SUBMIT FEEDBACK WITHIN THE APP?',
            desc: 'Yes! We love hearing from our app users and welcome the feedback as we work toward improving the app in the future. There are two methods within the app to provide feedback. Tap the “Profile” icon, then select Feedback. Tap the “More” icon on the bottom right of the app, then select Feedback.',
            id: '0',
        },
        {
            title: 'WHY DOES THE APP SAY I NEED TO COMPLETE AN ACTION I’VE ALREADY COMPLETED?',
            desc: 'Try manually refreshing the app by dragging the screen down and releasing.',
            id: '1',
        },
        {
            title: 'HOW CAN I GET STEP-BY-STEP ROUTING TO MY DESTINATION?',
            desc: 'From the My Loads menu, expand the stop details and select the blue triangle icon to the right of the address. If you agree with the disclaimer, click OK and select your preferred installed app for your step-by-step navigation. Note: You will see a disclaimer, please read the disclaimer in full and always use caution to ensure the route is safe for your load',
            id: '2',
        },
        {
            title: 'WHY ARE MY MILES NOT ACCURATE?',
            desc: 'We are working to provide this data to devices sooner. Keep an eye out for this in our coming releases!',
            id: '3',
        },
        {
            title: 'HOW DO I PROVIDE SUGGESTIONS, COMMENTS OR REPORT ISSUES WITH THE APP?',
            desc: 'All unread messages show at the top of your inbox. Once you’ve read a message, it will go to the bottom of your messages list. You may have to scroll down if you have a lot of messages in your inbox.',
            id: '4',
        },
        {
            title: 'WHERE DID MY MESSAGE GO AFTER I READ IT?',
            desc: 'From both the More menu and your Profile, you can find the Feedback option and provide us with general feedback, request a new feature or report a system failure. You can also call 1-800-777-4968 to give feedback or report problems',
            id: '5',
        },
        {
            title: 'HOW CAN I QUICKLY ARCHIVE ALL MY MESSAGES?',
            desc: 'From your Inbox, check the box next to Select All in the top left corner, then click Archive on the top right',
            id: '6',
        },
        {
            title: 'WHY DOES THE APP SAY I’M DRIVING WHEN I’M STATIONARY?',
            desc: 'The app pulls your device GPS to determine whether you’re moving. Sometimes, there is an error signal and you will need to select the “I’m not driving” option to refresh your signal. You may have to attempt more than once or exit the app and restart if the issue persists.',
            id: '7',
        },
        {
            title: 'WHY AM I NOT SEEING ALL THE DETAILS I NEED FOR A LOAD?',
            desc: 'The most important information is found within Load Information at the bottom of the My Loads menu. To find any additional information, expand a stop and click Additional Details.',
            id: '8',
        },
        {
            title: 'WHY AM I NOT GETTING A PUSH NOTIFICATION WHEN I RECEIVE MESSAGES?',
            desc: 'First, make sure the settings on your device allow DRIVE to send notifications. To do this, go to your Settings application on your device, find the DRIVE application and make sure notifications are turned on. If they are turned on and you are still not receiving them, please contact 1-800-777-4968.',
            id: '9',
        },
        {
            title: 'CAN DRIVERS AND MANAGERS COMMUNICATE THROUGH THE APP?',
            desc: 'Drivers and Managers can send messages from the app; however, drivers cannot access messages while driving.',
            id: '10',
        },
        {
            title: 'HOW DO I ENSURE THAT THE INFORMATION ON THE APP IS UP TO DATE?',
            desc: 'If the information on the app does not appear to be correct, simply pull down on any page to refresh the application and retrieve current details about your workload.',
            id: '11',
        },
        {
            title: 'CAN DRIVERS AND MANAGERS COMMUNICATE THROUGH THE APP?',
            desc: 'Drivers and Managers can send messages from the app; however, drivers cannot access messages while driving.',
            id: '12',
        },
        {
            title: 'WILL THIRD-PARTY APPS (I.E. WEIGH MY TRUCK) BE INTEGRATED INTO DRIVE?',
            desc: 'We are always working to improve the in-app experience. With our initial release, we won’t be integrating with these applications, however, please submit feedback with any apps you would like to see!',
            id: '13',
        },
        {
            title: 'HOW DO I ENSURE THAT THE INFORMATION ON THE APP IS UP TO DATE?',
            desc: 'If the information on the app does not appear to be correct, simply pull to refresh on any page to refresh the application and retrieve current details about your workload.',
            id: '14',
        },
    ]);
});

const port=process.env.PORT || 3000

app.listen(port, () => {
 console.log("Server running on port " + port);
});
  