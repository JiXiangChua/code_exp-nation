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
      status: false,
      content: "31/01/2023 - 15/01/2023",
      pointsAvailable: "50",
      imageBackground: require("../assets/images/events-combatshoot.png"),
      time: "8 am - 5.30 pm",
      location: "MMRC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pulvinar etiam non quam lacus. Cursus mattis molestie a iaculis at erat. Elementum tempus egestas sed sed risus pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Eget arcu dictum varius duis at. At risus viverra adipiscing at in. Quis varius quam quisque id diam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: "2",
      title: "IPPT",
      status: false,
      content: "01/ 05/ 2023 - 31/05/2023",
      pointsAvailable: "50",
      imageBackground: require("../assets/images/events-ippt.png"),
      time: "5 pm - 7 pm",
      location:
        "Khatib FCC (North), Maju FCC (South), Bedok FCC (East), Kranji FCC (West) Bishan-Ang Mo Kio Park, Marina City Gallery @ Marina BayPunggol Park",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pulvinar etiam non quam lacus. Cursus mattis molestie a iaculis at erat. Elementum tempus egestas sed sed risus pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Eget arcu dictum varius duis at. At risus viverra adipiscing at in. Quis varius quam quisque id diam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: "3",
      title: "Exercise Wallaby ",
      status: false,
      content: "22/09/2023 - 21/10/2023",
      pointsAvailable: "500",
      imageBackground: require("../assets/images/events-wallaby.png"),
      time: "All day",
      location: "Asutralia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pulvinar etiam non quam lacus. Cursus mattis molestie a iaculis at erat. Elementum tempus egestas sed sed risus pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Eget arcu dictum varius duis at. At risus viverra adipiscing at in. Quis varius quam quisque id diam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: "4",
      title: "Outfield",
      status: false,
      content: "3 Days (TBC)",
      pointsAvailable: "150",
      imageBackground: require("../assets/images/events-outfield.png"),
      time: "All day",
      location: "Mandai",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pulvinar etiam non quam lacus. Cursus mattis molestie a iaculis at erat. Elementum tempus egestas sed sed risus pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Eget arcu dictum varius duis at. At risus viverra adipiscing at in. Quis varius quam quisque id diam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: "5",
      title: "Parachute Course",
      status: false,
      content: "5 Days (TBC)",
      pointsAvailable: "1000",
      imageBackground: require("../assets/images/events-parachute.png"),
      time: "8 am - 5.30 pm",
      location: "School of Commando",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pulvinar etiam non quam lacus. Cursus mattis molestie a iaculis at erat. Elementum tempus egestas sed sed risus pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Eget arcu dictum varius duis at. At risus viverra adipiscing at in. Quis varius quam quisque id diam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      id: "6",
      title: "IPPT",
      status: true,
      content: "23/04/2022",
      pointsAvailable: "50",
      imageBackground: require("../assets/images/events-ippt.png"),
      time: "1 pm - 3 pm",
      location:
        "Khatib FCC (North), Maju FCC (South), Bedok FCC (East), Kranji FCC (West) Bishan-Ang Mo Kio Park, Marina City Gallery @ Marina BayPunggol Park",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Pulvinar etiam non quam lacus. Cursus mattis molestie a iaculis at erat. Elementum tempus egestas sed sed risus pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Eget arcu dictum varius duis at. At risus viverra adipiscing at in. Quis varius quam quisque id diam. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ],
  rewards: [
    {
      category: "My Rewards",
      data: [
        {
          id: "1",
          title: "$10 Safra Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-Safra.png"),
        },
      ],
    },
    {
      category: "Featured",
      data: [
        {
          id: "1",
          title: "$10 Safra Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-Safra.png"),
        },
        {
          id: "2",
          title: "$10 The Chevrons Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-Chevrons.png"),
        },
        {
          id: "3",
          title: "$10 HomeTeamNS Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-HomeTeamNS.png"),
        },
      ],
    },

    {
      category: "25% Flash Sale",
      data: [
        {
          id: "1",
          title: "2D1N Chalet at The Chevrons",
          status: false,
          content: "For more info...",
          points: "11,250 points ",
          imageBackground: require("../assets/images/rewards-2D1NChalet.png"),
        },
        {
          id: "2",
          title: "1 Year Fitness Workz Premium Membership",
          status: false,
          content: "For more info...",
          points: "11,250 points ",
          imageBackground: require("../assets/images/rewards-FitnessWorkz.png"),
        },
        {
          id: "3",
          title: "1 Day Adventure HQ Pass",
          status: false,
          content: "For more info...",
          points: "4,500 points ",
          imageBackground: require("../assets/images/rewards-AdventureHQPass.png"),
        },
      ],
    },
    {
      category: "Entertainment",
      data: [
        {
          id: "1",
          title: "1 Day Adventure HQ Pass",
          status: false,
          content: "For more info...",
          points: "4,500 points ",
          imageBackground: require("../assets/images/rewards-AdventureHQPass.png"),
        },
        {
          id: "2",
          title: "2Hr Indoor Badminton Court at Safra",
          status: false,
          content: "For more info...",
          points: "500 points ",
          imageBackground: require("../assets/images/rewards-BadmintonCourt.png"),
        },
        {
          id: "3",
          title: "SuperBowl at Safra",
          status: false,
          content: "For more info...",
          points: "1,000 points ",
          imageBackground: require("../assets/images/rewards-SuperBowl.png"),
        },
      ],
    },
  ],
};

export default mockUserProfile;
