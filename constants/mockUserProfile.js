const mockUserProfile = {
  name: "DERRICK LIM",
  nric: "S1234567Z",
  licenses: [
    {
      type: "Identity",
      colors: ["#AAE2B5", "#42A155"],
      profileImage: {
        uri: "https://media-exp1.licdn.com/dms/image/C5103AQFX0NZg12DPyw/profile-displayphoto-shrink_200_200/0/1583392874484?e=1660780800&v=beta&t=FgQRlkspZZn3kMsO8YX1bC6J1VUwVdP9D-6YOBsTJMg",
      },
      info: [
        {
          "NRIC Number": "S****123Z",
        },
      ],
    },
    {
      type: "Driving License",
      colors: ["#C3E1EB", "#59A3BC"],
      profileImage: {
        uri: "https://media-exp1.licdn.com/dms/image/C5103AQFX0NZg12DPyw/profile-displayphoto-shrink_200_200/0/1583392874484?e=1660780800&v=beta&t=FgQRlkspZZn3kMsO8YX1bC6J1VUwVdP9D-6YOBsTJMg",
      },
      info: [
        {
          "Permit Number": "SAF/TPT/B/01234/10",
        },
        {
          "NRIC Number": "S****123Z",
        },
        {
          "Date of Issue": "9/6/22",
        },
      ],
    },
  ],
  mails: [
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      sender: "3SG JACOB TAY",
      status: false,
      caption: "Routine Order for 15 June 2022",
      message: "Placeholder",
      date: "Jun 15 2022 21:00",
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbps4zx",
      sender: "3SG CALEB CHAN",
      status: false,
      caption: "Routine Order for 14 June 2022",
      message: "Placeholder ",
      date: "Jun 14 2022 21:00",
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bzx",
      sender: "2SG YI HENG",
      status: false,
      caption: "Packing List",
      message: "Placeholder ",
      date: "Jun 12 2022 16:54",
    },
    {
      id: "1b9d6bcd-aasd-4b2d-9b5d-ab8dfbbd4ghy",
      sender: "LTA James",
      status: true,
      caption: "Reservists",
      message: "Placeholder ",
      date: "May 12 2022 08:00",
    },
  ],
  events: [
    {
      id: "1",
      title: "Combat Shoot",
      content: "31 / 01 / 2023 - 15 / 01 / 2023",
      imageBackground: require("../assets/images/events-combatshoot.png"),
    },
    {
      id: "2",
      title: "IPPT",
      content: "01 / 05 / 2023 - 31 / 05 / 2023",
      imageBackground: require("../assets/images/events-ippt.png"),
    },
    {
      id: "3",
      title: "Exercise Wallaby ",
      content: "22 / 09/ 2023 - 21 / 10 / 2023",
      imageBackground: require("../assets/images/events-wallaby.png"),
    },
    {
      id: "4",
      title: "Outfield",
      content: "3 Days (TBC)",
      imageBackground: require("../assets/images/events-outfield.png"),
    },
  ],
};

export default mockUserProfile;
