const mockUserProfile = {
  name: "DERRICK LIM",
  nric: "S1234567Z",
  earnedRewardPoints: "910",
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
        "For combat shoot, a team of 6 firers will make up 1 detail. The final score will be the total number of shots added up together. Each firer with get 3 mags of 5 rounds each for both day and night. So each person will shot 15 shots for day and 15 shots for night, total 30 shots per person. So a detail will shoot a combined number of 180 shots, passing is 90 shots, marksman is 144 shots. If u get marksman, everyone in the detail can wear the badge.",
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
        "The IPPT comprises 3 stations – Push-Ups, Sit-Ups and 2.4km Run. To pass, you need to score a minimum of 1 point in each station, and achieve a total score of at least 51 out of 100 points. The IPPT scoring system is calibrated to your age, and you will receive different incentive awards depending on the total score.",
    },
    {
      id: "3",
      title: "Exercise Wallaby ",
      status: false,
      content: "22/09/2023 - 21/10/2023",
      pointsAvailable: "500",
      imageBackground: require("../assets/images/events-wallaby.png"),
      time: "All day",
      location: "Australia",
      description:
        "Exercise Wallaby is the Singapore Armed Forces' (SAF) largest overseas exercise. This year’s exercise involves about 3,000 personnel and 300 platforms from the Singapore Army and the Republic of Singapore Air Force (RSAF).",
    },
    {
      id: "4",
      title: "Outfield",
      status: true,
      content: "5/12/2021 - 8/12/2021",
      pointsAvailable: "150",
      imageBackground: require("../assets/images/events-outfield.png"),
      time: "All day",
      location: "Mandai",
      description:
        "Reporting attire of headdress, No.4 uniform and combat boots.  Bring SBO/ LBV. Prepare Field Pack 1-6 as briefed. Soldiers went through 3 days of training in the jungle.",
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
        "With the primary task of teaching trainees to execute static line parachuting, they introduce the three most important aspects affecting their performance, namely the Exit, the Flight, and the Landing. The need for quick reactive actions during these aspects of the jump required intensive training over a course of 5 days.",
    },
    {
      id: "6",
      title: "IPPT",
      status: true,
      content: "23/04/2022",
      pointsAvailable: "50",
      imageBackground: require("../assets/images/events-ippt.png"),
      time: "1 pm - 3 pm",
      location: "Maju FCC (South)",
      description:
        "The IPPT comprises 3 stations – Push-Ups, Sit-Ups and 2.4km Run. To pass, you need to score a minimum of 1 point in each station, and achieve a total score of at least 51 out of 100 points. The IPPT scoring system is calibrated to your age, and you will receive different incentive awards depending on the total score.",
    },
  ],
  rewards: [
    {
      category: "My Rewards",
      data: [
        {
          id: "1",
          title: "$10 SAFRA Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-Safra.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-Safra.png"),
          date: "Monday - Sunday",
          location:
            "SAFRA Mount Faber, SAFRA Jurong, SAFRA Tampines, SAFRA Toa Payoh, SAFRA Yishun, SAFRA Punggol",
          description:
            "You can use your SAFRA Rewards Vouchers at the following list of stores arranged by club/category. Terms and conditions apply. The voucher’s validity period is 6 months from the date of issue. List of stores is accurate as of 01 Jan 2022 (and may subject to change without prior notice). You may call 1800 377 9800 or email to safrapoints@safra.sg if you have further enquiries.",
        },
      ],
    },
    {
      category: "Featured",
      data: [
        {
          id: "1",
          title: "$10 SAFRA Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-Safra.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-Safra.png"),
          date: "Monday - Sunday",
          location:
            "SAFRA Mount Faber, SAFRA Jurong, SAFRA Tampines, SAFRA Toa Payoh, SAFRA Yishun, SAFRA Punggol",
          description:
            "You can use your SAFRA Rewards Vouchers at the following list of stores arranged by club/category. Terms and conditions apply. The voucher’s validity period is 6 months from the date of issue. List of stores is accurate as of 01 Jan 2022 (and may subject to change without prior notice). You may call 1800 377 9800 or email to safrapoints@safra.sg if you have further enquiries.",
        },
        {
          id: "2",
          title: "$10 The Chevrons Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-Chevrons.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-Chevrons.png"),
          date: "Monday - Friday",
          location: "48 Boon Lay Way, Singapore 609961",
          description:
            "A four-storey clubhouse, previously known as the NCO Club, built to provide leisure and recreational facilities for SAF Warrant Officers, Specialists, Military Experts, and their families. We have numerous facilities to cater to the interests and needs of our members, such as function rooms, karaoke, lounge, spa, gym, chalets, swimming pool, etc.",
        },
        {
          id: "3",
          title: "$10 HomeTeamNS Voucher",
          status: false,
          content: "For more info...",
          points: "1,500 points ",
          imageBackground: require("../assets/images/rewards-HomeTeamNS.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-HomeTeamNS.png"),
          date: "Monday - Friday",
          location:
            "Balestier, Bedok, Bukit Batok, Chinatown, Khatib, Tampines",
          description:
            "Whether it’s arts and culture, sports or entertainment, you’ll find what you’re looking for in our list of exciting happenings all-year round! From fitness classes, workshops to festive events and more — HomeTeamNS is your one-stop hub to learn something new or simply have fun and enjoy yourself! ",
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
          imageModalBackground: require("../assets/images/rewardsmodal-2D1NChalet.png"),
          date: "Monday - Friday",
          location: "48 Boon Lay Way, Singapore 609961",
          description:
            "Our double-storey chalet unit. To make a booking for our chalet facilities, please contact our reception at 6668 8896 or email mro@chevrons.org.sg.",
        },
        {
          id: "2",
          title: "1 Year Fitness Workz Premium Membership",
          status: false,
          content: "For more info...",
          points: "11,250 points ",
          imageBackground: require("../assets/images/rewards-FitnessWorkz.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-FitnessWorkz.png"),
          date: "Monday - Friday",
          location: " Balestier, Bukit Batok, Khatib",
          description:
            "One of the best ways to kick start your day is a quick workout session! HomeTeamNS Fitness Workz gym opens at 7am daily, providing you with premium equipment and facilities to complete your workout routine. Power up your fitness at Fitness Workz Balestier and sign up for our gym membership today!",
        },
        {
          id: "3",
          title: "1 Day Adventure HQ Pass",
          status: false,
          content: "For more info...",
          points: "4,500 points ",
          imageBackground: require("../assets/images/rewards-AdventureHQPass.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-AdventureHQPass.png"),
          date: "Monday - Thursday",
          location: "HomeTeamNS Khatib Level 1, 2 Yishun Walk Singapore 767944",
          description:
            "Are you bold enough to defy gravity and conquer obstacles ahead of you? Adventure seekers, look no further! Head to Adventure HQ at HomeTeamNS Khatib — the first and largest multi-installation indoor playground in Singapore!",
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
          imageModalBackground: require("../assets/images/rewardsmodal-AdventureHQPass.png"),
          date: "Monday - Thursday",
          location: "HomeTeamNS Khatib Level 1, 2 Yishun Walk Singapore 767944",
          description:
            "Are you bold enough to defy gravity and conquer obstacles ahead of you? Adventure seekers, look no further! Head to Adventure HQ at HomeTeamNS Khatib — the first and largest multi-installation indoor playground in Singapore!",
        },
        {
          id: "2",
          title: "2Hr Indoor Badminton Court at SAFRA",
          status: false,
          content: "For more info...",
          points: "500 points ",
          imageBackground: require("../assets/images/rewards-BadmintonCourt.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-BadmintonCourt.png"),
          date: "Monday - Sunday",
          location:
            "SAFRA Mount Faber, SAFRA Jurong, SAFRA Tampines, SAFRA Toa Payoh, SAFRA Yishun, SAFRA Punggol",
          description:
            "You can use your SAFRA Rewards Vouchers at the following list of stores arranged by club/category. Terms and conditions apply. The voucher’s validity period is 6 months from the date of issue. List of stores is accurate as of 01 Jan 2022 (and may subject to change without prior notice). You may call 1800 377 9800 or email to safrapoints@safra.sg if you have further enquiries.",
        },
        {
          id: "3",
          title: "SuperBowl at SAFRA",
          status: false,
          content: "For more info...",
          points: "1,000 points ",
          imageBackground: require("../assets/images/rewards-SuperBowl.png"),
          imageModalBackground: require("../assets/images/rewardsmodal-SuperBowl.png"),
          date: "Monday - Sunday",
          location:
            "SAFRA Mount Faber, SAFRA Jurong, SAFRA Tampines, SAFRA Toa Payoh, SAFRA Yishun, SAFRA Punggol",
          description:
            "You can use your SAFRA Rewards Vouchers at the following list of stores arranged by club/category. Terms and conditions apply. The voucher’s validity period is 6 months from the date of issue. List of stores is accurate as of 01 Jan 2022 (and may subject to change without prior notice). You may call 1800 377 9800 or email to safrapoints@safra.sg if you have further enquiries.",
        },
      ],
    },
  ],
};

export default mockUserProfile;
