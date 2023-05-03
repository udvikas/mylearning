import React from "react";

const ProfileContext = React.createContext({
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoka',
    fullName: 'Kendō No Arikata',
    team: 'KendoReact',
  });
export default ProfileContext;  